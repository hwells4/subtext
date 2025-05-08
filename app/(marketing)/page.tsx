"use client"

import AiMarketAnalystHero from "@/components/hero-demo/ai-market-analyst-hero"
import KeyFeaturesSection from "@/components/hero-demo/key-features-section"
import { Navbar } from "@/components/navigation"
// import CompanyLogosSection from "@/components/hero-demo/company-logos-section" <ai_context>This line is being commented out as per user request to hide the company logos section.</ai_context>
import AppScreenshotSection from "@/components/hero-demo/app-screenshot-section"
import UserInsightsSection from "@/components/hero-demo/user-insights-section"
import HowItWorksSection from "@/components/hero-demo/how-it-works-section"
import CtaSection from "@/components/hero-demo/cta-section"
// import { ResultsShowcase } from "@/app/landing/_components/results-showcase" <ai_context>This line is being commented out as per user request to hide the results showcase section.</ai_context>
// import { TestimonialsCarousel } from "@/app/landing/_components/testimonials-carousel" <ai_context>This line is being commented out as per user request to hide the testimonials carousel section.</ai_context>
import VisualDemonstration from "@/components/hero-demo/visual-demonstration"
import UseCasesSection from "@/components/hero-demo/use-cases-section"
import DifferentiationSection from "@/components/hero-demo/differentiation-section"
import React from "react"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white">
      <Navbar />
      <div className="w-full pt-24 md:pt-32">
        {/* Hero Section */}
        <AiMarketAnalystHero />

        {/* Pain Point Recognition Section */}
        <UserInsightsSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Visual Demonstration */}
        <VisualDemonstration />

        {/* Key Features Section */}
        <KeyFeaturesSection />

        {/* Use Cases Section */}
        <UseCasesSection />

        {/* Differentiation Section */}
        <DifferentiationSection />

        {/* ROI Demonstration */}
        {/* <ResultsShowcase /> */}

        {/* Social Proof Section */}
        {/* <TestimonialsCarousel /> */}

        {/* Company Logos */}
        {/* <CompanyLogosSection /> */}

        {/* Call to Action Section */}
        <CtaSection />
      </div>
    </main>
  )
}
