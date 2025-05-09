"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"

const VoiceToConversionSection = () => {
  return (
    <section className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            THE SOLUTION
          </h3>
          <h2 className="mb-4 mt-2 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Get Your Customers' Words Delivered to You
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Subtext goes beyond generic AI. We transform thousands of authentic
            Reddit discussions into the verifiable insights and exact language
            you need to craft marketing that truly connects and converts – in
            minutes, not days.
          </p>
        </div>

        {/* 4-Step Process */}
        <div className="mt-20 space-y-20">
          {/* Step 1: Input & Deep Analysis */}
          <motion.div
            className="grid grid-cols-1 items-center gap-x-12 gap-y-10 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="order-2 md:order-1">
              <span className="text-sm font-semibold tracking-wide text-blue-600">
                STEP 1
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Tapping into Authentic Conversations
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Subtext dives deep into the internet's largest focus group –
                Reddit. We analyze thousands of{" "}
                <strong>raw, unprompted discussions</strong> to understand the
                full context, sentiment, and nuanced patterns of how your
                audience <em>actually</em> talks about their needs, problems,
                and desires.
              </p>
              <div className="mt-5 flex items-start gap-2 rounded-lg bg-blue-50 p-3">
                <Check className="mt-0.5 size-5 shrink-0 text-blue-600" />
                <p className="text-sm font-medium text-blue-800">
                  <span className="font-bold">Real Data, Not Assumptions:</span>{" "}
                  Every insight starts with genuine human dialogue, ensuring
                  unparalleled authenticity.
                </p>
              </div>
            </div>
            <div className="order-1 flex justify-center md:order-2">
              <div className="relative w-full max-w-md">
                {/* Funnel SVG from public folder */}
                <motion.div
                  className="relative h-64 w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src="/funnel.svg"
                    alt="Data funnel visualization"
                    fill
                    className="object-contain"
                    priority
                  />

                  {/* Animated dots flowing into the funnel */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute size-2 rounded-full bg-blue-500"
                        style={{
                          left: `${10 + Math.random() * 80}%`,
                          top: `${Math.random() * 100}%`,
                          opacity: 0.3 + Math.random() * 0.3
                        }}
                        animate={{
                          x: [0, 20, 0],
                          y: [0, 40, 0],
                          opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  {/* Reddit dot */}
                  <motion.div
                    className="absolute size-3 rounded-full bg-[#FF4500]"
                    style={{ top: "10%", right: "15%" }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 0.9, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Step 2: Authentic Language Extraction */}
          <motion.div
            className="grid grid-cols-1 items-center gap-x-12 gap-y-10 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                {/* SVG Illustration */}
                <svg viewBox="0 0 400 300" className="h-auto w-full">
                  {/* Funnel End */}
                  <path
                    d="M50,130 L80,110 L80,190 L50,170 Z"
                    fill="rgba(59, 130, 246, 0.1)"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="2"
                  />

                  {/* Quote cards */}
                  {[1, 2, 3].map(i => (
                    <motion.g
                      key={i}
                      initial={{ x: 80, opacity: 0 }}
                      animate={{ x: 120 + i * 20, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 * i }}
                    >
                      <rect
                        x="0"
                        y={80 + i * 50}
                        width="180"
                        height="40"
                        rx="5"
                        fill="white"
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="2"
                      />

                      {/* Text lines */}
                      <line
                        x1="15"
                        y1={95 + i * 50}
                        x2="165"
                        y2={95 + i * 50}
                        stroke="rgba(100, 100, 100, 0.3)"
                        strokeWidth="2"
                      />

                      <line
                        x1="15"
                        y1={105 + i * 50}
                        x2="135"
                        y2={105 + i * 50}
                        stroke="rgba(100, 100, 100, 0.3)"
                        strokeWidth="2"
                      />

                      {/* Link icon */}
                      <circle
                        cx="185"
                        cy={80 + i * 50}
                        r="8"
                        fill="rgba(59, 130, 246, 0.2)"
                      />
                      <path
                        d="M182,80 L188,80 M185,77 L185,83"
                        stroke="rgba(59, 130, 246, 0.8)"
                        strokeWidth="1.5"
                      />
                    </motion.g>
                  ))}
                </svg>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold tracking-wide text-blue-600">
                STEP 2
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Extracting Their <em>Exact</em> Words
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                From the analyzed conversations, Subtext precisely captures the{" "}
                <strong>
                  verified words, slang, common phrases, and emotional triggers
                </strong>{" "}
                your audience uses. This isn't AI inventing plausible text; it's
                their actual vocabulary.
              </p>
              <div className="mt-5 flex items-start gap-2 rounded-lg bg-blue-50 p-3">
                <Check className="mt-0.5 size-5 shrink-0 text-blue-600" />
                <p className="text-sm font-medium text-blue-800">
                  <span className="font-bold">Verifiably Sourced:</span> Every
                  key quote and linguistic pattern is traceable back to its
                  original context, giving you absolute confidence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 3: Intelligent Analysis */}
          <motion.div
            className="grid grid-cols-1 items-center gap-x-12 gap-y-10 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="order-2 md:order-1">
              <span className="text-sm font-semibold tracking-wide text-blue-600">
                STEP 3
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Uncovering Segments & True Pain
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
            <div className="order-1 flex justify-center md:order-2">
              <div className="relative w-full max-w-md">
                {/* SVG Illustration */}
                <svg viewBox="0 0 400 300" className="h-auto w-full">
                  {/* Central Hub */}
                  <motion.circle
                    cx="200"
                    cy="150"
                    r="40"
                    fill="rgba(59, 130, 246, 0.1)"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="2"
                    initial={{ r: 0 }}
                    animate={{ r: 40 }}
                    transition={{ duration: 1 }}
                  />

                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {/* Inner pattern */}
                    <circle
                      cx="190"
                      cy="140"
                      r="5"
                      fill="rgba(59, 130, 246, 0.3)"
                    />
                    <circle
                      cx="210"
                      cy="140"
                      r="5"
                      fill="rgba(59, 130, 246, 0.3)"
                    />
                    <circle
                      cx="200"
                      cy="160"
                      r="5"
                      fill="rgba(59, 130, 246, 0.3)"
                    />
                    <line
                      x1="190"
                      y1="140"
                      x2="210"
                      y2="140"
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="1"
                    />
                    <line
                      x1="190"
                      y1="140"
                      x2="200"
                      y2="160"
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="1"
                    />
                    <line
                      x1="210"
                      y1="140"
                      x2="200"
                      y2="160"
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="1"
                    />
                  </motion.g>

                  {/* Audience Segments (Left) */}
                  <motion.g
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <circle
                      cx="90"
                      cy="100"
                      r="25"
                      fill="rgba(99, 102, 241, 0.1)"
                    />
                    <circle
                      cx="90"
                      cy="100"
                      r="12"
                      fill="rgba(99, 102, 241, 0.2)"
                    />
                    <circle
                      cx="70"
                      cy="150"
                      r="20"
                      fill="rgba(16, 185, 129, 0.1)"
                    />
                    <circle
                      cx="70"
                      cy="150"
                      r="10"
                      fill="rgba(16, 185, 129, 0.2)"
                    />
                    <circle
                      cx="90"
                      cy="200"
                      r="22"
                      fill="rgba(245, 158, 11, 0.1)"
                    />
                    <circle
                      cx="90"
                      cy="200"
                      r="11"
                      fill="rgba(245, 158, 11, 0.2)"
                    />

                    {/* Connecting lines */}
                    <line
                      x1="115"
                      y1="100"
                      x2="160"
                      y2="140"
                      stroke="rgba(150, 150, 150, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                    />
                    <line
                      x1="90"
                      y1="150"
                      x2="160"
                      y2="150"
                      stroke="rgba(150, 150, 150, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                    />
                    <line
                      x1="112"
                      y1="200"
                      x2="160"
                      y2="160"
                      stroke="rgba(150, 150, 150, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                    />
                  </motion.g>

                  {/* Pain Points Categories (Right) */}
                  <motion.g
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    {/* Functional tag */}
                    <rect
                      x="260"
                      y="90"
                      width="80"
                      height="25"
                      rx="4"
                      fill="rgba(99, 102, 241, 0.2)"
                    />
                    <text
                      x="270"
                      y="107"
                      fontFamily="sans-serif"
                      fontSize="12"
                      fill="rgba(99, 102, 241, 0.8)"
                    >
                      Functional
                    </text>
                    <line
                      x1="265"
                      y1="125"
                      x2="335"
                      y2="125"
                      stroke="rgba(150, 150, 150, 0.3)"
                      strokeWidth="1"
                    />

                    {/* Emotional tag */}
                    <rect
                      x="260"
                      y="140"
                      width="80"
                      height="25"
                      rx="4"
                      fill="rgba(139, 92, 246, 0.2)"
                    />
                    <text
                      x="270"
                      y="157"
                      fontFamily="sans-serif"
                      fontSize="12"
                      fill="rgba(139, 92, 246, 0.8)"
                    >
                      Emotional
                    </text>
                    <line
                      x1="265"
                      y1="175"
                      x2="335"
                      y2="175"
                      stroke="rgba(150, 150, 150, 0.3)"
                      strokeWidth="1"
                    />

                    {/* Pricing tag */}
                    <rect
                      x="260"
                      y="190"
                      width="80"
                      height="25"
                      rx="4"
                      fill="rgba(245, 158, 11, 0.2)"
                    />
                    <text
                      x="270"
                      y="207"
                      fontFamily="sans-serif"
                      fontSize="12"
                      fill="rgba(245, 158, 11, 0.8)"
                    >
                      Pricing
                    </text>
                    <line
                      x1="265"
                      y1="225"
                      x2="335"
                      y2="225"
                      stroke="rgba(150, 150, 150, 0.3)"
                      strokeWidth="1"
                    />

                    {/* Connecting lines */}
                    <line
                      x1="260"
                      y1="102"
                      x2="240"
                      y2="140"
                      stroke="rgba(150, 150, 150, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                    />
                    <line
                      x1="260"
                      y1="152"
                      x2="240"
                      y2="150"
                      stroke="rgba(150, 150, 150, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                    />
                    <line
                      x1="260"
                      y1="202"
                      x2="240"
                      y2="160"
                      stroke="rgba(150, 150, 150, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                    />
                  </motion.g>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Step 4: Actionable Outputs */}
          <motion.div
            className="grid grid-cols-1 items-center gap-x-12 gap-y-10 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                {/* SVG Illustration */}
                <svg viewBox="0 0 400 300" className="h-auto w-full">
                  {/* Top Insights List */}
                  <motion.g
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <rect
                      x="50"
                      y="60"
                      width="130"
                      height="180"
                      rx="5"
                      fill="white"
                      stroke="rgba(59, 130, 246, 0.2)"
                      strokeWidth="2"
                    />
                    <text
                      x="65"
                      y="85"
                      fontFamily="sans-serif"
                      fontSize="12"
                      fontWeight="bold"
                      fill="rgba(59, 130, 246, 0.8)"
                    >
                      Top Insights
                    </text>

                    {/* Checkmarks and lines */}
                    {[0, 1, 2, 3, 4].map(i => (
                      <g key={i}>
                        <circle
                          cx="70"
                          cy={110 + i * 25}
                          r="5"
                          fill="rgba(59, 130, 246, 0.6)"
                        />
                        <path
                          d={`M67,${110 + i * 25} L70,${113 + i * 25} L73,${107 + i * 25}`}
                          stroke="white"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <line
                          x1="85"
                          y1={110 + i * 25}
                          x2={150 + Math.random() * 20}
                          y2={110 + i * 25}
                          stroke="rgba(100, 100, 100, 0.3)"
                          strokeWidth="2"
                        />
                      </g>
                    ))}
                  </motion.g>

                  {/* Audience Questions List */}
                  <motion.g
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <rect
                      x="220"
                      y="60"
                      width="130"
                      height="180"
                      rx="5"
                      fill="white"
                      stroke="rgba(236, 72, 153, 0.2)"
                      strokeWidth="2"
                    />
                    <text
                      x="235"
                      y="85"
                      fontFamily="sans-serif"
                      fontSize="12"
                      fontWeight="bold"
                      fill="rgba(236, 72, 153, 0.8)"
                    >
                      Audience Questions
                    </text>

                    {/* Question marks and lines */}
                    {[0, 1, 2, 3, 4].map(i => (
                      <g key={i}>
                        <circle
                          cx="240"
                          cy={110 + i * 25}
                          r="5"
                          fill="rgba(236, 72, 153, 0.6)"
                        />
                        <text
                          x="237"
                          y={113 + i * 25}
                          fontFamily="sans-serif"
                          fontSize="8"
                          fontWeight="bold"
                          fill="white"
                        >
                          ?
                        </text>
                        <line
                          x1="255"
                          y1={110 + i * 25}
                          x2={320 + Math.random() * 20}
                          y2={110 + i * 25}
                          stroke="rgba(100, 100, 100, 0.3)"
                          strokeWidth="2"
                        />
                      </g>
                    ))}
                  </motion.g>
                </svg>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold tracking-wide text-blue-600">
                STEP 4
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                Delivering Actionable Clarity
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

export default VoiceToConversionSection
