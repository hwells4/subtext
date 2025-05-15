"use client"

import React from "react"
import { motion } from "framer-motion"
import { Search, MessageCircle, Users, Target } from "lucide-react"

export default function FeaturesHighlights() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            KEY CAPABILITIES
          </h3>
          <h2 className="mb-4 mt-2 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Get Your Customers' Words Delivered to You
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            At Scale. In Minutes. Subtext analyzes thousands of real-time
            conversations, surfacing core insights and exact phrasing your
            audience uses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4
              }}
              viewport={{ once: true, margin: "-15%" }}
              className="flex rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="mr-5 flex size-14 shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                <feature.icon className="size-7 text-indigo-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: "Deep Conversation Analysis",
    description:
      "Go beyond keywords to extract meaningful patterns, context, and sentiment from thousands of authentic discussions.",
    icon: Search
  },
  {
    title: "Authentic Language Extraction",
    description:
      "Capture the precise words, phrases, and emotional triggers your audience uses when speaking candidly.",
    icon: MessageCircle
  },
  {
    title: "Audience Segmentation",
    description:
      "Discover how different segments describe the same problems uniquely, allowing for highly targeted messaging.",
    icon: Users
  },
  {
    title: "Pain Point Categorization",
    description:
      "Automatically organize and prioritize customer pain points by frequency, intensity, and type.",
    icon: Target
  }
]
