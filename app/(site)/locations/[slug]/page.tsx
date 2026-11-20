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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const loc = locations.find((location) => location.slug === slug)
  if (!loc) return {}
  const parentEmirate = UAE_EMIRATES.find((item) => item.areas.some((area) => area.id === loc.id))
  const isEmirate = UAE_EMIRATES.some((item) => item.id === loc.id)
  const emirateName = parentEmirate?.nameEn || loc.name
  const title = isEmirate ? `On-Site Device Repair in ${loc.name}` : `On-Site Device Repair in ${loc.name}, ${emirateName}`
  const description = isEmirate
    ? `Professional on-site phone, laptop, computer, printer, TV and IT support in ${loc.name}. KBI technicians come directly to your home or office.`
    : `Professional on-site phone, laptop, computer and electronics repair in ${loc.name}, ${emirateName}, UAE. KBI technicians come directly to your door.`

  return {
    title, description,
    alternates: { canonical: `/locations/${loc.slug}`, languages: { en: `/locations/${loc.slug}`, ar: `/ar/locations/${loc.slug}`, "x-default": `/locations/${loc.slug}` } },
    openGraph: { title: `${title} | KBI Services`, description, url: `https://kbi.services/locations/${loc.slug}`, type: "website" },
    twitter: { card: "summary_large_image", title: `${title} | KBI Services`, description },
  }
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = locations.find((item) => item.slug === slug)
  if (!location) notFound()

  const parentEmirate = UAE_EMIRATES.find((item) => item.areas.some((area) => area.id === location.id))
  const isEmirate = UAE_EMIRATES.some((item) => item.id === location.id)
  const emirateEn = parentEmirate?.nameEn || location.name
  const emirateAr = parentEmirate?.nameAr || location.nameAr
  const canonicalUrl = `https://kbi.services/locations/${location.slug}`
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service", "@id": `${canonicalUrl}#service`,
    name: `On-Site Device Repair in ${location.name}`, provider: { "@id": "https://kbi.services/#organization" },
    areaServed: { "@type": "AdministrativeArea", name: isEmirate ? `${location.name}, United Arab Emirates` : `${location.name}, ${emirateEn}, United Arab Emirates` },
    description: `Professional on-site device diagnosis, repair and IT support appointments in ${location.name}.`,
  }
  const breadcrumbItems = [{ "@type": "ListItem", position: 1, name: "Home", item: "https://kbi.services" }]
  if (!isEmirate && parentEmirate) {
    breadcrumbItems.push({ "@type": "ListItem", position: 2, name: parentEmirate.nameEn, item: `https://kbi.services/locations/${parentEmirate.slug}` })
    breadcrumbItems.push({ "@type": "ListItem", position: 3, name: location.name, item: canonicalUrl })
  } else {
    breadcrumbItems.push({ "@type": "ListItem", position: 2, name: location.name, item: canonicalUrl })
  }
  const schemaJson = JSON.stringify([serviceSchema, { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbItems }]).replace(/</g, "\\u003c")
  const nearbyLocations = locations.filter((item) => item.slug !== location.slug).slice(0, 6)

  return <LocationSeoContent location={location} emirateEn={emirateEn} emirateAr={emirateAr} nearbyLocations={nearbyLocations} schemaJson={schemaJson} />
}
