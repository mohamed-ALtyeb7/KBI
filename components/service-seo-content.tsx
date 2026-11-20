"use client"

import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  CircleDollarSign,
  Clock,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import type { ServiceSeoData } from "@/lib/services-seo-data"

const UAE_LOCATIONS = [
  ["Abu Dhabi", "أبوظبي", "abu-dhabi"],
  ["Dubai", "دبي", "dubai"],
  ["Sharjah", "الشارقة", "sharjah"],
  ["Ajman", "عجمان", "ajman"],
  ["Ras Al Khaimah", "رأس الخيمة", "ras-al-khaimah"],
  ["Fujairah", "الفجيرة", "fujairah"],
  ["Umm Al Quwain", "أم القيوين", "umm-al-quwain"],
] as const

const ARABIC_HIGHLIGHTS = [
  { title: "خدمة في موقعك", description: "يزورك الفني في المنزل أو المكتب حسب التغطية والتوفر." },
  { title: "موعد واضح", description: "نؤكد وقت الزيارة بعد مراجعة الموقع وتوفر الفني." },
  { title: "سعر قبل الإصلاح", description: "نشرح الخيارات ونؤكد عرض السعر قبل بدء العمل المدفوع." },
  { title: "ضمان مكتوب", description: "تُوضح شروط الضمان للإصلاحات المؤهلة في سجل الخدمة." },
]

const FAQ_EN = [
  { question: "Does KBI provide this service at my location?", answer: "KBI accepts home and office service requests across all seven Emirates. The appointment window is confirmed after checking your exact location and technician availability." },
  { question: "Will I receive a quote before the work begins?", answer: "Yes. The technician diagnoses the reported issue, explains the available options, and confirms the quote before paid work begins." },
  { question: "Can the service be completed during one visit?", answer: "Many common requests can be completed on site, but timing depends on diagnosis, device condition, and parts availability." },
  { question: "Is warranty coverage available?", answer: "Eligible repairs may include written warranty terms. Coverage and exclusions are recorded on the quote, invoice, or service record." },
]

const FAQ_AR = [
  { question: "هل تقدم KBI هذه الخدمة في منطقتي؟", answer: "نستقبل طلبات الزيارة المنزلية والمكتبية في جميع إمارات الدولة السبع، ونؤكد الموعد بعد مراجعة الموقع وتوفر الفني." },
  { question: "هل يتم تأكيد السعر قبل بدء العمل؟", answer: "نعم. يفحص الفني المشكلة ويشرح الخيارات المتاحة ويؤكد عرض السعر قبل بدء أي عمل مدفوع." },
  { question: "هل يمكن إكمال الخدمة خلال زيارة واحدة؟", answer: "يمكن إكمال كثير من الطلبات في الموقع، وتعتمد المدة على نتيجة الفحص وحالة الجهاز وتوفر القطع." },
  { question: "هل يوجد ضمان على الخدمة؟", answer: "قد تشمل الإصلاحات المؤهلة شروط ضمان مكتوبة، وتُسجل التغطية والاستثناءات في عرض السعر أو الفاتورة." },
]

