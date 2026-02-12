import { FeaturedStrip } from "@/components/layout/FeaturedStrip";
import { Hero } from "@/components/sections/Hero";
import { PrioritiesGrid } from "@/components/sections/PrioritiesGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPriorities } from "@/lib/cms";
import { topFeaturedCards, heroTagline } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "The White House | Demo Site",
  description: "A cinematic interface for White House announcements, administration priorities, and official updates.",
  path: "/",
  image: "/images/hero/home-hero.jpg",
  keywords: ["white house", "government", "administration", "priorities", "news"],
});

export default async function HomePage() {
  const priorities = await getPriorities();

  return (
    <>
      <Hero
        title="The White House"
        tagline={heroTagline}
        image="/images/hero/home-hero.jpg"
        alt="Dramatic exterior view of the White House at golden hour"
        priority
        showIndicator
        minHeight="min-h-[100svh]"
      />

      <section className="border-y border-white/10 bg-[#0D1B2A] py-10">
        <Container>
          <SectionHeading
            eyebrow="Featured"
            title="Top Stories"
            subtitle="Explore major announcements, administration profiles, and the latest White House updates."
          />
          <div className="mt-6">
            <FeaturedStrip cards={topFeaturedCards} />
          </div>
        </Container>
      </section>

      <section>
        <PrioritiesGrid items={priorities} />
      </section>
    </>
  );
}

