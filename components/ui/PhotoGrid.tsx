"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import type { GalleryCategory, GalleryItem } from "@/lib/types";

const filters: Array<"All" | GalleryCategory> = ["All", "Events", "The Building", "Holidays"];

interface PhotoGridProps {
  items: GalleryItem[];
}

export function PhotoGrid({ items }: PhotoGridProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") {
      return items;
    }
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${{
              true: "bg-[#D4A843] text-[#0D1B2A]",
              false: "bg-[#1B2A4A] text-[#F5F3EF] hover:bg-[#24375f]",
            }[String(activeFilter === filter)]}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <motion.button
            key={item.id}
            type="button"
            whileHover={{ y: -4 }}
            onClick={() => setActiveImage(item)}
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-[#1B2A4A] text-left"
          >
            <div className="relative min-h-[220px] bg-gradient-to-br from-[#1B2A4A] to-[#2C5282]">
              <Image src={item.image} alt={item.alt} width={900} height={700} className="cinematic-image h-auto w-full object-cover" />
            </div>
            <div className="px-4 py-3">
              <p className="text-sm text-[#F5F3EF]">{item.caption}</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D4A843]">{item.category}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[#0D1B2A]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/70"
                aria-label="Close image"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative bg-gradient-to-br from-[#1B2A4A] to-[#2C5282]">
                <Image
                  src={activeImage.image}
                  alt={activeImage.alt}
                  width={1600}
                  height={1100}
                  className="cinematic-image h-auto w-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-[#F5F3EF]">{activeImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
