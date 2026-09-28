import assert from "node:assert/strict"
import test from "node:test"

import { technicianLocationState } from "../lib/tracking/location-state.ts"

test("fresh coordinates take precedence over an older permission status", () => {
  assert.equal(technicianLocationState({
    hasFreshLocation: true,
    hasCoordinates: true,
    permissionStatus: "denied",
  }).label, "Live GPS")
})

test("admin distinguishes disabled services and blocked permission", () => {
  assert.deepEqual(technicianLocationState({
    hasFreshLocation: false,
    hasCoordinates: false,
    servicesEnabled: false,
  }), {
    label: "GPS switched off",
    detail: "Technician must enable Location Services",
    kind: "blocked",
  })

  assert.equal(technicianLocationState({
    hasFreshLocation: false,
    hasCoordinates: false,
    permissionStatus: "denied_forever",
  }).label, "GPS permission blocked")
})

test("admin keeps stale coordinates separate from missing GPS", () => {
  assert.equal(technicianLocationState({
    hasFreshLocation: false,
    hasCoordinates: true,
    permissionStatus: "granted",
  }).kind, "stale")
  assert.equal(technicianLocationState({
    hasFreshLocation: false,
    hasCoordinates: false,
    permissionStatus: "unknown",
  }).kind, "missing")
})
