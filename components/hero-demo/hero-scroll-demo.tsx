"use client"
import React from "react"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"

export function HeroScrollDemo() {
  return (
    <div className="-mt-40 flex flex-col overflow-hidden pb-[200px] md:-mt-64 lg:-mt-80">
      <ContainerScroll titleComponent={null}>
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
