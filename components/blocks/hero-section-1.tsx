import React from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navigation"
import Image from "next/image"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5
      }
    }
  }
}

export function HeroSection() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 isolate z-[2] hidden opacity-25 contain-strict sm:opacity-30 md:opacity-40 lg:block lg:opacity-50"
        >
          <div className="absolute left-0 top-0 h-[60rem] w-[25rem] -translate-y-[250px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.06)_0,hsla(0,0%,55%,.01)_50%,hsla(0,0%,45%,0)_80%)] sm:h-[70rem] sm:w-[30rem] md:h-[80rem] md:w-[35rem]" />
          <div className="absolute left-0 top-0 h-[60rem] w-40 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.01)_80%,transparent_100%)] [translate:5%_-50%] sm:h-[70rem] sm:w-48 md:h-[80rem] md:w-56" />
          <div className="absolute left-0 top-0 h-[60rem] w-40 -translate-y-[250px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.03)_0,hsla(0,0%,45%,.01)_80%,transparent_100%)] sm:h-[70rem] sm:w-48 md:h-[80rem] md:w-56" />
        </div>

        <section className="relative">
          <div className="pointer-events-none absolute right-0 top-16 z-[5] w-16 opacity-20 mix-blend-luminosity sm:w-24 sm:opacity-30 md:top-20 md:w-28 lg:w-32 lg:opacity-40">
            <Image src="/rocket.svg" alt="" width={150} height={150} />
          </div>

          <div className="pointer-events-none absolute left-4 top-72 z-[5] w-20 opacity-15 mix-blend-luminosity sm:left-8 sm:w-28 sm:opacity-25 md:top-80 lg:top-96 lg:w-40 lg:opacity-30">
            <Image src="/chain.svg" alt="" width={200} height={200} />
          </div>

          <div className="animate-spin-slow pointer-events-none absolute bottom-10 right-4 z-[5] w-16 opacity-15 mix-blend-luminosity sm:right-10 sm:w-24 sm:opacity-25 md:bottom-16 md:right-16 md:w-32 lg:bottom-20 lg:right-20 lg:w-36 lg:opacity-30">
            <Image src="/gear.svg" alt="" width={160} height={160} />
          </div>

          <div className="relative px-4 pt-16 sm:px-6 sm:pt-20 md:pt-24 lg:pt-32">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1
                    }
                  }
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2
                    }
                  }
                }
              }}
              className="absolute inset-0 -z-20"
            >
              <img
                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                alt="background"
                className="absolute inset-x-0 top-40 -z-20 hidden sm:top-48 md:top-56 lg:top-32 dark:block"
                width="3276"
                height="4095"
              />
            </AnimatedGroup>
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
            />
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#link"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border p-1 pl-3 text-xs shadow-md shadow-black/5 transition-all duration-300 sm:mb-6 sm:gap-3 sm:pl-4 sm:text-sm dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground">
                      Introducing Support for AI Models
                    </span>
                    <span className="dark:border-background block h-3 w-px border-l bg-white sm:h-4 dark:bg-zinc-700"></span>
                    <div className="bg-background group-hover:bg-muted size-5 overflow-hidden rounded-full duration-500 sm:size-6">
                      <div className="flex w-10 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0 sm:w-12">
                        <span className="flex size-5 sm:size-6">
                          <ArrowRight className="m-auto size-2.5 sm:size-3" />
                        </span>
                        <span className="flex size-5 sm:size-6">
                          <ArrowRight className="m-auto size-2.5 sm:size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  <h1 className="mx-auto mt-4 max-w-lg text-balance text-4xl font-bold text-slate-900 sm:mt-6 sm:max-w-xl sm:text-5xl md:mt-8 md:max-w-2xl md:text-6xl lg:mt-10 lg:max-w-4xl xl:text-[5rem]">
                    Modern Solutions for Customer Engagement
                  </h1>
                  <p className="mx-auto mt-4 max-w-md text-balance text-base text-slate-600 sm:mt-6 sm:max-w-lg sm:text-lg md:mt-8 md:max-w-xl lg:max-w-2xl">
                    Highly customizable components for building modern websites
                    and applications that look and feel the way you mean it.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75
                        }
                      }
                    },
                    ...transitionVariants
                  }}
                  className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 md:mt-12"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[10px] border p-0.5 sm:rounded-[12px] md:rounded-[14px]"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="w-full rounded-lg px-5 py-2.5 text-sm font-semibold sm:w-auto sm:rounded-xl sm:px-6 sm:py-3 sm:text-base"
                    >
                      <Link href="/waitlist">
                        <span className="text-nowrap">Join Waitlist</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="w-full rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-slate-100 sm:w-auto sm:rounded-xl sm:px-6 sm:py-3 sm:text-base md:h-auto"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75
                    }
                  }
                },
                ...transitionVariants
              }}
            >
              <div className="relative mx-auto mt-10 max-w-sm overflow-hidden px-0 sm:mt-12 sm:max-w-md md:mt-16 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                <div
                  aria-hidden
                  className="to-background absolute inset-0 z-10 bg-gradient-to-b from-transparent from-25% sm:from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto overflow-hidden rounded-lg border p-2 shadow-lg shadow-zinc-950/15 ring-1 sm:rounded-xl md:rounded-2xl md:p-3 lg:p-4">
                  <img
                    className="bg-background aspect-15/8 relative hidden rounded-md object-cover sm:rounded-lg md:rounded-xl dark:block"
                    src="https://tailark.com//_next/image?url=%2Fmail2.png&w=3840&q=75"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="z-2 border-border/25 aspect-15/8 relative rounded-md border object-cover sm:rounded-lg md:rounded-xl dark:hidden"
                    src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 md:pb-24 lg:pb-32">
          <div className="group relative mx-auto max-w-5xl">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link
                href="/"
                className="block text-sm duration-150 hover:opacity-75"
              >
                <span> Meet Our Customers</span>

                <ChevronRight className="ml-1 inline-block size-3" />
              </Link>
            </div>
            <div className="group-hover:blur-xs mx-auto mt-8 grid max-w-lg grid-cols-2 gap-6 transition-all duration-500 group-hover:opacity-50 sm:mt-12 sm:max-w-xl sm:grid-cols-3 sm:gap-8 md:max-w-2xl md:gap-x-12 md:gap-y-10 lg:grid-cols-4 xl:max-w-4xl">
              <div className="flex">
                <img
                  className="mx-auto h-4 w-fit sm:h-5 dark:invert"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="Nvidia Logo"
                  height="20"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-3 w-fit sm:h-4 dark:invert"
                  src="https://html.tailus.io/blocks/customers/column.svg"
                  alt="Column Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-3 w-fit sm:h-4 dark:invert"
                  src="https://html.tailus.io/blocks/customers/github.svg"
                  alt="GitHub Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-fit sm:h-5 dark:invert"
                  src="https://html.tailus.io/blocks/customers/nike.svg"
                  alt="Nike Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-fit sm:h-5 dark:invert"
                  src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                  alt="Lemon Squeezy Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-3 w-fit sm:h-4 dark:invert"
                  src="https://html.tailus.io/blocks/customers/laravel.svg"
                  alt="Laravel Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-5 w-fit sm:h-6 md:h-7 dark:invert"
                  src="https://html.tailus.io/blocks/customers/lilly.svg"
                  alt="Lilly Logo"
                  height="28"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-5 w-fit sm:h-6 dark:invert"
                  src="https://html.tailus.io/blocks/customers/openai.svg"
                  alt="OpenAI Logo"
                  height="24"
                  width="auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
