"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function SolutionSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto w-full max-w-[1220px] px-6 md:px-10">
        <motion.div
          className="grid w-full grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="mx-auto flex max-w-[600px] flex-col items-center gap-6 text-center md:col-span-12 md:mx-0"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
              From Scattered Comments to Actionable Messaging – In Their Exact
              Words.
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col md:col-span-6"
            variants={itemVariants}
          >
            <p className="text-base leading-relaxed text-slate-700 md:text-lg">
              Subtext automatically dives deep into authentic, unprompted
              conversations, identifying and organizing how real people describe
              their problems, needs, and desires. We surface the core insights
              you need – in their exact words – to build messaging that
              resonates.
            </p>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg md:col-span-6"
            variants={itemVariants}
          >
            <Image
              src="/mockup.png"
              alt="Subtext Product Mockup"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-slate-900/70 to-transparent p-6">
              <div className="mb-2 rounded-md bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                Extracted Language Pattern
              </div>
              <p className="mb-1 text-sm text-slate-200">
                Pain Point Identified:
              </p>
              <p className="text-base font-medium text-white">
                "I'm spending way too much time reading massive threads trying
                to pull out useful info"
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionSection
