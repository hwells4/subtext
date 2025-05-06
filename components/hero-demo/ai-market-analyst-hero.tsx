"use client"

import React from "react"
import Image from "next/image"

const testimonialAvatars = [
  {
    id: 1,
    src: "/placeholder.svg?width=48&height=48&query=professional_avatar_1_neutral_expression_grayscale_filter",
    alt: "User Avatar 1"
  },
  {
    id: 2,
    src: "/placeholder.svg?width=48&height=48&query=professional_avatar_2_neutral_expression_grayscale_filter",
    alt: "User Avatar 2"
  },
  {
    id: 3,
    src: "/placeholder.svg?width=48&height=48&query=professional_avatar_3_neutral_expression_grayscale_filter",
    alt: "User Avatar 3"
  },
  {
    id: 4,
    src: "/placeholder.svg?width=48&height=48&query=professional_avatar_4_neutral_expression_grayscale_filter",
    alt: "User Avatar 4"
  }
]

export default function AiMarketAnalystHero() {
  const accentColorFrom = "#4F46E5" // Tailwind indigo-600
  const accentColorTo = "#818CF8" // Tailwind indigo-400 (for a subtle gradient on icon)

  return (
    <div className="w-full bg-white px-4 pb-16 pt-20 text-center md:pb-24 md:pt-28">
      <div className="mx-auto w-full max-w-4xl">
        {/* Testimonial Avatars - PRD 5.3 */}
        <div className="mb-8 flex items-center justify-center -space-x-3">
          {testimonialAvatars.map(avatar => (
            <Image
              key={avatar.id}
              src={avatar.src}
              alt={avatar.alt}
              width={48}
              height={48}
              className="rounded-full border-2 border-white shadow-md"
            />
          ))}
        </div>

        {/* Headline with Accent Icon - PRD 5.4 */}
        <h1 className="mb-6 text-5xl font-extrabold lowercase tracking-tight md:text-6xl lg:text-7xl ">
          <span className="bg-gradient-to-r from-slate-800 to-slate-950 bg-clip-text text-transparent">
            unlock reddit's insights. 100x faster.
          </span>
          <span className="relative top-[-0.05em] ml-2 inline-block size-[calc(1em*0.85)] rotate-[3deg] align-middle md:ml-3">
            {/* Using a div for gradient background on a simple shape for now, replace with actual SVG/Image later */}
            <span
              className="inline-block size-full rounded-[20%] transition-transform duration-200 ease-in-out group-hover:scale-110"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${accentColorFrom}, ${accentColorTo})`,
                boxShadow: "0px 4px 10px -2px rgba(79, 70, 229, 0.4)" // Softer shadow for the icon
              }}
              aria-label="Productivity Boost Icon"
            ></span>
          </span>
        </h1>

        {/* Sub-headline - PRD 5.5 */}
        <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-slate-600 md:text-xl lg:max-w-3xl">
          Stop guessing. Start validating. Our AI analyzes thousands of Reddit
          conversations, extracting authentic user language to give you
          trustworthy product insights in minutes, not weeks.
        </p>

        {/* CTA Button - PRD 5.6 */}
        <button className="rounded-lg bg-slate-900 px-8 py-3 text-lg font-semibold text-white shadow-md transition-shadow duration-200 ease-in-out hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:px-10 md:py-4">
          Start Validating for Free
        </button>

        {/* Social Proof Hint - PRD 5.7 */}
        <p className="mt-12 text-sm text-slate-500">
          Trusted by forward-thinking founders & marketers
        </p>
      </div>
    </div>
  )
}
