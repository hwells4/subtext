/*
<ai_context>
This client component implements Google Analytics (gtag.js).
</ai_context>
*/

"use client"

import Script from "next/script"

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BL8CZLCPE9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BL8CZLCPE9');
        `}
      </Script>
    </>
  )
}
