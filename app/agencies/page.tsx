"use client" // Retaining client for smooth scroll, can be optimized if not strictly needed

import AgencyHero from "./_components/agency-hero" // Assuming this path is correct
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  BarChartBig,
  CheckCircle,
  DollarSign,
  Feather,
  HeartHandshake,
  Lightbulb,
  PenLine,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap
} from "lucide-react"
import React from "react"

const transformFeatures = [
  {
    icon: <Target className="size-8" />,
    title: "Rapid Client Onboarding",
    description:
      "Instantly grasp new client landscapes and audience nuances with AI-driven analysis.",
    bgColor: "bg-sky-500/10",
    textColor: "text-sky-600"
  },
  {
    icon: <BarChartBig className="size-8" />,
    title: "Scalable Research Power",
    description:
      "Conduct deep, authentic research across your entire client roster simultaneously.",
    bgColor: "bg-lime-500/10",
    textColor: "text-lime-600"
  },
  {
    icon: <Lightbulb className="size-8" />,
    title: "Unique Angle Discovery",
    description:
      "Uncover fresh insights and compelling differentiators for standout campaigns.",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600"
  },
  {
    icon: <PenLine className="size-8" />,
    title: "Client-Winning Copy",
    description:
      "Craft resonant, high-converting copy using your audience's exact language.",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-600"
  },
  {
    icon: <Settings2 className="size-8" />,
    title: "Streamlined Workflows",
    description:
      "Integrate authentic research directly into your content and campaign pipelines.",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-600"
  },
  {
    icon: <Zap className="size-8" />,
    title: "Future-Proof Strategy",
    description:
      "Stay ahead with continuous insights and (Future) white-label reporting.",
    bgColor: "bg-teal-500/10",
    textColor: "text-teal-600"
  }
]

const agencyBenefits = [
  {
    icon: <TrendingUp className="text-primary size-10" />,
    title: "Skyrocket Efficiency",
    description:
      "Slash research hours, multiply output. Focus on strategy, not grunt work."
  },
  {
    icon: <Sparkles className="text-primary size-10" />,
    title: "Amplify Client Results",
    description:
      "Deliver data-backed campaigns that consistently outperform expectations."
  },
  {
    icon: <HeartHandshake className="text-primary size-10" />,
    title: "Boost Client Retention",
    description:
      "Showcase undeniable ROI and strategic mastery that clients won't leave."
  },
  {
    icon: <DollarSign className="text-primary size-10" />,
    title: "Maximize Profitability",
    description:
      "Scale your services and impact without proportionally increasing overhead."
  }
]

const testimonial = {
  quote:
    "VoiceScape AI cut our new client research dashboard build time from several hours down to about 20 minutes per account. It's a game-changer for scaling our initial analysis.",
  author: "Sarah Chen, COO",
  company: "Momentum Digital Agency",
  avatarQuery:
    "abstract_female_portrait_professional_profile_picture_warm_tones"
}

