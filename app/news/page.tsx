import { Hero } from "@/components/sections/Hero";
import { NewsGrid } from "@/components/sections/NewsGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { newsArticles } from "@/lib/data";

export default function NewsPage() {
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
