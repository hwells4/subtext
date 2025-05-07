"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MessageSquare, Lightbulb, BadgeCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function VisualDemonstration() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Visual Demonstration
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            See how Subtext extracts authentic language from real conversations
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Search className="size-5 text-blue-500" />
                    <CardTitle className="text-lg">Search Query:</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-slate-800">
                    "Marketing copy that converts"
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="size-5 text-green-500" />
                    <CardTitle className="text-lg">
                      Extracted Language Pattern:
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-slate-800">
                    "Nothing is better than taking the words right out of the
                    customer's mouth"
                  </p>
                  <Badge variant="outline" className="mt-2">
                    Based on 42 conversations
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="size-5 text-amber-500" />
                    <CardTitle className="text-lg">
                      Pain Point Identified:
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-slate-800">
                    "I'm spending way too much time reading massive threads
                    trying to pull out useful info"
                  </p>
                  <Badge variant="outline" className="mt-2 bg-amber-50">
                    High frequency pattern
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="size-5 text-purple-500" />
                    <CardTitle className="text-lg">
                      Conversion Opportunity:
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-slate-800">
                    Copy that uses authentic customer language to describe their
                    exact problems
                  </p>
                  <Badge variant="outline" className="mt-2 bg-purple-50">
                    94% resonance score
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
