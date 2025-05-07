/*
<ai_context>
This layout provides a shared structure for (marketing) routes.
</ai_context>
*/

import { ThemeProvider } from "@/components/utilities/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import React from "react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
})

export const metadata: Metadata = {
  title: "VoiceScape - Unlock Reddit's Insights",
  description:
    "Stop guessing. Start validating. Our AI analyzes thousands of Reddit conversations, extracting authentic user language to give you trustworthy product insights in minutes, not weeks."
}

export default function MarketingLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "min-h-screen bg-white font-sans antialiased",
        fontSans.variable
      )}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="light" // Force light theme as per design inspiration
        enableSystem={false} // Disable system theme preference
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  )
}
