"use client"

import React from "react"
import { motion } from "framer-motion"
import { Search, FileText, Users, Target } from "lucide-react"

export function FeaturesSection() {
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

  const features = [
    {
      icon: <Search className="size-6" />,
      title: "Deep Conversation Analysis",
      subtitle: "Unlock True Understanding",
      description:
        "Go far beyond surface-level keyword searching. Our proprietary AI analyzes thousands of discussions to extract meaningful patterns, context, and sentiment in how people *actually* talk about their problems and needs."
    },
    {
      icon: <FileText className="size-6" />,
      title: "Authentic Language Extraction",
      subtitle: "Capture Their Exact Voice",
      description:
        "No more guessing what language to use. Subtext captures the precise words, phrases, slang, and emotional triggers your audience uses when they're speaking candidly, not just responding to bland surveys."
    },
    {
      icon: <Users className="size-6" />,
      title: "Audience Segmentation",
      subtitle: "Speak Directly to Each Niche",
      description:
        'Discover how different segments of your audience describe the same problems in unique ways. This allows you to instantly create targeted, highly relevant messaging for each specific group, making them "feel seen."'
    },
    {
      icon: <Target className="size-6" />,
      title: "Pain Point Categorization",
      subtitle: "Know What Really Hurts",
      description:
        "Stop assuming you know their pain. Subtext automatically organizes and prioritizes customer pain points by frequency, intensity, and type (functional, emotional, financial), so you can address what truly matters to them."
    }
  ]

  return (
    <section className="relative bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto w-full max-w-[1220px] px-6 md:px-10">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
              Get Your Customers' Words Delivered to You. <br /> At Scale. In
              Minutes.
            </h2>
            <p className="mx-auto mt-4 max-w-[800px] text-lg text-slate-600">
              Subtext analyzes thousands of real-time conversations, surfacing
              the core insights, trends, exact phrasing, and critical pain
              points your audience talks about when no one is asking. Here's how
              it supercharges your marketing research:
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:gap-10"
            variants={itemVariants}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="mb-1 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-blue-600">
                  {feature.subtitle}
                </p>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
