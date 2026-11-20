"use client"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useT } from "@/components/language-provider"
import type { SiteContact } from "@/lib/site-contact"

export function Hero({ contact }: { contact: SiteContact }) {
  const t = useT()
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-28 pb-16 sm:py-24 md:py-32 brand-hero">

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div>
            {/* Badge */}
            <div className="flex justify-center mb-6 sm:mb-10">
              <div
                className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 cursor-default hover:bg-emerald-500/15 transition-all duration-300 shadow-sm backdrop-blur-md"
              >
                <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
                  {t("AVAILABLE ACROSS THE UAE")}
                </span>
              </div>
            </div>

            {/* Headings */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-blue-50 dark:to-white/60 mb-5 sm:mb-6 tracking-tighter text-balance leading-[1.1]" suppressHydrationWarning>
              <span>{t("Tech Repair at Your Doorstep")}<br /><span className="text-cyan-600 dark:text-cyan-400 inline-block mt-1.5 sm:mt-2">{t("Across the UAE")}</span></span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal dark:font-light tracking-wide px-2 sm:px-0" suppressHydrationWarning>
              {t("On-site device repair and IT support at your home or office across the UAE. Appointment timing depends on technician and parts availability.")}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-xs sm:max-w-none mx-auto">
              <Link
                href="/book"
                className="group relative inline-flex min-h-14 w-full items-center justify-center gap-2.5 overflow-hidden rounded-full border border-white/20 bg-gradient-to-r from-cyan-500 to-blue-600 px-7 text-base font-bold text-white shadow-[0_14px_32px_rgba(6,182,212,0.28)] transition-[transform,box-shadow,filter] duration-200 ease-out hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_18px_38px_rgba(6,182,212,0.38)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:min-w-[208px] sm:px-6 sm:text-lg"
              >
                <span>{t("Book a Technician")}</span>
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10">
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
              <a
                href={`https://wa.me/${contact.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-emerald-600 bg-emerald-600 px-7 text-base font-bold text-white shadow-sm backdrop-blur-md transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-700 hover:shadow-[0_14px_30px_rgba(16,185,129,0.12)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:text-white sm:w-auto sm:min-w-[208px] sm:px-6 sm:text-lg"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10">
                  <MessageCircle className="h-5 w-5 text-white" />
                </span>
                <span>{t("Chat on WhatsApp")}</span>
              </a>
            </div>

            {/* Emirates List */}
            <div className="mt-8 pt-4 border-t border-slate-200/40 dark:border-white/5 max-w-xl mx-auto">
              <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 font-medium tracking-wide">
                {t("Abu Dhabi · Dubai · Sharjah · Ajman · Ras Al Khaimah · Fujairah · Umm Al Quwain")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
