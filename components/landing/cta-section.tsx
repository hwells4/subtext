"use client"

import React from "react"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CtaSection() {
  return (
    <section className="w-full bg-slate-900 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 px-8 py-12 shadow-xl md:px-12 md:py-16">
          <div className="max-w-3xl text-left md:mx-auto md:text-center">
            <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
              Speak Your Audience's Language. See Real Results.
            </h2>

            <p className="mb-8 max-w-2xl text-lg text-slate-300 md:mx-auto">
              Unlock your audience's actual voice with Subtext. Transform
              verifiable insights from real online conversations into messaging
              that resonates deeply, builds trust, and drives powerful
              action—all in minutes.
            </p>

            <div className="flex flex-col items-start justify-start gap-4 md:flex-row md:items-center md:justify-center">
              <Link
                href="/waitlist"
                className="w-full rounded-lg bg-white px-6 py-3 text-center text-base font-semibold text-slate-900 shadow-md transition-all duration-200 hover:bg-slate-100 md:w-auto"
              >
                Join Waitlist & Get Early Access
              </Link>

              <Link
                href="/waitlist"
                className="w-full rounded-lg border border-white bg-transparent px-6 py-3 text-center text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-white/10 md:w-auto"
              >
                <span className="flex items-center justify-center">
                  <Calendar className="mr-2 size-4" />
                  Book Demo
                </span>
              </Link>
            </div>

            <p className="mb-10 mt-6 text-sm text-slate-400 md:text-center">
              Join the waitlist for early access and be the first to leverage
              authentic audience intelligence. No credit card required for demo.
            </p>

            <div className="flex justify-start md:justify-center">
              <Image
                src="/subtext-logo.svg"
                alt="Subtext.ai Logo"
                width={240}
                height={68}
                className="h-20 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
