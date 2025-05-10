"use client"
import React from "react"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroScrollDemo() {
  return (
    <div className="relative -mt-20 flex flex-col overflow-hidden pb-[152px] sm:-mt-32 md:-mt-40 lg:-mt-48">
      {/* Spinning Gear SVG at bottom left - Adjusted z-index and positioning */}
      <div className="pointer-events-none absolute bottom-32 left-4 z-0 w-28 opacity-5 sm:bottom-44 sm:left-12 sm:w-32 sm:opacity-15 md:bottom-52 md:left-20 md:w-40 lg:bottom-36 lg:left-16 lg:w-48 lg:opacity-10">
        <motion.div
          className="size-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear"
          }}
        >
          <Image
            src="/gear.svg"
            alt=""
            width={200}
            height={200}
            className="h-auto w-full"
          />
        </motion.div>
      </div>
      {/* Chain SVG - Adjusted z-index */}
      <div className="absolute -left-20 top-4 z-0 size-40 opacity-[0.05] sm:-left-16 sm:bottom-32 sm:size-64 sm:opacity-[0.04] md:bottom-40 md:left-8 md:size-80 lg:opacity-[0.05]">
        <div
          className="size-full -rotate-12 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/chain.svg)" }}
          aria-hidden="true"
        />
      </div>

      {/* Shield SVG moved to bottom right - Adjusted z-index and positioning for consistency */}
      <div className="pointer-events-none absolute bottom-20 right-5 z-0 w-28 opacity-10 sm:bottom-24 sm:right-12 sm:w-40 sm:opacity-0 md:bottom-28 md:right-20 md:w-56 md:opacity-0 lg:bottom-[25rem] lg:right-20 lg:w-64 lg:opacity-10">
        <Image
          src="/shield.svg"
          alt=""
          width={220}
          height={220}
          className="h-auto w-full"
        />
      </div>

      <ContainerScroll titleComponent={null} pauseAtFlatThreshold={true}>
        <div className="size-full">
          <iframe
            className="size-full rounded-xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0&showinfo=0&modestbranding=1"
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </ContainerScroll>
    </div>
  )
}
