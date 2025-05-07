"use client"

import React from "react"
import { BarChart3, SearchCode, Users, Layers } from "lucide-react" // Example icons

const features = [
  {
    icon: SearchCode,
    title: "Deep Conversation Analysis",
    description:
      "Go beyond surface-level searching. Our AI analyzes thousands of discussions to extract meaningful patterns in how people talk about their problems and needs."
  },
  {
    icon: Users,
    title: "Authentic Language Extraction",
    description:
      "Capture the exact words, phrases, and emotional triggers your audience uses when they're speaking candidly, not responding to surveys."
  },
  {
    icon: Layers,
    title: "Audience Segmentation",
    description:
      "Discover how different segments of your audience describe the same problems differently, allowing you to create targeted messaging for each."
  },
  {
    icon: BarChart3,
    title: "Pain Point Categorization",
    description:
      "Automatically organize and prioritize customer pain points by frequency, intensity, and type (functional, emotional, financial)."
  }
]

export default function KeyFeaturesSection() {
  return (
    <div className="w-full bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
          How Subtext Supercharges Your Marketing Research
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-600 md:mb-16">
          Transform how you understand your audience's needs and craft messaging
          that resonates
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 text-left shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <feature.icon className="size-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
