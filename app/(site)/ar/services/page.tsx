import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "خدمات صيانة الأجهزة والدعم التقني في الإمارات",
  description: "تعرّف على خدمات KBI لصيانة الهواتف واللابتوب والطابعات والتلفزيونات وأجهزة الألعاب وتركيب CCTV والشبكات ودعم الشركات في الإمارات.",
  alternates: {
    canonical: "/ar/services",
    languages: { en: "/services", ar: "/ar/services", "x-default": "/services" },
  },
  openGraph: {
    title: "خدمات صيانة الأجهزة والدعم التقني في الإمارات | KBI Services",
    description: "جميع خدمات الصيانة والدعم التقني التي تقدمها KBI في الإمارات.",
    url: "https://kbi.services/ar/services",
    locale: "ar_AE",
    type: "website",
  },
}

export { default } from "../../services/page"
