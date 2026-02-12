import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { keyInitiatives, priorities } from "@/lib/data";

export default function PrioritiesPage() {
  return (
    <>
      <Hero
        title="Priorities"
        tagline="An execution-focused agenda centered on growth, security, health, and national renewal."
        image="/images/hero/priorities-hero.jpg"
        alt="Aerial perspective of the White House and surrounding federal district"
        priority
        minHeight="min-h-[60svh]"
      />

      <section className="bg-[#0D1B2A] py-12">
        <Container>
          <div className="space-y-8">
            {priorities.map((priority) => (
              <article
                key={priority.id}
                id={priority.id}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1B2A4A]"
              >
                <div className="absolute inset-0 bg-linear-to-br from-[#1B2A4A] to-[#2C5282]">
                  <Image src={priority.image} alt={priority.alt} fill className="cinematic-image object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/85 via-[#0D1B2A]/65 to-[#0D1B2A]/20" />
                <div className="relative z-10 px-6 py-10 sm:px-10">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">Priority</p>
                  <h2 className="font-display text-4xl uppercase leading-none text-white sm:text-5xl">
                    {priority.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm text-[#F5F3EF] sm:text-base">{priority.description}</p>
                  <Link href="#" className={buttonClasses("outline", "md", "mt-6")}>
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#10213f] py-14">
        <Container>
          <SectionHeading
            eyebrow="Policy Programs"
            title="Key Initiatives"
            subtitle="Cross-cutting initiatives supporting families, innovation, healthcare reform, and civic renewal."
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

