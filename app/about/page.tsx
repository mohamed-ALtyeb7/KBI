import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | KBI Repair Services",
  description: "Learn about KBI, our vision, values, and why clients choose us.",
}

export const dynamic = "force-static"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 pb-16 lg:pb-0">
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  )
}
