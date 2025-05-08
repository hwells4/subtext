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
  // Images are now replaced with panel.svg directly in the component
  primaryImageSrc: "/panel.svg",
  secondaryImageSrc: "/panel.svg"
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
