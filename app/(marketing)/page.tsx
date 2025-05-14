"use client"

import React, { useState, useEffect, Suspense, lazy } from "react"
import { Navbar } from "@/components/navigation"
import { motion } from "framer-motion"

// Lazy load non-critical components
const HeroSection = lazy(() => import("@/components/landing/hero-section"))
const UserInsightsSection = lazy(
  () => import("@/components/landing/user-insights-section")
)
const VoiceToConversionSection = lazy(
  () => import("@/components/landing/voice-to-conversion-section")
)
const BenefitsSection = lazy(() => import("@/components/benefits-section"))
const UseCasesSection = lazy(
  () => import("@/components/landing/use-cases-section")
)
const ModernSplitFaqSection = lazy(() =>
  import("@/components/marketing/faq-section").then(mod => ({
    default: mod.ModernSplitFaqSection
  }))
)
const CtaSection = lazy(() => import("@/components/landing/cta-section"))
const FooterExample = lazy(() => import("@/components/marketing/footer"))

// Simple loading components
const SectionLoader = () => (
  <div className="flex h-[400px] w-full items-center justify-center">
    <div className="size-12 animate-spin rounded-full border-2 border-slate-900/20 border-t-slate-900"></div>
  </div>
)

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark that we're client-side
    setIsClient(true)

    // Prefetch critical assets
    const prefetchAssets = () => {
      const links = [
        { href: "/panel.svg", type: "image/svg+xml" },
        { href: "/lightning-icon.png", type: "image/png" }
      ]

      links.forEach(({ href }) => {
        // Create a new Image object to preload images
        const img = new window.Image()
        img.src = href
      })
    }

    // Execute prefetch immediately for critical assets
    prefetchAssets()

    // Load initial viewport immediately
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll(".observe-me").forEach(el => {
      observer.observe(el)
    })

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-start"
      style={{ backgroundColor: "#ede6e8" }}
    >
      <Navbar />
      <div className="w-full pt-16 md:pt-24">
        {/* Hero Section - Loaded immediately */}
        <Suspense fallback={<SectionLoader />}>
          <HeroSection />
        </Suspense>

        {/* SVG Decoration Section - optimized spinner */}
        <div className="relative w-full">
          {isClient && (
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
          )}
        </div>

        {/* Remaining sections with Suspense and progressive loading */}
        <div className="observe-me">
          <Suspense fallback={<SectionLoader />}>
            <UserInsightsSection />
          </Suspense>
        </div>

        <div className="observe-me">
          <Suspense fallback={<SectionLoader />}>
            <VoiceToConversionSection />
          </Suspense>
        </div>

        <div className="observe-me">
          <Suspense fallback={<SectionLoader />}>
            <BenefitsSection />
          </Suspense>
        </div>

        <div className="observe-me">
          <Suspense fallback={<SectionLoader />}>
            <UseCasesSection />
          </Suspense>
        </div>

        <div className="observe-me">
          <Suspense fallback={<SectionLoader />}>
            <ModernSplitFaqSection />
          </Suspense>
        </div>

        <div className="observe-me">
          <Suspense fallback={<SectionLoader />}>
            <CtaSection />
          </Suspense>
        </div>

        <Suspense fallback={<div className="h-[200px]"></div>}>
          <FooterExample />
        </Suspense>
      </div>
    </main>
  )
}
