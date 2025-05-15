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
  <div className="flex h-[400px] w-full items-center justify-center bg-transparent">
    <div className="size-12 animate-spin rounded-full border-2 border-slate-900/20 border-t-slate-900"></div>
  </div>
)

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)
  const backgroundColor = "#f8f5f6" // Lighter off-white color

  useEffect(() => {
    // Mark that we're client-side
    setIsClient(true)

    // Set a CSS custom property for the background color
    document.documentElement.style.setProperty(
      "--page-background-color",
      backgroundColor
    )

    // Add CSS to override backgrounds in components
    const style = document.createElement("style")
    style.innerHTML = `
      /* More selective approach - apply transparent background only to containers */
      .marketing-page-container section,
      .marketing-page-container div[class*="container"],
      .marketing-page-container div[class*="wrapper"],
      .marketing-page-container div[class*="section"],
      .marketing-page-container div[class*="box"],
      .marketing-page-container div[class*="card"] {
        background-color: transparent !important;
      }
      
      /* Explicitly set background-color for the page */
      .marketing-page-container .override-container {
        background-color: var(--page-background-color) !important;
      }
      
      /* Fix for regular buttons - BUT NOT NAVBAR BUTTONS */
      .marketing-page-container button:not([data-navbar-button="true"]),
      .marketing-page-container a[role="button"]:not([data-navbar-button="true"]),
      .marketing-page-container input,
      .marketing-page-container select,
      .marketing-page-container [class*="btn"]:not([data-navbar-button="true"]),
      .marketing-page-container [class*="button"]:not([data-navbar-button="true"]) {
        background-color: initial !important;
      }
      
      /* Make navbar waitlist buttons BLACK */
      header button[data-waitlist-button="true"],
      nav button[data-waitlist-button="true"] {
        background-color: black !important;
        color: white !important;
        opacity: 1 !important;
      }
    `
    document.head.appendChild(style)

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
      // Clean up the style element when component unmounts
      document.head.removeChild(style)
    }
  }, [backgroundColor])

  return (
    <main
      className="marketing-page-container flex min-h-screen flex-col items-center justify-start"
      style={{ backgroundColor }}
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

        <Suspense fallback={<div className="h-[200px] bg-transparent"></div>}>
          <FooterExample />
        </Suspense>
      </div>
    </main>
  )
}