export function ServiceSeoContent({
  service,
  schemaJson,
  relatedServices,
  arabicRequests,
}: {
  service: ServiceSeoData
  schemaJson: string
  relatedServices: { slug: string; nameEn: string; nameAr: string }[]
  arabicRequests: string[]
}) {
  const { lang } = useLanguage()
  const isAr = lang === "ar"
  const serviceName = isAr ? service.arabic.name : service.name
  const problems = isAr
    ? arabicRequests.map((title) => ({ title, description: "يحدد الفني سبب المشكلة وخيارات الإصلاح المناسبة بعد فحص الجهاز." }))
    : service.commonProblems
  const highlights = isAr ? ARABIC_HIGHLIGHTS : service.highlights

  return (
    <main className="adaptive-theme-page min-h-screen bg-black pb-16 pt-24 text-white">
      <nav aria-label={isAr ? "مسار الصفحة" : "Breadcrumb"} className="container mx-auto mb-8 px-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
          <li><Link className="transition-colors hover:text-cyan-400" href="/">{isAr ? "الرئيسية" : "Home"}</Link></li>
          <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
          <li><Link className="transition-colors hover:text-cyan-400" href="/services">{isAr ? "الخدمات" : "Services"}</Link></li>
          <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
          <li aria-current="page" className="text-white/90">{serviceName}</li>
        </ol>
      </nav>

      <section className="container mx-auto mb-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-400">
            <Wrench className="h-4 w-4" />
            <span className="text-sm font-semibold">{isAr ? "خدمة تقنية في موقع العميل" : "On-Site Technical Service"}</span>
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-white via-cyan-100 to-white/70 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            {isAr ? service.arabic.h1 : service.h1}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            {isAr ? service.arabic.description : service.heroSubtitle}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 w-full rounded-full bg-cyan-500 px-8 text-lg font-bold text-black hover:bg-cyan-400 sm:w-auto">
              <Link href={`/book?device=${service.bookingParam}`}>{isAr ? `احجز ${serviceName}` : service.ctaText}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 w-full rounded-full border-white/20 px-8 text-lg hover:bg-white/10 sm:w-auto">
              <Link href="/contact">{isAr ? "اسألنا" : "Ask a Question"}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-16 px-6">
        <div className="mx-auto max-w-4xl space-y-5 text-base leading-8 text-white/75 md:text-lg">
          <h2 className="text-3xl font-bold text-white">{isAr ? "عن هذه الخدمة" : "About This Service"}</h2>
          <p>{isAr ? `توفر KBI خدمة ${serviceName} في موقعك في جميع أنحاء الإمارات، مع فحص الجهاز وشرح الخيارات المناسبة.` : service.overview.paragraph1}</p>
          <p>{isAr ? "يوضح الفني نتيجة الفحص والتكلفة المتوقعة، ولا يبدأ أي إصلاح مدفوع قبل موافقتك على عرض السعر." : service.overview.paragraph2}</p>
        </div>
      </section>

      <section className="container mx-auto mb-16 px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">{isAr ? `طلبات ${serviceName} الشائعة` : `Common ${service.name} Requests`}</h2>
          <p className="text-white/70">{isAr ? "يتم تأكيد التشخيص والوقت والتكلفة بعد فحص جهازك." : "Diagnosis, repairability, timing, and price are confirmed for your specific device."}</p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <GlassCard key={problem.title} className="p-6">
              <CheckCircle className="mb-4 h-6 w-6 text-cyan-400" />
              <h3 className="mb-2 text-lg font-bold">{problem.title}</h3>
              <p className="text-sm leading-6 text-white/70">{problem.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="container mx-auto mb-16 px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = [MapPin, Clock, CircleDollarSign, ShieldCheck][index % 4]
            return (
              <GlassCard key={highlight.title} className="p-6">
                <Icon className="mb-4 h-9 w-9 text-cyan-400" />
                <h3 className="mb-2 text-lg font-bold">{highlight.title}</h3>
                <p className="text-sm leading-6 text-white/70">{highlight.description}</p>
              </GlassCard>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto mb-16 px-6">
        <GlassCard className="mx-auto max-w-6xl p-8">
          <h2 className="mb-8 text-3xl font-bold">{isAr ? "العلامات التجارية والأجهزة المدعومة" : "Supported Brands and Devices"}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.supportedBrands.map((brand) => (
              <div key={brand.name}>
                <h3 className="mb-3 font-bold text-cyan-400">{brand.name}</h3>
                {brand.models?.length ? <ul className="space-y-2 text-sm text-white/70">{brand.models.map((model) => <li key={model}>{model}</li>)}</ul> : null}
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="container mx-auto mb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">{isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}</h2>
          <div className="space-y-4">
            {(isAr ? FAQ_AR : FAQ_EN).map((item) => (
              <details key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-6 open:border-cyan-500/30">
                <summary className="cursor-pointer font-bold text-white">{item.question}</summary>
                <p className="mt-4 leading-7 text-white/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-16 px-6 text-center">
        <h2 className="mb-3 text-3xl font-bold">{isAr ? "تغطية الخدمة في جميع الإمارات" : "Service Coverage Across the UAE"}</h2>
        <p className="mx-auto mb-7 max-w-3xl text-white/70">
          {isAr ? `اطلب ${serviceName} في منزلك أو مكان عملك. نؤكد الموعد بعد مراجعة المنطقة وتوفر الفني.` : `Request ${service.name.toLowerCase()} at your home or workplace. Appointment timing is confirmed after checking your exact area and technician availability.`}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {UAE_LOCATIONS.map(([nameEn, nameAr, locationSlug]) => (
            <Link key={locationSlug} href={`/locations/${locationSlug}`} className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold transition-colors hover:border-cyan-400 hover:text-cyan-400">
              {isAr ? nameAr : nameEn}
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8 text-center">
          <h2 className="mb-6 text-2xl font-bold">{isAr ? "خدمات ذات صلة" : "Related Services"}</h2>
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {relatedServices.map((related) => (
              <Link key={related.slug} href={`/services/${related.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-5 py-3 text-sm font-semibold transition-colors hover:border-cyan-400 hover:text-cyan-400">
                {isAr ? related.nameAr : related.nameEn}<ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
          <Button asChild size="lg" className="rounded-full bg-cyan-500 px-8 font-bold text-black hover:bg-cyan-400">
            <Link href={`/book?device=${service.bookingParam}`}>{isAr ? `احجز ${serviceName}` : service.ctaText}</Link>
          </Button>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
    </main>
  )
}
