"use client" // Top-level page might need client interactivity for smooth scroll or future state

import AgencyHero from "./_components/agency-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  BarChartBig,
  DollarSign,
  HeartHandshake,
  Lightbulb,
  PenLine,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
  CheckCircle
} from "lucide-react"
import React from "react"

const transformFeatures = [
  {
    icon: <Target className="text-primary size-8" />,
    title: "Rapid Onboarding for New Clients",
    description:
      "Quickly understand any new client's target audience and market landscape."
  },
  {
    icon: <BarChartBig className="text-primary size-8" />,
    title: "Scale Research Across Your Roster",
    description:
      "Conduct deep, authentic audience research for all your clients simultaneously, without a linear increase in effort."
  },
  {
    icon: <Lightbulb className="text-primary size-8" />,
    title: "Uncover Unique Angles & Differentiators",
    description:
      "Find fresh insights to build compelling campaigns that stand out."
  },
  {
    icon: <PenLine className="text-primary size-8" />,
    title: "Craft Client-Winning Copy",
    description:
      "Use your audience's exact language to create copy that resonates and converts, proving your value."
  },
  {
    icon: <Settings2 className="text-primary size-8" />,
    title: "Streamline Workflows",
    description:
      "Integrate authentic research directly into your content creation and campaign management processes. (Future: white-label reporting)"
  }
]

const agencyBenefits = [
  {
    icon: <TrendingUp className="text-primary size-8" />,
    title: "Increased Efficiency",
    description: "Save hundreds of hours on research."
  },
  {
    icon: <Sparkles className="text-primary size-8" />,
    title: "Improved Client Results",
    description: "Deliver campaigns that perform better."
  },
  {
    icon: <HeartHandshake className="text-primary size-8" />,
    title: "Enhanced Client Retention",
    description: "Demonstrate clear ROI and strategic insight."
  },
  {
    icon: <DollarSign className="text-primary size-8" />,
    title: "Greater Profitability",
    description: "Scale your services without proportionally increasing costs."
  }
]

export default function VoiceScapeAgencyPage() {
  const pricingRef = React.useRef<null | HTMLDivElement>(null)

  const handleScrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="bg-background text-foreground">
      <AgencyHero scrollToPricing={handleScrollToPricing} />

      <main className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        {/* The Agency Challenge */}
        <section className="mx-auto max-w-3xl text-center">
          <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
            The Agency Challenge
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Juggling multiple clients, each with unique audiences and market
            challenges. You need to quickly grasp their customers' true voice,
            pain points, and motivations to deliver differentiated strategies
            and compelling copy that gets results. Manual research doesn't
            scale, and generic tools don't cut it.
          </p>
        </section>

        {/* How VoiceScape AI Transforms Your Agency */}
        <section className="mt-16 md:mt-24">
          <h2 className="text-foreground text-center text-3xl font-semibold md:text-4xl">
            How VoiceScape AI Transforms Your Agency
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {transformFeatures.map(feature => (
              <Card
                key={feature.title}
                className="bg-muted/50 border-border/50 transition-shadow duration-300 hover:shadow-xl"
              >
                <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-3">
                  <div className="bg-primary/10 rounded-md p-2">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-foreground pt-1 text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="from-primary/5 via-background to-primary/5 mt-16 bg-gradient-to-r py-12 md:mt-24">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <blockquote className="text-foreground text-xl font-medium italic md:text-2xl">
              "Cut dashboard build time from hours to 20 minutes across client
              accounts"
              <span className="text-muted-foreground mt-2 block text-sm not-italic">
                - Early Adopter Digital Marketing Agency
                (digital_marketing-2cd8b3)
              </span>
            </blockquote>
            <p className="text-muted-foreground mt-4 text-lg">
              Imagine this level of efficiency for your research!
            </p>
          </div>
        </section>

        {/* Benefits for Your Agency */}
        <section className="mt-16 md:mt-24">
          <h2 className="text-foreground text-center text-3xl font-semibold md:text-4xl">
            Benefits for Your Agency
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {agencyBenefits.map(benefit => (
              <Card
                key={benefit.title}
                className="bg-muted/50 border-border/50 text-center transition-shadow duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="bg-primary/10 mx-auto mb-4 flex size-12 items-center justify-center rounded-full">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-foreground text-xl font-semibold">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={pricingRef}
          className="bg-muted/70 mt-16 rounded-lg py-16 md:mt-24 md:py-24"
        >
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
              Supercharge Your Agency Today
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Ready to transform your client research and deliver unparalleled
              results? Get started with VoiceScape AI and experience the
              difference.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-8 shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
            >
              Explore Plans & Get Started
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
