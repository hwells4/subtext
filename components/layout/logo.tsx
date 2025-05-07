import { cn } from "@/lib/utils"
import Image from "next/image"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <span className={cn("flex items-center gap-1", className)}>
      <Image
        src="/subtext-logo.svg"
        alt="Subtext Logo"
        width={48}
        height={48}
        className="size-12"
        priority
      />
      <span className="select-none text-xl font-medium lowercase tracking-tight text-slate-900">
        subtext
      </span>
    </span>
  )
}
