"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "When you speak to someone specific, they feel seen. Subtext helps us make every customer feel like we're talking directly to them because we ARE using their exact language.",
    author: "Jordan Lee",
    title: "CMO at GrowthTech",
    avatar: "/placeholders/avatar-1.jpg"
  },
  {
    quote:
      "We've reduced our research time by 95% while delivering more authentic messaging that drives real results for our clients.",
    author: "Taylor Smith",
    title: "Agency Director at ConvertAgency",
    avatar: "/placeholders/avatar-2.jpg"
  },
  {
    quote:
      "The difference between generic AI content and Subtext's extracted language is night and day. One sounds like a chatbot, the other sounds like our actual customers.",
    author: "Alex Rivera",
    title: "Content Director at SaaSGrowth",
    avatar: "/placeholders/avatar-3.jpg"
  }
]

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length)
    }, 8000) // Change every 8 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  // Pause auto-play on user interaction
  const handleManualNavigation = (index: number) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)

    // Resume auto-play after 10 seconds of inactivity
    const timeout = setTimeout(() => setIsAutoPlaying(true), 10000)
    return () => clearTimeout(timeout)
  }

  const nextTestimonial = () => {
    handleManualNavigation((activeIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    handleManualNavigation(
      (activeIndex - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section className="w-full bg-white py-24 dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <AnimatedGroup
          className="mb-12 flex flex-col items-center text-center"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            },
            item: {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.6
                }
              }
            }
          }}
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl text-lg">
            Hear from marketers who've transformed their messaging with Subtext
          </p>
        </AnimatedGroup>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <AnimatedGroup
            className="relative overflow-hidden"
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              },
              item: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    type: "spring",
                    duration: 0.8
                  }
                }
              }
            }}
            key={activeIndex} // Force re-render on testimonial change
          >
            <Card className="relative p-8 md:p-10">
              <Quote className="text-primary/10 absolute -left-2 -top-2 size-16 rotate-180" />

              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="w-full md:w-3/4">
                  <blockquote className="mb-6 text-lg italic">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>

                  <div>
                    <h4 className="font-semibold">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[activeIndex].title}
                    </p>
                  </div>
                </div>

                <div className="relative size-32 shrink-0">
                  <div className="bg-muted relative mx-auto size-28 overflow-hidden rounded-full">
                    {/* Use Image component with placeholder or avatar */}
                    <Image
                      src={
                        testimonials[activeIndex].avatar.startsWith(
                          "/placeholder"
                        )
                          ? testimonials[activeIndex].avatar
                          : `/placeholder.svg?width=112&height=112&query=abstract_user_avatar_${activeIndex + 1}`
                      }
                      alt={testimonials[activeIndex].author}
                      width={112}
                      height={112}
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedGroup>

          <div className="mt-6 flex justify-between">
            <Button
              size="icon"
              variant="outline"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNavigation(index)}
                  className={`size-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
