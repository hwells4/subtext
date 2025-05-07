"use client"

import React from "react"
import { Search, BarChart3, Lightbulb, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: Search,
    title: "Search topics or audiences",
    description:
      "Target specific communities where your audience speaks candidly about their needs.",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100"
  },
  {
    icon: BarChart3,
    title: "Extract authentic language patterns",
    description:
      "Our AI identifies exactly how your audience describes their problems and pain points.",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-100"
  },
  {
    icon: Lightbulb,
    title: "Create copy that connects and converts",
    description:
      "Transform real customer language into messaging frameworks that drive action.",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-100"
  }
]

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Turn Real Conversations Into Conversion Copy in Minutes
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-1/2 top-0 -ml-[1px] hidden h-full w-0.5 -translate-x-1/2 bg-slate-200 md:block" />

          {/* Steps */}
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number with connector for desktop */}
                <div className="relative mb-6">
                  <div
                    className={`flex size-16 items-center justify-center rounded-full ${step.bgColor}`}
                  >
                    <step.icon className={`size-8 ${step.iconColor}`} />
                  </div>
                  {/* Only show arrows between steps on desktop */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-full top-1/2 hidden -translate-y-1/2 text-slate-400 md:block">
                      <ArrowRight className="ml-4 size-6" />
                    </div>
                  )}
                </div>

                {/* Step content */}
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="/waitlist"
            className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-lg font-semibold text-white transition-all duration-200 hover:bg-slate-800 hover:shadow-lg"
          >
            Join Waitlist
            <ArrowRight className="ml-2 size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
