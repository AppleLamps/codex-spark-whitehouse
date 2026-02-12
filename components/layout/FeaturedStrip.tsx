"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { FeaturedCard } from "@/lib/types";

interface FeaturedStripProps {
  cards: FeaturedCard[];
  className?: string;
}

export function FeaturedStrip({ cards, className }: FeaturedStripProps) {
  return (
    <div className={className}>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="w-[240px] shrink-0"
          >
            <Link
              href={card.href}
              className="group relative block overflow-hidden rounded-xl border border-white/20 bg-[#1B2A4A]"
            >
              <div className="relative h-28 bg-linear-to-br from-[#1B2A4A] to-[#2C5282]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="cinematic-image object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <p className="absolute inset-x-0 bottom-0 px-3 py-2 font-display text-lg uppercase leading-none text-white">
                {card.title}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

