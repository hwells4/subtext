"use server"

import WaitlistEmail from "@/components/emails/waitlist-email"

export default async function EmailPreviewPage() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold">Email Template Preview</h1>
        <p className="mb-4 text-slate-600">
          This is a preview of the waitlist confirmation email.
        </p>
        <div className="flex gap-4">
          <a
            href="/email-preview/raw"
            className="text-blue-600 hover:underline"
          >
            View Raw HTML
          </a>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <WaitlistEmail name="John Doe" />
      </div>
    </div>
  )
}
