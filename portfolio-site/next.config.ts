import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Use system TLS certificates for font fetching (fixes Turbopack + Google Fonts on Windows/corporate networks)
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
