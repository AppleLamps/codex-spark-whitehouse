import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Find Your Representative | The White House",
  description: "Tools and guidance for locating your local, state, and federal representatives.",
  path: "/representatives",
  image: "/images/about/about-hero.jpg",
  keywords: ["representative", "congress", "district", "lookup", "white house"],
});

export default function RepresentativesPage() {
  return (
    <section className="bg-[#0D1B2A] py-12">
      <Container>
        <SectionHeading
          eyebrow="Get Involved"
          title="Find Your Representative"
          subtitle="Use this space for representative lookup and district tools."
        />
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#10213f] p-6 sm:p-8">
          <p className="text-sm text-[#E8E6E1]">
            A real integration can be added with GovInfo or other official APIs to locate local, state, and federal
            representatives by ZIP code.
          </p>
        </div>
      </Container>
    </section>
  );
}
