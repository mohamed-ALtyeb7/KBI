import { cn } from "@/lib/utils"

export function BrandLogo({ className = "" }: { className?: string }) {
  return <span className={cn("inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-3 py-2", className)} dir="ltr"><img src="/kbi-logo.png" alt="KBI Services" width={428} height={180} className="h-7 w-auto object-contain" /></span>
}
