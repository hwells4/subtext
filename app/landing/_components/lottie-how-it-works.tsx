"use client"

import React, { useRef, useState } from "react"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Headphones, Mic, Sparkles } from "lucide-react"
// Note: Uncomment this when you've installed lottie-react
// import Lottie from "lottie-react"

// Note: Replace with actual Lottie animation files from public folder
// const recordingAnimation = require("/public/lottie/recording.json")
// const analysisAnimation = require("/public/lottie/analysis.json")
// const insightsAnimation = require("/public/lottie/insights.json")

const steps = [
  {
    id: "record",
    title: "Voice Recording",
    description:
      "Capture high-quality voice recordings with our intuitive interface. Supports various formats and devices.",
    icon: <Mic className="size-5" />,
    features: [
      "Multi-device support",
      "Background noise reduction",
      "Secure encryption",
      "Real-time feedback"
    ],
    animationPath: "/public/lottie/recording.json" // This is a placeholder
  },
  {
    id: "analyze",
    title: "AI Analysis",
    description:
      "Our advanced AI processes the recordings, identifying key patterns, emotions, and actionable insights.",
    icon: <Sparkles className="size-5" />,
    features: [
      "Sentiment analysis",
      "Key topic extraction",
      "Conversation flow mapping",
      "Contextual understanding"
    ],
    animationPath: "/public/lottie/analysis.json" // This is a placeholder
  },
  {
    id: "insights",
    title: "Actionable Insights",
    description:
      "Transform voice data into strategic insights that drive better decision-making and customer engagement.",
    icon: <Headphones className="size-5" />,
    features: [
      "Customizable dashboards",
      "Trend identification",
      "Recommendation engine",
      "Export capabilities"
    ],
    animationPath: "/public/lottie/insights.json" // This is a placeholder
  }
]

export function LottieHowItWorks() {
  const [activeTab, setActiveTab] = useState("record")
  const lottieContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="w-full bg-slate-50 py-24 dark:bg-slate-900">
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
            How It Works
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl text-lg">
            Our streamlined process turns voice recordings into valuable
            insights in three simple steps
          </p>
        </AnimatedGroup>

        <Tabs
          defaultValue="record"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mt-8 w-full"
        >
          <TabsList className="mb-12 grid w-full grid-cols-3">
            {steps.map(step => (
              <TabsTrigger
                key={step.id}
                value={step.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
              >
                {step.icon}
                <span className="hidden sm:inline">{step.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {steps.map(step => (
            <TabsContent key={step.id} value={step.id} className="mt-0">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <AnimatedGroup
                  className="flex flex-col space-y-6"
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.1
                        }
                      }
                    },
                    item: {
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: "spring",
                          bounce: 0.3,
                          duration: 0.6
                        }
                      }
                    }
                  }}
                >
                  <div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground mt-2">
                      {step.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Key Features:</h4>
                    <ul className="space-y-2">
                      {step.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="bg-primary size-1.5 rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="group w-fit">
                    Learn More
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </AnimatedGroup>

                <Card className="relative flex h-[300px] items-center justify-center overflow-hidden p-6">
                  <div ref={lottieContainerRef} className="size-full">
                    {/* Replace with actual Lottie animation when available */}
                    {/* <Lottie
                      animationData={step.id === "record" ? recordingAnimation : step.id === "analyze" ? analysisAnimation : insightsAnimation}
                      loop={true}
                      className="w-full h-full"
                    /> */}

                    {/* Placeholder until Lottie animations are available */}
                    <div className="bg-primary/5 flex size-full items-center justify-center rounded-lg">
                      <div className="text-center">
                        <div className="bg-primary/10 mx-auto mb-4 flex size-20 items-center justify-center rounded-full">
                          {step.id === "record" ? (
                            <Mic className="text-primary size-10" />
                          ) : step.id === "analyze" ? (
                            <Sparkles className="text-primary size-10" />
                          ) : (
                            <Headphones className="text-primary size-10" />
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">
                          [Lottie {step.title} Animation]
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
