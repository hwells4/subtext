"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

interface UseCaseItem {
  headline: string
  subheadline: string
  benefits: string[]
  cta: string
  iconColor: string
  accentGradient: string
  svgIcon: string
}

const useCases: UseCaseItem[] = [
  {
    headline: "Agency Power-Up",
    subheadline: "Fast, Verifiable Research for Every Client.",
    benefits: [
      "Instantly **research diverse client audiences** & deliver better results",
      "Deliver strategies backed by **verifiable audience language** and insights with receipts..",
      "Justify recommendations confidently & position your agency as **a true strategic partner.**"
    ],
    cta: "Deliver Better Results, Faster",
    iconColor: "text-blue-500",
    accentGradient: "from-blue-50 to-transparent",
    svgIcon: "/rocket.svg"
  },
  {
    headline: "AI Writing Supercharger",
    subheadline: "AI Copy That Actually Connects",
    benefits: [
      "**Ditch generic AI outputs.** Transform bland drafts into copy that converts.",
      "**Fuel AI with real human insights.** Infuse prompts with your audience's actual words, pain points, & motivations.",
      "Craft AI-assisted copy that **sounds authentically human and deeply resonates.**"
    ],
    cta: "Supercharge Your AI Copy",
    iconColor: "text-emerald-500",
    accentGradient: "from-emerald-50 to-transparent",
    svgIcon: "/shield.svg"
  },
  {
    headline: "Founder & Builder Toolkit",
    subheadline: "Validate Ideas, Craft Resonant Messaging",
    benefits: [
      "Stop wasting precious time; validate your ideas and messaging **in minutes**.",
      "Craft initial marketing messages using your audience's authentic language.",
      "**Increase CTR & conversions** by aligning with what users actually want."
    ],
    cta: "Build & Launch with Confidence",
    iconColor: "text-purple-500",
    accentGradient: "from-purple-50 to-transparent",
    svgIcon: "/gear.svg"
  }
]

export default function UseCasesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="bg-gradient-radial absolute -right-[30%] top-[5%] size-[500px] rounded-full from-slate-50 to-transparent opacity-70 blur-3xl" />
        <div className="bg-gradient-radial absolute -left-[20%] top-[60%] size-[600px] rounded-full from-slate-50 to-transparent opacity-70 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1220px] px-6 md:px-10">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div className="mb-20 text-center" variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
              TAILORED SOLUTIONS
            </h3>
            <h2 className="mb-4 mt-2 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              See How Subtext Works For <span className="italic">You</span>
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              Whether you're handling more client work, writing content, or
              improving campaigns, Subtext gives you the real audience language
              you need to get better results.
            </p>
          </motion.div>

          {/* Use Cases */}
          <div className="relative grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.headline}
                variants={itemVariants}
                className={
                  `group relative size-full` +
                  (index === 2 ? " md:col-span-2 lg:col-span-1" : "")
                }
              >
                {/* Glass card with subtle border */}
                <div
                  className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  {/* Subtle gradient accent in corner */}
                  <div
                    className={`bg-gradient-radial absolute -right-20 -top-20 size-48 rounded-full ${useCase.accentGradient} opacity-60`}
                  />

                  {/* Content Section */}
                  <div className="relative z-10 p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="size-12">
                        <div className="relative size-full">
                          <Image
                            src={useCase.svgIcon}
                            alt={useCase.headline}
                            width={48}
                            height={48}
                            className={`size-12 transition-transform duration-300 group-hover:scale-110`}
                          />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {useCase.headline}
                    </h3>
                    <p className="mt-1 text-base font-semibold text-slate-700">
                      {useCase.subheadline}
                    </p>

                    <div className="mt-2 h-px w-16 bg-gradient-to-r from-slate-300 to-transparent" />

                    {/* Benefits List */}
                    <div className="mt-6 space-y-4">
                      {useCase.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 size-5 shrink-0 text-slate-500" />
                          <span
                            className="text-slate-700"
                            dangerouslySetInnerHTML={{
                              __html: benefit.replace(
                                /\*\*(.*?)\*\*/g,
                                '<span class="font-semibold">$1</span>'
                              )
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA Section - Full width black background on hover */}
                  <div className="relative mt-auto">
                    {/* Dividing line */}
                    <div className="h-px w-full bg-slate-100" />

                    {/* Black overlay that appears on hover */}
                    <div className="absolute inset-0 z-0 bg-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* CTA Button Area */}
                    <Link href="/waitlist" className="relative z-10 block py-4">
                      <div className="group/button flex items-center justify-center transition-all duration-300">
                        <span className="font-semibold text-slate-800 transition-colors duration-300 group-hover:text-white">
                          {useCase.cta}
                        </span>
                        <ArrowRight className="ml-2 size-4 text-slate-800 transition-all duration-300 group-hover/button:translate-x-2 group-hover:translate-x-1 group-hover:text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
