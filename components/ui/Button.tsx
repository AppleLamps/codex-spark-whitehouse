import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A843] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1B2A]",
    variant === "primary" && "bg-[#D4A843] text-[#0D1B2A] hover:bg-[#C5A54E]",
    variant === "secondary" && "bg-[#1B2A4A] text-white hover:bg-[#24375f]",
    variant === "outline" && "border border-[#D4A843]/80 bg-transparent text-[#F5F3EF] hover:bg-[#D4A843]/10",
    variant === "ghost" && "bg-transparent text-[#F5F3EF] hover:bg-white/10",
    size === "sm" && "h-9 px-4 text-sm",
    size === "md" && "h-11 px-5 text-sm",
    size === "lg" && "h-12 px-6 text-base",
    className,
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return <button className={buttonClasses(variant, size, className)} {...props} />;
}
