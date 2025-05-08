"use client"

import React from "react"
import { Features } from "@/components/ui/features-8"
import { motion } from "framer-motion"

export default function DifferentiationSection() {
  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Not Just Another AI Writing Tool
          </h2>
        </div>

        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Features />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
