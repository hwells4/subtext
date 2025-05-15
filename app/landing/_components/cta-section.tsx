"use client"

import { useState, useCallback, memo } from "react"
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
import Link from "next/link"
import { useRouter } from "next/navigation"

// Memoized components to prevent unnecessary re-renders
const FeatureItem = memo(({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    <CheckCircle2 className="text-primary size-5" />
    <span className="font-medium">{children}</span>
  </div>
))
FeatureItem.displayName = "FeatureItem"

const PlanFeature = memo(
  ({ title, description }: { title: string; description: string }) => (
    <div className="flex items-center gap-3">
      <div className="bg-primary/10 rounded-full p-1.5">
        <Zap className="text-primary size-4" />
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-muted-foreground text-sm">{description}</div>
      </div>
    </div>
  )
)
PlanFeature.displayName = "PlanFeature"

// Simplified animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 10 }, // Reduced y offset
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2, // Reduced bounce for performance
      duration: 0.4 // Faster animations
    }
  }
}

const containerVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05 // Reduced stagger time
      }
    }
  },
  item: itemVariants
}

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  )
  const router = useRouter()

  // Memoized handlers for better performance
  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    },
    []
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (!email) return

      setFormState("submitting")

      // Use requestAnimationFrame for better performance during transitions
      requestAnimationFrame(() => {
        // Simulate API call
        setTimeout(() => {
          setFormState("success")
          setEmail("")

          // Delay redirect slightly to show success state
          setTimeout(() => router.push("/waitlist"), 400)
        }, 800) // Reduced timeout for better UX
      })
    },
    [email, router]
  )

  const isSubmitting = formState === "submitting"
  const isSuccess = formState === "success"

  return (
    <section className="from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 w-full border-t bg-gradient-to-br py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <AnimatedGroup
            className="flex flex-col space-y-8"
            variants={containerVariants}
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
                <FeatureItem>Unlimited voice recordings</FeatureItem>
                <FeatureItem>Complete analytics dashboard</FeatureItem>
                <FeatureItem>Priority customer support</FeatureItem>
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
                  onChange={handleEmailChange}
                  required
                  className="h-12"
                  disabled={isSubmitting}
                  aria-label="Email address"
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
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.5
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
                <PlanFeature
                  title="Unlimited recordings"
                  description="No cap on monthly usage"
                />
                <PlanFeature
                  title="Advanced analytics"
                  description="Deep insights into your data"
                />
                <PlanFeature
                  title="Team collaboration"
                  description="Up to 10 team members"
                />
              </div>

              <div className="border-t p-6">
                <Button className="group w-full" size="lg" asChild>
                  <Link href="/waitlist" prefetch={false}>
                    Join Waitlist
                    <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
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
