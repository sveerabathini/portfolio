import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**",
      },
    ],
  },
  experimental: {
    // Use system TLS certificates for font fetching (fixes Turbopack + Google Fonts on Windows/corporate networks)
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
