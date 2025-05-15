"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Sparkles, Heart, DollarSign } from "lucide-react"

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })

  // Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        when: "beforeChildren"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="mb-12 text-center" variants={itemVariants}>
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
          </motion.div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden"
                }}
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
        </motion.div>
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
