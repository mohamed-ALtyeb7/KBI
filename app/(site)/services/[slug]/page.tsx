import type { Metadata } from "next"
import { notFound, permanentRedirect } from "next/navigation"
import { ServiceSeoContent } from "@/components/service-seo-content"
import { ARABIC_SERVICE_REQUESTS } from "@/lib/services-seo-ar"
import { getAllServiceSlugs, getLegacySlugRedirect, getServiceBySlug } from "@/lib/services-seo-data"

interface Props {
  params: Promise<{ slug: string }>
}

const SITE_URL = "https://kbi.services"

export const revalidate = 86400

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const legacyDestination = getLegacySlugRedirect(slug)
  const service = getServiceBySlug(legacyDestination ?? slug)
  if (!service) return {}

  const canonicalPath = `/services/${service.slug}`
  return {
    title: service.seoTitle,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    description: service.metaDescription,
    alternates: {
      canonical: canonicalPath,
      languages: { en: canonicalPath, ar: `/ar${canonicalPath}`, "x-default": canonicalPath },
    },
    openGraph: {
      title: `${service.seoTitle} | KBI Services`,
      description: service.metaDescription,
      url: `${SITE_URL}${canonicalPath}`,
      type: "website",
      locale: "en_AE",
    },
    twitter: { card: "summary_large_image", title: `${service.seoTitle} | KBI Services`, description: service.metaDescription },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const legacyDestination = getLegacySlugRedirect(slug)
  if (legacyDestination) permanentRedirect(`/services/${legacyDestination}`)

  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const canonicalUrl = `${SITE_URL}/services/${service.slug}`
  const faqItems = [
    {
      question: `Does KBI provide ${service.name.toLowerCase()} at my location?`,
      answer: "KBI accepts home and office service requests across all seven Emirates. The appointment window is confirmed after checking your exact location and technician availability.",
    },
    { question: "Will I receive a quote before the work begins?", answer: "Yes. The technician diagnoses the reported issue, explains the available options, and confirms the quote before paid work begins." },
    { question: "Can the service be completed during one visit?", answer: "Many common requests can be completed on site, but timing depends on diagnosis, device condition, and parts availability." },
    { question: "Is warranty coverage available?", answer: "Eligible repairs may include written warranty terms. Coverage and exclusions are recorded on the quote, invoice, or service record." },
  ]
  const schema = [
    {
      "@context": "https://schema.org", "@type": "Service", "@id": `${canonicalUrl}#service`,
      name: service.name, serviceType: service.name, url: canonicalUrl, description: service.metaDescription,
      provider: { "@id": `${SITE_URL}/#organization` }, areaServed: { "@type": "Country", name: "United Arab Emirates" },
      availableChannel: { "@type": "ServiceChannel", serviceLocation: { "@type": "Place", name: "Customer home or office in the UAE" } },
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: service.name, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ]
  const relatedServices = service.relatedServices.map((related) => ({
    slug: related.slug,
    nameEn: related.name,
    nameAr: getServiceBySlug(related.slug)?.arabic.name ?? related.name,
  }))

  return (
    <ServiceSeoContent
      service={service}
      relatedServices={relatedServices}
      arabicRequests={ARABIC_SERVICE_REQUESTS[service.slug] ?? []}
      schemaJson={JSON.stringify(schema).replace(/</g, "\\u003c")}
    />
  )
}
