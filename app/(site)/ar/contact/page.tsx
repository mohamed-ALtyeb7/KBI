import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "تواصل مع KBI Services | صيانة ودعم تقني في الإمارات" },
  description: "تواصل مع KBI Services لحجز صيانة أجهزة أو دعم تقني ميداني في أبوظبي ودبي والشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين.",
  alternates: {
    canonical: "/ar/contact",
    languages: { en: "/contact", ar: "/ar/contact", "x-default": "/contact" },
  },
  openGraph: {
    title: "تواصل مع KBI Services",
    description: "تواصل معنا لحجز صيانة ميدانية أو دعم تقني في جميع أنحاء الإمارات.",
    url: "https://kbi.services/ar/contact",
    locale: "ar_AE",
    alternateLocale: ["en_AE"],
    type: "website",
  },
}

export { default } from "../../contact/page"
