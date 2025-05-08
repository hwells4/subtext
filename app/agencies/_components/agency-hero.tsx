"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Zap } from "lucide-react"
import React from "react"

interface AgencyHeroProps {
  scrollToPricing?: () => void
  className?: string
}

export default function AgencyHero({
  scrollToPricing,
  className
}: AgencyHeroProps) {
  return (
    <section
      className={cn(
        "from-background via-muted/30 to-background relative w-full overflow-hidden bg-gradient-to-br py-24 md:py-32 lg:py-48",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="animate-spin-slow absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('/placeholder.svg?width=2000&height=2000&query=ultra_subtle_geometric_network_plexus_monochromatic_slate_dots_lines_seamless_pattern')",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          backgroundSize: "1000px 1000px"
        }}
      />
      <div
        aria-hidden="true"
        className="from-background via-background/80 absolute inset-x-0 -bottom-1/4 z-[1] h-1/2 bg-gradient-to-t to-transparent"
      />

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center md:px-6">
        <div className="border-primary/30 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold">
          <Zap className="size-4" />
          <span>AI-Powered Agency Amplification</span>
        </div>

        <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Scale Authentic Client Research.
          <br />
          <span className="from-primary bg-gradient-to-r to-sky-400 bg-clip-text text-transparent">
            Deliver Stellar Results.
          </span>{" "}
          Effortlessly.
        </h1>

        <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-lg md:text-xl">
          VoiceScape AI empowers your agency to deliver deeper audience insights
          and higher-performing copy for every client, without burning out your
          team.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/30 group w-full text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 sm:w-auto"
            onClick={scrollToPricing}
          >
            Supercharge Your Agency
            <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-muted/50 hover:shadow-muted-foreground/20 group w-full border-2 text-lg font-semibold shadow-sm transition-all duration-300 ease-in-out hover:scale-105 sm:w-auto"
          >
            Learn More
            <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        <p className="text-muted-foreground mt-8 text-xs">
          Unlock unparalleled efficiency and client success.
        </p>
      </div>
    </section>
  )
}
