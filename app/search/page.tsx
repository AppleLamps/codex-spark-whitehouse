import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getNewsArticles, getPriorities } from "@/lib/cms";
import { resolveHighResolutionImage } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Search | The White House",
  description: "Search current White House news and policy priorities by keyword.",
  path: "/search",
  image: "/images/hero/news-hero.jpg",
  keywords: ["search", "white house", "news", "priorities", "policy"],
});

type SearchParams = {
  q?: string | string[];
};

type SearchProps = {
  searchParams?: SearchParams | Promise<SearchParams>;
};

function normalizeQuery(value: string | string[] | undefined) {
  if (!value) return "";
  return Array.isArray(value) ? value[0].trim() : value.trim();
}

function matches(targets: string[], query: string) {
  const haystack = targets.join(" ").toLowerCase();
  return haystack.includes(query);
}

export default async function SearchPage({ searchParams }: SearchProps) {
  const resolvedSearch = await Promise.resolve(searchParams || {});
  const query = normalizeQuery(resolvedSearch?.q ?? "").toLowerCase();

  const [newsArticles, priorities] = await Promise.all([getNewsArticles(), getPriorities()]);

  return (
    <section className="bg-[#0D1B2A] py-12">
      <Container>
        <SectionHeading
          eyebrow="Search"
          title="Search Results"
          subtitle={
            query ? `Results for "${query}"` : "Enter a search term using the top bar."
          }
        />

        {!query ? (
          <p className="mt-8 text-sm text-[#E8E6E1]">Enter a keyword to search news and priorities.</p>
        ) : null}

        {query ? (
          <SearchResults query={query} newsArticles={newsArticles} priorities={priorities} />
        ) : null}
      </Container>
    </section>
  );
}

function SearchResults({
  query,
  newsArticles,
  priorities,
}: {
  query: string;
  newsArticles: Awaited<ReturnType<typeof getNewsArticles>>;
  priorities: Awaited<ReturnType<typeof getPriorities>>;
}) {
  const matchedNews = newsArticles.filter((article) =>
    matches([article.title, article.excerpt, article.category, article.date], query),
  );
  const matchedPriorities = priorities.filter((priority) =>
    matches([priority.title, priority.description], query),
  );

  if (matchedNews.length === 0 && matchedPriorities.length === 0) {
    return <p className="mt-8 text-sm text-[#E8E6E1]">No matches found. Try a different keyword.</p>;
  }

  return (
    <div className="mt-10 space-y-10">
      {matchedNews.length > 0 ? (
        <div>
          <h2 className="font-display text-2xl uppercase text-white">News</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {matchedNews.map((article) => (
              <article key={article.id} className="overflow-hidden rounded-xl border border-white/10 bg-[#10213f]">
                <Link href={`/news/${article.id}`} className="block">
                  <div className="relative min-h-52">
                    <Image
                      src={resolveHighResolutionImage(article.image)}
                      alt={article.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">{article.category}</p>
                    <p className="mt-2 font-display text-xl text-white">{article.title}</p>
                    <p className="mt-2 text-sm text-[#E8E6E1]">{article.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {matchedPriorities.length > 0 ? (
        <div>
          <h2 className="font-display text-2xl uppercase text-white">Priorities</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {matchedPriorities.map((priority) => (
              <article key={priority.id} className="overflow-hidden rounded-xl border border-white/10 bg-[#1B2A4A]">
                <Link href={`/priorities/${priority.id}`} className="block p-4">
                  <p className="font-display text-lg text-white">{priority.title}</p>
                  <p className="mt-2 text-sm text-[#E8E6E1]">{priority.description}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
