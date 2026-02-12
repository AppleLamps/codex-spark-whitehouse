import { type FormEvent, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Play, Tv, Youtube } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { footerColumns, socialLinks } from "@/lib/data";

const socialIcon = {
  X: Tv,
  Instagram,
  TikTok: Play,
  "Truth Social": Tv,
  Rumble: Play,
  Facebook,
  YouTube: Youtube,
} as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    kind: "idle" | "success" | "error";
    message: string;
  }>({
    kind: "idle",
    message: "",
  });

  const submitNewsletter = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus({ kind: "idle", message: "" });

    if (!email.trim()) {
      setFormStatus({ kind: "error", message: "Please enter an email address." });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const payload = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) {
        setFormStatus({
          kind: "error",
          message: payload.error || "Unable to subscribe right now. Please try again.",
        });
      } else {
        setFormStatus({
          kind: "success",
          message: payload.message || "Thank you for subscribing.",
        });
        setEmail("");
      }
    } catch {
      setFormStatus({ kind: "error", message: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#0D1B2A] py-12 text-[#F5F3EF]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr_1.2fr]">
          <div>
            <p className="mb-4 font-display text-xl uppercase text-white">About</p>
            <div className="space-y-2 text-sm">
              {footerColumns.about.map((item) => (
                <Link key={item.label} href={item.href} className="block transition hover:text-[#D4A843]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-display text-xl uppercase text-white">Media</p>
            <div className="space-y-2 text-sm">
              {footerColumns.media.map((item) => (
                <Link key={item.label} href={item.href} className="block transition hover:text-[#D4A843]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-display text-xl uppercase text-white">Initiatives</p>
            <div className="space-y-2 text-sm">
              {footerColumns.initiatives.map((item) => (
                <Link key={item.label} href={item.href} className="block transition hover:text-[#D4A843]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-display text-xl uppercase text-white">Stay Informed</p>
            <p className="mb-4 text-sm text-[#E8E6E1]">Receive White House updates, announcements, and event highlights.</p>
            {formStatus.kind !== "idle" ? (
              <p
                className={`mb-3 rounded-xl px-3 py-2 text-xs ${
                  formStatus.kind === "success" ? "bg-emerald-400/10 text-emerald-200" : "bg-red-500/10 text-red-200"
                }`}
              >
                {formStatus.message}
              </p>
            ) : null}
            <form className="flex gap-2" onSubmit={submitNewsletter}>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                disabled={isSubmitting}
                className="h-11 w-full rounded-full border border-white/15 bg-white/5 px-4 text-sm placeholder:text-[#E8E6E1]/70 focus:outline-none focus:ring-2 focus:ring-[#D4A843]"
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
          {socialLinks.map((social) => {
            const Icon = socialIcon[social.platform];
            return (
              <Link
                key={social.platform}
                href={social.href}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-white/20"
              >
                <Icon className="h-3.5 w-3.5" />
                {social.platform}
              </Link>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-[#E8E6E1]/90">
          This is a fictional demo site and is not affiliated with the U.S. Government.
        </p>
      </Container>
    </footer>
  );
}
