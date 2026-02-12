"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type FormEvent, useEffect, useRef, useState } from "react";
import {
  Facebook,
  Instagram,
  Menu,
  Play,
  Search,
  Tv,
  Youtube,
  type LucideIcon,
  X,
} from "lucide-react";
import { FeaturedStrip } from "@/components/layout/FeaturedStrip";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Container } from "@/components/ui/Container";
import { mainNav, navigationGroups, socialLinks, topFeaturedCards } from "@/lib/data";

const socialIconMap: Record<string, LucideIcon> = {
  X: Tv,
  Instagram,
  TikTok: Play,
  "Truth Social": Tv,
  Rumble: Play,
  Facebook,
  YouTube: Youtube,
};

export function Header() {
  const [open, setOpen] = useState(false);
  const [showMobileStrip, setShowMobileStrip] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSearchOpen(false);
    setSearchTerm("");
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (!query) return;
    setSearchOpen(false);
    setSearchTerm("");
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0D1B2A]/85 text-white backdrop-blur-md">
      <Container className="py-3">
        <div className="mb-3 hidden md:block">
          <FeaturedStrip cards={topFeaturedCards} />
        </div>

        <div className="mb-3 md:hidden">
          <button
            type="button"
            onClick={() => setShowMobileStrip((current) => !current)}
            className="w-full rounded-full border border-white/20 px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.16em] text-[#F5F3EF]"
          >
            Featured Stories
          </button>
          {showMobileStrip ? <FeaturedStrip cards={topFeaturedCards} className="mt-3" /> : null}
        </div>

        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <p className="font-display text-3xl uppercase leading-none tracking-tight">The White House</p>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#F5F3EF] transition hover:text-[#D4A843]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.platform] ?? Tv;
                return (
                  <Link
                    key={social.platform}
                    href={social.href}
                    className="rounded-full border border-white/20 p-2 text-[#F5F3EF] transition hover:border-[#D4A843] hover:text-[#D4A843]"
                    aria-label={social.platform}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </Link>
                );
              })}
            </div>

            {searchOpen ? (
              <form onSubmit={submitSearch} className="flex items-center gap-2">
                <label htmlFor="site-search" className="sr-only">
                  Search site
                </label>
                <input
                  id="site-search"
                  ref={searchInputRef}
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search"
                  className="h-10 w-44 rounded-full border border-white/20 bg-[#10213f] px-3 text-sm text-white placeholder:text-[#E8E6E1]/70 focus:outline-none focus:ring-2 focus:ring-[#D4A843]"
                />
                <button
                  type="submit"
                  className="rounded-full border border-[#D4A843]/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F3EF] transition hover:bg-[#D4A843]/15"
                >
                  Go
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                  className="rounded-full border border-white/20 p-2 text-[#F5F3EF] transition hover:border-[#D4A843] hover:text-[#D4A843]"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="rounded-full border border-white/20 p-2 text-[#F5F3EF] transition hover:border-[#D4A843] hover:text-[#D4A843]"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            )}

            <button
              type="button"
              className="rounded-full border border-white/20 p-2 text-[#F5F3EF] transition hover:border-[#D4A843] hover:text-[#D4A843] lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu open={open} groups={navigationGroups} socialLinks={socialLinks} onClose={() => setOpen(false)} />
    </header>
  );
}
