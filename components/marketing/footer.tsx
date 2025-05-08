"use client"

import * as React from "react"
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
    logo?: string
  }
  socialLinks: SocialLink[]
  columns: FooterColumn[]
  copyright?: string
  newsletter?: boolean
}

const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
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
    const [email, setEmail] = React.useState("")
    const [subscribeStatus, setSubscribeStatus] = React.useState<
      "idle" | "loading" | "success" | "error"
    >("idle")

    const handleSubscribe = async (e: React.FormEvent) => {
      e.preventDefault()
      setSubscribeStatus("loading")

      // Simulate API call
      setTimeout(() => {
        setSubscribeStatus("success")
        setEmail("")
      }, 1000)
    }

    return (
      <footer
        ref={ref}
        className={`bg-background border-border border-t pt-16 ${className}`}
        {...props}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="mb-4 flex items-center gap-2">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-8 w-auto"
                  />
                ) : (
                  <span className="text-foreground text-xl font-bold">
                    {brand.name}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground mb-6 text-sm">
                {brand.description}
              </p>

              {newsletter && (
                <div className="mb-8 mt-6">
                  <h3 className="mb-3 text-sm font-semibold">
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
                    />
                    <Button
                      type="submit"
                      disabled={subscribeStatus === "loading"}
                    >
                      {subscribeStatus === "loading"
                        ? "Subscribing..."
                        : "Subscribe"}
                    </Button>
                  </form>
                  {subscribeStatus === "success" && (
                    <p className="text-muted-foreground mt-2 text-xs">
                      Thanks for subscribing!
                    </p>
                  )}
                </div>
              )}

              <div className="mt-6 flex space-x-4">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-8 lg:justify-items-end">
              {columns.map(column => (
                <div key={column.title}>
                  <h3 className="mb-4 text-sm font-semibold">{column.title}</h3>
                  <ul className="space-y-3">
                    {column.links.map(link => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm transition-colors"
                        >
                          {link.icon}
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {copyright && (
            <div className="border-border mt-12 flex flex-col items-center justify-between border-t pb-8 pt-6 md:flex-row">
              <p className="text-muted-foreground text-xs">{copyright}</p>
              <div className="mt-4 flex gap-6 md:mt-0">
                <a
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground text-xs"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground text-xs"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          )}
        </div>
      </footer>
    )
  }
)

Footer.displayName = "Footer"

// Usage example
function FooterExample() {
  return (
    <Footer
      brand={{
        name: "Subtext.ai",
        description:
          "Advanced AI-powered text analysis and content generation platform for businesses and creators."
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
            },
            {
              name: "API",
              href: "/api",
              icon: <FileText className="size-4" />
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
              name: "Careers",
              href: "/careers",
              icon: <Users className="size-4" />
            },
            {
              name: "Contact",
              href: "/contact",
              icon: <MessageSquare className="size-4" />
            }
          ]
        },
        {
          title: "Support",
          links: [
            {
              name: "Help Center",
              href: "/help",
              icon: <HelpCircle className="size-4" />
            },
            {
              name: "Community",
              href: "/community",
              icon: <Users className="size-4" />
            },
            {
              name: "Status",
              href: "/status",
              icon: <Shield className="size-4" />
            }
          ]
        }
      ]}
      copyright="© 2024 Subtext.ai. All rights reserved."
    />
  )
}

export default FooterExample
