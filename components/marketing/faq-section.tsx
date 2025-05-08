"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Info,
  Sparkles,
  GitCompareArrows,
  PlusCircle,
  MinusCircle,
  ChevronDown,
  PhoneCall
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const faqSectionsData = [
  {
    id: "understanding",
    title: "Understanding Subtext.ai",
    icon: <Info className="text-primary size-6" />,
    questions: [
      {
        id: "what-is",
        question: "What is Subtext.ai?",
        answer:
          "Subtext.ai is a research platform that analyzes online discussions to find the real language, deep pain points, and motivations your customers use, helping you create high-converting marketing copy fast."
      },
      {
        id: "who-for",
        question: "Who is Subtext.ai for?",
        answer:
          "It's for marketing agencies, content marketers, copywriters, performance marketers, and SaaS founders who need to create messaging that truly resonates with their audience and drives action."
      },
      {
        id: "how-works",
        question: "How does Subtext.ai work?",
        answer:
          'Subtext.ai analyzes public communities and forums where your audience speaks freely and use proprietary models to extract relevant quotes, language, and context. This helps you create copy that connects deeply, improves conversions, and makes your audience "feel seen."'
      }
    ]
  },
  {
    id: "advantages",
    title: "Key Advantages & Outcomes",
    icon: <Sparkles className="text-primary size-6" />,
    questions: [
      {
        id: "insights-outputs",
        question:
          "What kind of insights or outputs can I expect from Subtext.ai?",
        answer:
          "You'll get actionable insights like your audience's exact phrasing, key pain points, distinct audience segments, and powerful elements for crafting compelling value propositions."
      },
      {
        id: "uncover-pain-points",
        question: "How does Subtext.ai uncover deep customer pain points?",
        answer:
          'Subtext.ai analyzes natural online conversations to identify your audience\'s real and often unstated pain points—the true "subtext"—going far beyond surface-level feedback.'
      }
    ]
  },
  {
    id: "comparisons",
    title: "Comparisons & Clarifications",
    icon: <GitCompareArrows className="text-primary size-6" />,
    questions: [
      {
        id: "different-from-ai-2",
        question:
          "How is Subtext AI different from generic AI writing tools (like ChatGPT)?",
        answer:
          'We\'re research-first. Subtext AI finds real customer language and insights for you to use, unlike AI writers that just generate generic text. We help you "stop guessing what might work."'
      },
      {
        id: "social-listening",
        question:
          "I already use social listening tools. Why would I need SubtextAI?",
        answer:
          "Social listening primarily tracks brand mentions. Subtext AI digs deeper to uncover audience language patterns and pain points specifically to improve your marketing copy and strategy."
      },
      {
        id: "not-survey",
        question:
          "Is this just another survey platform or a basic web scraper?",
        answer:
          'No. We analyze natural, unprompted conversations for candid insights. Our "marketing-specific analysis engine" is far more sophisticated than basic scrapers or survey limitations.'
      }
    ]
  }
]

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FaqCard: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle
}) => {
  return (
    <div className="bg-card rounded-lg border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
      <button
        onClick={onToggle}
        className="focus-visible:ring-primary flex w-full items-center justify-between rounded-t-lg p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:p-6"
        aria-expanded={isOpen}
      >
        <h4 className="text-lg font-semibold text-slate-800">{question}</h4>
        {isOpen ? (
          <MinusCircle className="text-primary size-6 shrink-0" />
        ) : (
          <PlusCircle className="size-6 shrink-0 text-slate-500" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 md:p-6 md:pt-0">
              <p className="text-base text-slate-600">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Original FAQ Section
export function FaqSection() {
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({})

  const toggleQuestion = (id: string) => {
    setOpenStates(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="text-foreground bg-slate-50 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600 sm:text-xl">
            Find answers to common questions about Subtext.ai.
          </p>
        </div>

        <div className="space-y-10 md:space-y-12">
          {faqSectionsData.map(section => (
            <div key={section.id}>
              <div className="mb-6 flex items-center space-x-3 md:mb-8">
                {React.cloneElement(section.icon, {
                  className: "h-7 w-7 text-primary"
                })}
                <h3 className="text-2xl font-semibold tracking-tight text-slate-800">
                  {section.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
                {section.questions.map(faq => (
                  <FaqCard
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={!!openStates[section.id + "-" + faq.id]}
                    onToggle={() => toggleQuestion(section.id + "-" + faq.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Modern redesigned FAQ with split layout
export function ModernSplitFaqSection() {
  return (
    <section className="bg-background w-full py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div>
                <Badge variant="outline">FAQ</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
                  Frequently Asked Questions
                </h4>
                <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight lg:max-w-lg">
                  Find answers to common questions about Subtext.ai.
                </p>
              </div>
              <div>
                <Button className="gap-4" variant="outline">
                  Any questions? Reach out <PhoneCall className="size-4" />
                </Button>
              </div>
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqSectionsData.flatMap(section =>
                section.questions.map((faq, index) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-base font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

// Animated Card-Based FAQ
export function AnimatedCardFaqSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <section className="w-full bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Find answers to common questions about Subtext.ai.
          </p>
        </div>

        <div className="space-y-10">
          {faqSectionsData.map(section => (
            <div key={section.id} className="space-y-6">
              <div className="flex items-center space-x-3">
                {React.cloneElement(section.icon, {
                  className: "h-7 w-7 text-primary"
                })}
                <h3 className="text-2xl font-semibold text-slate-800">
                  {section.title}
                </h3>
              </div>

              <div className="space-y-3">
                {section.questions.map(faq => {
                  const isOpen = openItem === `${section.id}-${faq.id}`
                  return (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "overflow-hidden rounded-lg border",
                        isOpen
                          ? "from-background to-background border-primary/50 bg-gradient-to-br via-slate-50/80"
                          : "border-slate-200 hover:bg-slate-100/80"
                      )}
                    >
                      <Button
                        variant="ghost"
                        onClick={() =>
                          setOpenItem(isOpen ? null : `${section.id}-${faq.id}`)
                        }
                        className="h-auto w-full justify-between rounded-none px-6 py-5 hover:bg-transparent"
                      >
                        <h4
                          className={cn(
                            "text-left text-base font-medium md:text-lg",
                            "text-slate-700",
                            isOpen && "text-slate-900"
                          )}
                        >
                          {faq.question}
                        </h4>
                        <motion.div
                          animate={{
                            rotate: isOpen ? 180 : 0,
                            scale: isOpen ? 1.1 : 1
                          }}
                          transition={{ duration: 0.2 }}
                          className={cn(
                            "shrink-0 rounded-full p-0.5",
                            isOpen ? "text-primary" : "text-slate-500"
                          )}
                        >
                          <ChevronDown className="size-5" />
                        </motion.div>
                      </Button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                              transition: { duration: 0.2, ease: "easeOut" }
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                              transition: { duration: 0.2, ease: "easeIn" }
                            }}
                          >
                            <div className="px-6 pb-5">
                              <motion.p
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                className="text-base text-slate-600"
                              >
                                {faq.answer}
                              </motion.p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Sectioned Accordion FAQ
export function SectionedAccordionFaqSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg sm:text-xl">
            Find answers to common questions about Subtext.ai.
          </p>
        </div>

        <div className="space-y-10 lg:space-y-12">
          {faqSectionsData.map(section => (
            <div key={section.id} className="space-y-6">
              <div className="flex items-center gap-3 border-b pb-3">
                {React.cloneElement(section.icon, {
                  className: "h-7 w-7 text-primary"
                })}
                <h3 className="text-2xl font-semibold tracking-tight">
                  {section.title}
                </h3>
              </div>

              <Accordion type="multiple" className="w-full">
                {section.questions.map(faq => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="py-4 text-base font-medium md:text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
