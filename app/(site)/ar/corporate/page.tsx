import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "الدعم التقني وصيانة أجهزة الشركات في الإمارات | KBI Services" },
  description: "خدمات دعم تقنية المعلومات وصيانة أجهزة الشركات والشبكات وكاميرات المراقبة في موقع العمل بجميع أنحاء الإمارات.",
  alternates: {
    canonical: "/ar/corporate",
    languages: { en: "/corporate", ar: "/ar/corporate", "x-default": "/corporate" },
  },
  openGraph: {
    title: "الدعم التقني للشركات في الإمارات | KBI Services",
    description: "صيانة ميدانية ودعم تقني وشبكات وكاميرات مراقبة للشركات في الإمارات.",
    url: "https://kbi.services/ar/corporate",
    locale: "ar_AE",
    alternateLocale: ["en_AE"],
    type: "website",
  },
}

export { default } from "../../corporate/page"
