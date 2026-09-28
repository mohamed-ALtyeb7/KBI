import assert from "node:assert/strict"
import test from "node:test"

import { signRatingLink, verifyRatingLink } from "../lib/rating-link.ts"

const secret = "unit-test-rating-secret"

test("signed rating links validate only for their order and technician", () => {
  const signature = signRatingLink("order-123", "tech-456", secret)
  assert.equal(verifyRatingLink("order-123", "tech-456", signature, secret), true)
  assert.equal(verifyRatingLink("order-999", "tech-456", signature, secret), false)
  assert.equal(verifyRatingLink("order-123", "tech-999", signature, secret), false)
})

test("tampered signatures are rejected", () => {
  const signature = signRatingLink("order-123", "tech-456", secret)
  assert.equal(verifyRatingLink("order-123", "tech-456", `${signature}x`, secret), false)
})
