"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { NewsArticle, NewsCategory } from "@/lib/types";

const tabs: Array<"All" | NewsCategory> = [
  "All",
  "Articles",
  "Briefings & Statements",
  "Fact Sheets",
  "Executive Orders",
  "Remarks",
];

interface NewsGridProps {
  articles: NewsArticle[];
}

export function NewsGrid({ articles }: NewsGridProps) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");

  const filtered = useMemo(() => {
    if (activeTab === "All") {
      return articles;
    }
    return articles.filter((article) => article.category === activeTab);
  }, [activeTab, articles]);

  const featured = articles.filter((article) => article.featured);

  return (
    <div className="space-y-12">
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-3xl uppercase text-white">Featured Stories</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {featured.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              image={article.image}
              alt={article.alt}
              href="#"
              subtitle={article.excerpt}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                activeTab === tab
                  ? "bg-[#D4A843] text-[#0D1B2A]"
                  : "bg-[#1B2A4A] text-[#F5F3EF] hover:bg-[#24375f]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#10213f]"
            >
              <Card
                title={article.title}
                image={article.image}
                alt={article.alt}
                href="#"
                className="rounded-none border-0 shadow-none"
              />
              <div className="space-y-3 p-4">
                <div className="flex items-center justify-between">
                  <Badge>{article.category}</Badge>
                  <p className="text-xs text-[#E8E6E1]">{article.date}</p>
                </div>
                <p className="text-sm text-[#F5F3EF]">{article.excerpt}</p>
                <Link href="#" className="inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">
                  Read more
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
