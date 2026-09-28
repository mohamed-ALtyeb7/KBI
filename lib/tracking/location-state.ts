export type LocationPermissionStatus =
  | "granted"
  | "denied"
  | "denied_forever"
  | "not_requested"
  | "unknown"

export interface TechnicianLocationStateInput {
  hasFreshLocation: boolean
  hasCoordinates: boolean
  permissionStatus?: string
  servicesEnabled?: boolean
  trackingIssue?: string
}

export interface TechnicianLocationState {
  label: string
  detail: string
  kind: "live" | "stale" | "blocked" | "missing"
}

export function normalizeLocationPermissionStatus(value: unknown): LocationPermissionStatus {
  const status = String(value || "unknown").toLowerCase().trim()
  if (status === "granted" || status === "denied" || status === "denied_forever" || status === "not_requested") {
    return status
  }
  return "unknown"
}

export function technicianLocationState(input: TechnicianLocationStateInput): TechnicianLocationState {
  if (input.hasFreshLocation) {
    return { label: "Live GPS", detail: "Current location is updating", kind: "live" }
  }
  if (input.servicesEnabled === false || input.trackingIssue === "servicesDisabled") {
    return { label: "GPS switched off", detail: "Technician must enable Location Services", kind: "blocked" }
  }

  const permission = normalizeLocationPermissionStatus(input.permissionStatus)
  if (permission === "denied" || permission === "denied_forever") {
    return { label: "GPS permission blocked", detail: "Technician must allow location access", kind: "blocked" }
  }
  if (permission === "not_requested" || input.trackingIssue === "disclosureDeclined") {
    return { label: "GPS permission needed", detail: "Request access from the technician app", kind: "blocked" }
  }
  if (input.hasCoordinates) {
    return { label: "Last known", detail: "Location is not currently updating", kind: "stale" }
  }
  return { label: "No GPS", detail: "No device location has been received", kind: "missing" }
}
