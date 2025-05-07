"use client"

import AiMarketAnalystHero from "@/components/hero-demo/ai-market-analyst-hero"
import KeyFeaturesSection from "@/components/hero-demo/key-features-section"
import { Navbar } from "@/components/navigation"
import CompanyLogosSection from "@/components/hero-demo/company-logos-section"
import AppScreenshotSection from "@/components/hero-demo/app-screenshot-section"
import UserInsightsSection from "@/components/hero-demo/user-insights-section"
import HowItWorksSection from "@/components/hero-demo/how-it-works-section"
import CtaSection from "@/components/hero-demo/cta-section"
import { ResultsShowcase } from "@/app/landing/_components/results-showcase"
import { TestimonialsCarousel } from "@/app/landing/_components/testimonials-carousel"
import { LottieHowItWorks } from "@/app/landing/_components/lottie-how-it-works"
import React from "react"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <AiMarketAnalystHero />
        <AppScreenshotSection />
        <UserInsightsSection />
        <ResultsShowcase />
        <HowItWorksSection />
        <LottieHowItWorks />
        <KeyFeaturesSection />
        <TestimonialsCarousel />
        <CompanyLogosSection />
        <CtaSection />
      </div>
    </main>
  )
}
