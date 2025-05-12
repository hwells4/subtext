"use client"

import { HeroSection } from "@/components/landing/hero-section"
import KeyFeaturesSection from "@/components/landing/key-features-section"
import { Navbar } from "@/components/navigation"
// import CompanyLogosSection from "@/components/landing/company-logos-section" <ai_context>This line is being commented out as per user request to hide the company logos section.</ai_context>
import AppScreenshotSection from "@/components/landing/app-screenshot-section"
import UserInsightsSection from "@/components/landing/user-insights-section"
import CtaSection from "@/components/landing/cta-section"
// import { ResultsShowcase } from "@/app/landing/_components/results-showcase" <ai_context>This line is being commented out as per user request to hide the results showcase section.</ai_context>
// import { TestimonialsCarousel } from "@/app/landing/_components/testimonials-carousel" <ai_context>This line is being commented out as per user request to hide the testimonials carousel section.</ai_context>
import VisualDemonstration from "@/components/landing/visual-demonstration"
import UseCasesSection from "@/components/landing/use-cases-section"
import DifferentiationSection from "@/components/landing/differentiation-section"
import {
  FaqSection,
  ModernSplitFaqSection
} from "@/components/marketing/faq-section"
import FooterExample from "@/components/marketing/footer"
import React, { useState, useEffect } from "react"
import { HeroScrollDemo } from "@/components/landing/hero-scroll-demo"
import { motion } from "framer-motion"
import BenefitsSection from "@/components/benefits-section"
import FeaturesHighlights from "@/components/features-highlights"
import VoiceToConversionSection from "@/components/landing/voice-to-conversion-section"

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark that we're client-side
    setIsClient(true)

    // Prefetch critical assets - only prefetch assets that will be used later in the session
    // Not on the current page
    const prefetchAssets = () => {
      // Only prefetch assets NOT used on the current page but needed later
      // The logo is already used in the footer, so we don't need to prefetch it
      const links = [
        { href: "/panel.svg", type: "image/svg+xml", rel: "preload" },
        { href: "/lightning-icon.png", type: "image/png", rel: "preload" }
        // Removed subtext-logo.svg as it's already used in the footer and navbar
      ]

      links.forEach(({ href, type, rel }) => {
        // Check if image is already in the browser cache
        fetch(href, { method: "HEAD", cache: "force-cache" })
          .then(res => {
            if (!res.ok) {
              const link = document.createElement("link")
              link.rel = rel
              link.href = href
              link.as = "image"
              link.type = type
              document.head.appendChild(link)
            }
          })
          .catch(() => {
            // If the request fails, try to preload anyway
            const link = document.createElement("link")
            link.rel = rel
            link.href = href
            link.as = "image"
            link.type = type
            document.head.appendChild(link)
          })
      })
    }

    // Defer non-critical initialization
    if (window.requestIdleCallback) {
      window.requestIdleCallback(prefetchAssets)
    } else {
      setTimeout(prefetchAssets, 1000)
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white">
      <Navbar />
      <div className="w-full pt-16 md:pt-24">
        {/* Hero Section */}
        <HeroSection />

        {/* SVG Decoration Section - connecting the Hero and the Scroll Demo */}
        <div className="relative w-full">
          {/* Spinning Gear SVG */}
          <div className="pointer-events-none absolute -right-20 bottom-0 z-0 w-40 translate-y-1/4 opacity-[0.04] sm:-right-10 sm:w-48 sm:opacity-[0.05] md:right-10 md:w-56 lg:right-20 lg:w-64 lg:opacity-[0.06]">
            {isClient && (
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
            )}
          </div>
        </div>

        {/* Scrolling Animation Section */}
        <div className="hidden md:block">
          <HeroScrollDemo />
        </div>

        {/* User Insights Section - With Pain Points and Solution */}
        <UserInsightsSection />

        {/* Voice to Conversion Section - Shows the 4-step process */}
        <VoiceToConversionSection />

        {/* Benefits Section - Shows tangible advantages */}
        <BenefitsSection />

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
