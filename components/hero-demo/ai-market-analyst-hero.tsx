"use client"

import React from "react"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { AvatarsDemo } from "@/components/ui/avatars-demo"

export default function AiMarketAnalystHero() {
  return (
    <div className="relative w-full overflow-x-hidden bg-white px-4 pb-28 pt-16 text-center sm:pb-40 sm:pt-20 md:px-6 md:pb-48 md:pt-24 lg:pb-56 lg:pt-28">
      {/* Subtle Background SVG elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Rocket SVG - Adjusted for better spacing and responsiveness */}
        <div className="absolute bottom-12 right-3 size-28 opacity-[0.04] sm:bottom-16 sm:right-6 sm:size-40 sm:opacity-[0.05] md:bottom-20 md:right-12 md:size-56 md:opacity-[0.06] lg:bottom-24 lg:right-20 lg:size-72 lg:opacity-[0.07]">
          <div
            className="size-full rotate-45 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/rocket.svg)" }}
            aria-hidden="true"
          />
        </div>

        {/* Gear SVG - Adjusted for better spacing, responsiveness, and fixed typo */}
        <div className="absolute left-1 top-28 size-28 opacity-[0.04] sm:left-3 sm:top-32 sm:size-40 sm:opacity-[0.04] md:left-6 md:top-16 md:size-56 md:opacity-[0.05] lg:left-10 lg:top-4 lg:size-56 lg:opacity-[0.07]">
          <motion.div
            className="size-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/gear.svg)" }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 25, // Slower rotation
              ease: "linear"
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <div className="mb-10 flex justify-center sm:mb-12">
          <AvatarsDemo />
        </div>

        <h1 className="mb-10 text-center leading-tight tracking-tight text-slate-900">
          <span className="block text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-7xl">
            Capture real customer
          </span>
          <span className="mt-1 block text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-7xl">
            language 100x faster
            <span className="[-top_0.08em] relative ml-2 inline-block size-8 rotate-[3deg] align-middle sm:ml-3 sm:size-12 md:size-14 lg:ml-4 lg:size-16">
              <Image
                src="/lightning-icon.png"
                alt="Lightning Bolt"
                fill
                className="object-contain transition-transform duration-200 ease-in-out hover:scale-110"
                priority
              />
            </span>
          </span>
        </h1>

        <p className="xs:max-w-xs mx-auto mb-12 max-w-[460px] text-lg font-light leading-relaxed text-slate-600 sm:max-w-md sm:text-xl md:mb-16 md:max-w-2xl md:text-2xl lg:max-w-3xl lg:leading-relaxed">
          Subtext extracts and analyzes authentic language from thousands of
          real conversations at once, so you can turn your audience's actual
          words into high-converting copy in minutes, not days.
        </p>

        <div className="mx-auto flex max-w-[400px] flex-col items-center justify-center gap-6 sm:max-w-none sm:flex-row">
          <a
            href="/waitlist"
            className="w-full rounded-lg bg-slate-900 px-8 py-4 text-center text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-slate-800 sm:w-auto sm:px-10 sm:py-5 sm:text-lg md:px-12 md:py-5 md:text-xl"
          >
            Join Waitlist
          </a>

          <a
            href="/waitlist"
            className="w-full rounded-lg border border-slate-900 bg-transparent px-8 py-4 text-center text-base font-semibold text-slate-900 shadow-md transition-all duration-200 hover:bg-slate-100 sm:w-auto sm:px-10 sm:py-5 sm:text-lg md:px-12 md:py-5 md:text-xl"
          >
            <span className="flex items-center justify-center">
              <Calendar className="mr-3 size-5 sm:size-6 md:size-7" />
              Book a Demo
            </span>
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500 sm:text-base md:text-lg">
          Join the waitlist to be notified when we launch. No credit card
          required for demo.
        </p>
      </div>
    </div>
  )
}
