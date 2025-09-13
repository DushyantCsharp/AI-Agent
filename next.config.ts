import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: false, // ❌ disable typed routes
  },
};

export default nextConfig;
