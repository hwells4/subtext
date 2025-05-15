"use client"

import React from "react"
import { AnimatedGroup } from "@/components/ui/animated-group"
import Image from "next/image"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.2
      }
    }
  }
}

export default function AppScreenshotSection() {
  return (
    <AnimatedGroup
      viewportMargin="-20%"
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.5
            }
          }
        },
        ...transitionVariants
      }}
    >
      <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
        <div
          aria-hidden
          className="to-background absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35%"
        />
        <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
          <Image
            className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
            src="/placeholder.svg?width=2700&height=1440&query=app_screenshot_dark_theme_mail_interface"
            alt="App screenshot showing email interface - dark mode"
            width={2700}
            height={1440}
          />
          <Image
            className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
            src="/placeholder.svg?width=2700&height=1440&query=app_screenshot_light_theme_mail_interface"
            alt="App screenshot showing email interface - light mode"
            width={2700}
            height={1440}
          />
        </div>
      </div>
    </AnimatedGroup>
  )
}
