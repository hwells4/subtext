"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Shield,
  Zap
} from "lucide-react"
import { useRouter } from "next/navigation"

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")
      router.push("/waitlist") // Redirect to waitlist page

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000)
    }, 1500)
  }

  return (
    <section className="from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 w-full border-t bg-gradient-to-br py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <AnimatedGroup
            className="flex flex-col space-y-8"
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
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Transform Your Voice Communications?
              </h2>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Join our waitlist to be the first to know when we launch.
                Experience the full power of our platform with all premium
                features.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary size-5" />
                  <span className="font-medium">
                    Unlimited voice recordings
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary size-5" />
                  <span className="font-medium">
                    Complete analytics dashboard
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary size-5" />
                  <span className="font-medium">Priority customer support</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Shield className="text-muted-foreground size-4" />
                <span className="text-muted-foreground">
                  Enterprise-grade security and compliance
                </span>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="h-12"
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-12 px-8"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : isSuccess
                    ? "Success!"
                    : "Get Started"}
                {!isSubmitting && !isSuccess && (
                  <ArrowRight className="ml-2 size-4" />
                )}
                {isSuccess && <Check className="ml-2 size-4" />}
              </Button>
            </form>
          </AnimatedGroup>

          <AnimatedGroup
            className="overflow-hidden rounded-xl border shadow-xl"
            variants={{
              container: {
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.8
                  }
                }
              }
            }}
          >
            <Card className="bg-background">
              <div className="flex items-center justify-between border-b p-6">
                <div>
                  <h3 className="text-lg font-bold">Premium Plan</h3>
                  <p className="text-muted-foreground">
                    Everything you need to succeed
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">$49</div>
                  <div className="text-muted-foreground text-sm">per month</div>
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-1.5">
                    <Zap className="text-primary size-4" />
                  </div>
                  <div>
                    <div className="font-medium">Unlimited recordings</div>
                    <div className="text-muted-foreground text-sm">
                      No cap on monthly usage
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-1.5">
                    <Zap className="text-primary size-4" />
                  </div>
                  <div>
                    <div className="font-medium">Advanced analytics</div>
                    <div className="text-muted-foreground text-sm">
                      Deep insights into your data
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-1.5">
                    <Zap className="text-primary size-4" />
                  </div>
                  <div>
                    <div className="font-medium">Team collaboration</div>
                    <div className="text-muted-foreground text-sm">
                      Up to 10 team members
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t p-6">
                <Button className="group w-full" size="lg" asChild>
                  <a href="/waitlist">
                    Join Waitlist
                    <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <p className="text-muted-foreground mt-3 text-center text-xs">
                  Be the first to know when we launch.
                </p>
              </div>
            </Card>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  )
}
