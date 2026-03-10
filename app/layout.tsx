import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { ConsoleEasterEgg } from "./components/ConsoleEasterEgg";
import { ReadingProgress } from "./components/ReadingProgress";
import { ThemeProvider } from "./components/ThemeProvider";
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

export const metadata: Metadata = {
  title: "Sai Krishna Veerabathini | Platform Engineering & AI Infrastructure",
  description:
    "Building intelligent cloud platforms, Kubernetes foundations, and agentic operational automation. Platform Engineering • AWS • Azure • GCP • Agentic AI",
  openGraph: {
    title: "Sai Krishna Veerabathini | Platform Engineering & AI Infrastructure",
    description:
      "Building intelligent cloud platforms, Kubernetes foundations, and agentic operational automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Krishna Veerabathini | Platform Engineering & AI Infrastructure",
    description: "Building intelligent cloud platforms, Kubernetes foundations, and agentic operational automation.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sai Krishna Veerabathini",
  jobTitle: "DevOps Architect",
  url: "https://saikrishna.dev",
  sameAs: [
    "https://github.com/sveerabathini",
    "https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340",
  ],
  knowsAbout: ["Platform Engineering", "DevOps", "Kubernetes", "AWS", "Azure", "GCP", "Pulumi", "Terraform", "Agentic AI"],
  worksFor: {
    "@type": "Organization",
    name: "Virtusa",
  },
  address: {
    "@type": "PostalAddress",
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
          <ReadingProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
