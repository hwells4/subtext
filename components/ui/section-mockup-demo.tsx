"use client"

import React from "react"
import SectionWithMockup from "@/components/ui/section-with-mockup"

// Data for the demo section (default layout)
const exampleData = {
  title: (
    <>
      Intelligence,
      <br />
      delivered to you.
    </>
  ),
  description: (
    <>
      Get a tailored Monday morning brief directly in
      <br />
      your inbox, crafted by your virtual personal
      <br />
      analyst, spotlighting essential watchlist stories
      <br />
      and earnings for the week ahead.
    </>
  ),
  // Using Unsplash images as replacements
  primaryImageSrc:
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?q=80&w=1769&auto=format&fit=crop",
  secondaryImageSrc:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1770&auto=format&fit=crop"
}

export function SectionMockupDemo() {
  return (
    <SectionWithMockup
      title={exampleData.title}
      description={exampleData.description}
      primaryImageSrc={exampleData.primaryImageSrc}
      secondaryImageSrc={exampleData.secondaryImageSrc}
    />
  )
}

export default SectionMockupDemo
