"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  MessageSquare,
  Lightbulb,
  BadgeCheck,
  Users,
  TrendingUp,
  DollarSign,
  Filter,
  Target as TargetIcon // Renamed to avoid conflict with HTML target attribute
} from "lucide-react"
import { motion } from "framer-motion"

// Define the stages for the visual pathway
const pathwayStages = [
  {
    icon: Users,
    title: "Deep Audience Understanding",
    description:
      "Start by pinpointing where your audience speaks freely—forums, social media, reviews. Subtext gathers these raw, authentic conversations.",
    details: [
      "Example: Searching for discussions on 'marketing copy that converts'"
    ],
    color: "text-sky-500"
  },
  {
    icon: Filter,
    title: "AI-Powered Insight Extraction",
    description:
      "Our advanced AI processes volumes of text, identifying recurring themes, pain points, and the exact language your customers use.",
    details: [
      "Identifies patterns like: 'Nothing is better than taking the words right out of the customer\'s mouth'",
      "Pinpoints pain: 'I\'m spending way too much time reading massive threads'"
    ],
    color: "text-indigo-500"
  },
  {
    icon: TargetIcon,
    title: "Targeted Messaging & Strategy",
    description:
      "Transform these insights into highly targeted messaging strategies and content outlines that resonate deeply with your ideal customer profile.",
    details: [
      "Focus: Develop copy that uses authentic customer language to describe their exact problems"
    ],
    color: "text-violet-500"
  },
  {
    icon: TrendingUp,
    title: "Accelerated Marketing Performance",
    description:
      "Launch campaigns with confidence, knowing your messaging is built on genuine customer understanding, leading to higher engagement and conversion rates.",
    details: [
      "Achieve high resonance scores (e.g., 94%) by addressing true needs"
    ],
    color: "text-emerald-500"
  },
  {
    icon: DollarSign,
    title: "Measurable Revenue Growth",
    description:
      "Ultimately, connect research directly to revenue. By truly understanding and speaking your customer\'s language, you drive sales and grow your bottom line.",
    details: ["Turn insights into tangible financial results."],
    color: "text-green-600"
  }
]

export default function VisualDemonstration() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
            From Research to Revenue: The Subtext Pathway
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
            Visualize how Subtext directly connects deep audience understanding
            to your bottom line, transforming raw conversations into measurable
            marketing success.
          </p>
        </div>

        {/* Central Visual Pathway Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center md:mb-16"
        >
          <img
            src="/placeholder.svg?width=1000&height=300&query=abstract_data_funnel_to_revenue_pipeline_modern_tech_blue_green_violet_accents_connected_nodes_dynamic_flow"
            alt="Visual pathway from research to revenue"
            className="w-full max-w-5xl rounded-lg object-contain shadow-xl"
          />
        </motion.div>

        {/* Detailed Stages/Benefits Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-5">
          {pathwayStages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
                  <div
                    className={`mt-1 rounded-full bg-slate-100 p-3 ${stage.color}`}
                  >
                    <stage.icon className="size-6" aria-hidden="true" />
                  </div>
                  <CardTitle
                    className={`text-xl font-semibold leading-tight ${stage.color.replace("text-", "text-slate-")}`}
                  >
                    {stage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 pt-0">
                  <p className="text-sm text-slate-600">{stage.description}</p>
                  {stage.details && stage.details.length > 0 && (
                    <ul className="mt-2 list-inside list-disc space-y-1 pl-1">
                      {stage.details.map((detail, i) => (
                        <li key={i} className="text-xs text-slate-500">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
