"use client"

import React from "react"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="w-full bg-slate-900 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 px-8 py-12 shadow-xl md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
              Ready to unlock Reddit's hidden insights?
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
              Start extracting authentic user language and validating your
              product decisions with real data today.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <a
                href="#"
                className="w-full rounded-lg bg-white px-8 py-3 text-center text-lg font-semibold text-slate-900 shadow-md transition-all duration-200 hover:bg-slate-100 md:w-auto"
              >
                Start Free Trial
              </a>

              <a
                href="#"
                className="flex w-full items-center justify-center text-lg font-medium text-white transition-all hover:text-slate-200 md:w-auto"
              >
                <span>Watch Demo</span>
                <ArrowRight className="ml-2 size-4" />
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
