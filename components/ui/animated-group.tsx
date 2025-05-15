"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
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
  viewportMargin?: string
  // Add other specific HTML div props if needed, e.g., id?: string;
}

export function AnimatedGroup({
  children,
  className,
  variants,
  staggerDelay = 0.1, // Default stagger delay
  viewportMargin = "-20%" // Changed from -100px to -20% to make animations trigger earlier
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

  // Ensure children is an array even if it's a single child
  const childrenArray = React.Children.toArray(children)

  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
    >
      {childrenArray.map((child, index) =>
        React.isValidElement(child) ? (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  )
}
