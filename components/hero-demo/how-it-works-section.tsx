"use client"

import React from "react"
import { Search, BarChart3, Lightbulb, ArrowRight, Zap } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: Search,
    title: "1. Pinpoint Your Audience & Topics",
    description:
      "Define specific communities or search terms where your ideal customers candidly discuss their needs, problems, and desires.",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100",
    imageQuery:
      "stylized_search_interface_data_streams_blue_theme_focused_magnifying_glass"
  },
  {
    icon: Zap,
    title: "2. Instantly Extract Deep Insights",
    description:
      "Subtext's AI dives deep, identifying crucial language patterns, sentiment, and the core 'why' behind customer statements.",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-100",
    imageQuery:
      "abstract_ai_analysis_data_patterns_glowing_nodes_dynamic_connections_purple_theme"
  },
  {
    icon: Lightbulb,
    title: "3. Craft Resonant, High-Converting Copy",
    description:
      "Transform these authentic customer insights directly into compelling messaging frameworks and copy that truly connects and drives action.",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-100",
    imageQuery:
      "compelling_marketing_copy_document_icon_emerging_from_insights_amber_theme_growth_arrow"
  }
]

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
            How Subtext Supercharges Your Marketing Research
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
            Go from raw conversations to revenue-driving insights in minutes. We
            turn qualitative data into your quantitative advantage.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-1/2 -ml-[1px] hidden h-3/4 w-0.5 -translate-y-1/2 bg-slate-300 md:block" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 shadow-lg transition-all hover:shadow-2xl md:p-8"
              >
                <div className="mb-6 flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-slate-100">
                  <img
                    src={`/placeholder.svg?width=300&height=168&query=${step.imageQuery}`}
                    alt={step.title}
                    className="size-full object-contain"
                  />
                </div>

                <div
                  className={`mb-5 flex size-14 items-center justify-center rounded-full ${step.bgColor} ring-8 ring-white`}
                >
                  <step.icon className={`size-7 ${step.iconColor}`} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900 md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-center text-base text-slate-600">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="absolute left-full top-1/2 z-20 hidden -translate-y-1/2 px-4 md:block">
                    <ArrowRight className="size-8 text-slate-400 transition-colors group-hover:text-blue-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a
            href="/waitlist"
            className="inline-flex items-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            See It In Action (Join Waitlist)
            <ArrowRight className="ml-2.5 size-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
