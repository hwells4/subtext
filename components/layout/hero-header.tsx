"use client" // Needs client hooks (useState, useEffect)

import React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/layout/logo"

const menuItems = [
  { name: "Features", href: "#link" },
  { name: "Solution", href: "#link" },
  { name: "Pricing", href: "#link" },
  { name: "About", href: "#link" }
]

// Define the custom button styles to match the CTA in AiMarketAnalystHero
const ctaButtonStyles =
  "rounded-lg bg-slate-900 px-6 py-2 text-base font-semibold text-white shadow-md transition-shadow duration-200 ease-in-out hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

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
            "mx-auto mt-4 max-w-7xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "max-w-6xl rounded-2xl border bg-white/95 shadow-lg backdrop-blur-lg lg:px-8"
          )}
        >
          <div className="relative flex items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex items-center justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 block cursor-pointer p-2 lg:hidden"
              >
                <Menu
                  className={cn(
                    "text-foreground size-6 transition-all duration-300",
                    !menuState ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  )}
                />
                <X
                  className={cn(
                    "text-foreground absolute inset-0 m-auto size-6 transition-all duration-300",
                    menuState ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  )}
                />
              </button>
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
                  <button className={ctaButtonStyles}>
                    <span>Get Started</span>
                  </button>
                </>
              ) : (
                <button className={ctaButtonStyles}>
                  <span>Start Validating</span>
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
                "bg-white",
                "p-6",
                "shadow-lg"
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
                <button
                  className={cn(
                    ctaButtonStyles,
                    "bg-transparent text-slate-900 shadow-none hover:bg-slate-100",
                    "border border-slate-300"
                  )}
                >
                  <span>Login</span>
                </button>
                <button className={ctaButtonStyles}>
                  <span>{isScrolled ? "Start Validating" : "Get Started"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
