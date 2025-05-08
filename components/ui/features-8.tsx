"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"
import Image from "next/image"

// A simple placeholder component for your SVGs
// You'll replace calls to this with your actual SVG components or imports
const PlaceholderSVG = ({
  name,
  className,
  style
}: {
  name: string
  className?: string
  style?: React.CSSProperties
}) => (
  <div
    className={`flex items-center justify-center border border-dashed border-gray-400 bg-gray-100 text-gray-500 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-400 ${className || ""}`}
    style={style}
  >
    <span className="p-2 text-center text-xs">{name}</span>
  </div>
)

export function Features() {
  return (
    <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-3xl px-6 lg:max-w-5xl">
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">
            {/* Card 1: Real Conversations (100%) */}
            <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
              <CardContent className="relative m-auto size-fit pt-6">
                <div className="relative flex h-24 w-56 items-center">
                  <PlaceholderSVG
                    name="Decorative 100% Background SVG"
                    className="absolute inset-0 size-full"
                  />
                  <span className="mx-auto block w-fit text-5xl font-semibold">
                    100%
                  </span>
                </div>
                <h2 className="mt-6 text-center text-3xl font-semibold">
                  Real Conversations
                </h2>
              </CardContent>
            </Card>

            {/* Card 2: Source-Linked Insights */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <Image
                    src="/chain.svg"
                    alt="Chain Icon"
                    width={96}
                    height={96}
                    className="m-auto h-fit w-24"
                  />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">
                    Source-Linked Insights
                  </h2>
                  <p className="text-foreground">
                    Find relevant insights with direct links back to real user
                    conversations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Research in Minutes */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="pt-6 lg:px-6">
                  <PlaceholderSVG
                    name="Research Chart SVG"
                    className="w-full"
                    style={{ height: "123px" }} // Maintain original height
                  />
                </div>
                <div className="relative z-10 mt-14 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition">
                    Research in Minutes
                  </h2>
                  <p className="text-foreground">
                    Transform hours of manual thread reading into organized,
                    actionable insights from thousands of conversations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Faster than light */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <Image
                      src="/clock.svg"
                      alt="Clock Icon"
                      width={20}
                      height={20}
                      className="m-auto size-5"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="group-hover:text-secondary-950 text-lg font-medium text-zinc-800 transition dark:text-white">
                      Faster than light
                    </h2>
                    <p className="text-foreground">
                      Provident fugit vero voluptate. Voluptates a sapiente
                      inventore nisi.
                    </p>
                  </div>
                </div>
                {/*
                  IMPORTANT: The class 'rounded-tl-[var(--radius)]' uses a CSS custom property.
                  Ensure '--radius' is defined in your global CSS (e.g., :root { --radius: 0.5rem; })
                  or replace 'var(--radius)' with a standard Tailwind class like 'rounded-tl-lg'.
                */}
                <div className="relative -mb-6 -mr-6 mt-6 h-fit rounded-tl-[var(--radius)] border-l border-t p-6 sm:ml-6">
                  <div className="absolute left-3 top-2 flex gap-1">
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                  </div>
                  <PlaceholderSVG
                    name="Faster Than Light Graph SVG"
                    className="w-full sm:w-[150%]"
                    style={{ height: "231px" }} // Maintain original height
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 5: Risk-Free Validation */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <Users className="m-auto size-6" strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-medium transition">
                      Risk-Free Validation
                    </h2>
                    <p className="text-foreground">
                      Test messaging before investing in campaigns to ensure
                      your marketing connects every time.
                    </p>
                  </div>
                </div>
                {/*
                  IMPORTANT: The class 'before:bg-[var(--color-border)]' uses a CSS custom property.
                  Ensure '--color-border' is defined in your global CSS (e.g., :root { --color-border: #e5e7eb; })
                  or replace 'var(--color-border)' with a standard Tailwind color like 'before:bg-gray-200'.
                */}
                <div className="relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px before:bg-[var(--color-border)] sm:-my-6 sm:-mr-6">
                  <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                    <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                      <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">
                        Likeur
                      </span>
                      <div className="ring-background size-7 ring-4">
                        <img
                          className="size-full rounded-full"
                          src="https://avatars.githubusercontent.com/u/102558960?v=4"
                          alt="Avatar for Likeur"
                        />
                      </div>
                    </div>
                    <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                      <div className="ring-background size-8 ring-4">
                        <img
                          className="size-full rounded-full"
                          src="https://avatars.githubusercontent.com/u/47919550?v=4"
                          alt="Avatar for M. Irung"
                        />
                      </div>
                      <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">
                        M. Irung
                      </span>
                    </div>
                    <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                      <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">
                        B. Ng
                      </span>
                      <div className="ring-background size-7 ring-4">
                        <img
                          className="size-full rounded-full"
                          src="https://avatars.githubusercontent.com/u/31113941?v=4"
                          alt="Avatar for B. Ng"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
