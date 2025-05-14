"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  Check,
  Search,
  MessageSquareText,
  BarChart3,
  FileText
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface StepItem {
  step: number
  title: string
  description: string
  insight: string
  insightText: string
  icon: React.ReactNode
  iconColor: string
  accentColor: string
  accentGradient: string
}

const steps: StepItem[] = [
  {
    step: 1,
    title: "You Ask, We Analyze",
    description:
      "Input your keyword, question, or define your target audience. Subtext instantly dives into Reddit – where millions of people talk openly. We analyze thousands of raw, unprompted discussions relevant to your specific query.",
    insight: "Real Words, Not Guesswork:",
    insightText:
      "Every insight comes from what people actually said, verifiable and authentic. No AI making things up.",
    icon: <Search className="size-full" />,
    iconColor: "text-blue-500",
    accentColor: "bg-blue-500",
    accentGradient: "from-blue-50 to-transparent"
  },
  {
    step: 2,
    title: "Extracting Verifiable Insights",
    description:
      "From these relevant discussions, Subtext accurately finds the real words, slang, common phrases, emotional triggers, and recurring themes. We pinpoint what they actually say and mean.",
    insight: "Verifiably Sourced:",
    insightText:
      "Every key quote, pain point, and messaging angle is traceable to its origin, ensuring genuine evidence-backed audience intelligence.",
    icon: <MessageSquareText className="size-full" />,
    iconColor: "text-emerald-500",
    accentColor: "bg-emerald-500",
    accentGradient: "from-emerald-50 to-transparent"
  },
  {
    step: 3,
    title: "Consolidating Actionable Intelligence",
    description:
      "Our AI intelligently groups these extracted insights into clear patterns. Discover how distinct audience segments describe problems in their unique vernacular and identify real pain points voiced in actual user discussions.",
    insight: "Evidence-Based Clarity:",
    insightText:
      "Go beyond generic personas. Get insights backed by real-world community analysis, tailored to your research, not AI guesswork.",
    icon: <BarChart3 className="size-full" />,
    iconColor: "text-amber-500",
    accentColor: "bg-amber-500",
    accentGradient: "from-amber-50 to-transparent"
  },
  {
    step: 4,
    title: "Your Audience's Voice, Ready to Use",
    description:
      "Finally, Subtext transforms this complex analysis into clear, organized Insights, key pain points, resonant messaging angles, trends and core audience questions your market is asking. Get actionable intelligence, ready to use.",
    insight: "Risk-Free Validation:",
    insightText:
      "Build campaigns on a foundation of verifiable truth, knowing your messages are grounded in what your audience already says and feels.",
    icon: <FileText className="size-full" />,
    iconColor: "text-purple-500",
    accentColor: "bg-purple-500",
    accentGradient: "from-purple-50 to-transparent"
  }
]

const VoiceToConversionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Simplified variants with reduced durations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Reduced from 0.2
        when: "beforeChildren"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, // Reduced from 40
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" } // Reduced from 0.7
    }
  }

  // Pre-compiled style objects for better performance
  const backgroundGradient = {
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)",
    backdropFilter: "blur(10px)"
  }

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 md:py-32">
      {/* Simplified decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="bg-gradient-radial absolute -right-[35%] top-[10%] size-[600px] rounded-full from-slate-50 to-transparent opacity-70 blur-2xl" />
        <div className="bg-gradient-radial absolute -left-[25%] top-[60%] size-[600px] rounded-full from-slate-50 to-transparent opacity-70 blur-2xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1220px] px-6 md:px-10">
        <motion.div
          ref={ref}
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            className="mb-16 text-center md:mb-20"
            variants={itemVariants}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
              THE PROCESS
            </h3>
            <h2 className="mb-4 mt-2 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Deep Audience Intelligence,{" "}
              <span className="italic">On Demand</span>
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              Subtext gives you a direct line to what your audience is actually
              saying. Input your query, and we analyze millions of real,
              unprompted discussions to find how people describe their problems,
              what they desire, and the{" "}
              <span className="font-semibold italic">exact language</span> they
              use.
            </p>
          </motion.div>

          {/* Process Steps - With performance optimizations */}
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="group flex h-full will-change-transform"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div
                  className="relative flex size-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                  style={backgroundGradient}
                >
                  {/* Simplified gradient accent in corner */}
                  <div
                    className={`bg-gradient-radial absolute -right-20 -top-20 size-48 rounded-full ${step.accentGradient} opacity-50`}
                  />

                  {/* Content Section */}
                  <div className="relative z-10 flex h-full flex-col p-6 md:p-8">
                    <div className="mb-4 flex items-center justify-between">
                      {/* Icon wrapper with number label - simplified animation */}
                      <div className="relative">
                        <div className={`size-12 ${step.iconColor}`}>
                          {step.icon}
                        </div>
                        <div className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-white shadow-sm">
                          {step.step}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>

                    <div className="my-4 h-px w-full bg-gradient-to-r from-slate-200 to-transparent" />

                    <p className="grow text-base leading-relaxed text-slate-600">
                      {step.description}
                    </p>

                    {/* Key Insight - inline with icon */}
                    <p className="mt-4 text-sm text-slate-700">
                      <span className="inline-flex items-center">
                        <span
                          className={`mr-2 inline-block size-2 rounded-full ${step.accentColor}`}
                        ></span>
                        <span className="font-semibold">{step.insight}</span>
                      </span>{" "}
                      {step.insightText}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA - Simplified */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Link
              href="/waitlist"
              className="group inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-center text-base font-semibold text-white shadow-md transition-all hover:bg-slate-800"
            >
              <span>Get Early Access Now</span>
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-sm text-slate-500 sm:text-base">
              Join the waitlist and be among the first to access these powerful
              insights.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Simple bottom gradient */}
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

export default VoiceToConversionSection
