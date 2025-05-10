"use client"

import React from "react"
import { motion } from "framer-motion"
import { TrendingUp, Sparkles, Heart, DollarSign } from "lucide-react"

export default function BenefitsSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            TANGIBLE ADVANTAGES
          </h3>
          <h2 className="mb-4 mt-2 text-4xl font-semibold text-slate-900 md:text-5xl">
            Reap the Rewards of Smarter, Faster Research
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Integrating Subtext AI translates directly into measurable
            improvements for your marketing and client satisfaction by
            delivering what matters most:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-slate-100">
                <benefit.icon className="size-10 text-slate-800" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-800">
                {benefit.title}
              </h3>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const benefits = [
  {
    title: "Skyrocket Efficiency",
    description:
      "Slash research hours from days to minutes multiply output. Focus on strategy, not manual grunt work.",
    icon: TrendingUp
  },
  {
    title: "Amplify Results",
    description:
      "Deliver data-backed campaigns using your audience's actual words to consistently outperform expectations.",
    icon: Sparkles
  },
  {
    title: "Boost Retention",
    description:
      "Showcase undeniable ROI and strategic mastery backed by verifiable evidence that keeps customers loyal.",
    icon: Heart
  },
  {
    title: "Maximize Profitability",
    description:
      "Scale your services and impact without proportionally increasing overhead by making smarter, faster decisions.",
    icon: DollarSign
  }
]
