import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "من نحن | KBI Services لصيانة الأجهزة في الإمارات" },
  description: "تعرّف على KBI Services وخدمات صيانة الأجهزة والدعم التقني الميداني للمنازل والشركات في جميع إمارات الدولة.",
  alternates: {
    canonical: "/ar/about",
    languages: { en: "/about", ar: "/ar/about", "x-default": "/about" },
  },
  openGraph: {
    title: "من نحن | KBI Services",
    description: "صيانة أجهزة ودعم تقني ميداني للمنازل والشركات في جميع أنحاء الإمارات.",
    url: "https://kbi.services/ar/about",
    locale: "ar_AE",
    alternateLocale: ["en_AE"],
    type: "website",
  },
}

export { default } from "../../about/page"
