'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Countries from '@/components/Countries'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Countries />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
