import { NextResponse } from "next/server";
import {
  galleryItems,
  keyInitiatives,
  mediaVideos,
  livestreamSchedule,
  newsArticles,
  priorities,
} from "@/lib/data";
import type { CmsPayload, LivestreamEvent } from "@/lib/types";
import { type GalleryItem, type KeyInitiative, type NewsArticle, type Priority, type VideoItem } from "@/lib/types";

type ApiCollection = {
  news: NewsArticle[];
  priorities: Priority[];
  gallery: GalleryItem[];
  "key-initiatives": KeyInitiative[];
  videos: VideoItem[];
  livestream: LivestreamEvent[];
};

export async function GET(
  _request: Request,
  { params }: { params: { type: keyof ApiCollection } | Promise<{ type: keyof ApiCollection }> },
) {
  let body: CmsPayload<unknown>;
  const { type: key } = await params;

  switch (key) {
    case "news":
      body = { data: newsArticles, updatedAt: new Date().toISOString() };
      break;
    case "priorities":
      body = { data: priorities, updatedAt: new Date().toISOString() };
      break;
    case "gallery":
      body = { data: galleryItems, updatedAt: new Date().toISOString() };
      break;
    case "key-initiatives":
      body = { data: keyInitiatives, updatedAt: new Date().toISOString() };
      break;
    case "videos":
      body = { data: mediaVideos, updatedAt: new Date().toISOString() };
      break;
    case "livestream":
      body = { data: livestreamSchedule, updatedAt: new Date().toISOString() };
      break;
    default:
      return NextResponse.json({ error: "Unknown content type." }, { status: 404 });
  }

  return NextResponse.json(body);
}
