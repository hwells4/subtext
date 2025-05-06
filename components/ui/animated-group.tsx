"use client"

import React from "react"
import { motion, Variants, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

// Explicitly define props inherited from HTMLDivElement that we might use
// Exclude props that might conflict with motion props (like event handlers with different signatures)
// Or simplify by just defining what AnimatedGroup adds, if no standard div props are needed beyond className/children
interface AnimatedGroupProps {
  children: React.ReactNode
  className?: string
  variants: {
    container?: Variants
    item?: Variants
  }
  staggerDelay?: number
  // Add other specific HTML div props if needed, e.g., id?: string;
}

export function AnimatedGroup({
  children,
  className,
  variants,
  staggerDelay = 0.1 // Default stagger delay
}: AnimatedGroupProps) {
  // <-- Use the refined props interface

  console.log("AnimatedGroup received children:", children) // <-- ADD LOGGING

  const containerVariants = variants.container || {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  }

  const itemVariants = variants.item || {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  }

  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {React.Children.map(children, child =>
        // Only wrap valid React elements, pass others through
        React.isValidElement(child) ? (
          <motion.div variants={itemVariants}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  )
}
