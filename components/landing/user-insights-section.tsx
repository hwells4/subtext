"use client"

import React from "react"
import DisplayCards from "@/components/ui/display-cards"
import { Search, MessageSquare, Lightbulb, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export default function UserInsightsSection() {
  // Sample insights cards
  const userInsightCards = [
    {
      icon: <Search className="size-5 text-blue-300" />,
      title: "Search Query",
      description: "'Marketing copy that converts'",
      date: "Query Results",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] translate-y-0 hover:-translate-y-10 sm:hover:-translate-y-12 md:hover:-translate-y-16 will-change-transform hover:grayscale-0 grayscale-[30%] transition-all duration-1000 ease-in-out after:from-transparent hover:!border-inherit bg-gradient-to-r from-transparent to-slate-100/10"
    },
    {
      icon: <MessageSquare className="size-5 text-emerald-300" />,
      title: "Extracted Language Pattern",
      description:
        '"Nothing is better than taking the words right out of the customer\'s mouth"',
      date: "Based on 42 conversations",
      iconClassName: "text-emerald-500",
      titleClassName: "text-emerald-500",
      className:
        "[grid-area:stack] translate-x-6 translate-y-8 hover:-translate-y-1 sm:translate-x-8 sm:translate-y-12 sm:hover:-translate-y-2 md:translate-x-12 md:translate-y-16 md:hover:-translate-y-4 will-change-transform hover:grayscale-0 grayscale-[30%] transition-all duration-1000 ease-in-out after:from-transparent hover:!border-inherit bg-gradient-to-r from-transparent to-slate-100/10"
    },
    {
      icon: <Lightbulb className="size-5 text-amber-300" />,
      title: "Pain Point Identified",
      description:
        "I'm spending way too much time reading massive threads trying to pull out useful info",
      date: "High frequency pattern",
      iconClassName: "text-amber-500",
      titleClassName: "text-amber-500",
      className:
        "[grid-area:stack] translate-x-12 translate-y-16 hover:translate-y-8 sm:translate-x-16 sm:translate-y-24 sm:hover:translate-y-12 md:translate-x-24 md:translate-y-32 md:hover:translate-y-0 will-change-transform hover:grayscale-0 grayscale-[30%] transition-all duration-1000 ease-in-out after:from-transparent hover:!border-inherit bg-gradient-to-r from-transparent to-slate-100/10"
    }
  ]

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 px-4 py-12 sm:py-16 md:px-6 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            THE PROBLEM
          </h3>
          <h2 className="mb-4 mt-2 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Stop Guessing What Your Audience{" "}
            <span className="italic">Really</span> Thinks
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Marketing without deep audience insight is just expensive guessing.
            But who has days to manually comb through thousands of conversations
            for those golden nuggets?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left side: Problem & Solution Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 30
            }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">
                The Challenge
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 sm:size-6">
                    ✕
                  </span>
                  <span className="text-pretty text-base text-slate-700 sm:text-lg">
                    Wasting days manually scanning endless threads for insights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 sm:size-6">
                    ✕
                  </span>
                  <span className="text-pretty text-base text-slate-700 sm:text-lg">
                    Generic AI tools producing "fluffy" copy that fails to
                    convert
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 sm:size-6">
                    ✕
                  </span>
                  <span className="text-pretty text-base text-slate-700 sm:text-lg">
                    Drowning in scattered data without clear patterns
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">
                Our Solution
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 sm:size-6">
                    <CheckCircle2 className="size-3 sm:size-4" />
                  </span>
                  <span className="text-pretty text-base text-slate-700 sm:text-lg">
                    Automatically extract key insights from thousands of
                    conversations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 sm:size-6">
                    <CheckCircle2 className="size-3 sm:size-4" />
                  </span>
                  <span className="text-pretty text-base text-slate-700 sm:text-lg">
                    Identify exact language patterns your audience uses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 sm:size-6">
                    <CheckCircle2 className="size-3 sm:size-4" />
                  </span>
                  <span className="text-pretty text-base text-slate-700 sm:text-lg">
                    Transform real customer words into high-converting copy
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right side: Visual Cards Demonstration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.0,
              delay: 0.4,
              ease: "easeOut"
            }}
            className="flex items-center justify-center"
          >
            <div className="h-[350px] w-full max-w-[600px] md:h-[450px]">
              <DisplayCards cards={userInsightCards} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut"
          }}
          className="mt-16 rounded-xl bg-white p-8 shadow-lg"
        >
          <h3 className="mb-4 text-center text-2xl font-bold text-slate-900 md:text-3xl">
            From Scattered Comments to Actionable Messaging
          </h3>
          <p className="mx-auto max-w-3xl text-center text-lg text-slate-600">
            Our platform automatically dives deep into authentic, unprompted
            conversations, identifying how real people describe their problems
            and desires. We surface the core insights you need – in their exact
            words – to build messaging that resonates and converts.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
