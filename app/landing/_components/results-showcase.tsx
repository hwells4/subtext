"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart4, LineChart, TrendingUp } from "lucide-react"

const resultCases = [
  {
    title: "Acme Corp",
    category: "Customer Engagement",
    results: [
      { label: "Response Rate", value: "78%", change: "+43%" },
      { label: "Client Satisfaction", value: "92%", change: "+35%" },
      { label: "Retention Rate", value: "88%", change: "+27%" }
    ],
    icon: <BarChart4 className="text-primary size-8" />
  },
  {
    title: "TechFlow Inc",
    category: "Support Optimization",
    results: [
      { label: "Resolution Time", value: "1.2 days", change: "-65%" },
      { label: "First Call Resolution", value: "82%", change: "+42%" },
      { label: "Support Costs", value: "$12k/mo", change: "-38%" }
    ],
    icon: <LineChart className="text-primary size-8" />
  },
  {
    title: "GrowthGen",
    category: "Business Impact",
    results: [
      { label: "Lead Conversion", value: "32%", change: "+56%" },
      { label: "Customer LTV", value: "$4,200", change: "+73%" },
      { label: "Annual Growth", value: "41%", change: "+29%" }
    ],
    icon: <TrendingUp className="text-primary size-8" />
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
            Real Results, Real Impact
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl text-lg">
            See how our platform transforms voice communication into measurable
            outcomes across industries and use cases.
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
                      {caseItem.category}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            <Button className="group w-full" variant="outline">
              View All Case Studies
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
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
                    <p
                      className={`text-sm font-medium ${
                        result.change.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {result.change}
                    </p>
                  </div>
                </Card>
              ))}
            </AnimatedGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
