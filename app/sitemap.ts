"use server"

import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL from environment or fallback
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://trysubtext.vercel.app"

  // Define your routes - this can be expanded or pulled from your app structure
  const routes = [
    "",
    "/about",
    "/blog",
    "/contact"
    // Add more routes as your app grows
  ]

  // Current date for lastModified
  const date = new Date()

  // Map routes to sitemap entries
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: date,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }))
}
