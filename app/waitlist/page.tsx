"use server"

import React from "react"
import WaitlistForm from "./_components/waitlist-form"
import Image from "next/image"

export default async function WaitlistPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center">
        <div className="mb-10 flex justify-center">
          <Image
            src="/subtext-logo.svg"
            alt="Subtext Logo"
            width={180}
            height={60}
            className="h-auto w-36 sm:w-44 md:w-48"
            priority
          />
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Join Our Waitlist
          </h1>
          <p className="mt-3 text-base text-slate-600 sm:text-lg md:text-xl">
            Be the first to know when we launch. We're excited to have you!
          </p>
        </div>

        <WaitlistForm />

        <p className="mt-10 text-center text-xs text-slate-500 sm:text-sm">
          We respect your privacy and will only use your email to notify you
          about our launch.
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-60 -top-60 size-[500px] opacity-[0.025] sm:-right-40 sm:-top-40">
          <div
            className="size-full rotate-[20deg] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/rocket.svg)" }}
            aria-hidden="true"
          />
        </div>
        <div className="absolute -bottom-60 -left-60 size-[500px] opacity-[0.025] sm:-bottom-40 sm:-left-40">
          <div
            className="size-full -rotate-[20deg] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/chain.svg)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
