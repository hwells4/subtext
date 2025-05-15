"use client"

import * as React from "react"
import { memo, useState, useCallback } from "react"
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MessageSquare,
  FileText,
  BookOpen,
  HelpCircle,
  Shield,
  Users
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Logo } from "@/components/layout/logo"

interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}

interface FooterLink {
  name: string
  href: string
  icon: React.ReactNode
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  brand: {
    name: string
    description: string
  }
  socialLinks: SocialLink[]
  columns: FooterColumn[]
  copyright?: string
  newsletter?: boolean
}

// Memoized social link component to reduce re-renders
const SocialLinkItem = memo(({ link }: { link: SocialLink }) => (
  <a
    href={link.href}
    className="text-muted-foreground hover:text-foreground transition-colors"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={link.name}
  >
    {link.icon}
  </a>
))
SocialLinkItem.displayName = "SocialLinkItem"

// Memoized footer link component
const FooterLinkItem = memo(({ link }: { link: FooterLink }) => (
  <li>
    <Link
      href={link.href}
      className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
      prefetch={false}
    >
      {link.icon}
      <span>{link.name}</span>
    </Link>
  </li>
))
FooterLinkItem.displayName = "FooterLinkItem"

// Memoized footer column component
const FooterColumnComponent = memo(({ column }: { column: FooterColumn }) => (
  <div>
    <h3 className="mb-4 text-sm font-semibold">{column.title}</h3>
    <ul className="space-y-2">
      {column.links.map(link => (
        <FooterLinkItem key={link.name} link={link} />
      ))}
    </ul>
  </div>
))
FooterColumnComponent.displayName = "FooterColumnComponent"

// Reduced weight newsletter component
const Newsletter = memo(
  ({ onSubscribe }: { onSubscribe: (email: string) => Promise<void> }) => {
    const [email, setEmail] = useState("")
    const [subscribeStatus, setSubscribeStatus] = useState<
      "idle" | "loading" | "success"
    >("idle")

    const handleSubscribe = useCallback(
      async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setSubscribeStatus("loading")
        try {
          await onSubscribe(email)
          setSubscribeStatus("success")
          setEmail("")
        } catch (error) {
          setSubscribeStatus("idle")
        }
      },
      [email, onSubscribe]
    )

    return (
      <div className="mb-8 mt-6">
        <h3 className="mb-2 text-sm font-semibold">
          Subscribe to our newsletter
        </h3>
        <form onSubmit={handleSubscribe} className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="max-w-xs"
            required
            aria-label="Email address"
          />
          <Button type="submit" disabled={subscribeStatus === "loading"}>
            {subscribeStatus === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        {subscribeStatus === "success" && (
          <p className="text-muted-foreground mt-2 text-xs">
            Thanks for subscribing!
          </p>
        )}
      </div>
    )
  }
)
Newsletter.displayName = "Newsletter"

const Footer = memo(
  React.forwardRef<HTMLDivElement, FooterProps>(
    (
      {
        className,
        brand,
        socialLinks,
        columns,
        copyright,
        newsletter = true,
        ...props
      },
      ref
    ) => {
      const handleSubscribe = useCallback(async (email: string) => {
        // Simulate API call with faster response time
        return new Promise<void>(resolve => {
          setTimeout(() => {
            resolve()
          }, 300)
        })
      }, [])

      return (
        <footer
          ref={ref}
          className={`bg-background border-border border-t pt-12 ${className}`}
          {...props}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="mb-4 flex items-center">
                  <Logo />
                </div>
                <p className="text-muted-foreground mb-6 text-sm">
                  {brand.description}
                </p>

                {newsletter && <Newsletter onSubscribe={handleSubscribe} />}

                <div className="mt-6 flex space-x-4">
                  {socialLinks.map(link => (
                    <SocialLinkItem key={link.name} link={link} />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-8 lg:justify-items-end">
                {columns.map(column => (
                  <FooterColumnComponent key={column.title} column={column} />
                ))}
              </div>
            </div>

            {copyright && (
              <div className="border-border mt-10 flex flex-col items-center justify-between border-t py-6 md:flex-row">
                <p className="text-muted-foreground text-xs">{copyright}</p>
                <div className="mt-4 flex gap-6 md:mt-0">
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground text-xs"
                    prefetch={false}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground text-xs"
                    prefetch={false}
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            )}
          </div>
        </footer>
      )
    }
  )
)

Footer.displayName = "Footer"

// Usage example optimized with memoization to prevent unnecessary re-renders
const FooterExample = memo(function FooterExample() {
  return (
    <Footer
      brand={{
        name: "Subtext.ai",
        description:
          "AI-powered audience intelligence and messaging insight platform."
      }}
      socialLinks={[
        {
          name: "Twitter",
          href: "https://twitter.com/subtextai",
          icon: <Twitter className="size-5" />
        },
        {
          name: "GitHub",
          href: "https://github.com/subtextai",
          icon: <Github className="size-5" />
        },
        {
          name: "LinkedIn",
          href: "https://linkedin.com/company/subtextai",
          icon: <Linkedin className="size-5" />
        },
        {
          name: "Email",
          href: "mailto:hello@subtext.ai",
          icon: <Mail className="size-5" />
        }
      ]}
      columns={[
        {
          title: "Product",
          links: [
            {
              name: "Features",
              href: "/features",
              icon: <FileText className="size-4" />
            },
            {
              name: "Pricing",
              href: "/pricing",
              icon: <FileText className="size-4" />
            },
            {
              name: "Documentation",
              href: "/docs",
              icon: <BookOpen className="size-4" />
            }
          ]
        },
        {
          title: "Company",
          links: [
            {
              name: "About",
              href: "/about",
              icon: <Users className="size-4" />
            },
            {
              name: "Blog",
              href: "/blog",
              icon: <FileText className="size-4" />
            },
            {
              name: "Contact",
              href: "/contact",
              icon: <MessageSquare className="size-4" />
            }
          ]
        },
        {
          title: "Legal",
          links: [
            {
              name: "Privacy",
              href: "/privacy",
              icon: <Shield className="size-4" />
            },
            {
              name: "Terms",
              href: "/terms",
              icon: <FileText className="size-4" />
            },
            {
              name: "FAQ",
              href: "/faq",
              icon: <HelpCircle className="size-4" />
            }
          ]
        }
      ]}
      copyright="© 2023 Subtext.ai. All rights reserved."
    />
  )
})

export default FooterExample
