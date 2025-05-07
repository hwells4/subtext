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
    <div className="relative w-full overflow-x-hidden bg-white px-4 py-12 text-center sm:py-16 md:px-6 md:py-20 lg:py-24">
      {/* Subtle Background SVG elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Rocket SVG - Adjusted for subtlety and responsiveness */}
        <div className="absolute -right-20 top-10 size-32 opacity-[0.03] sm:-right-16 sm:top-16 sm:size-48 sm:opacity-[0.04] md:right-4 md:top-20 md:size-56 lg:opacity-[0.05]">
          <div
            className="size-full rotate-12 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/rocket.svg)" }}
            aria-hidden="true"
          />
        </div>

        {/* Chain SVG - Adjusted for subtlety and responsiveness */}
        <div className="absolute -left-20 bottom-10 size-32 opacity-[0.03] sm:-left-16 sm:bottom-16 sm:size-48 sm:opacity-[0.04] md:bottom-24 md:left-4 md:size-56 lg:opacity-[0.05]">
          <div
            className="size-full -rotate-12 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/chain.svg)" }}
            aria-hidden="true"
          />
        </div>

        {/* Gear SVG - Adjusted for subtlety and responsiveness */}
        <div className="absolute -left-24 top-20 size-32 opacity-[0.02] sm:-left-20 sm:top-24 sm:size-48 sm:opacity-[0.03] md:-left-12 md:top-12 md:size-56 lg:opacity-[0.04]">
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

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <div className="mb-6 flex justify-center sm:mb-8">
          <AnimatedTooltip items={people} />
        </div>

        <h1 className="mb-5 text-center text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
          <span className="block">Capture real customer</span>
          <span className="block">
            language 100x faster
            <span className="[-top_0.08em] relative ml-1.5 inline-block size-7 rotate-[3deg] align-middle sm:ml-2 sm:size-8 md:size-10 lg:ml-3 lg:size-12">
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

        <p className="xs:max-w-xs mx-auto mb-8 max-w-[280px] text-base font-light leading-relaxed text-slate-600 sm:max-w-md sm:text-lg md:mb-10 md:max-w-xl md:text-xl lg:max-w-2xl">
          Subtext extracts and analyzes authentic language from thousands of
          real conversations at once, turning your audience's actual words into
          messaging that resonates and drives conversions.
        </p>

        <div className="mx-auto flex max-w-[320px] flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row">
          <a
            href="/waitlist"
            className="w-full rounded-lg bg-slate-900 px-6 py-3 text-center text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-slate-800 sm:w-auto sm:px-8 sm:py-3.5 sm:text-lg md:px-10"
          >
            Join Waitlist
          </a>

          <a
            href="/waitlist"
            className="w-full rounded-lg border border-slate-900 bg-transparent px-6 py-3 text-center text-base font-semibold text-slate-900 shadow-md transition-all duration-200 hover:bg-slate-100 sm:w-auto sm:px-8 sm:py-3.5 sm:text-lg md:px-10"
          >
            <span className="flex items-center justify-center">
              <Calendar className="mr-2 size-4 sm:size-5" />
              Book a Demo
            </span>
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500 sm:text-sm">
          Join the waitlist to be notified when we launch. No credit card
          required for demo.
        </p>
      </div>
    </div>
  )
}
