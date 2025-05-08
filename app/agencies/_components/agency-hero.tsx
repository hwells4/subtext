"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Zap } from "lucide-react"
import React from "react"
import { motion } from "framer-motion"

interface AgencyHeroProps {
  scrollToPricing?: () => void
  className?: string
}

export default function AgencyHero({
  scrollToPricing,
  className
}: AgencyHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 py-24 md:py-32 lg:py-40",
        className
      )}
    >
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "url('/placeholder.svg?width=2000&height=2000&query=ultra_subtle_geometric_grid_dots_white_seamless_pattern')",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          backgroundSize: "500px 500px"
        }}
      />
      {/* Bottom Fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-t from-slate-950 to-transparent"
      />

      <motion.div
        className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-x-12 gap-y-16 px-4 md:grid-cols-12 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content Column */}
        <motion.div
          className="col-span-1 flex flex-col items-center text-center md:col-span-7 md:items-start md:text-left"
          variants={itemVariants}
        >
          <div className="border-primary/40 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold">
            <Zap className="size-4" />
            <span>AI-Powered Agency Amplification</span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Scale Authentic Client Research.
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Deliver Stellar Results.
            </span>
            Effortlessly.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:mx-0 md:text-xl">
            VoiceScape AI empowers your agency to deliver deeper audience
            insights and higher-performing copy for every client, without
            burning out your team.
          </p>

          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row md:w-auto">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group w-full whitespace-nowrap px-8 py-7 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sky-400/30 sm:w-auto"
              onClick={scrollToPricing}
            >
              Supercharge Your Agency
              <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group w-full whitespace-nowrap border-slate-700 bg-slate-800/30 px-8 py-7 text-lg font-semibold text-slate-200 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:border-slate-600 hover:bg-slate-700/50 sm:w-auto"
            >
              Learn More
              <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          <p className="mt-8 text-xs text-slate-400">
            Unlock unparalleled efficiency and client success.
          </p>
        </motion.div>

        {/* Glass Panel Mockup Column */}
        <motion.div
          className="col-span-1 md:col-span-5"
          variants={itemVariants}
        >
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            {/* Background Glass Panel (Panel 1) - uses panel.svg */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 z-0 rounded-[32px] opacity-50 blur-lg md:-inset-4"
              style={{
                backgroundImage: "url('/panel.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />

            {/* Main Glass Panel for Mockup (Panel 2) - displays panel.svg as content */}
            <div className="relative z-10 aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-2 shadow-2xl shadow-sky-500/20 backdrop-blur-xl md:rounded-[32px] md:p-3">
              <div className="size-full overflow-hidden rounded-2xl bg-slate-800/30 md:rounded-3xl">
                <img
                  src="/panel.svg"
                  alt="Agency Tool Mockup showing panel design"
                  className="size-full object-contain"
                />
              </div>
            </div>

            {/* Subtle glow elements for more "glass" feel */}
            <div
              aria-hidden="true"
              className="absolute -top-1/4 left-1/4 z-[5] size-1/2 rounded-full bg-sky-400/10 opacity-50 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-1/4 right-1/4 z-[5] size-1/2 rounded-full bg-cyan-400/10 opacity-50 blur-3xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
