"use client"

import Link from "next/link"
import { Clock, MapPin, ShieldCheck, Star } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

export interface LocationSeoViewData {
  slug: string
  name: string
  nameAr: string
  description: string
  landmarks: string[]
}

export function LocationSeoContent({
  location,
  emirateEn,
  emirateAr,
  nearbyLocations,
  schemaJson,
}: {
  location: LocationSeoViewData
  emirateEn: string
  emirateAr: string
  nearbyLocations: LocationSeoViewData[]
  schemaJson: string
}) {
  const { lang } = useLanguage()
  const isAr = lang === "ar"
  const locationName = isAr ? location.nameAr : location.name
  const emirateName = isAr ? emirateAr : emirateEn

  return (
    <main className="adaptive-theme-page min-h-screen bg-black text-white pt-24 pb-12">
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="font-semibold text-sm">{isAr ? `نخدم ${locationName} والمناطق المحيطة` : `Serving ${locationName} & Surroundings`}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-white/70">
            {isAr ? "صيانة الأجهزة في" : "Expert Device Repair in"} <br />
            <span className="text-cyan-400">{locationName}</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            {isAr
              ? `اطلب فني KBI إلى منزلك أو مكتبك في ${locationName}، ${emirateName}. نراجع التغطية والتوفر ونؤكد موعد الزيارة قبل الإصلاح.`
              : `${location.description} Request a home or office visit in ${location.name}; we confirm the appointment window after checking coverage and availability.`}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold w-full sm:w-auto">
              <Link href={`/book?address=${encodeURIComponent(isAr ? `${location.nameAr}، ${emirateAr}` : location.name)}`}>
                {isAr ? `احجز فنيًا في ${locationName}` : `Book Technician in ${location.name}`}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/10 w-full sm:w-auto">
              <Link href="/services">{isAr ? "عرض جميع الخدمات" : "View All Services"}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">{isAr ? `الخدمات المتاحة في ${locationName}` : "What to expect from your visit"}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <GlassCard className="p-6">
            <Clock className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">{isAr ? "موعد وصول مؤكد" : "Confirmed Arrival Window"}</h3>
            <p className="text-white/70">{isAr ? "نؤكد الموعد بعد مراجعة التغطية وتوفر الفني." : `We confirm the available appointment window for ${location.name} after reviewing your request and location.`}</p>
          </GlassCard>
          <GlassCard className="p-6">
            <ShieldCheck className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">{isAr ? "خدمة ميدانية آمنة" : "On-Site Privacy"}</h3>
            <p className="text-white/70">{isAr ? `يُجرى العمل في موقعك في ${locationName} متى أمكن تنفيذ الخدمة ميدانيًا.` : `When the service can be completed on site, the device remains at your ${location.name} location during the work.`}</p>
          </GlassCard>
          <GlassCard className="p-6">
            <Star className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">{isAr ? "فنيون ذوو خبرة" : "Experienced Technicians"}</h3>
            <p className="text-white/70">{isAr ? "نفحص العطل ونشرح خيارات الخدمة ونطلب موافقتك قبل بدء العمل المدفوع." : "We diagnose the reported issue first, explain the available service path, and request approval before paid work."}</p>
          </GlassCard>
        </div>
      </section>

      {location.landmarks.length > 0 && (
        <section className="container mx-auto px-6 mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold">{isAr ? "مناطق ومعالم قريبة" : "Nearby Areas and Landmarks"}</h2>
          <p className="mx-auto max-w-3xl leading-8 text-white/70">
            {isAr ? `نغطي المناطق القريبة من ${locationName}، ويتم تأكيد العنوان والتوفر عند الحجز.` : `Coverage requests in ${location.name} can include nearby areas. We confirm the exact address and availability during booking.`}
          </p>
        </section>
      )}

      <section className="container mx-auto px-6">
        <h2 className="mb-7 text-center text-2xl font-bold">{isAr ? "مناطق خدمة أخرى" : "Other Service Areas"}</h2>
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {nearbyLocations.map((item) => (
            <Link key={item.slug} href={`/locations/${item.slug}`} className="rounded-full border border-white/15 px-5 py-2.5 text-white/70 hover:border-cyan-400 hover:text-cyan-400">
              {isAr ? item.nameAr : item.name}
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-white/45" dir="ltr">{location.name}, {emirateEn}, UAE</p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
    </main>
  )
}
