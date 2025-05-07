"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Edit, LineChart } from "lucide-react"
import { motion } from "framer-motion"

const useCases = [
  {
    icon: Building2,
    title: "For Marketing Agencies",
    description:
      "Scale authentic research across multiple clients without multiplying your workload. Create client-ready reports that demonstrate the value of your messaging strategy.",
    quote:
      "We cut our research time from days to minutes while delivering deeper audience insights to clients.",
    author: "Sarah Johnson, Marketing Director at GrowthAgency",
    iconClass: "text-blue-500",
    bgClass: "bg-blue-50"
  },
  {
    icon: Edit,
    title: "For Content Marketers & Copywriters",
    description:
      "Create copy that connects emotionally using the exact language your audience uses when describing their problems.",
    quote:
      "I've seen conversion rates double after implementing messaging based on the actual words customers use.",
    author: "Michael Chen, Content Lead at TechFlow",
    iconClass: "text-green-500",
    bgClass: "bg-green-50"
  },
  {
    icon: LineChart,
    title: "For Performance Marketers",
    description:
      "Diagnose and fix underperforming campaigns by aligning messaging with actual audience needs and language patterns.",
    quote:
      "We increased click-through rates by 43% after rewriting our ads with language extracted directly from our audience.",
    author: "Rachel Patel, PPC Specialist at ConversionPro",
    iconClass: "text-purple-500",
    bgClass: "bg-purple-50"
  }
]

export default function UseCasesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
            From Research to Revenue Across Your Marketing
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 50
              }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden">
                <CardHeader
                  className={`${useCase.bgClass} flex flex-row items-center gap-4`}
                >
                  <div className={`rounded-full p-2 ${useCase.bgClass}`}>
                    <useCase.icon className={`size-6 ${useCase.iconClass}`} />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-6 text-slate-600">{useCase.description}</p>
                  <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-700">
                    &ldquo;{useCase.quote}&rdquo;
                    <footer className="mt-2 text-sm text-slate-500">
                      —{useCase.author}
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
