"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import type { NavigationGroup, SocialLink } from "@/lib/types";

interface MobileMenuProps {
  open: boolean;
  groups: NavigationGroup[];
  socialLinks: SocialLink[];
  onClose: () => void;
}

export function MobileMenu({ open, groups, socialLinks, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#0D1B2A]/95 backdrop-blur-md"
        >
          <div className="mx-auto flex h-full max-w-6xl flex-col px-4 py-6 sm:px-6">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <p className="font-[family-name:var(--font-display)] text-2xl uppercase text-white">Menu</p>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/20 p-2 text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid flex-1 gap-6 overflow-y-auto md:grid-cols-2">
              {groups.map((group) => (
                <div key={group.title}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4A843]">{group.title}</p>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={onClose}
                        className="block text-sm text-[#F5F3EF] transition hover:text-[#D4A843]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.platform}
                  href={social.href}
                  onClick={onClose}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                >
                  {social.platform}
                </Link>
              ))}
            </div>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
