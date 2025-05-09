"use client"

import { HeroSection } from "@/components/ui/hero-section"
import KeyFeaturesSection from "@/components/hero-demo/key-features-section"
import { Navbar } from "@/components/navigation"
// import CompanyLogosSection from "@/components/hero-demo/company-logos-section" <ai_context>This line is being commented out as per user request to hide the company logos section.</ai_context>
import AppScreenshotSection from "@/components/hero-demo/app-screenshot-section"
import UserInsightsSection from "@/components/hero-demo/user-insights-section"
import CtaSection from "@/components/hero-demo/cta-section"
// import { ResultsShowcase } from "@/app/landing/_components/results-showcase" <ai_context>This line is being commented out as per user request to hide the results showcase section.</ai_context>
// import { TestimonialsCarousel } from "@/app/landing/_components/testimonials-carousel" <ai_context>This line is being commented out as per user request to hide the testimonials carousel section.</ai_context>
import VisualDemonstration from "@/components/hero-demo/visual-demonstration"
import UseCasesSection from "@/components/hero-demo/use-cases-section"
import DifferentiationSection from "@/components/hero-demo/differentiation-section"
import {
  FaqSection,
  ModernSplitFaqSection
} from "@/components/marketing/faq-section"
import FooterExample from "@/components/marketing/footer"
import React from "react"
import { HeroScrollDemo } from "@/components/hero-demo/hero-scroll-demo"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white">
      <Navbar />
      <div className="w-full pt-24 md:pt-32">
        {/* Hero Section */}
        <HeroSection />

        {/* SVG Decoration Section - connecting the Hero and the Scroll Demo */}
        <div className="relative w-full">
          {/* Spinning Gear SVG */}
          <div className="pointer-events-none absolute -right-20 bottom-0 z-0 w-40 translate-y-1/4 opacity-[0.04] sm:-right-10 sm:w-48 sm:opacity-[0.05] md:right-10 md:w-56 lg:right-20 lg:w-64 lg:opacity-[0.06]">
            <motion.div
              className="size-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/gear.svg)" }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear"
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Scrolling Animation Section */}
        <HeroScrollDemo />

        {/* User Insights Section - With Pain Points and Solution */}
        <UserInsightsSection />

        {/* Key Features Section */}
        <KeyFeaturesSection />

        {/* Differentiation Section */}
        <DifferentiationSection />

        {/* Use Cases Section - Role Specific */}
        <UseCasesSection />

        {/* FAQ Section */}
        <ModernSplitFaqSection />

        {/* Call to Action Section */}
        <CtaSection />

        {/* Footer */}
        <FooterExample />
      </div>
    </main>
  )
}
