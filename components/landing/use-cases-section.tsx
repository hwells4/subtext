"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  Edit,
  LineChart,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import Link from "next/link"

// Dynamically import DotLottieReact to prevent SSR issues
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then(mod => mod.DotLottieReact),
  { ssr: false }
)

interface UseCaseItem {
  headline: string
  subheadline: string
  icon: React.ElementType
  benefits: string[]
  cta: string
  lottieUrl?: string
  useLottie?: boolean
  bgColorClass: string
  textColorClass: string
  accentColorClass: string
  buttonColorClass: string
}

const useCases: UseCaseItem[] = [
  {
    headline: "Agency Power-Up: Scale Research, Wow Clients",
    subheadline: "Juggling multiple clients and endless research cycles?",
    icon: Building2,
    benefits: [
      "**Slash research time** across all client accounts.",
      "Deliver **data-backed strategies** that get results.",
      "Uncover **unique angles** that make clients shine."
    ],
    cta: "Deliver Better Results, Faster with Subtext",
    useLottie: true,
    lottieUrl: "", // Will be filled in by user
    bgColorClass: "bg-sky-50", // Lighter, more airy blue
    textColorClass: "text-sky-700",
    accentColorClass: "text-sky-500",
    buttonColorClass: "bg-sky-500 hover:bg-sky-600"
  },
  {
    headline: "Copywriter's Edge: Write Words That Truly Convert",
    subheadline: "Staring at a blank page, searching for that perfect angle?",
    icon: Edit,
    benefits: [
      "Craft copy with **authentic audience language**.",
      "Generate **compelling hooks & H1s** effortlessly.",
      "Write with confidence, knowing your message **will resonate**."
    ],
    cta: "Learn to Craft Resonant Copy with Subtext",
    useLottie: true,
    lottieUrl: "", // Will be filled in by user
    bgColorClass: "bg-emerald-50", // Lighter, organic green
    textColorClass: "text-emerald-700",
    accentColorClass: "text-emerald-500",
    buttonColorClass: "bg-emerald-500 hover:bg-emerald-600"
  },
  {
    headline: "Performance Boost: Turn Insights Into ROI",
    subheadline: "Watching ad spend climb but conversions lag?",
    icon: LineChart,
    benefits: [
      "Pinpoint **why campaigns underperform** with real insights.",
      "Optimize ad copy using **verified customer vocabulary**.",
      "**Increase CTR & conversions** by aligning with true needs."
    ],
    cta: "Discover How to Boost Campaign Performance",
    useLottie: true,
    lottieUrl:
      "https://lottie.host/a4af23b2-c9ae-4343-aecf-bc54c2c32330/Pehdj5rvjg.lottie",
    bgColorClass: "bg-purple-50", // Lighter, techy purple
    textColorClass: "text-purple-700",
    accentColorClass: "text-purple-500",
    buttonColorClass: "bg-purple-500 hover:bg-purple-600"
  }
]

export default function UseCasesSection() {
  return (
    <section className="w-full bg-slate-100 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            TAILORED SOLUTIONS
          </h3>
          <h2 className="mb-4 mt-2 text-4xl font-extrabold text-slate-900 md:text-5xl">
            See How Subtext Works For <span className="italic">You</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Whether you're scaling client work, crafting compelling content, or
            optimizing campaigns, Subtext delivers the authentic audience
            language you need to win.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.headline}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
                type: "spring",
                stiffness: 35
              }}
              viewport={{ once: true }}
              className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Top Visual Area with Lottie */}
              <div
                className={`relative h-56 w-full ${useCase.bgColorClass} flex items-center justify-center p-4 md:h-64`}
              >
                {useCase.useLottie && useCase.lottieUrl ? (
                  <LottieAnimation lottieUrl={useCase.lottieUrl} />
                ) : (
                  <div className="flex size-full items-center justify-center">
                    <div className="relative size-32">
                      <div
                        className={`absolute inset-0 animate-pulse rounded-full ${useCase.accentColorClass} opacity-20`}
                      ></div>
                      <useCase.icon
                        className={`absolute inset-0 m-auto size-16 ${useCase.textColorClass}`}
                      />
                      <p className="absolute -bottom-8 text-center text-sm text-slate-500">
                        Lottie placeholder
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="flex grow flex-col p-6 md:p-8">
                {/* Headline */}
                <h3
                  className={`mb-2 text-2xl font-bold ${useCase.textColorClass}`}
                >
                  {useCase.headline}
                </h3>

                {/* Subheadline */}
                <p className="mb-6 text-base italic text-slate-700">
                  {useCase.subheadline}
                </p>

                {/* Benefits List */}
                <ul className="mb-8 space-y-4">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle
                        className={`mr-2 mt-0.5 size-5 ${useCase.accentColorClass} shrink-0`}
                      />
                      <span
                        className="text-slate-700"
                        dangerouslySetInnerHTML={{
                          __html: benefit.replace(
                            /\*\*(.*?)\*\*/g,
                            '<span class="font-semibold">$1</span>'
                          )
                        }}
                      />
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto pt-4">
                  <Link
                    href="/early-access"
                    className={`flex w-full items-center justify-center rounded-lg ${useCase.buttonColorClass} group px-4 py-3.5 text-center font-medium text-white transition-all duration-200`}
                  >
                    <span>{useCase.cta}</span>
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Simplified Lottie component using the hosted solution
interface LottieAnimationProps {
  lottieUrl: string
}

function LottieAnimation({ lottieUrl }: LottieAnimationProps) {
  const [error, setError] = useState(false)

  if (error) {
    // Fallback animation if the Lottie fails to load
    return (
      <div className="flex size-full items-center justify-center">
        <div className="relative size-32">
          <div className="absolute inset-0 animate-pulse rounded-full bg-purple-300 opacity-75"></div>
          <LineChart className="absolute inset-0 m-auto size-16 animate-bounce text-purple-700" />
        </div>
      </div>
    )
  }

  return (
    <div className="size-full">
      <DotLottieReact
        src={lottieUrl}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
        onError={() => setError(true)}
      />
    </div>
  )
}
