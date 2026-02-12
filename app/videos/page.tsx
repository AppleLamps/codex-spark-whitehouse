import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getVideos } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Video Library | The White House",
  description: "Browse official White House videos, briefings, and policy coverage in one place.",
  path: "/videos",
  image: "/images/hero/gallery-hero.jpg",
  keywords: ["video library", "white house", "briefing", "video", "policy"],
});

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <section className="bg-[#0D1B2A] py-12">
      <Container>
        <SectionHeading
          eyebrow="Media"
          title="Video Library"
          subtitle="Official briefings, remarks, and events from recent administration activity."
        />
        {videos.length === 0 ? (
          <p className="mt-6 text-sm text-[#E8E6E1]">
            No videos are available right now. Check back as we publish fresh updates.
          </p>
        ) : (
          <div className="mt-8 space-y-8">
            {videos.map((video) => (
              <article key={video.id} className="overflow-hidden rounded-2xl border border-white/10 bg-[#10213f]">
                <div className="relative aspect-video">
                  <iframe
                    title={video.title}
                    src={video.embedUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full bg-black"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">{video.category}</p>
                  <h2 className="mt-2 font-display text-2xl text-white sm:text-3xl">{video.title}</h2>
                  <p className="mt-2 text-sm text-[#E8E6E1]">{video.description}</p>
                  <p className="mt-3 text-xs text-[#D4A843]">{video.publishedAt}</p>
                </div>
                <div className="border-t border-white/10 px-6 py-3 text-xs text-[#E8E6E1]">
                  Duration: {video.duration}
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
