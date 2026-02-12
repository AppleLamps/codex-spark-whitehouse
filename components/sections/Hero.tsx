"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

interface HeroProps {
  title: string;
  tagline?: string;
  image: string;
  alt: string;
  priority?: boolean;
  showIndicator?: boolean;
  minHeight?: string;
}

export function Hero({
  title,
  tagline,
  image,
  alt,
  priority = false,
  showIndicator = false,
  minHeight = "min-h-[78svh]",
}: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <section ref={containerRef} className={`relative overflow-hidden ${minHeight}`}>
      <motion.div style={{ y }} className="absolute inset-0 bg-linear-to-br from-[#1B2A4A] to-[#2C5282]">
        <Image src={image} alt={alt} fill priority={priority} className="cinematic-image object-cover" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/85 via-[#0D1B2A]/55 to-[#0D1B2A]/25" />

      <div className="relative z-10 mx-auto flex min-h-[78svh] w-full max-w-[1280px] flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl md:text-7xl"
        >
          {title}
        </motion.h1>
        {tagline ? (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-4xl text-sm text-[#F5F3EF] sm:text-base md:text-lg"
          >
            {tagline}
          </motion.p>
        ) : null}
      </div>

      {showIndicator ? (
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[#F5F3EF]">
          <div className="flex flex-col items-center text-[10px] font-semibold uppercase tracking-[0.16em]">
            <span>Scroll</span>
            <ArrowDown className="mt-1 h-4 w-4 animate-bounce" />
          </div>
        </div>
      ) : null}
    </section>
  );
}

