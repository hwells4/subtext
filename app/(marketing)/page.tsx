"use client"

import AiMarketAnalystHero from "@/components/hero-demo/ai-market-analyst-hero"
import KeyFeaturesSection from "@/components/hero-demo/key-features-section"
import { HeroHeader } from "@/components/layout/hero-header"
import CompanyLogosSection from "@/components/hero-demo/company-logos-section"
import AppScreenshotSection from "@/components/hero-demo/app-screenshot-section"
import React from "react"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white">
      <HeroHeader />
      <div className="pt-24 md:pt-32">
        <AiMarketAnalystHero />
        <AppScreenshotSection />
        <KeyFeaturesSection />
        <CompanyLogosSection />
      </div>
    </main>
  )
}
