import { cn } from "@/lib/utils"

export function BrandLogo({ className = "" }: { className?: string }) {
  return <span className={cn("inline-flex shrink-0 items-baseline text-[1.9rem] font-black leading-none tracking-[-0.07em] text-foreground dark:text-white", className)} dir="ltr" aria-label="KBI Services"><span>KBI</span><span className="ml-0.5 text-cyan-500 dark:text-cyan-400">.</span></span>
}
