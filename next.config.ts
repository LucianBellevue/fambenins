import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for production
  poweredByHeader: false,
  
  // Configure API routes to handle larger payloads (for file uploads)
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
};

export default nextConfig;
