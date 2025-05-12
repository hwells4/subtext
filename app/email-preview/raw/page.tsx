"use server"

import { generateWaitlistEmailHtml } from "@/actions/email-actions"

export default async function RawEmailPreviewPage() {
  const emailHtml = await generateWaitlistEmailHtml("John Doe")

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold">Raw Email HTML</h1>
        <p className="mb-4 text-slate-600">
          This is the raw HTML of the waitlist confirmation email that you can
          copy and test in email clients.
        </p>
        <div className="flex gap-4">
          <a href="/email-preview" className="text-blue-600 hover:underline">
            View Rendered Preview
          </a>
        </div>
      </div>

      <div className="overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-6">
        <pre className="whitespace-pre-wrap font-mono text-sm">{emailHtml}</pre>
      </div>
    </div>
  )
}
