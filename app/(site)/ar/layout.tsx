import type { ReactNode } from "react"
import { ArabicLanguageProvider } from "@/components/arabic-language-provider"

export default function ArabicLayout({ children }: { children: ReactNode }) {
  return <ArabicLanguageProvider>{children}</ArabicLanguageProvider>
}
