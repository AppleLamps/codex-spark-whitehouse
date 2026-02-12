import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { notFound } from "next/navigation";
import { getKeyInitiatives, getPriorityById, getPriorities } from "@/lib/cms";
import { resolveHighResolutionImage } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";

interface PriorityPageProps {
  params: Promise<{ id: string }> | { id: string };
}

export async function generateMetadata({ params }: PriorityPageProps) {
  const { id } = await params;
  const priority = await getPriorityById(id);
  if (!priority) {
    return buildMetadata({
      title: "Priority Not Found | The White House",
      description: "The requested priority could not be found.",
      path: `/priorities/${id}`,
    });
  }

  return buildMetadata({
    title: `${priority.title} | The White House`,
    description: priority.description,
    path: `/priorities/${id}`,
    image: priority.image,
    keywords: ["policy", "white house", priority.title],
  });
}

export default async function PriorityPage({ params }: PriorityPageProps) {
  const { id } = await params;
  const [priority, keyInitiatives] = await Promise.all([getPriorityById(id), getKeyInitiatives()]);
  if (!priority) {
    notFound();
  }

  return (
    <>
      <section className="relative min-h-[56svh] overflow-hidden">
        <Image
          src={resolveHighResolutionImage(priority.image)}
          alt={priority.alt}
          fill
          className="cinematic-image object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/80 to-[#0D1B2A]/45" />
        <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">Priority</p>
            <h1 className="mt-3 font-display text-5xl uppercase text-white sm:text-6xl">{priority.title}</h1>
          </Container>
        </div>
      </section>

      <section className="bg-[#0D1B2A] py-12">
        <Container>
          <SectionHeading
            title={priority.title}
            eyebrow="Overview"
            subtitle={priority.description}
          />
          <p className="mt-6 max-w-3xl text-sm text-[#E8E6E1] sm:text-base">
            Learn how this priority connects across agencies, executive leadership, and implementation timelines.
          </p>
          <div className="mt-8">
            <Link href="/priorities" className="inline-flex rounded-full border border-[#D4A843]/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F5F3EF]">
              Back to Priorities
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[#10213f] py-12">
        <Container>
          <SectionHeading
            eyebrow="Related initiatives"
            title="Key Programs"
            subtitle="These initiatives support broader administration goals across the priority family."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyInitiatives.map((initiative) => (
              <article key={initiative.title} className="rounded-xl border border-white/10 bg-[#0D1B2A]/75 p-5">
                <h3 className="font-display text-2xl uppercase text-white">{initiative.title}</h3>
                <p className="mt-3 text-sm text-[#E8E6E1]">{initiative.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
