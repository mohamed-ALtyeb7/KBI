import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "صيانة الأجهزة والدعم التقني في جميع أنحاء الإمارات | KBI Services" },
  description: "خدمات صيانة ميدانية للهواتف واللابتوب والطابعات والتلفزيونات وكاميرات المراقبة ودعم تقنية المعلومات في جميع إمارات الدولة.",
  alternates: {
    canonical: "/ar",
    languages: { en: "/", ar: "/ar", "x-default": "/" },
  },
  openGraph: {
    title: "صيانة الأجهزة والدعم التقني في جميع أنحاء الإمارات | KBI Services",
    description: "خدمات صيانة ودعم تقني في المنازل والمكاتب عبر جميع إمارات الدولة.",
    url: "https://kbi.services/ar",
    locale: "ar_AE",
    alternateLocale: ["en_AE"],
    type: "website",
  },
}

// Keep the Arabic SEO URL while rendering the shared, language-switchable page.
export { default } from "../page"
