"use client"

import AiMarketAnalystHero from "@/components/hero-demo/ai-market-analyst-hero"
import SocialProofLogosSection from "@/components/hero-demo/social-proof-logos-section"
import KeyFeaturesSection from "@/components/hero-demo/key-features-section"
import React from "react"

export default function HeroDemoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white">
      <AiMarketAnalystHero />
      <SocialProofLogosSection />
      <KeyFeaturesSection />
      {/* You can continue adding more sections here following the PRD */}
    </main>
  )
}
