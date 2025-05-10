"use client"

import React from "react"
import { SearchCode, FileText, Users, Target } from "lucide-react" // Example icons
import { motion } from "framer-motion"

const features = [
  {
    icon: SearchCode,
    title: "Deep Conversation Analysis",
    subtitle: "Unlock True Understanding",
    description:
      "Go far beyond surface-level keyword searching. Our proprietary AI analyzes thousands of discussions to extract meaningful patterns, context, and sentiment in how people *actually* talk about their problems and needs."
  },
  {
    icon: FileText,
    title: "Authentic Language Extraction",
    subtitle: "Capture Their Exact Voice",
    description:
      "No more guessing what language to use. Subtext captures the precise words, phrases, slang, and emotional triggers your audience uses when they're speaking candidly, not just responding to bland surveys."
  },
  {
    icon: Users,
    title: "Audience Segmentation",
    subtitle: "Speak Directly to Each Niche",
    description:
      'Discover how different segments of your audience describe the same problems in unique ways. This allows you to instantly create targeted, highly relevant messaging for each specific group, making them "feel seen."'
  },
  {
    icon: Target,
    title: "Pain Point Categorization",
    subtitle: "Know What Really Hurts",
    description:
      "Stop assuming you know their pain. Subtext automatically organizes and prioritizes customer pain points by frequency, intensity, and type (functional, emotional, financial), so you can address what truly matters to them."
  }
]

export default function KeyFeaturesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <div className="w-full bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2 className="mb-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              Get Your Customers' Words Delivered to You. <br /> At Scale. In
              Minutes.
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-slate-600">
              Subtext analyzes thousands of real-time conversations, surfacing
              the core insights, trends, exact phrasing, and critical pain
              points your audience talks about when no one is asking. Here's how
              it supercharges your marketing research:
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl bg-white p-6 text-left shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <feature.icon className="size-6" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mb-4 text-sm font-semibold text-blue-600">
                  {feature.subtitle}
                </p>
                <p className="leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
