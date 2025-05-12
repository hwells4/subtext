/*
<ai_context>
The root server layout for the app.
</ai_context>
*/

import {
  createProfileAction,
  getProfileByUserIdAction
} from "@/actions/db/profiles-actions"
import { Toaster } from "@/components/ui/toaster"
import { PostHogPageview } from "@/components/utilities/posthog/posthog-pageview"
import { PostHogUserIdentify } from "@/components/utilities/posthog/posthog-user-identity"
import { Providers } from "@/components/utilities/providers"
import { TailwindIndicator } from "@/components/utilities/tailwind-indicator"
import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.subtext.ai"),
  title: "Subtext.ai | Instant Audience Research",
  description:
    "Subtext provides instant audience research, mining real conversations for authentic language & pain points. Write better, faster with verifiable insights. Get early access!",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.svg"
  },
  openGraph: {
    type: "website",
    siteName: "Subtext.ai",
    title: "Subtext.ai | Instant Audience Research",
    description:
      "Stop guessing & ditch AI fluff! Subtext delivers verifiable audience insights from real online conversations in minutes to help you write copy that truly converts.",
    url: "https://www.subtext.ai",
    images: [
      {
        url: "/subtext-open-graph.png",
        width: 1200,
        height: 630,
        alt: "Subtext.ai - Instant Audience Research"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourSubtextTwitterHandle", // Replace with actual Twitter handle
    creator: "@YourSubtextTwitterHandle", // Replace with actual Twitter handle
    title: "subtext.ai | Instant Audience Research",
    description:
      "Stop guessing & ditch AI fluff! Subtext delivers verifiable audience insights from real online conversations in minutes to help you write copy that truly converts.",
    images: ["/subtext-twitter-image.png"]
  },
  alternates: {
    canonical: "https://www.subtext.ai"
  }
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()

  if (userId) {
    const profileRes = await getProfileByUserIdAction(userId)
    if (!profileRes.isSuccess) {
      await createProfileAction({ userId })
    }
  }

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Subtext.ai",
                applicationCategory: "MarketingApplication",
                abstract:
                  "Subtext.ai is an instant audience intelligence tool that mines real online conversations to provide verifiable language, pain points, and authentic insights, helping users write better, faster marketing copy without AI-generated fluff.",
                url: "https://www.subtext.ai",
                author: {
                  "@type": "Organization",
                  name: "Subtext.ai"
                },
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/PreOrder",
                  price: "0",
                  priceCurrency: "USD"
                },
                operatingSystem: "Web browser"
              })
            }}
          />
          {/* Fix viewport rendering on mobile devices - only if needed */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                // Only run on mobile devices
                if (navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)) {
                  const detectOverflow = function() {
                    // Only modify viewport if there's actually overflow
                    if (document.body.scrollWidth > window.innerWidth + 5) {
                      document.querySelector('meta[name="viewport"]')?.setAttribute(
                        'content',
                        'width=device-width, initial-scale=1.0, maximum-scale=5.0'
                      );
                    }
                  };
                  // Run once after page is fully loaded
                  window.addEventListener('load', detectOverflow);
                }
              })();
            `
            }}
          />
        </head>
        <body
          className={cn(
            "bg-background mx-auto min-h-screen w-full overflow-x-hidden scroll-smooth antialiased",
            inter.className
          )}
        >
          <Providers
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <PostHogUserIdentify />
            <PostHogPageview />

            {children}

            <TailwindIndicator />

            <Toaster />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
