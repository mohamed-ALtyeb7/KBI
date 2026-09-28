import { createHash } from "node:crypto"

import { Timestamp, type DocumentData } from "firebase-admin/firestore"
import { NextResponse } from "next/server"

import { getAdminDb } from "@/lib/firebase-admin"
import { verifyRatingLink } from "@/lib/rating-link"

function assignedTo(uid: string, data: DocumentData | undefined) {
  const ids = [data?.assignedTechnician, data?.assignedTechnicianId, data?.technicianId, data?.techId]
    .map((value) => String(value || ""))
  const teamIds = [data?.assignedTechnicians, data?.technicianIds]
    .flatMap((value) => Array.isArray(value) ? value : [])
    .map(String)
  return ids.includes(uid) || teamIds.includes(uid)
}

function reviewId(orderId: string, technicianId: string) {
  return createHash("sha256").update(`${orderId}:${technicianId}`).digest("hex")
}

function paramsFrom(url: string) {
  const search = new URL(url).searchParams
  return {
    orderId: String(search.get("order") || "").trim(),
    technicianId: String(search.get("tech") || "").trim(),
    signature: String(search.get("sig") || "").trim(),
  }
}

export async function GET(request: Request) {
  try {
    const { orderId, technicianId, signature } = paramsFrom(request.url)
    if (!verifyRatingLink(orderId, technicianId, signature)) {
      return NextResponse.json({ success: false, error: "Invalid or incomplete rating link" }, { status: 403 })
    }

    const db = getAdminDb()
    const [booking, order, serviceRequest, technician, existingReview] = await Promise.all([
      db.collection("bookings").doc(orderId).get(),
      db.collection("orders").doc(orderId).get(),
      db.collection("service_requests").doc(orderId).get(),
      db.collection("technicians").doc(technicianId).get(),
      db.collection("technician_reviews").doc(reviewId(orderId, technicianId)).get(),
    ])
    const workOrder = [booking, order, serviceRequest].find((snapshot) => snapshot.exists)
    if (!workOrder || !assignedTo(technicianId, workOrder.data())) {
      return NextResponse.json({ success: false, error: "Rating link does not match this order" }, { status: 404 })
    }
    const data = workOrder.data() || {}
    const tech = technician.data() || {}
    const status = String(data.status || "").toLowerCase()
    return NextResponse.json({
      success: true,
      orderReference: String(data.orderNumber || data.trackingCode || data.orderId || orderId),
      technicianName: String(tech.full_name || tech.name || "KBI Technician"),
      technicianRole: String(tech.specialization || tech.role || "KBI Field Technician"),
      completed: ["completed", "done", "delivered"].includes(status),
      alreadyReviewed: existingReview.exists,
    })
  } catch (error) {
    console.error("Rating link lookup error:", error)
    return NextResponse.json({ success: false, error: "Unable to load rating link" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const orderId = String(body.orderId || "").trim()
    const technicianId = String(body.technicianId || "").trim()
    const signature = String(body.signature || "").trim()
    const rating = Number(body.rating)
    const feedback = String(body.feedback || "").trim().slice(0, 2000)
    const customerName = String(body.customerName || "Verified Customer").trim().slice(0, 120) || "Verified Customer"
    const compliments = (Array.isArray(body.compliments) ? body.compliments : []).map(String).slice(0, 12)
    const tipAmount = Number(body.tipAmount || 0)
    if (!verifyRatingLink(orderId, technicianId, signature)) {
      return NextResponse.json({ success: false, error: "Invalid rating link" }, { status: 403 })
    }
    if (!Number.isInteger(rating) || rating < 1 || rating > 5 || !Number.isFinite(tipAmount) || tipAmount < 0 || tipAmount > 10_000) {
      return NextResponse.json({ success: false, error: "Invalid rating details" }, { status: 400 })
    }

    const db = getAdminDb()
    const reviewRef = db.collection("technician_reviews").doc(reviewId(orderId, technicianId))
    await db.runTransaction(async (transaction) => {
      const orderRefs = ["bookings", "orders", "service_requests"].map((name) => db.collection(name).doc(orderId))
      const technicianRef = db.collection("technicians").doc(technicianId)
      const [booking, order, serviceRequest, techSnapshot, priorReview] = await Promise.all([
        ...orderRefs.map((ref) => transaction.get(ref)),
        transaction.get(technicianRef),
        transaction.get(reviewRef),
      ])
      if (priorReview.exists) throw new Error("ALREADY_REVIEWED")
      const orderSnapshots = [booking, order, serviceRequest]
      const existing = orderSnapshots.filter((snapshot) => snapshot.exists)
      if (!existing.length || !existing.some((snapshot) => assignedTo(technicianId, snapshot.data()))) throw new Error("ORDER_MISMATCH")
      if (!existing.some((snapshot) => ["completed", "done", "delivered"].includes(String(snapshot.data()?.status || "").toLowerCase()))) {
        throw new Error("NOT_COMPLETED")
      }

      const tech = techSnapshot.data() || {}
      const oldCount = Number(tech.reviewCount || 0)
      const oldAverage = Number(tech.rating || 0)
      const newCount = oldCount + 1
      const newAverage = ((oldAverage * oldCount) + rating) / newCount
      const now = Timestamp.now()
      transaction.create(reviewRef, {
        technicianId,
        technicianName: String(tech.full_name || tech.name || "KBI Technician"),
        orderId,
        rating,
        compliments,
        feedback,
        customerName,
        tipAmount,
        verified: true,
        createdAt: now,
      })
      transaction.set(technicianRef, { reviewCount: newCount, rating: newAverage, lastReviewRating: rating, updatedAt: now }, { merge: true })
      orderSnapshots.forEach((snapshot, index) => {
        if (snapshot.exists) transaction.set(orderRefs[index], { reviewSubmittedAt: now, reviewRating: rating, updatedAt: now }, { merge: true })
      })
      transaction.set(db.collection("notifications").doc(`review_${reviewRef.id}`), {
        userId: technicianId,
        technicianId,
        title: "New verified customer review",
        body: `${customerName} left a ${rating}-star rating`,
        type: "review",
        isRead: false,
        createdAt: now,
      })
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    const code = error instanceof Error ? error.message : ""
    if (code === "ALREADY_REVIEWED") return NextResponse.json({ success: false, error: "This order has already been reviewed" }, { status: 409 })
    if (code === "ORDER_MISMATCH") return NextResponse.json({ success: false, error: "Rating link does not match this order" }, { status: 404 })
    if (code === "NOT_COMPLETED") return NextResponse.json({ success: false, error: "The order must be completed before it can be rated" }, { status: 409 })
    console.error("Rating submission error:", error)
    return NextResponse.json({ success: false, error: "Unable to submit rating" }, { status: 500 })
  }
}
