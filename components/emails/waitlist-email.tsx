import React from "react"

interface WaitlistEmailProps {
  name: string
}

export default function WaitlistEmail({ name }: WaitlistEmailProps) {
  // Using Vercel's Image Optimization for email-safe logo display
  const logoUrl = "https://harrisonwells-subtext.vercel.app/subtext-logo.png"

  return (
    <div
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        maxWidth: "650px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        color: "#0f172a"
      }}
    >
      {/* Header with logo */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "28px",
          padding: "24px 0 0"
        }}
      >
        <img
          src={logoUrl}
          alt="Subtext Logo"
          width="180"
          height="60"
          style={{
            margin: "0 auto",
            display: "block",
            height: "auto"
          }}
        />
      </div>

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "#f8fafc",
          borderRadius: "12px",
          padding: "28px",
          marginBottom: "24px",
          margin: "0 16px 24px"
        }}
      >
        <h1
          style={{
            color: "#0f172a",
            fontSize: "28px",
            fontWeight: 700,
            marginTop: 0,
            marginBottom: "24px",
            textAlign: "center",
            letterSpacing: "-0.025em"
          }}
        >
          Welcome to Subtext!
        </h1>

        <p
          style={{
            color: "#334155",
            lineHeight: 1.6,
            fontSize: "16px",
            marginBottom: "16px"
          }}
        >
          Hi {name},
        </p>

        <p
          style={{
            color: "#334155",
            lineHeight: 1.6,
            fontSize: "16px",
            marginBottom: "24px"
          }}
        >
          Thank you for joining our waitlist! We're thrilled to have you with us
          as we build a revolutionary audience intelligence tool that will
          transform how you understand your customers.
        </p>

        <div
          style={{
            padding: "24px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            borderLeft: "4px solid #0284c7",
            marginBottom: "24px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)"
          }}
        >
          <h2
            style={{
              color: "#0f172a",
              fontSize: "20px",
              fontWeight: 600,
              marginTop: 0,
              marginBottom: "16px",
              letterSpacing: "-0.015em"
            }}
          >
            What to expect next
          </h2>

          <ul
            style={{
              color: "#334155",
              lineHeight: 1.7,
              paddingLeft: "20px",
              marginTop: "16px",
              marginBottom: "16px"
            }}
          >
            <li style={{ marginBottom: "10px" }}>
              Updates on our progress and launch timeline
            </li>
            <li style={{ marginBottom: "10px" }}>
              Early access to beta features for selected users
            </li>
            <li style={{ marginBottom: "10px" }}>
              Opportunities to provide feedback and shape the product
            </li>
          </ul>

          <p
            style={{
              color: "#334155",
              lineHeight: 1.6,
              fontSize: "16px",
              marginBottom: "0"
            }}
          >
            We're working hard to build the tool you've always needed to truly
            understand your audience and craft messaging that resonates.
          </p>
        </div>

        <p
          style={{
            color: "#334155",
            lineHeight: 1.6,
            fontSize: "16px",
            marginBottom: "8px"
          }}
        >
          In the meantime, if you have any questions or ideas you'd like to
          share, feel free to reply to this email - we'd love to hear from you!
        </p>
      </div>

      {/* CTA Button */}
      <div
        style={{
          textAlign: "center",
          margin: "0 16px 32px"
        }}
      >
        <a
          href="https://subtextai.vercel.app"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#0284c7",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: 500,
            fontSize: "16px"
          }}
        >
          Visit Subtext
        </a>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "16px 16px 24px",
          borderTop: "1px solid #e2e8f0",
          margin: "0 16px"
        }}
      >
        <p
          style={{
            color: "#475569",
            marginTop: "16px",
            marginBottom: "8px",
            fontSize: "16px",
            fontWeight: 500
          }}
        >
          The Subtext Team
        </p>
        <p
          style={{
            color: "#64748b",
            fontSize: "14px",
            margin: "0 0 16px"
          }}
        >
          Helping you discover what your audience really cares about
        </p>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "12px",
            margin: "0"
          }}
        >
          &copy; {new Date().getFullYear()} Subtext.ai. All rights reserved.
        </p>
      </div>
    </div>
  )
}
