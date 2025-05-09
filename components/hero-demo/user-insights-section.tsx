"use client"

import React from "react"
import DisplayCards from "@/components/ui/display-cards"
import { Search, MessageSquare, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export default function UserInsightsSection() {
  // Sample Reddit insights that could be displayed
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
        <div className="mb-6 w-full text-center sm:mb-8 md:mb-10">
          <h2 className="mb-3 w-full text-pretty text-2xl font-extrabold text-slate-900 sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Stop Guessing What Your Audience{" "}
            <span className="italic">Really</span> Thinks (And Says!)
          </h2>
          <p className="mx-auto w-full text-pretty text-base text-slate-600 sm:max-w-2xl sm:text-lg md:max-w-3xl md:text-xl lg:max-w-4xl">
            Marketing without deep audience insight is just expensive guessing.
            But who has days to manually comb through thousands of conversations
            for those golden nuggets?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-5">
          <div className="flex w-full flex-col justify-center space-y-4 sm:space-y-6 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 30,
                damping: 10
              }}
              className="w-full space-y-4 sm:space-y-6"
            >
              <ul className="w-full space-y-3 text-slate-600 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 sm:size-6">
                    ✕
                  </span>
                  <span className="w-full flex-1 text-pretty text-base text-slate-700 sm:text-lg">
                    Wasting precious days manually scanning endless threads for
                    usable insights, feeling like you're searching for a needle
                    in a haystack.
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 sm:size-6">
                    ✕
                  </span>
                  <span className="w-full flex-1 text-pretty text-base text-slate-700 sm:text-lg">
                    Relying on generic AI writing tools that produce "fluffy"
                    copy that sounds plausible but utterly fails to connect or
                    convert.
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 sm:size-6">
                    ✕
                  </span>
                  <span className="w-full flex-1 text-pretty text-base text-slate-700 sm:text-lg">
                    Drowning in scattered comments and data, making it
                    impossible to find clear patterns or understand what your
                    customers *actually* want and the deep pain points they
                    feel.
                  </span>
                </li>
              </ul>

              <h3 className="mt-6 w-full text-pretty text-xl font-semibold text-slate-900 sm:mt-8 sm:text-2xl md:text-3xl">
                From Scattered Comments to Actionable Messaging – In Their Exact
                Words.
              </h3>
              <p className="w-full text-pretty text-base text-slate-600 sm:text-lg">
                Subtext automatically dives deep into authentic, unprompted
                conversations, identifying and organizing how real people
                describe their problems, needs, and desires. We surface the core
                insights you need – in their exact words – to build messaging
                that resonates.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.0,
              delay: 0.4,
              ease: "easeOut"
            }}
            className="flex min-h-[320px] items-center justify-center sm:min-h-[360px] md:col-span-3 md:min-h-[450px]"
          >
            <div className="h-[320px] w-full max-w-[700px] -translate-y-4 sm:h-[380px] sm:-translate-y-8 md:h-[450px] md:-translate-y-12 lg:h-[500px] lg:-translate-y-16">
              <DisplayCards cards={userInsightCards} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
