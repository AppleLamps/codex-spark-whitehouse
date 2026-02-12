import {
  galleryItems,
  keyInitiatives,
  livestreamSchedule,
  mediaVideos,
  newsArticles,
  priorities,
} from "@/lib/data";
import type {
  GalleryItem,
  KeyInitiative,
  LivestreamEvent,
  NewsArticle,
  Priority,
  VideoItem,
  CmsPayload,
} from "@/lib/types";

const cmsBaseUrl = process.env.CMS_API_BASE_URL ?? process.env.NEXT_PUBLIC_CMS_API_BASE_URL;
const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL;

function toCmsContentUrl(baseUrl: string, endpoint: string) {
  const normalizedBase = baseUrl.replace(/\/+$/, "");
  const normalizedEndpoint = endpoint.replace(/^\/+/, "");
  return `${normalizedBase}/api/content/${normalizedEndpoint}`;
}

function toCmsData<T>(payload: unknown): T | null {
  if (Array.isArray(payload)) {
    return payload as T;
  }

  if (!payload || typeof payload !== "object") {
    return null;
  }

  const candidate = (payload as CmsPayload<T>).data;
  if (candidate === undefined) {
    return null;
  }

  return candidate as T;
}

async function fetchFromCms<T>(endpoint: string, fallback: T): Promise<T> {
  const candidates = [cmsBaseUrl, siteBaseUrl]
    .filter((value): value is string => Boolean(value))
    .filter((value, index, self) => self.indexOf(value) === index);

  for (const candidateBase of candidates) {
    const requestUrl = toCmsContentUrl(candidateBase, endpoint);

    try {
      const response = await fetch(requestUrl, {
        headers: {
          "content-type": "application/json",
        },
        cache: "no-store",
      });
      if (!response.ok) {
        continue;
      }

      const payload = await response.json();
      const data = toCmsData<T>(payload);

      if (data !== null) {
        return data;
      }
    } catch {
      continue;
    }
  }

  return fallback;
}

export async function getNewsArticles() {
  return fetchFromCms<NewsArticle[]>("news", newsArticles);
}

export async function getNewsArticleById(id: string) {
  const articles = await getNewsArticles();
  return articles.find((article) => article.id === id);
}

export async function getPriorities() {
  return fetchFromCms<Priority[]>("priorities", priorities);
}

export async function getPriorityById(id: string) {
  const all = await getPriorities();
  return all.find((priority) => priority.id === id);
}

export async function getKeyInitiatives() {
  return fetchFromCms<KeyInitiative[]>("key-initiatives", keyInitiatives);
}

export async function getGalleryItems() {
  return fetchFromCms<GalleryItem[]>("gallery", galleryItems);
}

export async function getVideos() {
  return fetchFromCms<VideoItem[]>("videos", mediaVideos);
}

export async function getLivestream() {
  return fetchFromCms<LivestreamEvent[]>("livestream", livestreamSchedule);
}
