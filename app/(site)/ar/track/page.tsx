import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "تتبع طلب الصيانة | KBI Services" },
  description: "تابع حالة طلب الصيانة أو موعد الفني لدى KBI Services بأمان باستخدام بيانات الطلب.",
  alternates: {
    canonical: "/ar/track",
    languages: { en: "/track", ar: "/ar/track", "x-default": "/track" },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "تتبع طلب الصيانة | KBI Services",
    description: "تابع آخر تحديثات طلب الصيانة أو موعد الفني لدى KBI Services.",
    url: "https://kbi.services/ar/track",
    locale: "ar_AE",
    alternateLocale: ["en_AE"],
    type: "website",
  },
}

export { default } from "../../track/page"
