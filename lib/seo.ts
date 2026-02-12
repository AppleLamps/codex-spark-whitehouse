import type { Metadata } from "next";

export const siteName = "The White House";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://whitehouse.demo").replace(/\/+$/, "");

function toAbsoluteAssetUrl(path: string) {
  if (!path) {
    return `${siteUrl}/images/hero/home-hero.jpg`;
  }
  return /^https?:\/\//i.test(path) ? path : `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/images/hero/home-hero.jpg",
  keywords = [],
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const canonicalUrl = `${siteUrl}${path}`;
  const imageUrl = toAbsoluteAssetUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: canonicalUrl },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      siteName,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@WhiteHouse",
    },
  };
}
