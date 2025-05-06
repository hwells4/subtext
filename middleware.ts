/*
<ai_context>
Contains middleware for protecting routes, checking user authentication, and redirecting as needed.
</ai_context>
*/

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// Define routes that should be protected
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)", // Example: protect all routes under /dashboard
  "/profile(.*)",   // Example: protect all routes under /profile
  "/todo(.*)",      // Protect todo routes
  // Add any other routes here that require authentication
])

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth()

  // If the user isn't signed in and the route is private, redirect to sign-in
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url })
  }

  // For all routes, whether protected or public, proceed
  return NextResponse.next()
})

export const config = {
  matcher: [
    // Match all routes, including public ones
    "/(.*)",
    // Skip Next.js internals and static files
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ]
}
