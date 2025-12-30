"use client"

import { useT } from "@/components/language-provider"

export function T({ k }: { k: string }) {
  const t = useT()
  return t(k)
}

