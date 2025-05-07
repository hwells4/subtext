"use client"

import React from "react"
import { HeroSection } from "@/components/blocks/hero-section-1"
import SocialProofLogosSection from "@/components/hero-demo/social-proof-logos-section"
import KeyFeaturesSection from "@/components/hero-demo/key-features-section"

export default function HeroDemoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <HeroSection />
      <SocialProofLogosSection />
      <KeyFeaturesSection />
      {/* You can continue adding more sections here following the PRD */}
    </main>
  )
}
