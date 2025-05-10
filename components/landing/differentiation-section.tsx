"use client"

import React from "react"
import { motion } from "framer-motion"
import { Link2, Clock, Target, ShieldCheck } from "lucide-react"

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
    icon: <ShieldCheck className="size-6" />,
    title: "Risk-Free Messaging Validation",
    description:
      "Understand what resonates *before* you invest heavily in campaigns. Build all your marketing on a powerful foundation of truth, not assumptions."
  }
]

export default function DifferentiationSection() {
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
    <section className="w-full bg-slate-50 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2 className="mb-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              This Isn't AI Fluff. This is Your Audience's{" "}
              <span className="italic">Verifiable Truth</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-[800px] text-lg text-slate-600">
              Many AI tools <span className="italic">generate</span> copy.
              Subtext <span className="italic">reveals</span> the authentic
              language your audience is{" "}
              <span className="font-semibold">already using</span>. While other
              tools produce plausible-sounding but ultimately generic
              "AI-generated slop," Subtext delivers 100% real, verifiable
              customer voice, backed by data.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:gap-10"
            variants={itemVariants}
          >
            {differentiators.map((differentiator, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mr-4 flex size-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  {differentiator.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {differentiator.title}
                  </h3>
                  <p className="text-slate-600">{differentiator.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <p className="text-lg font-semibold text-slate-800">
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
