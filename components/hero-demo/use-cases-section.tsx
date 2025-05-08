"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  Edit,
  LineChart,
  Quote as QuoteIcon,
  CheckCircle
} from "lucide-react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Dynamically import DotLottieReact to prevent SSR issues
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then(mod => mod.DotLottieReact),
  { ssr: false }
)

interface UseCaseItem {
  role: string
  icon: React.ElementType
  description: string
  quote: string
  author: string
  imageQuery?: string
  lottieUrl?: string
  useLottie?: boolean
  bgColorClass: string
  textColorClass: string
  accentColorClass: string
  buttonColorClass: string
}

const useCases: UseCaseItem[] = [
  {
    role: "Marketing Agencies",
    icon: Building2,
    description:
      "Scale authentic research across multiple clients without multiplying your workload. Create client-ready reports that demonstrate the value of your messaging strategy.",
    quote:
      "We cut our research time from days to minutes while delivering deeper audience insights to clients.",
    author: "Sarah Johnson, Marketing Director at GrowthAgency",
    imageQuery:
      "abstract_network_of_connected_clients_and_data_streams_blue_teal_gradients_professional_agency_feel_light_background_modern_lines",
    bgColorClass: "bg-sky-50", // Lighter, more airy blue
    textColorClass: "text-sky-700",
    accentColorClass: "text-sky-500",
    buttonColorClass: "bg-sky-500 hover:bg-sky-600"
  },
  {
    role: "Content Marketers & Copywriters",
    icon: Edit,
    description:
      "Create copy that connects emotionally using the exact language your audience uses when describing their problems.",
    quote:
      "I've seen conversion rates double after implementing messaging based on the actual words customers use.",
    author: "Michael Chen, Content Lead at TechFlow",
    imageQuery:
      "stylized_quill_pen_morphing_into_glowing_text_bubble_emerald_green_and_gold_accents_creative_flow_light_background_organic_curves",
    bgColorClass: "bg-emerald-50", // Lighter, organic green
    textColorClass: "text-emerald-700",
    accentColorClass: "text-emerald-500",
    buttonColorClass: "bg-emerald-500 hover:bg-emerald-600"
  },
  {
    role: "Performance Marketers",
    icon: LineChart,
    description:
      "Diagnose and fix underperforming campaigns by aligning messaging with actual audience needs and language patterns.",
    quote:
      "We increased click-through rates by 43% after rewriting our ads with language extracted directly from our audience.",
    author: "Rachel Patel, PPC Specialist at ConversionPro",
    lottieUrl:
      "https://lottie.host/a4af23b2-c9ae-4343-aecf-bc54c2c32330/Pehdj5rvjg.lottie",
    useLottie: true,
    bgColorClass: "bg-purple-50", // Lighter, techy purple
    textColorClass: "text-purple-700",
    accentColorClass: "text-purple-500",
    buttonColorClass: "bg-purple-500 hover:bg-purple-600"
  }
]

export default function UseCasesSection() {
  return (
    <section className="w-full bg-slate-100 py-20 md:py-28">
      {" "}
      {/* Slightly darker section bg */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center md:mb-20">
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
            Supercharge Your Marketing, Role by Role
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
            Discover how Subtext empowers different marketing professionals to
            achieve remarkable results by leveraging authentic audience
            insights.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.role}
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
              {/* Top Visual Area */}
              <div
                className={`relative h-56 w-full ${useCase.bgColorClass} flex items-center justify-center p-4 md:h-64`}
              >
                {useCase.useLottie && useCase.lottieUrl ? (
                  <LottieAnimation lottieUrl={useCase.lottieUrl} />
                ) : (
                  <img
                    src={`/placeholder.svg?width=400&height=220&query=${useCase.imageQuery}`}
                    alt={`${useCase.role} abstract visual theme`}
                    className="max-h-full w-auto rounded-lg object-contain mix-blend-multiply" // mix-blend can be cool if bg isn't white
                  />
                )}
              </div>

              {/* Content Area */}
              <div className="flex grow flex-col p-6 md:p-8">
                <div className="mb-5 flex items-center space-x-3">
                  <div
                    className={`flex size-12 items-center justify-center rounded-full ${useCase.bgColorClass}`}
                  >
                    <useCase.icon
                      className={`size-7 ${useCase.accentColorClass}`}
                    />
                  </div>
                  <h3
                    className={`text-2xl font-semibold ${useCase.textColorClass}`}
                  >
                    For {useCase.role}
                  </h3>
                </div>

                <p className="mb-6 grow text-base text-slate-600">
                  {useCase.description}
                </p>

                {/* Quote Section */}
                <div className="mt-auto rounded-lg border border-slate-200 bg-white p-5 shadow-inner">
                  <QuoteIcon
                    className={`mb-2 size-7 ${useCase.accentColorClass} opacity-50`}
                  />
                  <blockquote className="relative">
                    <p className="text-md font-medium italic leading-relaxed text-slate-700">
                      &ldquo;{useCase.quote}&rdquo;
                    </p>
                    <footer className="mt-4 text-right text-sm font-semibold ${useCase.textColorClass}">
                      — {useCase.author}
                    </footer>
                  </blockquote>
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
