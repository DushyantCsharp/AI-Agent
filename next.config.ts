// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true, // keep strict route checks
  },
};

export default nextConfig;
