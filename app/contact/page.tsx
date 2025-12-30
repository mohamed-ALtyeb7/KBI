import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | KBI Repair Services",
  description: "Get in touch with KBI for on-site repair bookings and inquiries.",
}

export const dynamic = "force-static"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 pb-16 lg:pb-0">
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  )
}
