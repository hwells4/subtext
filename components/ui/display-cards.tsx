"use client"

import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

interface DisplayCardProps {
  className?: string
  icon?: React.ReactNode
  title?: string
  description?: string
  date?: string
  iconClassName?: string
  titleClassName?: string
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-5 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500"
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "bg-muted/70 after:from-background hover:bg-muted relative flex h-48 w-[20rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 px-5 py-4 text-sm backdrop-blur-sm transition-all duration-700 ease-in-out after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[15rem] after:bg-gradient-to-l after:to-transparent after:content-[''] hover:border-white/20 sm:h-52 sm:w-[24rem] sm:px-6 sm:py-5 sm:text-base after:sm:w-[18rem] md:w-[28rem] after:md:w-[20rem] [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-blue-800 p-1.5">
          {icon}
        </span>
        <p className={cn("text-lg font-medium sm:text-xl", titleClassName)}>
          {title}
        </p>
      </div>

      <p className="text-wrap break-words text-sm leading-tight sm:text-lg">
        {description}
      </p>

      <p className="text-muted-foreground text-xs font-medium sm:text-sm">
        {date}
      </p>
    </div>
  )
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[]
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className:
        "[grid-area:stack] hover:-translate-y-12 sm:hover:-translate-y-16 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity hover:grayscale-0 before:left-0 before:top-0 transition-all duration-1000 ease-in-out"
    },
    {
      className:
        "[grid-area:stack] translate-x-6 translate-y-10 hover:-translate-y-2 sm:translate-x-12 sm:translate-y-16 sm:hover:-translate-y-4 md:translate-x-16 md:translate-y-20 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity hover:grayscale-0 before:left-0 before:top-0 transition-all duration-1000 ease-in-out"
    },
    {
      className:
        "[grid-area:stack] translate-x-12 translate-y-20 hover:translate-y-10 sm:translate-x-24 sm:translate-y-32 sm:hover:translate-y-16 md:translate-x-32 md:translate-y-40 transition-all duration-1000 ease-in-out"
    }
  ]

  const displayCards = cards || defaultCards

  return (
    <div className="grid size-full place-items-center justify-items-center opacity-100 [grid-template-areas:'stack']">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  )
}
