import type { DecodedIdToken } from "firebase-admin/auth"

import { getAdminAuth, getAdminDb } from "@/lib/firebase-admin"
import prisma from "@/lib/prisma"

export type AppRole =
  | "super_admin"
  | "admin"
  | "technician"
  | "customer"
  | "dispatcher"
  | "operations_manager"
  | "customer_support"
  | "finance"
  | "warehouse"
  | "hr"

export type AuthenticatedIdentity = {
  uid: string
  email: string | null
  role: AppRole
  token: DecodedIdToken
}

const normalizeRole = (value: unknown): AppRole | null => {
  const role = String(value || "").trim().toLowerCase()
  const supported: AppRole[] = [
    "super_admin",
    "admin",
    "technician",
    "customer",
    "dispatcher",
    "operations_manager",
    "customer_support",
    "finance",
    "warehouse",
    "hr",
  ]
  return supported.includes(role as AppRole) ? (role as AppRole) : null
}

export function getBearerToken(request: Request): string | null {
  const value = request.headers.get("authorization")?.trim() || ""
  const match = /^Bearer\s+([^\s]+)$/i.exec(value)
  return match?.[1] || null
}

export async function authenticateRequest(
  request: Request,
  allowedRoles?: readonly AppRole[],
  options: { requireVerifiedEmail?: boolean } = {},
): Promise<AuthenticatedIdentity | null> {
  const token = getBearerToken(request)
  if (!token) return null

  try {
    const decoded = await getAdminAuth().verifyIdToken(token, true)
    if (!decoded.uid) return null
    if (options.requireVerifiedEmail !== false && decoded.email_verified === false) return null

    const userDoc = await getAdminDb().collection("users").doc(decoded.uid).get()
    const documentRole = userDoc.exists ? normalizeRole(userDoc.data()?.role) : null
    const claimRole = normalizeRole(decoded.role)
    const role = documentRole || claimRole
    if (!role) return null
    if (allowedRoles && !allowedRoles.includes(role)) return null

    return {
      uid: decoded.uid,
      email: decoded.email?.trim().toLowerCase() || null,
      role,
      token: decoded,
    }
  } catch {
    return null
  }
}

export function authenticateAdmin(request: Request) {
  return authenticateRequest(request, ["admin", "super_admin"])
}

export function authenticateTechnician(request: Request) {
  // Approved technician accounts created by the mobile onboarding flow do not
  // currently verify email separately. Their signed Firebase token and
  // server-owned role still provide the authorization boundary used by every
  // job endpoint. Admin and customer access retain the stricter email check.
  return authenticateRequest(
    request,
    ["technician", "admin", "super_admin"],
    { requireVerifiedEmail: false },
  )
}

export function authenticateCustomer(request: Request) {
  return authenticateRequest(request, ["customer", "admin", "super_admin"])
}

export async function findPrismaUser(identity: AuthenticatedIdentity) {
  if (!identity.email) return null
  return prisma.user.findUnique({ where: { email: identity.email } })
}

export async function findPrismaTechnician(identity: AuthenticatedIdentity) {
  const user = await findPrismaUser(identity)
  if (!user) return null
  return prisma.technician.findUnique({ where: { userId: user.id } })
}
