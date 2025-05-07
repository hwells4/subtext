"use client"

import React from "react"
import { CheckIcon, XIcon } from "lucide-react"
import { motion } from "framer-motion"

const comparisonData = [
  {
    feature: "Content Creation",
    genericAI: "Creates fluffy, general content",
    manualResearch: "Provides authentic insights",
    subtext: "Extracts authentic insights"
  },
  {
    feature: "Data Source",
    genericAI: "Based on training data",
    manualResearch: "Based on real conversations",
    subtext: "Based on real conversations"
  },
  {
    feature: "Speed vs. Quality",
    genericAI: "Fast but inauthentic",
    manualResearch: "Authentic but time-consuming",
    subtext: "Both fast AND authentic"
  },
  {
    feature: "Customization",
    genericAI: "One-size-fits-all voice",
    manualResearch: "Custom but limited scale",
    subtext: "Custom at unlimited scale"
  }
]

export default function DifferentiationSection() {
  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Not Just Another AI Writing Tool
          </h2>
        </div>

        <div className="mx-auto max-w-5xl overflow-x-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="min-w-full"
          >
            <table className="min-w-full divide-y divide-slate-200 overflow-hidden rounded-lg">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider text-slate-500">
                    <span className="block text-center">
                      Generic AI Writers
                    </span>
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider text-slate-500">
                    <span className="block text-center">Manual Research</span>
                  </th>
                  <th className="bg-indigo-50 px-6 py-4 text-center text-xs font-medium uppercase tracking-wider text-indigo-700">
                    <span className="block text-center">Subtext</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                      {row.feature}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-slate-600">
                      {row.genericAI}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-slate-600">
                      {row.manualResearch}
                    </td>
                    <td className="whitespace-nowrap bg-indigo-50 px-6 py-4 text-center text-sm font-medium text-indigo-700">
                      {row.subtext}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
