import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "The White House - Fictional Demo",
  description: "A cinematic White House website mock built as a design and technology demonstration.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} bg-[#0D1B2A] font-sans text-white antialiased`}>
        <div className="border-b border-[#D4A843]/30 bg-[#1B2A4A] px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5F3EF]">
          This is a fictional demo site and is not affiliated with the U.S. Government.
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
