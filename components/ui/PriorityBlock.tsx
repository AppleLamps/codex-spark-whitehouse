"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Priority } from "@/lib/types";

interface PriorityBlockProps {
  priority: Priority;
}

export function PriorityBlock({ priority }: PriorityBlockProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative min-h-[42svh] overflow-hidden border-y border-white/10"
      id={priority.id}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#1B2A4A] to-[#2C5282]">
        <Image src={priority.image} alt={priority.alt} fill className="cinematic-image object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/85 via-[#0D1B2A]/45 to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-[42svh] w-full max-w-[1280px] flex-col justify-end px-4 py-10 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A843]">Priority</p>
        <h3 className="max-w-4xl font-display text-4xl uppercase leading-none text-white sm:text-5xl md:text-6xl">
          {priority.title}
        </h3>
        <p className="mt-4 max-w-3xl text-sm text-[#F5F3EF] sm:text-base">{priority.description}</p>
        <Link
          href={priority.href}
          className="mt-6 inline-flex w-fit rounded-full border border-[#D4A843]/80 bg-[#D4A843]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F5F3EF] transition hover:bg-[#D4A843]/25"
        >
          Explore Priority
        </Link>
      </div>
    </motion.article>
  );
}

