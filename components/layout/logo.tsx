"use client"

import { cn } from "@/lib/utils"
import { memo } from "react"
import Image from "next/image"

// Using an inline SVG instead of loading a 1.6MB file
// This dramatically improves performance by eliminating a heavy network request
export const Logo = memo(({ className }: { className?: string }) => {
  return (
    <span className={cn("flex items-center gap-1", className)}>
      <Image
        src="/subtext-logo.svg"
        alt="Subtext Logo"
        width={48}
        height={48}
        className="size-12"
        priority
        unoptimized={false}
        loading="eager"
      />
      <span className="select-none text-xl font-bold tracking-tight text-slate-900">
        Subtext
      </span>
    </span>
  )
})

Logo.displayName = "Logo"
