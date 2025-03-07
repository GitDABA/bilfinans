import type { NextConfig } from "next";

// This file is used to configure Next.js
// See https://nextjs.org/docs/api-reference/next.config.js/introduction
const nextConfig: NextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  transpilePackages: ["@workspace/ui"],
  
  // Optimize for Netlify deployment
  experimental: {
    // Explicitly disable all experimental features
    reactCompiler: false,
    ppr: false,
  },
  
  // Disable source maps in production to reduce build time
  productionBrowserSourceMaps: false,
  
  // Improve logging for debugging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  
  // Configure image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    minimumCacheTTL: 31536000,
  },
  
  // Ensure we generate a standalone Next.js app
  output: "standalone",
};

export default nextConfig;
