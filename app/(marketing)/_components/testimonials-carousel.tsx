"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "We've seen a 43% increase in customer engagement since implementing this voice communication solution. Our team now spends less time transcribing and more time connecting with clients.",
    author: "Sarah Johnson",
    title: "Customer Success Manager",
    company: "TechGrowth Solutions",
    avatar: "/placeholders/avatar-1.jpg"
  },
  {
    quote:
      "The accuracy of the voice analytics helps us identify customer sentiment in real-time. This has transformed how we approach our support calls and improved our response strategies.",
    author: "Michael Chen",
    title: "VP of Customer Experience",
    company: "Innovate Inc.",
    avatar: "/placeholders/avatar-2.jpg"
  },
  {
    quote:
      "Implementation was seamless, and the ROI was immediate. Within three months, we reduced call handle times by 27% while improving our satisfaction scores. This platform pays for itself.",
    author: "Jessica Williams",
    title: "Operations Director",
    company: "Global Services",
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
  }, [isAutoPlaying])

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
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl text-lg">
            Discover how organizations are transforming their communication with
            our voice solution
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
                  <blockquote className="mb-6 text-lg italic md:text-xl">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>

                  <div>
                    <h4 className="font-semibold">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[activeIndex].title},{" "}
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>

                <div className="relative size-32 shrink-0">
                  <div className="bg-muted relative mx-auto size-28 overflow-hidden rounded-full">
                    {/* Use Image component with placeholder or avatar */}
                    <div className="text-primary/30 absolute inset-0 flex items-center justify-center text-2xl font-bold">
                      {testimonials[activeIndex].author.charAt(0)}
                    </div>
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
