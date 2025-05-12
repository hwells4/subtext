"use client"

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/layout/logo"
import { useRouter } from "next/navigation"
import { HamburgerButton } from "@/components/ui/hamburger-button"

const menuItems = [
  { name: "Features", href: "#link" },
  { name: "Solution", href: "#link" },
  { name: "Pricing", href: "#link" },
  { name: "About", href: "#link" }
]

// Define the custom button styles to match the CTA in AiMarketAnalystHero
const ctaButtonStyles =
  "rounded-lg bg-slate-900 px-6 py-2 text-base font-semibold text-white shadow-md transition-shadow duration-200 ease-in-out hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

export function Navbar() {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="absolute inset-x-0 top-0 w-full">
      <nav
        data-state={menuState ? "active" : "inactive"}
        className="group fixed z-50 w-full"
      >
        <div
          className={cn(
            "mx-auto mt-4 max-w-7xl px-6 transition-all duration-300 ease-in-out lg:px-12",
            "rounded-2xl border border-transparent bg-white/10 backdrop-blur-md",
            isScrolled
              ? "mt-2 max-w-6xl border-slate-200/20 bg-white/25 py-1 shadow-lg backdrop-blur-xl lg:px-8"
              : "py-3"
          )}
        >
          <div
            className={cn(
              "relative flex items-center justify-between gap-6 lg:gap-0",
              isScrolled ? "py-2" : "py-3 lg:py-4"
            )}
          >
            <div className="flex items-center lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>
            </div>

            <div className="relative z-20 block lg:hidden">
              <HamburgerButton
                open={menuState}
                setOpen={setMenuState}
                className="relative z-20"
              />
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-center">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Buttons (Hidden on mobile) */}
            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              {!isScrolled ? (
                <>
                  <button
                    className={cn(
                      ctaButtonStyles,
                      "bg-transparent text-slate-900 shadow-none hover:bg-slate-100",
                      "border border-slate-300"
                    )}
                  >
                    <span>Login</span>
                  </button>
                  <button
                    className={ctaButtonStyles}
                    onClick={() => router.push("/waitlist")}
                  >
                    <span>Join Waitlist</span>
                  </button>
                </>
              ) : (
                <button
                  className={ctaButtonStyles}
                  onClick={() => router.push("/waitlist")}
                >
                  <span>Join Waitlist</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Overlay & Content */}
            <div
              className={cn(
                "lg:hidden", // Only visible on mobile
                menuState ? "flex" : "hidden", // Control visibility based on menu state
                "absolute inset-x-0 top-full",
                "w-full",
                "mt-2",
                "flex-col items-center",
                "rounded-lg border",
                "bg-white shadow-lg", // Changed from bg-white/90 backdrop-blur-sm to make it opaque
                "p-6"
              )}
            >
              {/* Mobile Menu Items */}
              <div className="mb-6 w-full">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile Action Buttons Container */}
              <div className="flex w-full flex-col space-y-3">
                {!isScrolled && (
                  <button
                    className={cn(
                      ctaButtonStyles,
                      "bg-transparent text-slate-900 shadow-none hover:bg-slate-100",
                      "border border-slate-300"
                    )}
                  >
                    <span>Login</span>
                  </button>
                )}
                <button
                  className={ctaButtonStyles}
                  onClick={() => {
                    router.push("/waitlist")
                    setMenuState(false) // Close menu on click
                  }}
                >
                  <span>Join Waitlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
