"use client"

import React from "react"
import { motion } from "framer-motion"
import { Link2, Clock, Target, Shield } from "lucide-react"

export function DifferentiationSection() {
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

  const differentiators = [
    {
      icon: <Link2 className="size-6" />,
      title: "100% Real, Source-Linked Insights",
      description:
        "Every quote, pattern, and pain point links directly back to the original Reddit conversation. No black boxes. Full transparency. Absolute trust in your data."
    },
    {
      icon: <Clock className="size-6" />,
      title: "Research in Minutes, Not Days",
      description:
        "Transform hours (or even days!) of soul-crushing manual thread-reading into organized, actionable insights from thousands of relevant conversations. Get back to strategy, faster."
    },
    {
      icon: <Target className="size-6" />,
      title: "Authentic Language, Not AI Guesses",
      description:
        "We extract the *exact phrases, slang, and emotional triggers* your audience uses candidly – the gold dust for high-converting copy that generic AI simply can't replicate."
    },
    {
      icon: <Shield className="size-6" />,
      title: "Risk-Free Messaging Validation",
      description:
        "Understand what resonates *before* you invest heavily in campaigns. Build all your marketing on a powerful foundation of truth, not assumptions."
    }
  ]

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto w-full max-w-[1220px] px-6 md:px-10">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
              This Isn't AI Fluff. This is Your Audience's{" "}
              <span className="italic">Verifiable Truth</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-[800px] text-lg text-slate-600">
              Many AI tools <span className="italic">generate</span> copy.
              Subtext <span className="italic">reveals</span> the authentic
              language your audience is <strong>already using</strong>. While
              other tools produce plausible-sounding but ultimately generic
              "AI-generated slop," Subtext delivers 100% real, verifiable
              customer voice, backed by data.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:gap-10"
            variants={itemVariants}
          >
            {differentiators.map((differentiator, index) => (
              <div
                key={index}
                className="flex rounded-xl bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-7"
              >
                <div className="mr-5 flex size-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  {differentiator.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {differentiator.title}
                  </h3>
                  <p className="text-slate-600">{differentiator.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <p className="text-lg font-medium text-slate-800">
              Subtext empowers YOU to write better, more resonant copy – whether
              you craft it manually or use LLMs to assist. We provide the
              authentic, data-backed fuel.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DifferentiationSection
