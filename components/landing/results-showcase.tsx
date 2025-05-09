"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart4, LineChart, Clock } from "lucide-react"

const resultCases = [
  {
    title: "Conversion Rate",
    category: "+86% increase in free trial conversions",
    results: [
      { label: "Before", value: "2.1%", change: "" },
      { label: "After", value: "3.9%", change: "+86%" },
      { label: "Based On", value: "Landing Pages", change: "" }
    ],
    explanation: "Based on implementing authentic language in landing pages",
    icon: <BarChart4 className="text-primary size-8" />
  },
  {
    title: "Click-Through Rate",
    category: "+127% increase in email open rates",
    results: [
      { label: "Before", value: "12%", change: "" },
      { label: "After", value: "27%", change: "+127%" },
      { label: "Based On", value: "Subject Lines", change: "" }
    ],
    explanation: "Based on using extracted pain points in subject lines",
    icon: <LineChart className="text-primary size-8" />
  },
  {
    title: "Research Time",
    category: "95% reduction in research time",
    results: [
      { label: "Before", value: "3-4 days", change: "" },
      { label: "After", value: "20 min", change: "-95%" },
      { label: "Based On", value: "Time Tracking", change: "" }
    ],
    explanation:
      "From days of manual thread reading to minutes of AI-powered extraction",
    icon: <Clock className="text-primary size-8" />
  }
]

export function ResultsShowcase() {
  const [activeCase, setActiveCase] = useState(0)

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-20 dark:from-slate-950 dark:to-slate-900">
      <div className="container px-4 md:px-6">
        <AnimatedGroup
          className="mb-12 flex flex-col items-center text-center"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            },
            item: {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.6
                }
              }
            }
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Real Results, Measurable Impact
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl text-lg">
            See how authentic customer language transforms marketing performance
          </p>
        </AnimatedGroup>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            {resultCases.map((caseItem, index) => (
              <Card
                key={index}
                className={`cursor-pointer p-6 transition-all hover:shadow-md ${
                  activeCase === index ? "border-primary bg-primary/5" : ""
                }`}
                onClick={() => setActiveCase(index)}
              >
                <div className="flex items-start gap-4">
                  {caseItem.icon}
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">{caseItem.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {caseItem.explanation}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatedGroup
              className="grid h-full grid-cols-1 gap-4 md:grid-cols-3"
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                },
                item: {
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.5
                    }
                  }
                }
              }}
              key={activeCase} // This forces re-render and animation when case changes
            >
              {resultCases[activeCase].results.map((result, index) => (
                <Card
                  key={index}
                  className="flex h-full flex-col justify-between p-6"
                >
                  <p className="text-muted-foreground text-sm font-medium">
                    {result.label}
                  </p>
                  <div className="mt-2 space-y-1">
                    <p className="text-3xl font-bold">{result.value}</p>
                    {result.change && (
                      <p
                        className={`text-sm font-medium ${
                          result.change.startsWith("+")
                            ? "text-green-500"
                            : result.change.startsWith("-")
                              ? "text-red-500"
                              : "text-slate-500"
                        }`}
                      >
                        {result.change}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </AnimatedGroup>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold">
                {resultCases[activeCase].category}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
