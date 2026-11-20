"use client"

import type { ReactNode } from "react"

export function ArabicLanguageProvider({ children }: { children: ReactNode }) {
  // Arabic SEO routes share the global language state so the switcher works
  // without remounting the page or replacing its URL.
  return children
}
