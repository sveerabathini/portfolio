import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { ConsoleEasterEgg } from "./components/ConsoleEasterEgg";
import { NoiseTexture } from "./components/NoiseTexture";
import { ReadingProgress } from "./components/ReadingProgress";
import { SpotlightCursor } from "./components/SpotlightCursor";
import { ThemeProvider } from "./components/ThemeProvider";
import { getSiteUrl, rootMetadata } from "./lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...rootMetadata,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sai Krishna Veerabathini",
  jobTitle: "Associate Engineering Manager",
  url: siteUrl,
  sameAs: [
    "https://github.com/sveerabathini",
    "https://www.linkedin.com/in/sai-krishna-veerabathini",
  ],
  knowsAbout: [
    "Platform Engineering",
    "DevOps",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "Pulumi",
    "Terraform",
    "Vertex AI",
    "Claude",
    "Generative AI",
    "Agentic AI",
  ],
  knowsLanguage: ["English", "Hindi"],
  worksFor: {
    "@type": "Organization",
    name: "Virtusa",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Halifax",
    addressRegion: "Nova Scotia",
    addressCountry: "CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <ConsoleEasterEgg />
          <div className="no-print">
            <ReadingProgress />
            <SpotlightCursor />
            <NoiseTexture />
          </div>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
