"use client"

import React from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

export function PainPointsSection() {
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

  const painPoints = [
    {
      id: "saas-08d7e5",
      text: "Wasting precious days manually scanning endless threads for usable insights, feeling like you're searching for a needle in a haystack."
    },
    {
      id: "saas-1a6462",
      text: 'Relying on generic AI writing tools that produce "fluffy" copy that sounds plausible but utterly fails to connect or convert.'
    },
    {
      id: "marketing-13be49",
      text: "Drowning in scattered comments and data, making it impossible to find clear patterns or understand what your customers *actually* want and the deep pain points they feel."
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
          <motion.div
            className="mb-12 grid gap-6 md:grid-cols-3 md:gap-8"
            variants={itemVariants}
          >
            {painPoints.map(point => (
              <div
                key={point.id}
                className="flex rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 md:p-7"
              >
                <div className="mr-4 flex size-8 shrink-0 items-center justify-center rounded-full bg-red-100">
                  <X className="size-5 text-red-600" />
                </div>
                <p className="text-slate-700">{point.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PainPointsSection
