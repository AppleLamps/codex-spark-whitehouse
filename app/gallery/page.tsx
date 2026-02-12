import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getGalleryItems } from "@/lib/cms";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Photo Gallery | The White House",
  description: "Official White House imagery from events, building highlights, and holiday moments.",
  path: "/gallery",
  image: "/images/hero/gallery-hero.jpg",
  keywords: ["white house gallery", "press photos", "white house events", "federal photo archive"],
});

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();

  return (
    <>
      <Hero
        title="Photo Gallery"
        tagline="A visual archive of ceremonies, diplomatic meetings, holidays, and life inside the White House."
        image="/images/hero/gallery-hero.jpg"
        alt="White House event photography montage"
        priority
        minHeight="min-h-[60svh]"
      />

      <section className="bg-[#0D1B2A] py-12">
        <Container>
          <SectionHeading
            eyebrow="Media"
            title="Official White House Photography"
            subtitle="Filter by Events, The Building, and Holidays. Select a photo to open full view."
          />
          <div className="mt-8">
            <PhotoGrid items={galleryItems} />
          </div>
        </Container>
      </section>
    </>
  );
}

