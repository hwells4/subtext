/*
<ai_context>
Configures Next.js for the app.
</ai_context>
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development practices
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "images.unsplash.com" }
    ],
    // Optimize SVG images as well (normally excluded)
    dangerouslyAllowSVG: true,
    // Add content security policy for images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Enable image optimization for all domains
    domains: ['localhost'],
    // Set image formats in order of preference
    formats: ['image/webp', 'image/avif'],
    // Cache optimization
    minimumCacheTTL: 60
  },

  // Enable performance optimization features
  experimental: {
    // Optimize code compilation
    optimizeCss: true,
    // Enable optimized loading strategy
    optimisticClientCache: true,
    // Enhance client-side cache for faster navigation
    clientRouterFilter: true,
    // Prefetch pages on viewport
    scrollRestoration: true
  },

  // Enable gzip compression
  compress: true,
  
  // Enhanced production sourcemaps for better debugging with minimal performance impact
  productionBrowserSourceMaps: false,
  
  // Performance-focused webpack config
  webpack: (config, { dev, isServer }) => {
    // Optimize chunking with a simpler approach
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 25,
      minSize: 20000
    };

    // Add build-time bundle analyzer in development only when ANALYZE is set
    if (process.env.ANALYZE === 'true') {
      if (dev && !isServer) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true,
          })
        );
      }
    }

    return config;
  },

  // Enable progressive web app features
  poweredByHeader: false,
  
  // Optimize page loading
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'md', 'mdx'],
  
  // Add headers for performance optimization
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800'
          }
        ]
      }
    ];
  }
}

export default nextConfig
