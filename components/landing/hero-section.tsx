"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight, Calendar } from "lucide-react"
import Image from "next/image"
import { AvatarsDemo } from "@/components/ui/avatars-demo"

export function HeroSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-8 md:pb-24 md:pt-16">
      <div className="container relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div
          className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text Content */}
          <motion.div
            className="mx-auto flex max-w-[600px] flex-col items-start gap-6 md:col-span-7 md:mx-0 md:text-left"
            variants={itemVariants}
          >
            {/* Social Proof - AvatarsDemo */}
            <div className="mb-2 flex justify-start">
              <AvatarsDemo />
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Instant Audience Research to Help You
              <br />
              Write Better, Faster.
              <span className="[-top_0.08em] relative ml-2 inline-block size-8 rotate-[3deg] align-middle sm:ml-3 sm:size-10 md:size-12 lg:ml-4 lg:size-14">
                <Image
                  src="/lightning-icon.png"
                  alt="Lightning Bolt"
                  fill
                  className="object-contain transition-transform duration-200 ease-in-out hover:scale-110"
                  priority
                />
              </span>
            </h1>

            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              Subtext is your instant audience intelligence tool, mining real
              online conversations (starting with Reddit) for your audience's
              actual voice. Simply ask your research question to get their
              verifiable language, raw pain points, emerging trends, and true
              motivations in minutes. Say goodbye to AI fluff.
            </p>

            <div className="mt-2 flex w-full flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <Link
                href="/waitlist"
                className="group flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-center text-base font-semibold text-white shadow-md transition-all hover:bg-slate-800"
              >
                Join Waitlist & Get Early Access
                <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/waitlist"
                className="group flex items-center justify-center rounded-lg border border-slate-900 bg-transparent px-6 py-3 text-center text-base font-semibold text-slate-900 shadow-md transition-all hover:bg-slate-100"
              >
                <Calendar className="mr-2 size-5" />
                Book Demo
              </Link>
            </div>

            <p className="text-sm text-slate-500 sm:text-base">
              Join the waitlist for early access & help us build the audience
              intelligence tool you've always needed.
            </p>
          </motion.div>

          {/* Glass Panes Mockup */}
          <motion.div
            className="relative mx-auto w-full max-w-[384px] md:col-span-5 md:mx-0"
            variants={itemVariants}
          >
            {/* Background Glass Pane */}
            <div
              className="absolute z-0 h-[280px] w-[260px] rounded-[32px] border-[3px] border-white/10 md:h-[380px] md:w-[320px] lg:h-[420px] lg:w-[360px]"
              style={{
                top: "15%",
                right: "10%",
                filter: "blur(1.5px)",
                boxShadow:
                  "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003"
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

            {/* Main Glass Pane */}
            <div
              className="relative z-10 h-[352px] w-[280px] overflow-hidden rounded-[32px] border-[3px] border-white/20 bg-white/25 backdrop-blur-xl sm:w-[320px] md:h-[460px] md:w-full"
              style={{
                boxShadow:
                  "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003, 0 4px 12px rgba(0,0,0,0.1)"
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

      {/* Decorative bottom gradient */}
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
