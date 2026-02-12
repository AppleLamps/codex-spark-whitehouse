import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { administrationProfiles, cabinetMembers } from "@/lib/data";

export default function AdministrationPage() {
  const [trump, vance, melania, usha] = administrationProfiles;

  return (
    <div className="bg-[#F5F3EF] text-[#1A1A1A]">
      <section id="trump" className="border-b border-[#d9d6cf]">
        <Container className="grid gap-8 py-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-[#1B2A4A] to-[#2C5282]">
            <Image src={trump.image} alt={trump.alt} width={900} height={1200} className="h-auto w-full object-cover" priority />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B22234]">Administration</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl uppercase leading-none text-[#1B2A4A]">
              {trump.name}
            </h1>
            <p className="mt-2 text-base font-semibold text-[#3D3D3D]">{trump.role}</p>
            <p className="mt-5 text-base leading-relaxed text-[#3D3D3D]">{trump.bio}</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#d9d6cf] py-12" id="vance">
        <Container className="grid gap-8 md:grid-cols-2">
          {[vance, melania, usha].map((person) => (
            <article
              key={person.name}
              id={person.name.includes("Melania") ? "melania" : person.name.includes("Usha") ? "usha" : "vance"}
              className="rounded-2xl border border-[#d9d6cf] bg-white p-5 shadow-[0_12px_28px_rgba(20,20,20,0.08)]"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#f8f8f8] to-[#e9e8e4]">
                <Image src={person.image} alt={person.alt} width={900} height={1100} className="h-auto w-full object-cover" />
              </div>
              <h2 className="mt-5 font-serif text-3xl text-[#1B2A4A]">{person.name}</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#B22234]">{person.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#3D3D3D]">{person.bio}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-14" id="cabinet">
        <Container>
          <SectionHeading
            eyebrow="The Cabinet"
            title="Executive Leadership"
            subtitle="Cabinet members serving in key departments across foreign policy, defense, economy, health, and homeland security."
            className="text-[#1B2A4A]"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {cabinetMembers.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-xl border border-[#d9d6cf] bg-white">
                <div className="relative bg-gradient-to-br from-[#f8f8f8] to-[#e9e8e4]">
                  <Image src={member.image} alt={member.alt} width={700} height={900} className="h-auto w-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-xl text-[#1B2A4A]">{member.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#B22234]">{member.title}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