export default function VoiceScapeAgencyPage() {
  const pricingRef = React.useRef<null | HTMLDivElement>(null)

  const handleScrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="bg-background text-foreground min-h-screen antialiased">
      <AgencyHero scrollToPricing={handleScrollToPricing} />

      <main className="container mx-auto space-y-24 px-4 py-16 md:space-y-32 md:px-6 md:py-24">
        {/* The Agency Challenge */}
        <section className="relative mx-auto max-w-4xl text-center">
          <Feather className="text-primary/10 absolute -top-8 left-1/2 size-16 -translate-x-1/2 opacity-50" />
          <h2 className="text-primary text-sm font-semibold uppercase tracking-wider">
            The Core Problem
          </h2>
          <p className="text-foreground mt-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Juggling Diverse Clients, Demanding Results.
          </p>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed md:text-xl">
            Your agency thrives on delivering unique strategies for multiple
            clients. But manually unearthing authentic audience insights for
            each one? There's just not enough time in the day. Generic tools
            fall short, and time spent on deep research doesn't scale linearly
            with your client load. You need a smarter way to understand every
            customer's true voice, pain points, and motivations to craft
            campaigns that truly connect and convert.
          </p>
        </section>

        {/* How VoiceScape AI Transforms */}
        <section>
          <div className="text-center">
            <h2 className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Solution
            </h2>
            <p className="text-foreground mt-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Transform Your Agency with Real Customer Language. At Scale.
            </p>
            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg md:text-xl">
              VoiceScape AI isn't just another tool. It's your agency's new
              research engine, designed to amplify your team's strategic
              capabilities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {transformFeatures.map((feature, index) => (
              <Card
                key={feature.title}
                className={cn(
                  "border-border/70 bg-card hover:shadow-primary/10 flex flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]",
                  `hover:border-${feature.textColor.split("-")[1]}-500/50`
                )}
              >
                <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-6">
                  <div
                    className={cn(
                      "mt-1 rounded-lg p-3",
                      feature.bgColor,
                      feature.textColor
                    )}
                  >
                    {React.cloneElement(feature.icon, {
                      className: cn(feature.icon.props.className, "size-6")
                    })}
                  </div>
                  <CardTitle className="text-foreground text-xl font-semibold leading-snug">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grow p-6 pt-0">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="from-primary/90 via-primary relative overflow-hidden rounded-xl bg-gradient-to-br to-sky-500 py-16 shadow-2xl md:py-24">
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage:
                "url('/placeholder.svg?width=1200&height=400&query=subtle_soundwave_pattern_white_on_blue')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
          <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
            <img
              src={`/placeholder.svg?width=80&height=80&query=${testimonial.avatarQuery}`}
              alt={`${testimonial.author} avatar`}
              className="mx-auto mb-6 size-20 rounded-full border-4 border-white/50 object-cover shadow-lg"
            />
            <blockquote className="text-primary-foreground text-xl font-medium italic md:text-2xl lg:text-3xl">
              "{testimonial.quote}"
            </blockquote>
            <p className="mt-6 text-lg font-semibold text-sky-100">
              {testimonial.author}
            </p>
            <p className="text-sm text-sky-200">{testimonial.company}</p>
          </div>
        </section>

        {/* Benefits for Your Agency */}
        <section>
          <div className="text-center">
            <h2 className="text-primary text-sm font-semibold uppercase tracking-wider">
              Tangible Advantages
            </h2>
            <p className="text-foreground mt-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Reap the Rewards of Smarter Research
            </p>
            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg md:text-xl">
              Integrating Subtext AI translates directly into measurable
              improvements for your agency's bottom line and client
              satisfaction.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {agencyBenefits.map(benefit => (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-primary/10 mb-5 flex size-16 items-center justify-center rounded-full p-3">
                  {React.cloneElement(benefit.icon, {
                    className: "h-8 w-8 text-primary"
                  })}
                </div>
                <h3 className="text-foreground text-xl font-semibold">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mt-2">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section - Pricing */}
        <section
          ref={pricingRef}
          className="bg-muted/70 overflow-hidden rounded-xl py-16 shadow-inner md:py-24"
        >
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <div className="border-primary/30 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold">
              <CheckCircle className="size-4" />
              <span>Ready to Elevate Your Agency?</span>
            </div>
            <h2 className="text-foreground text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Unlock Your Agency's Full Potential
            </h2>
            <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg md:text-xl">
              Stop leaving insights on the table. Start delivering exceptional,
              data-driven results for every client. Explore VoiceScape AI's
              plans and transform your agency today.
            </p>
            <Button
              size="lg" // Custom size or use lg
              className="from-primary text-primary-foreground hover:shadow-primary/40 group mt-10 bg-gradient-to-r to-sky-500 px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
              onClick={() => console.log("Navigate to pricing or open modal")} // Replace with actual navigation or modal
            >
              Explore Plans & Get Started
              <ArrowRight className="ml-3 size-6 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Button>
            <p className="text-muted-foreground mt-4 text-xs">
              Simple setup. Immediate impact.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-border/50 bg-background border-t py-12 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <Users className="text-muted-foreground mx-auto mb-4 size-8" />
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Subtext AI. All rights reserved.
          </p>
          <p className="text-muted-foreground mt-1 text-xs">
            Empowering agencies to understand audiences like never before.
          </p>
        </div>
      </footer>
    </div>
  )
}
