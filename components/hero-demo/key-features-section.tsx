"use client"

import React from "react"
import { BarChart3, SearchCode, Users } from "lucide-react" // Example icons

const features = [
  {
    icon: SearchCode,
    title: "Deep Reddit Analysis",
    description:
      "Go beyond surface-level searches. Our AI delves into thousands of posts and comments to extract meaningful patterns and pain points."
  },
  {
    icon: Users,
    title: "Authentic User Language",
    description:
      "Understand exactly how your target audience describes their problems, using their own words for your messaging and product development."
  },
  {
    icon: BarChart3,
    title: "Actionable Insights, Fast",
    description:
      "Transform raw data into clear, validated insights with source links in minutes, not days, so you can build with confidence."
  }
]

export default function KeyFeaturesSection() {
  return (
    <div className="w-full bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
          How Our AI Supercharges Your Research
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-600 md:mb-16">
          Our platform is engineered to provide deep, reliable insights from
          Reddit, helping you validate ideas and understand your market like
          never before.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
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
