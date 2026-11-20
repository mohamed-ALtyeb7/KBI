import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "احجز فني صيانة في الإمارات | KBI Services" },
  description: "احجز فني KBI لصيانة الأجهزة أو الدعم التقني في منزلك أو مكتبك في جميع أنحاء الإمارات.",
  alternates: {
    canonical: "/ar/book",
    languages: { en: "/book", ar: "/ar/book", "x-default": "/book" },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "احجز فني صيانة في الإمارات | KBI Services",
    description: "حجز صيانة أجهزة ودعم تقني ميداني للمنازل والمكاتب في الإمارات.",
    url: "https://kbi.services/ar/book",
    locale: "ar_AE",
    alternateLocale: ["en_AE"],
    type: "website",
  },
}

export { default } from "../../book/page"
