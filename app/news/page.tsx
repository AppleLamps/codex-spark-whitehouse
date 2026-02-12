import { Hero } from "@/components/sections/Hero";
import { NewsGrid } from "@/components/sections/NewsGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getNewsArticles } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Newsroom | The White House",
  description:
    "News releases, briefings, executive actions, fact sheets, and remarks from administration leadership and White House offices.",
  path: "/news",
  image: "/images/hero/news-hero.jpg",
  keywords: ["white house", "news", "briefings", "press releases", "executive orders"],
});

export default async function NewsPage() {
  const newsArticles = await getNewsArticles();

  return (
    <>
      <Hero
        title="Newsroom"
        tagline="Articles, Briefings & Statements, Fact Sheets, Executive Orders, and Remarks from the administration."
        image="/images/hero/news-hero.jpg"
        alt="White House press briefing scene"
        priority
        minHeight="min-h-[64svh]"
      />

      <section className="bg-[#0D1B2A] py-12">
        <Container>
          <SectionHeading
            eyebrow="White House News"
            title="Latest Coverage"
            subtitle="Explore featured stories including Lab Leak, 365 Days of Wins, and The JFK Files."
          />
          <div className="mt-8">
            <NewsGrid articles={newsArticles} />
          </div>
        </Container>
      </section>
    </>
  );
}

