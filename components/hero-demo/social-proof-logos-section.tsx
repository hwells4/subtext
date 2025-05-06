"use client"

import Image from "next/image"
import React from "react"

const logos = [
  {
    name: "TechCorp",
    src: "/placeholder.svg?width=140&height=40&query=modern_tech_logo_TechCorp_grayscale_minimalist",
    alt: "TechCorp Logo"
  },
  {
    name: "InnovateX",
    src: "/placeholder.svg?width=140&height=40&query=modern_tech_logo_InnovateX_grayscale_abstract",
    alt: "InnovateX Logo"
  },
  {
    name: "DataDriven",
    src: "/placeholder.svg?width=140&height=40&query=modern_tech_logo_DataDriven_grayscale_geometric",
    alt: "DataDriven Logo"
  },
  {
    name: "MarketLead",
    src: "/placeholder.svg?width=140&height=40&query=modern_tech_logo_MarketLead_grayscale_sleek",
    alt: "MarketLead Logo"
  },
  {
    name: "FoundersHub",
    src: "/placeholder.svg?width=140&height=40&query=modern_tech_logo_FoundersHub_grayscale_community",
    alt: "FoundersHub Logo"
  },
  {
    name: "Analytica",
    src: "/placeholder.svg?width=140&height=40&query=modern_tech_logo_Analytica_grayscale_sharp",
    alt: "Analytica Logo"
  }
]

export default function SocialProofLogosSection() {
  return (
    <div className="w-full bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="mb-8 text-center text-sm font-normal text-slate-500">
          Trusted by forward-thinking founders & marketers
        </h3>
        <div className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
          {logos.map(logo => (
            <div
              key={logo.name}
              className="flex items-center justify-center opacity-60 transition-opacity duration-200 ease-in-out hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120} // Slightly smaller for a more subtle look
                height={35}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
