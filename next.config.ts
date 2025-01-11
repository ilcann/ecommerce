import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'],  // Allow this domain for image optimization
  },
};

export default nextConfig;
