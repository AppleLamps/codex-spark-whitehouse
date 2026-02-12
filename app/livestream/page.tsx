import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getLivestream } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Livestream | The White House",
  description: "Watch live White House coverage and track upcoming broadcast events and briefings.",
  path: "/livestream",
  image: "/images/hero/gallery-hero.jpg",
  keywords: ["livestream", "white house", "briefing", "live", "schedule"],
});

function statusClass(status: string) {
  if (status === "live") {
    return "bg-emerald-400 text-[#0D1B2A]";
  }
  if (status === "scheduled") {
    return "bg-[#D4A843] text-[#0D1B2A]";
  }
  return "bg-white/20 text-[#E8E6E1]";
}

export default async function LivestreamPage() {
  const streamEvents = await getLivestream();
  const primary = streamEvents.find((event) => event.status === "live") ?? streamEvents[0];

  return (
    <section className="bg-[#0D1B2A] py-12">
      <Container className="space-y-6">
        <SectionHeading
          eyebrow="Live"
          title="Livestream"
          subtitle="Watch active sessions and review scheduled White House broadcast windows."
        />

        {primary ? (
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#10213f]">
            <div className="relative aspect-video">
              <iframe
                title={primary.title}
                src={primary.embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full bg-black"
              />
            </div>
            <div className="space-y-3 border-t border-white/10 p-6">
              <span className={`inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${statusClass(primary.status)}`}>
                {primary.status}
              </span>
              <h1 className="font-display text-3xl uppercase text-white sm:text-4xl">{primary.title}</h1>
              <p className="text-sm text-[#E8E6E1]">{primary.startsAt}</p>
              {primary.description ? <p className="text-sm text-[#E8E6E1]">{primary.description}</p> : null}
            </div>
          </article>
        ) : null}

        {streamEvents.length > 1 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {streamEvents
              .filter((item) => item.id !== primary?.id)
              .map((event) => (
                <article key={event.id} className="rounded-xl border border-white/10 bg-[#10213f] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">Upcoming</p>
                  <h2 className="mt-2 font-display text-xl text-white">{event.title}</h2>
                  <p className="mt-2 text-xs text-[#E8E6E1]">{event.startsAt}</p>
                  {event.description ? <p className="mt-2 text-sm text-[#E8E6E1]">{event.description}</p> : null}
                  <Link href="/videos" className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">
                    Browse related videos
                  </Link>
                </article>
              ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
