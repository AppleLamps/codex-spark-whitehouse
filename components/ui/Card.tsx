import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { resolveHighResolutionImage } from "@/lib/utils";

interface CardProps {
  title: string;
  image: string;
  href: string;
  alt: string;
  subtitle?: string;
  className?: string;
  priority?: boolean;
}

export function Card({ title, image, href, alt, subtitle, className, priority = false }: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#1B2A4A] shadow-[0_16px_32px_rgba(0,0,0,0.28)]",
        className,
      )}
    >
      <div className="relative h-56 bg-linear-to-br from-[#1B2A4A] to-[#2C5282]">
        <Image
          src={resolveHighResolutionImage(image)}
          alt={alt}
          fill
          className="cinematic-image object-cover transition duration-500 group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <p className="font-display text-2xl uppercase leading-none tracking-tight">{title}</p>
        {subtitle ? <p className="mt-2 text-sm text-[#F5F3EF]">{subtitle}</p> : null}
      </div>
    </Link>
  );
}

