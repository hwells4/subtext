"use client"

import React from "react"
import { ArrowRight, Calendar } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="w-full bg-slate-900 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 px-8 py-12 shadow-xl md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
              Start Creating Copy That Actually Converts
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
              Extract authentic customer language and transform it into
              messaging that resonates and drives action.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <a
                href="#"
                className="w-full rounded-lg bg-white px-8 py-3 text-center text-lg font-semibold text-slate-900 shadow-md transition-all duration-200 hover:bg-slate-100 md:w-auto"
              >
                Start $1 Trial
              </a>

              <a
                href="#"
                className="w-full rounded-lg border border-white bg-transparent px-8 py-3 text-center text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-white/10 md:w-auto"
              >
                <span className="flex items-center justify-center">
                  <Calendar className="mr-2 size-4" />
                  Book a Demo
                </span>
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              $1 trial requires credit card and includes full access for 14
              days. No credit card required for demo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
