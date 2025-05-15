"use client"

import React, { useState, useEffect, Suspense } from "react"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/navigation"
import { motion } from "framer-motion"

// Simple loading components with reduced animation complexity
const SectionLoader = () => (
  <div className="flex h-[400px] w-full items-center justify-center bg-transparent">
    <div className="size-8 animate-spin rounded-full border-2 border-slate-900/10 border-t-slate-900"></div>
  </div>
)

// Dynamically import components with explicit loading state
const HeroSection = dynamic(() => import("@/components/landing/hero-section"), {
  loading: () => <SectionLoader />,
  ssr: true
})

// Other sections with optimized dynamic imports
const UserInsightsSection = dynamic(
  () => import("@/components/landing/user-insights-section"),
  { loading: () => <SectionLoader />, ssr: false }
)

const VoiceToConversionSection = dynamic(
  () => import("@/components/landing/voice-to-conversion-section"),
  { loading: () => <SectionLoader />, ssr: false }
)

const BenefitsSection = dynamic(() => import("@/components/benefits-section"), {
  loading: () => <SectionLoader />,
  ssr: false
})

const UseCasesSection = dynamic(
  () => import("@/components/landing/use-cases-section"),
  { loading: () => <SectionLoader />, ssr: false }
)

const ModernSplitFaqSection = dynamic(
  () =>
    import("@/components/marketing/faq-section").then(mod => ({
      default: mod.ModernSplitFaqSection
    })),
  { loading: () => <SectionLoader />, ssr: false }
)

const CtaSection = dynamic(() => import("@/components/landing/cta-section"), {
  loading: () => <SectionLoader />,
  ssr: false
})

const FooterExample = dynamic(() => import("@/components/marketing/footer"), {
  loading: () => <div className="h-[100px] bg-transparent"></div>,
  ssr: true
})

// Optimized gear animation component
const GearAnimation = ({ isVisible }: { isVisible: boolean }) => {
  if (!isVisible) return null

  return (
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
  )
}

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)
  const [visibleSections, setVisibleSections] = useState<string[]>([])
  const backgroundColor = "#f8f5f6" // Lighter off-white color

  useEffect(() => {
    // Mark that we're client-side
    setIsClient(true)

    // Set a CSS custom property for the background color
    document.documentElement.style.setProperty(
      "--page-background-color",
      backgroundColor
    )

    // Add CSS to override backgrounds in components - using a more optimized approach
    const style = document.createElement("style")
    style.innerHTML = `
      .marketing-page-container section,
      .marketing-page-container div[class*="container"],
      .marketing-page-container div[class*="wrapper"],
      .marketing-page-container div[class*="section"],
      .marketing-page-container div[class*="box"],
      .marketing-page-container div[class*="card"] {
        background-color: transparent !important;
      }
      
      .marketing-page-container .override-container {
        background-color: var(--page-background-color) !important;
      }
      
      .marketing-page-container button:not([data-navbar-button="true"]),
      .marketing-page-container a[role="button"]:not([data-navbar-button="true"]),
      .marketing-page-container input,
      .marketing-page-container select,
      .marketing-page-container [class*="btn"]:not([data-navbar-button="true"]),
      .marketing-page-container [class*="button"]:not([data-navbar-button="true"]) {
        background-color: initial !important;
      }
      
      header button[data-waitlist-button="true"],
      nav button[data-waitlist-button="true"] {
        background-color: black !important;
        color: white !important;
        opacity: 1 !important;
      }
    `
    document.head.appendChild(style)

    // Optimized asset prefetching
    const prefetchCriticalAssets = () => {
      if ("requestIdleCallback" in window) {
        // Use requestIdleCallback for non-critical assets
        window.requestIdleCallback(() => {
          const links = [
            { href: "/panel.svg", type: "image/svg+xml" },
            { href: "/lightning-icon.png", type: "image/png" }
          ]

          links.forEach(({ href }) => {
            const img = new window.Image()
            img.src = href
          })
        })
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(() => {
          const links = [
            { href: "/panel.svg", type: "image/svg+xml" },
            { href: "/lightning-icon.png", type: "image/png" }
          ]

          links.forEach(({ href }) => {
            const img = new window.Image()
            img.src = href
          })
        }, 200)
      }
    }

    // More efficient intersection observer implementation
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Get the section id from data attribute
            const sectionId = entry.target.getAttribute("data-section-id")
            if (sectionId && !visibleSections.includes(sectionId)) {
              setVisibleSections(prev => [...prev, sectionId])
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "100px" }
    )

    document.querySelectorAll("[data-section-id]").forEach(el => {
      observer.observe(el)
    })

    // Execute prefetch for critical assets
    prefetchCriticalAssets()

    return () => {
      if (observer) {
        observer.disconnect()
      }
      // Clean up the style element when component unmounts
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [backgroundColor, visibleSections])

  return (
    <main
      className="marketing-page-container flex min-h-screen flex-col items-center justify-start"
      style={{ backgroundColor }}
    >
      <Navbar />
      <div className="w-full pt-16 md:pt-24">
        {/* Hero Section - Loaded immediately with high priority */}
        <div data-section-id="hero">
          <HeroSection />
        </div>

        {/* SVG Decoration - only render on client and when visible */}
        <div className="relative w-full">
          <GearAnimation isVisible={isClient} />
        </div>

        {/* Progressive loading of remaining sections */}
        <div data-section-id="user-insights">
          {(visibleSections.includes("user-insights") ||
            visibleSections.includes("hero")) && <UserInsightsSection />}
        </div>

        <div data-section-id="voice-conversion">
          {visibleSections.includes("voice-conversion") && (
            <VoiceToConversionSection />
          )}
        </div>

        <div data-section-id="benefits">
          {visibleSections.includes("benefits") && <BenefitsSection />}
        </div>

        <div data-section-id="use-cases">
          {visibleSections.includes("use-cases") && <UseCasesSection />}
        </div>

        <div data-section-id="faq">
          {visibleSections.includes("faq") && <ModernSplitFaqSection />}
        </div>

        <div data-section-id="cta">
          {visibleSections.includes("cta") && <CtaSection />}
        </div>

        <FooterExample />
      </div>
    </main>
  )
}
