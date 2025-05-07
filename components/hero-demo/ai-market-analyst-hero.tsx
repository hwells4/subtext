"use client"

import React, { useState } from "react"
import Image from "next/image"
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring
} from "framer-motion"
import { cn } from "@/lib/utils"

const people = [
  {
    id: 1,
    name: "Emma Wilson",
    designation: "CTO at TechCorp",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Michael Chang",
    designation: "Founder at InnovateX",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    designation: "CEO at DataDriven",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 4,
    name: "James Rodriguez",
    designation: "Head of Marketing at MarketLead",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 5,
    name: "Aisha Patel",
    designation: "Co-Founder at FoundersHub",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 6,
    name: "David Kim",
    designation: "Chief Analyst at Analytica",
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
]

// AnimatedTooltip component from your provided code
const AnimatedTooltip = ({
  items,
  className
}: {
  items: {
    id: number
    name: string
    designation: string
    image: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0)
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  )
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  )
  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth)
  }

  return (
    <div className={cn("flex items-center", className)}>
      {items.map(item => (
        <div
          className="group relative -mr-5"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10
                  }
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap"
                }}
                className="bg-foreground absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="text-background relative z-30 text-base font-bold">
                  {item.name}
                </div>
                <div className="text-muted-foreground text-xs">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative !m-0 size-14 rounded-full border-2 border-white object-cover object-top !p-0 shadow-sm transition duration-500 group-hover:z-30 group-hover:scale-105 md:size-16"
          />
        </div>
      ))}
    </div>
  )
}

export default function AiMarketAnalystHero() {
  const accentColorFrom = "#4F46E5" // Tailwind indigo-600
  const accentColorTo = "#818CF8" // Tailwind indigo-400 (for a subtle gradient on icon)

  return (
    <div className="relative w-full overflow-hidden bg-white px-4 pb-16 pt-20 text-center md:pb-24 md:pt-28">
      {/* Background SVG elements - using divs with background images for better SSR compatibility */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Rocket SVG */}
        <div className="absolute -right-16 top-16 size-48 opacity-10 md:right-4 md:top-20 md:size-64 lg:opacity-15">
          <div
            className="size-full rotate-12 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/rocket.svg)" }}
            aria-hidden="true"
          />
        </div>

        {/* Chain SVG */}
        <div className="absolute -left-16 bottom-16 size-48 opacity-10 md:bottom-24 md:left-4 md:size-64 lg:opacity-15">
          <div
            className="size-full -rotate-12 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/chain.svg)" }}
            aria-hidden="true"
          />
        </div>

        {/* Gear SVG */}
        <div className="opacity-8 absolute -left-24 top-24 size-48 md:-left-12 md:top-12 md:size-56 lg:opacity-10">
          <motion.div
            className="size-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/gear.svg)" }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear"
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-4xl">
        {/* Testimonial Avatars with AnimatedTooltip */}
        <div className="mb-8 flex justify-center">
          <AnimatedTooltip items={people} />
        </div>

        {/* Headline with Accent Icon - PRD 5.4 */}
        <h1 className="mb-6 text-5xl font-extrabold lowercase tracking-tight md:text-6xl lg:text-7xl ">
          <span className="bg-gradient-to-r from-slate-800 to-slate-950 bg-clip-text text-transparent">
            Capture real customer language 100x faster
          </span>
          <span className="relative top-[-0.05em] ml-2 inline-block size-10 rotate-[3deg] align-middle md:ml-3 md:size-12 lg:size-14">
            <Image
              src="/lightning-icon.png"
              alt="Lightning Bolt"
              width={56}
              height={56}
              className="transition-transform duration-200 ease-in-out hover:scale-110"
              priority
            />
          </span>
        </h1>

        {/* Sub-headline - PRD 5.5 */}
        <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-slate-600 md:text-xl lg:max-w-3xl">
          Subtext extracts and analyzes authentic language from thousands of
          real conversations at once, turning your audience's actual words into
          messaging that resonates and drives conversions.
        </p>

        {/* CTA Button - PRD 5.6 */}
        <button className="rounded-lg bg-slate-900 px-8 py-3 text-lg font-semibold text-white shadow-md transition-shadow duration-200 ease-in-out hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:px-10 md:py-4">
          Start Validating for Free
        </button>
      </div>
    </div>
  )
}
