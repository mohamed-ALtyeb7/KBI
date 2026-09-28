import { NextResponse } from "next/server"
import type { DocumentData } from "firebase-admin/firestore"

import { authenticateTechnician } from "@/lib/api-auth"
import { getAdminDb } from "@/lib/firebase-admin"
import { customerRatingUrl } from "@/lib/rating-link"

function assignedTo(uid: string, data: DocumentData | undefined) {
  const ids = [data?.assignedTechnician, data?.assignedTechnicianId, data?.technicianId, data?.techId]
    .map((value) => String(value || ""))
  const teamIds = [data?.assignedTechnicians, data?.technicianIds]
    .flatMap((value) => Array.isArray(value) ? value : [])
    .map(String)
  return ids.includes(uid) || teamIds.includes(uid)
}

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const identity = await authenticateTechnician(request)
  if (!identity) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })

  const { id } = await params
  const orderId = String(id || "").trim()
  if (!orderId) return NextResponse.json({ success: false, error: "Order is required" }, { status: 400 })

  const db = getAdminDb()
  const snapshots = await Promise.all(
    ["bookings", "orders", "service_requests"].map((name) => db.collection(name).doc(orderId).get()),
  )
  const existing = snapshots.filter((snapshot) => snapshot.exists)
  if (!existing.length) return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 })
  if (!existing.some((snapshot) => assignedTo(identity.uid, snapshot.data()))) {
    return NextResponse.json({ success: false, error: "This order is not assigned to you" }, { status: 403 })
  }

  return NextResponse.json({ success: true, url: customerRatingUrl(orderId, identity.uid) })
}
