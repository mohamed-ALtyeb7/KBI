import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationSeoContent } from "@/components/location-seo-content"
import { locations, UAE_EMIRATES } from "@/lib/locations"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }))
}

export const dynamicParams = false

function getLocationContext(slug: string) {
  const location = locations.find((item) => item.slug === slug)
  if (!location) return null
  const parentEmirate = UAE_EMIRATES.find((emirate) => emirate.id === location.id || emirate.areas.some((area) => area.id === location.id))
  return { location, emirateAr: parentEmirate?.nameAr || location.nameAr, emirateEn: parentEmirate?.nameEn || location.name }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const context = getLocationContext(slug)
  if (!context) return {}

  const { location, emirateAr } = context
  const title = `صيانة الأجهزة في ${location.nameAr} | KBI Services`
  const description = `صيانة ميدانية للهواتف واللابتوب والكمبيوتر والطابعات والتلفزيونات ودعم تقنية المعلومات في ${location.nameAr}، ${emirateAr}.`
  return {
    title: { absolute: title }, description,
    alternates: { canonical: `/ar/locations/${location.slug}`, languages: { en: `/locations/${location.slug}`, ar: `/ar/locations/${location.slug}`, "x-default": `/locations/${location.slug}` } },
    openGraph: { title, description, url: `https://kbi.services/ar/locations/${location.slug}`, locale: "ar_AE", alternateLocale: ["en_AE"], type: "website" },
  }
}

export default async function ArabicLocationPage({ params }: Props) {
  const { slug } = await params
  const context = getLocationContext(slug)
  if (!context) notFound()

  const { location, emirateAr, emirateEn } = context
  const canonicalUrl = `https://kbi.services/ar/locations/${location.slug}`
  const schema = [
    {
      "@context": "https://schema.org", "@type": "Service", "@id": `${canonicalUrl}#service`,
      name: `صيانة الأجهزة في ${location.nameAr}`,
      description: `خدمات تشخيص وصيانة أجهزة ودعم تقني ميداني في ${location.nameAr}، ${emirateAr}.`,
      provider: { "@id": "https://kbi.services/#organization" },
      areaServed: { "@type": "AdministrativeArea", name: `${location.nameAr}، ${emirateAr}، الإمارات العربية المتحدة` },
      availableLanguage: ["ar", "en"],
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://kbi.services/ar" },
        { "@type": "ListItem", position: 2, name: location.nameAr, item: canonicalUrl },
      ],
    },
  ]
  const nearbyLocations = locations.filter((item) => item.slug !== location.slug).slice(0, 6)
  const schemaJson = JSON.stringify(schema).replace(/</g, "\\u003c")

  return <LocationSeoContent location={location} emirateEn={emirateEn} emirateAr={emirateAr} nearbyLocations={nearbyLocations} schemaJson={schemaJson} />
}
