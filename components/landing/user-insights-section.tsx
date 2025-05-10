"use client"

import React from "react"
import { AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

interface FeatureItemProps {
  icon: React.ReactNode
  text: string
}

const FeatureItem = ({ icon, text }: FeatureItemProps) => (
  <div className="flex items-start gap-3">
    <span className="mt-1 flex size-6 shrink-0 items-center justify-center">
      {icon}
    </span>
    <span className="text-pretty text-base text-slate-700 sm:text-lg">
      {text}
    </span>
  </div>
)

export default function UserInsightsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const challenges = [
    {
      icon: <AlertCircle className="size-6 text-red-500" />,
      title: "Manual Research Overload",
      description:
        "Wasting days reading endless online discussions for useful takeaways."
    },
    {
      icon: <AlertCircle className="size-6 text-red-500" />,
      title: "Generic AI Content",
      description:
        "AI tools producing 'fluffy' copy that doesn't connect with real people or get results."
    },
    {
      icon: <AlertCircle className="size-6 text-red-500" />,
      title: "Insight Chaos",
      description:
        "Drowning in scattered information without seeing what your audience really means."
    }
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 pt-24 md:py-20 md:pt-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute -right-[30%] top-[5%] size-[600px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(219, 234, 254, 0.8) 0%, transparent 70%)"
          }}
        />
        <div
          className="absolute -left-[20%] top-[40%] size-[500px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(209, 250, 229, 0.8) 0%, transparent 70%)"
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="mb-12 text-center md:mb-16"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
              THE PROBLEM
            </h3>
            <h2 className="mb-4 mt-2 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Stop Guessing What Your Audience{" "}
              <span className="italic">Really</span> Thinks
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
              Marketing without deep audience insight is just expensive
              guessing. Our AI uncovers what's hiding in plain sight across
              thousands of conversations.
            </p>
          </motion.div>

          {/* Challenge Section */}
          <motion.div
            variants={itemVariants}
            className="w-full rounded-3xl bg-slate-900 p-8 text-white shadow-lg md:p-12"
          >
            <div className="grid gap-8 md:grid-cols-[1fr,2fr]">
              <div>
                <h3 className="text-2xl font-semibold md:text-3xl">
                  The Challenge
                </h3>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-red-400 to-transparent"></div>
                <p className="mt-4 text-slate-300">
                  Marketers are drowning in content but starving for real
                  audience insights.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {challenges.map((challenge, index) => (
                  <div key={index} className="rounded-xl bg-slate-800 p-6">
                    <div className="mb-4 flex items-center">
                      {challenge.icon}
                      <h4 className="ml-2 text-lg font-semibold">
                        {challenge.title}
                      </h4>
                    </div>
                    <p className="text-slate-300">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom solution teaser - inside the challenge card */}
            <div className="mt-8 border-t border-slate-700 pt-8 text-center">
              <p className="mx-auto max-w-2xl text-lg font-semibold text-slate-300">
                That's why we built Subtext — to transform scattered
                conversations into marketing intelligence.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom angle cut for transition to next section */}
      <div className="absolute bottom-0 left-0 z-0 h-16 w-full overflow-hidden">
        <div
          className="absolute bottom-0 h-32 w-full -translate-y-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)" }}
        ></div>
      </div>
    </section>
  )
}
