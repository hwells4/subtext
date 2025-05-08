"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Calendar } from "lucide-react"
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
    <div className={cn("flex items-center justify-center", className)}>
      {items.map(item => (
        <div
          className="group relative -mr-3 sm:-mr-4 md:-mr-5"
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
            className="relative !m-0 size-10 rounded-full border-2 border-white object-cover object-top !p-0 shadow-sm transition duration-500 group-hover:z-30 group-hover:scale-105 sm:size-12 md:size-14"
          />
        </div>
      ))}
    </div>
  )
}

export default function AiMarketAnalystHero() {
  return (
    <div className="relative w-full overflow-x-hidden bg-white px-4 pb-36 pt-20 text-center sm:pb-48 sm:pt-24 md:px-6 md:pb-60 md:pt-28 lg:pb-72 lg:pt-32">
      {/* Subtle Background SVG elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Rocket SVG - Adjusted for subtlety and responsiveness */}
        <div className="absolute -right-20 top-20 size-40 opacity-[0.03] sm:-right-16 sm:top-32 sm:size-64 sm:opacity-[0.04] md:right-8 md:top-40 md:size-80 lg:opacity-[0.05]">
          <div
            className="size-full rotate-12 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/rocket.svg)" }}
            aria-hidden="true"
          />
        </div>

        {/* Chain SVG - Adjusted for subtlety and responsiveness */}
        <div className="absolute -left-20 bottom-20 size-40 opacity-[0.03] sm:-left-16 sm:bottom-32 sm:size-64 sm:opacity-[0.04] md:bottom-40 md:left-8 md:size-80 lg:opacity-[0.05]">
          <div
            className="size-full -rotate-12 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/chain.svg)" }}
            aria-hidden="true"
          />
        </div>

        {/* Gear SVG - Adjusted for subtlety and responsiveness */}
        <div className="absolute -left-24 top-40 size-40 opacity-[0.02] sm:-left-20 sm:top-48 sm:size-64 sm:opacity-[0.03] md:-left-12 md:top-24 md:size-80 lg:opacity-[0.04]">
          <motion.div
            className="size-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/gear.svg)" }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 25, // Slower rotation
              ease: "linear"
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <div className="mb-14 flex justify-center sm:mb-16">
          <AnimatedTooltip items={people} />
        </div>

        <h1 className="mb-12 text-center leading-tight tracking-tight text-slate-900">
          <span className="block text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-8xl">
            Capture real customer
          </span>
          <span className="mt-2 block text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-8xl">
            language 100x faster
            <span className="[-top_0.08em] relative ml-3 inline-block size-10 rotate-[3deg] align-middle sm:ml-4 sm:size-14 md:size-16 lg:ml-5 lg:size-20">
              <Image
                src="/lightning-icon.png"
                alt="Lightning Bolt"
                fill
                className="object-contain transition-transform duration-200 ease-in-out hover:scale-110"
                priority
              />
            </span>
          </span>
        </h1>

        <p className="xs:max-w-xs mx-auto mb-16 max-w-[480px] text-xl font-light leading-relaxed text-slate-600 sm:max-w-lg sm:text-2xl md:mb-20 md:max-w-3xl md:text-3xl lg:max-w-4xl lg:leading-relaxed">
          Subtext extracts and analyzes authentic language from thousands of
          real conversations at once, turning your audience's actual words into
          messaging that resonates and drives conversions.
        </p>

        <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center gap-8 sm:max-w-none sm:flex-row">
          <a
            href="/waitlist"
            className="w-full rounded-lg bg-slate-900 px-10 py-5 text-center text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-slate-800 sm:w-auto sm:px-12 sm:py-6 sm:text-xl md:px-16 md:py-6 md:text-2xl"
          >
            Join Waitlist
          </a>

          <a
            href="/waitlist"
            className="w-full rounded-lg border border-slate-900 bg-transparent px-10 py-5 text-center text-lg font-semibold text-slate-900 shadow-md transition-all duration-200 hover:bg-slate-100 sm:w-auto sm:px-12 sm:py-6 sm:text-xl md:px-16 md:py-6 md:text-2xl"
          >
            <span className="flex items-center justify-center">
              <Calendar className="mr-4 size-6 sm:size-7 md:size-8" />
              Book a Demo
            </span>
          </a>
        </div>

        <p className="mt-10 text-base text-slate-500 sm:text-lg md:text-xl">
          Join the waitlist to be notified when we launch. No credit card
          required for demo.
        </p>
      </div>
    </div>
  )
}
