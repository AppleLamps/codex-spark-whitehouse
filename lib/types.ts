export type NewsCategory =
  | "Articles"
  | "Briefings & Statements"
  | "Fact Sheets"
  | "Executive Orders"
  | "Remarks";

export interface FeaturedCard {
  title: string;
  image: string;
  href: string;
  alt: string;
}

export interface Priority {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  alt: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string;
  image: string;
  alt: string;
  featured: boolean;
}

export interface CabinetMember {
  name: string;
  title: string;
  image: string;
  alt: string;
}

export interface AdministrationProfile {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
}

export interface KeyInitiative {
  title: string;
  description: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export type GalleryCategory = "Events" | "The Building" | "Holidays";

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  category: GalleryCategory;
  alt: string;
}

export interface NavigationGroup {
  title: string;
  items: Array<{ label: string; href: string }>;
}

export interface SocialLink {
  platform:
    | "X"
    | "Instagram"
    | "TikTok"
    | "Truth Social"
    | "Rumble"
    | "Facebook"
    | "YouTube";
  href: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  publishedAt: string;
  embedUrl: string;
  thumbnail: string;
}

export interface LivestreamEvent {
  id: string;
  title: string;
  startsAt: string;
  status: "live" | "scheduled" | "ended";
  embedUrl: string;
  description?: string;
}

export interface CmsPayload<T> {
  data: T;
  updatedAt: string;
}

