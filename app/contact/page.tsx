import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact The White House"
        tagline="Share comments, requests, and feedback with the administration."
        image="/images/hero/contact-hero.jpg"
        alt="White House North Portico entrance"
        priority
        minHeight="min-h-[56svh]"
      />

      <section className="bg-[#0D1B2A] py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-2xl border border-white/10 bg-[#10213f] p-6 sm:p-8">
              <SectionHeading eyebrow="Get Involved" title="Send a Message" />
              <div className="mt-6">
                <ContactForm />
              </div>
            </article>

            <aside className="rounded-2xl border border-white/10 bg-[#10213f] p-6 sm:p-8">
              <h2 className="font-display text-3xl uppercase text-white">Mailing Address</h2>
              <p className="mt-4 text-sm text-[#E8E6E1]">
                The White House
                <br />
                1600 Pennsylvania Avenue NW
                <br />
                Washington, DC 20500
              </p>

              <h3 className="mt-8 font-display text-2xl uppercase text-white">Phone</h3>
              <p className="mt-3 text-sm text-[#E8E6E1]">Comments: 202-456-1111</p>

              <h3 className="mt-8 font-display text-2xl uppercase text-white">Office Hours</h3>
              <p className="mt-3 text-sm text-[#E8E6E1]">Monday-Friday, 9:00 AM - 5:00 PM ET (mock schedule)</p>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

