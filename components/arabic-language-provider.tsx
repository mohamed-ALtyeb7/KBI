"use client"

import type { ReactNode } from "react"
import { LanguageProvider } from "@/components/language-provider"
import { DICTIONARY } from "@/lib/i18n-dictionary"
import { useEffect } from "react"
import { useLanguage } from "@/components/language-provider"

function RestoreSavedLanguage() {
  const { setLang } = useLanguage()

  useEffect(() => {
    try {
      const savedLanguage = window.localStorage.getItem("kbi-lang")
      if (savedLanguage === "en" || savedLanguage === "ar") setLang(savedLanguage)
    } catch {}
  }, [setLang])

  return null
}

export function ArabicLanguageProvider({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider initialLang="ar" initialDictionary={DICTIONARY}>
      <RestoreSavedLanguage />
      {children}
    </LanguageProvider>
  )
}
