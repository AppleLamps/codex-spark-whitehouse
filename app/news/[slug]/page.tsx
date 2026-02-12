import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { notFound } from "next/navigation";
import { buttonClasses } from "@/components/ui/Button";
import { getNewsArticleById, getNewsArticles } from "@/lib/cms";
import { resolveHighResolutionImage } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";

interface NewsArticlePageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export async function generateMetadata({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = await getNewsArticleById(slug);
  if (!article) {
    return buildMetadata({
      title: "Article Not Found | The White House",
      description: "The requested article could not be found.",
      path: `/news/${slug}`,
    });
  }

  return buildMetadata({
    title: `${article.title} | The White House`,
    description: article.excerpt,
    path: `/news/${slug}`,
    image: article.image,
    keywords: ["white house", article.category.toLowerCase(), "news"],
  });
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const [article, allNews] = await Promise.all([getNewsArticleById(slug), getNewsArticles()]);

  if (!article) {
    notFound();
  }

  const related = allNews
    .filter((candidate) => candidate.id !== article.id && candidate.category === article.category)
    .slice(0, 2);

  return (
    <article className="bg-[#0D1B2A]">
      <section className="relative min-h-[56svh]">
        <Image
          src={resolveHighResolutionImage(article.image)}
          alt={article.alt}
          fill
          className="cinematic-image object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 to-[#0D1B2A]/35" />
        <div className="relative z-10 py-14">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">{article.category}</p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-none text-white sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-3 text-sm text-[#F5F3EF]">{article.date}</p>
          </Container>
        </div>
      </section>

      <section className="py-12">
        <Container className="space-y-8">
          <p className="max-w-3xl text-sm leading-relaxed text-[#E8E6E1] sm:text-base">{article.excerpt}</p>

          <Link href="/news" className={buttonClasses("outline", "md")}>
            Back to News
          </Link>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-[#10213f] py-12">
          <Container>
            <SectionHeading eyebrow="Related" title="More from this category" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="rounded-xl border border-white/10 bg-[#0D1B2A] p-4 text-[#F5F3EF] transition hover:bg-[#0f2645]"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-xs text-[#D4A843]">{item.date}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </article>
  );
}
