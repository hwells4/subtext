"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ChevronRight, Calendar } from "lucide-react"
import Image from "next/image"
import { AvatarsDemo } from "@/components/ui/avatars-demo"

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Simplified variants with reduced animation duration for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2
        when: "beforeChildren"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced y offset
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" } // Reduced from 0.7
    }
  }

  return (
    <section className="relative overflow-hidden bg-white pb-10 pt-24 md:pb-24 md:pt-32">
      <div className="container relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div
          ref={ref}
          className="grid w-full grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Text Content */}
          <motion.div
            className="mx-auto flex max-w-[600px] flex-col items-start gap-3 md:col-span-7 md:mx-0 md:gap-6 md:text-left"
            variants={itemVariants}
          >
            {/* Social Proof - AvatarsDemo */}
            <div className="mb-0 flex justify-start md:mb-2">
              <AvatarsDemo />
            </div>

            <h1 className="mt-1 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:mt-0 md:text-5xl lg:text-7xl">
              Instant Audience Research.
              <br />
              Craft Messaging
              <br />
              That Connects.
              <span className="[-top_0.08em] relative ml-2 inline-block size-6 rotate-[3deg] align-middle sm:ml-3 sm:size-10 md:size-12 lg:ml-4 lg:size-14">
                <Image
                  src="/lightning-icon.png"
                  alt="Lightning Bolt"
                  fill
                  className="object-contain transition-transform duration-200 ease-in-out hover:scale-110"
                  priority
                />
              </span>
            </h1>

            <p className="text-sm leading-relaxed text-slate-600 md:text-base lg:text-lg">
              Subtext searches thousands of Reddit posts to show you exactly how
              customers describe their problems in their own words. Discover
              what frustrates them, what excites them, and what solutions
              they're desperately seeking - all with links to hundreds of real
              conversations as evidence.
            </p>

            <div className="mt-3 flex w-full flex-col space-y-2 sm:flex-row sm:space-x-6 sm:space-y-0 md:mt-4">
              <Link
                href="/waitlist"
                className="group flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-slate-800 md:px-6 md:py-3 md:text-base"
              >
                Join Waitlist & Get Early Access
                <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/waitlist"
                className="group flex items-center justify-center rounded-lg border border-slate-900 bg-transparent px-5 py-2.5 text-center text-sm font-semibold text-slate-900 shadow-md transition-all hover:bg-slate-100 md:px-6 md:py-3 md:text-base"
              >
                <Calendar className="mr-2 size-4 md:size-5" />
                Book Demo
              </Link>
            </div>

            <p className="text-xs text-slate-500 sm:text-sm md:text-base">
              Join the waitlist for early access & help us build the audience
              intelligence tool you've always needed.
            </p>
          </motion.div>

          {/* Glass Panes Mockup */}
          <motion.div
            className="relative mx-auto w-full max-w-[360px] will-change-transform md:col-span-5 md:mx-0"
            variants={itemVariants}
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Background Glass Pane - Simplified */}
            <div
              className="absolute z-0 h-[240px] w-[220px] rounded-[32px] border-[3px] border-white/10 md:h-[380px] md:w-[320px] lg:h-[420px] lg:w-[360px]"
              style={{
                top: "15%",
                right: "10%",
                filter: "blur(1.5px)",
                boxShadow: "0 9px 20px #0000004a, 0 37px 37px #00000042" // Simplified shadow
              }}
            >
              <div
                className="relative size-full rounded-[28px] bg-cover bg-center"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)"
                }}
              />
            </div>

            {/* Main Glass Pane - Simplified */}
            <div
              className="relative z-10 h-[300px] w-[240px] overflow-hidden rounded-[32px] border-[3px] border-white/20 bg-white/25 backdrop-blur-sm sm:w-[280px] md:h-[460px] md:w-full"
              style={{
                boxShadow: "0 9px 20px #0000004a, 0 37px 37px #00000042" // Simplified shadow
              }}
            >
              <div className="flex h-full items-center justify-center p-2 md:p-3">
                <div
                  className="relative size-[100%] rounded-2xl"
                  style={{
                    backgroundSize: "100% 100%"
                  }}
                >
                  {/* Primary Image */}
                  <div
                    className="size-full bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(/panel.svg)`
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative bottom gradient - keeping minimal */}
      <div
        className="absolute bottom-0 left-0 z-0 h-px w-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%)"
        }}
      />
    </section>
  )
}

export default HeroSection
