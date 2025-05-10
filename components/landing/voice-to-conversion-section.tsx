"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Check, LineChart } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"

// Dynamically import DotLottieReact to prevent SSR issues
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then(mod => mod.DotLottieReact),
  { ssr: false }
)

const VoiceToConversionSection = () => {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            THE SOLUTION
          </h3>
          <h2 className="mb-4 mt-2 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Get Your Audience's Exact Words, Ready to Use
          </h2>
          <p className="mx-auto text-lg text-slate-600">
            Subtext automatically analyzes real, everyday online discussions to
            find how people describe their problems and what they want. We give
            you the key information you need – in their exact words – to create
            marketing messages that connect with your audience and get them to
            act.
          </p>
        </div>

        {/* 4-Step Process */}
        <div className="mt-14 space-y-16">
          {/* Step 1: Input & Deep Analysis */}
          <motion.div
            className="grid grid-cols-1 items-center gap-x-8 gap-y-10 md:grid-cols-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="order-2 md:order-1 md:col-span-3">
              <span className="text-sm font-semibold tracking-wide text-blue-600">
                STEP 1
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Finding Real Conversations
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Subtext looks at Reddit – where millions of people talk openly.
                We analyze thousands of{" "}
                <strong>raw, unprompted discussions</strong> to understand what
                they're saying, how they feel, and the common ways your audience{" "}
                <em>actually</em> talks about their needs, problems, and
                desires.
              </p>
              <div className="mt-5 flex items-start gap-2 rounded-lg bg-blue-50 p-3">
                <Check className="mt-0.5 size-5 shrink-0 text-blue-600" />
                <p className="text-sm font-medium text-blue-800">
                  <span className="font-bold">Real Words, Not Guesswork:</span>{" "}
                  Every piece of information comes from what people actually
                  said, so you know it's genuine.
                </p>
              </div>
            </div>
            <div className="order-1 flex justify-center md:order-2 md:col-span-2">
              <div className="relative h-72 w-full">
                <LottieAnimation lottieUrl="/animation/reddit-analysis.lottie" />
              </div>
            </div>
          </motion.div>

          {/* Step 2: Authentic Language Extraction */}
          <motion.div
            className="grid grid-cols-1 items-center gap-x-8 gap-y-10 md:grid-cols-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center md:col-span-2">
              <div className="relative h-72 w-full">
                <LottieAnimation lottieUrl="https://lottie.host/4722f81e-af73-4a24-90ad-d2fd87338093/C0UynIw9r2.lottie" />
              </div>
            </div>
            <div className="md:col-span-3">
              <span className="text-sm font-semibold tracking-wide text-blue-600">
                STEP 2
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Extracting Their <em>Exact</em> Words
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                From these discussions, Subtext accurately finds the{" "}
                <strong>
                  real words, slang, common phrases, and emotional triggers
                </strong>{" "}
                your audience uses. This isn't AI making things up; it's what
                they actually say.
              </p>
              <div className="mt-5 flex items-start gap-2 rounded-lg bg-blue-50 p-3">
                <Check className="mt-0.5 size-5 shrink-0 text-blue-600" />
                <p className="text-sm font-medium text-blue-800">
                  <span className="font-bold">Verifiably Sourced:</span> Every
                  key quote and way of phrasing is traceable to where it came
                  from, so you can be sure it's real.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 3: Intelligent Analysis */}
          <motion.div
            className="grid grid-cols-1 items-center gap-x-8 gap-y-10 md:grid-cols-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="order-2 md:order-1 md:col-span-3">
              <span className="text-sm font-semibold tracking-wide text-blue-600">
                STEP 3
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Seeing Groups & Real Problems
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Our AI intelligently groups these extracted insights. Discover
                how distinct <strong>audience segments</strong> describe
                problems in their unique vernacular. Simultaneously, Subtext
                identifies, categorizes (e.g., Functional, Emotional, Pricing),
                and helps prioritize the <strong>real pain points</strong>{" "}
                voiced in actual user discussions.
              </p>
              <div className="mt-5 flex items-start gap-2 rounded-lg bg-blue-50 p-3">
                <Check className="mt-0.5 size-5 shrink-0 text-blue-600" />
                <p className="text-sm font-medium text-blue-800">
                  <span className="font-bold">Evidence-Based Clarity:</span>{" "}
                  Move beyond generic personas with insights backed by diverse,
                  real-world community analysis, not AI guesswork.
                </p>
              </div>
            </div>
            <div className="order-1 flex justify-center md:order-2 md:col-span-2">
              <div className="relative h-72 w-full">
                <LottieAnimation lottieUrl="https://lottie.host/7fdf75da-fae6-4b10-b9a5-815de904edaa/nXXG4F37pF.lottie" />
              </div>
            </div>
          </motion.div>

          {/* Step 4: Actionable Outputs */}
          <motion.div
            className="grid grid-cols-1 items-center gap-x-8 gap-y-10 md:grid-cols-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center md:col-span-2">
              <div className="relative h-72 w-full">
                <LottieAnimation lottieUrl="https://lottie.host/013f090d-d03f-4cb5-9f0c-08dcd2f9c876/M3pv0P4TYA.lottie" />
              </div>
            </div>
            <div className="md:col-span-3">
              <span className="text-sm font-semibold tracking-wide text-blue-600">
                STEP 4
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Clear Takeaways You Can Act On
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Finally, Subtext transforms this complex analysis into clear,
                organized <strong>Top Insights</strong> and the key{" "}
                <strong>Audience Questions</strong> your market is asking. Get
                actionable takeaways, ready for you to craft high-converting
                copy and content.
              </p>
              <div className="mt-5 flex items-start gap-2 rounded-lg bg-blue-50 p-3">
                <Check className="mt-0.5 size-5 shrink-0 text-blue-600" />
                <p className="text-sm font-medium text-blue-800">
                  <span className="font-bold">Risk-Free Validation:</span> Build
                  campaigns on a foundation of verifiable truth, knowing your
                  messages are grounded in what your audience <em>already</em>{" "}
                  says and feels.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-[10%] top-1/4 size-[500px] rounded-full bg-gradient-to-r from-blue-50 to-blue-100 opacity-60 blur-3xl" />
        <div className="absolute left-[5%] top-3/4 size-[400px] rounded-full bg-gradient-to-r from-purple-50 to-purple-100 opacity-60 blur-3xl" />
      </div>
    </section>
  )
}

// Simplified Lottie component using the hosted solution
interface LottieAnimationProps {
  lottieUrl: string
}

function LottieAnimation({ lottieUrl }: LottieAnimationProps) {
  const [error, setError] = useState(false)

  if (error) {
    // Fallback animation if the Lottie fails to load
    return (
      <div className="flex size-full items-center justify-center">
        <div className="relative size-32">
          <div className="absolute inset-0 animate-pulse rounded-full bg-blue-300 opacity-75"></div>
          <LineChart className="absolute inset-0 m-auto size-16 animate-bounce text-blue-700" />
        </div>
      </div>
    )
  }

  return (
    <div className="size-full">
      <DotLottieReact
        src={lottieUrl}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
        onError={() => setError(true)}
      />
    </div>
  )
}

export default VoiceToConversionSection
