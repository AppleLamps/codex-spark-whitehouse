import { cn } from "@/lib/utils";

interface BadgeProps {
  children: string;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[#C5A54E]/60 bg-[#1B2A4A]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F5F3EF]",
        className,
      )}
    >
      {children}
    </span>
  );
}
