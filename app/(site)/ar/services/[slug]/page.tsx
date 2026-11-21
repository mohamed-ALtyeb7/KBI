import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServiceSeoContent } from "@/components/service-seo-content"
import { ARABIC_SERVICE_REQUESTS } from "@/lib/services-seo-ar"
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services-seo-data"

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
  const service = getServiceBySlug(slug)
  if (!service) return {}

  const arabicPath = `/ar/services/${service.slug}`
  const englishPath = `/services/${service.slug}`
  const title = `${service.arabic.name} في جميع أنحاء الإمارات`
  return {
    title,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    description: service.arabic.description,
    alternates: { canonical: arabicPath, languages: { en: englishPath, ar: arabicPath, "x-default": englishPath } },
    openGraph: {
      title: `${title} | KBI Services`, description: service.arabic.description,
      url: `${SITE_URL}${arabicPath}`, locale: "ar_AE", alternateLocale: ["en_AE"], type: "website",
    },
    twitter: { card: "summary_large_image", title: `${title} | KBI Services`, description: service.arabic.description },
  }
}

export default async function ArabicServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const canonicalUrl = `${SITE_URL}/ar/services/${service.slug}`
  const faqItems = [
    { question: `هل تقدم KBI خدمة ${service.arabic.name} في منطقتي؟`, answer: "نستقبل طلبات الزيارة المنزلية والمكتبية في جميع إمارات الدولة السبع. يتم تأكيد الموعد بعد مراجعة الموقع وتوفر الفني والقطع المطلوبة." },
    { question: "هل يتم تأكيد السعر قبل بدء العمل؟", answer: "نعم. يبدأ الفني بتشخيص المشكلة وشرح الخيارات المتاحة، ثم يتم تأكيد عرض السعر قبل تنفيذ أي عمل مدفوع." },
    { question: "هل يمكن إكمال الخدمة خلال زيارة واحدة؟", answer: "يمكن إكمال كثير من الطلبات الشائعة في الموقع، لكن المدة تعتمد على نتيجة الفحص وحالة الجهاز وتوفر القطع." },
    { question: "هل يوجد ضمان على الخدمة؟", answer: "قد تشمل الإصلاحات المؤهلة شروط ضمان مكتوبة. يتم تسجيل مدة التغطية والاستثناءات المطبقة في عرض السعر أو الفاتورة أو سجل الخدمة." },
  ]
  const structuredData = [
    {
      "@context": "https://schema.org", "@type": "Service", "@id": `${canonicalUrl}#service`,
      name: service.arabic.name, serviceType: service.arabic.name, url: canonicalUrl,
      description: service.arabic.description, inLanguage: "ar-AE",
      provider: { "@id": `${SITE_URL}/#organization` }, areaServed: { "@type": "Country", name: "الإمارات العربية المتحدة" },
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/ar` },
        { "@type": "ListItem", position: 2, name: "الخدمات", item: `${SITE_URL}/ar/services` },
        { "@type": "ListItem", position: 3, name: service.arabic.name, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage", inLanguage: "ar-AE",
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
      schemaJson={JSON.stringify(structuredData).replace(/</g, "\\u003c")}
    />
  )
}
