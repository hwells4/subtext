"use client"

import React from "react"
import DisplayCards from "@/components/ui/display-cards"
import { Search, MessageSquare, Lightbulb, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function UserInsightsSection() {
  // Sample Reddit insights that could be displayed
  const userInsightCards = [
    {
      icon: <Search className="size-4 text-blue-300" />,
      title: "Search Query",
      description: "'Best productivity app for ADHD'",
      date: "r/ADHD - 2 days ago",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] hover:-translate-y-12 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity will-change-transform hover:grayscale-0 before:left-0 before:top-0"
    },
    {
      icon: <MessageSquare className="size-4 text-emerald-300" />,
      title: "User Insight",
      description: '"I need visual task organization with timers"',
      date: "r/productivity - 1 week ago",
      iconClassName: "text-emerald-500",
      titleClassName: "text-emerald-500",
      className:
        "[grid-area:stack] translate-x-12 translate-y-8 hover:-translate-y-4 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity will-change-transform hover:grayscale-0 before:left-0 before:top-0"
    },
    {
      icon: <Lightbulb className="size-4 text-amber-300" />,
      title: "Product Opportunity",
      description: "Time-blocking with visual cues & reminders",
      date: "Based on 28 comments",
      iconClassName: "text-amber-500",
      titleClassName: "text-amber-500",
      className:
        "[grid-area:stack] translate-x-24 translate-y-16 hover:-translate-y-0 will-change-transform"
    },
    {
      icon: <CheckCircle className="size-4 text-purple-300" />,
      title: "Validation Score",
      description: "94% user interest in this feature",
      date: "High confidence rating",
      iconClassName: "text-purple-500",
      titleClassName: "text-purple-500",
      className:
        "[grid-area:stack] translate-x-36 translate-y-24 hover:-translate-y-0 will-change-transform"
    }
  ]

  return (
    <section className="relative w-full bg-slate-50 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Extract Real User Language
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Our AI analyzes thousands of Reddit conversations to surface
            authentic user insights that inform your product strategy with
            confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left side - explanatory text */}
          <div className="flex flex-col justify-center space-y-6 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                type: "spring",
                stiffness: 50,
                damping: 8
              }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-slate-900">
                From scattered comments to actionable insights
              </h3>
              <p className="text-slate-600">
                Stop struggling to find the signal in the noise. Our platform
                automatically identifies patterns in how users describe their
                problems and needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    1
                  </span>
                  <span className="text-slate-700">
                    Search for relevant topics or keywords
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    2
                  </span>
                  <span className="text-slate-700">
                    AI extracts authentic user language and pain points
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    3
                  </span>
                  <span className="text-slate-700">
                    Turn insights into product opportunities
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right side - DisplayCards showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut"
            }}
            className="flex items-center justify-center py-16"
          >
            <div className="size-96 md:size-[28rem]">
              <DisplayCards cards={userInsightCards} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
