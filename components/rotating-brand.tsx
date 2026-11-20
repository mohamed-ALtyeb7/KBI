"use client"

import { useId } from "react"

export function RotatingBrand() {
  const id = useId().replace(/:/g, "")
  return <div className="relative grid size-28 shrink-0 place-items-center text-cyan-700 dark:text-cyan-400" role="img" aria-label="KBI TECHNOLOGIES">
    <svg viewBox="0 0 120 120" className="size-full motion-safe:animate-[spin_24s_linear_infinite]" aria-hidden="true">
      <defs><path id={id} d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" /></defs>
      <text fill="currentColor" fontSize="10" fontWeight="700" fontFamily="Arial, sans-serif" textLength="270" lengthAdjust="spacing"><textPath href={"#" + id}>KBI TECHNOLOGIES · KBI TECHNOLOGIES · </textPath></text>
    </svg>
    <span className="absolute grid size-11 place-items-center rounded-full border border-cyan-500/35 bg-cyan-500/10 text-xs font-black" dir="ltr">KBI<span className="sr-only"> TECHNOLOGIES</span></span>
  </div>
}
