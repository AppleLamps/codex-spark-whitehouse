import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Internships | The White House",
  description: "Apply for current or upcoming White House internships through available program pathways and guidance.",
  path: "/internships",
  image: "/images/about/blue-room.jpg",
  keywords: ["internships", "white house", "application", "public service", "jobs"],
});

export default function InternshipsPage() {
  return (
    <section className="bg-[#0D1B2A] py-12">
      <Container>
        <SectionHeading
          eyebrow="Get Involved"
          title="Internship Opportunities"
          subtitle="Browse upcoming and historical internship opportunities, application windows, and eligibility details."
        />
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#10213f] p-6 sm:p-8">
          <p className="text-sm text-[#E8E6E1]">
            This demo currently provides static application guidance while a full application workflow is built.
            Submissions can be routed to the existing contact flow in the meantime.
          </p>
        </div>
      </Container>
    </section>
  );
}
