"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface AgencyHeroProps {
  scrollToPricing?: () => void
}

export default function AgencyHero({ scrollToPricing }: AgencyHeroProps) {
  return (
    <section className="from-background to-muted/50 relative w-full overflow-hidden bg-gradient-to-br py-20 md:py-32 lg:py-40">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url('/placeholder.svg?width=1400&height=700&query=abstract_layered_soundwaves_intelligence_minimalist_teal_and_slate_background_texture')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      />

      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <h1 className="text-foreground text-4xl font-semibold leading-tight sm:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
          Scale Authentic Client Research.
          <br className="hidden md:block" /> Deliver Stellar Results.
          Effortlessly.
        </h1>

        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg md:text-xl">
          VoiceScape AI empowers your agency to deliver deeper audience insights
          and higher-performing copy for every client, without burning out your
          team.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground w-full shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 sm:w-auto"
            onClick={scrollToPricing}
          >
            Supercharge Your Agency Today
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
