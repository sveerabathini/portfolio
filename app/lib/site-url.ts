import type { Metadata } from "next";

export const SITE_DOMAIN = "saikrishna.veerabathini.ai";
export const PRODUCTION_SITE_URL = `https://${SITE_DOMAIN}`;

export const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Sai Krishna Veerabathini | Platform Engineering & AI Infrastructure",
} as const;

/** Canonical site origin for metadata, sitemap, robots, and JSON-LD. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  // Prefer custom domain on Vercel production over *.vercel.app deployment URLs.
  if (process.env.VERCEL_ENV === "production") {
    return PRODUCTION_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  openGraph?: Metadata["openGraph"];
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  openGraph,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const pageUrl = canonicalPath === "/" ? getSiteUrl() : `${getSiteUrl()}${canonicalPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url: pageUrl,
      siteName: "Sai Krishna Veerabathini",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export const rootMetadata: Metadata = createPageMetadata({
  title: "Sai Krishna Veerabathini | Associate Engineering Manager · Platform Engineering",
  description:
    "Associate Engineering Manager at Virtusa. 10+ years in Cloud, DevOps, Platform Engineering, Kubernetes, and IaC. Halifax, Nova Scotia, Canada.",
  path: "/",
  openGraph: {
    description:
      "Platform engineering, Kubernetes, cloud automation, generative AI, and DevOps leadership. Based in Halifax, Nova Scotia.",
  },
});
