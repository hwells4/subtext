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
        "[grid-area:stack] translate-y-0 hover:-translate-y-16 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity will-change-transform hover:grayscale-0 before:left-0 before:top-0 transition-all duration-1000 ease-in-out"
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
        "[grid-area:stack] translate-x-12 translate-y-16 hover:-translate-y-4 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity will-change-transform hover:grayscale-0 before:left-0 before:top-0 transition-all duration-1000 ease-in-out"
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
        "[grid-area:stack] translate-x-24 translate-y-32 hover:-translate-y-0 will-change-transform transition-all duration-1000 ease-in-out"
    }
  ]

  return (
    <section className="relative w-full bg-slate-50 py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
            Stop Guessing What Your Audience Thinks
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
            Marketing without research is just expensive guessing. But who has
            time to manually comb through thousands of conversations?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Left side - explanatory text - now 2/5 of the space */}
          <div className="flex flex-col justify-center space-y-6 px-4 md:col-span-2">
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
              className="space-y-5"
            >
              <ul className="space-y-5 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex size-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                    ✕
                  </span>
                  <span className="text-lg text-slate-700">
                    Time-consuming manual research wastes days scanning threads
                    for insights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex size-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                    ✕
                  </span>
                  <span className="text-lg text-slate-700">
                    Generic AI writing tools produce fluffy copy that doesn't
                    connect
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex size-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                    ✕
                  </span>
                  <span className="text-lg text-slate-700">
                    Scattered insights make it impossible to find clear patterns
                    in what customers actually want
                  </span>
                </li>
              </ul>

              <h3 className="mt-8 text-2xl font-semibold text-slate-900 md:text-3xl">
                From scattered comments to actionable messaging
              </h3>
              <p className="text-lg text-slate-600">
                Subtext automatically identifies and organizes how real people
                describe their problems, needs, and desires—in their exact
                words.
              </p>
            </motion.div>
          </div>

          {/* Right side - DisplayCards showcase - now 3/5 of the space */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.0,
              delay: 0.4,
              ease: "easeOut"
            }}
            className="flex items-center justify-center md:col-span-3"
          >
            <div className="h-[500px] w-full max-w-[700px] -translate-y-16">
              <DisplayCards cards={userInsightCards} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
