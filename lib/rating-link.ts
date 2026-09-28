import { createHmac, timingSafeEqual } from "node:crypto"

function configuredSecret() {
  const secret = process.env.RATING_LINK_SECRET
    || process.env.FIREBASE_ADMIN_PRIVATE_KEY
    || process.env.FIREBASE_SERVICE_ACCOUNT_JSON
    || process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  if (!secret) throw new Error("Rating link signing is not configured")
  return secret
}

export function signRatingLink(orderId: string, technicianId: string, secret = configuredSecret()) {
  return createHmac("sha256", secret).update(`${orderId}:${technicianId}`).digest("base64url")
}

export function verifyRatingLink(orderId: string, technicianId: string, signature: string, secret = configuredSecret()) {
  if (!orderId || !technicianId || !signature) return false
  const expected = signRatingLink(orderId, technicianId, secret)
  const actualBuffer = Buffer.from(signature)
  const expectedBuffer = Buffer.from(expected)
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer)
}

export function customerRatingUrl(orderId: string, technicianId: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kbi.services"
  const url = new URL("/rate", baseUrl)
  url.searchParams.set("order", orderId)
  url.searchParams.set("tech", technicianId)
  url.searchParams.set("sig", signRatingLink(orderId, technicianId))
  return url.toString()
}
