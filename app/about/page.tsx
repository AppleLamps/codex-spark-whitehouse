import Image from "next/image";
import { Landmark, Scale, Shield } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timelineMilestones } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About The White House"
        tagline="Explore historic rooms, constitutional structure, and the timeline that shaped America’s most recognized residence."
        image="/images/hero/about-hero.jpg"
        alt="Historic interior hall inside the White House"
        priority
        minHeight="min-h-[60svh]"
      />

      <section className="bg-[#0D1B2A] py-12" id="timeline">
        <Container>
          <SectionHeading eyebrow="A Timeline" title="Moments That Shaped The Residence" />
          <div className="mt-8 space-y-5 border-l border-[#D4A843]/40 pl-5">
            {timelineMilestones.map((milestone) => (
              <article key={milestone.year} className="relative rounded-xl border border-white/10 bg-[#10213f]/80 p-4">
                <span className="absolute -left-[29px] top-5 h-3 w-3 rounded-full bg-[#D4A843]" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">{milestone.year}</p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl uppercase text-white">{milestone.title}</h3>
                <p className="mt-2 text-sm text-[#E8E6E1]">{milestone.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#10213f] py-14" id="government">
        <Container>
          <SectionHeading
            eyebrow="Our Government"
            title="Constitutional Structure"
            subtitle="Three co-equal branches share authority under the Constitution, balancing power through law, oversight, and representation."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-white/10 bg-[#0D1B2A]/75 p-5">
              <Landmark className="h-6 w-6 text-[#D4A843]" />
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl uppercase">Executive Branch</h3>
              <p className="mt-2 text-sm text-[#E8E6E1]">Implements federal law, directs national policy, and leads foreign affairs.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#0D1B2A]/75 p-5">
              <Scale className="h-6 w-6 text-[#D4A843]" />
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl uppercase">Legislative Branch</h3>
              <p className="mt-2 text-sm text-[#E8E6E1]">Writes federal law and controls appropriations through Congress.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#0D1B2A]/75 p-5">
              <Shield className="h-6 w-6 text-[#D4A843]" />
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl uppercase">Judicial Branch</h3>
              <p className="mt-2 text-sm text-[#E8E6E1]">Interprets law, resolves constitutional disputes, and ensures legal consistency.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-[#0D1B2A] py-14" id="founding">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1B2A4A] to-[#2C5282]">
            <Image src="/images/about/founding.jpg" alt="Historic patriotic scene representing America 250" width={1200} height={900} className="cinematic-image h-auto w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">America&apos;s Founding</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl uppercase leading-none text-white sm:text-5xl">
              Freedom 250
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#E8E6E1] sm:text-base">
              The America 250 initiative celebrates the nation&apos;s founding ideals through civic education, historical exhibitions, and community-led commemorations. White House programming highlights constitutional heritage and the institutions that shape the republic.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
