import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Purushottam Kunwar — Senior Backend Engineer",
  description:
    "Backend systems engineer specializing in enterprise SaaS, distributed systems, and identity protocols. 6+ years building production systems across fintech, govtech, maritime, and logistics.",
  keywords: ["backend engineer", "Nepal", "Kathmandu", "FastAPI", "Laravel", "Node.js", "enterprise systems"],
  authors: [{ name: "Purushottam Kunwar" }],
  openGraph: {
    title: "Purushottam Kunwar — Senior Backend Engineer",
    description: "8 enterprise systems. 10TB+ data. 15+ enterprise clients. Senior Backend Engineer in Kathmandu.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="bg-[#0a0a0a] text-[#ede8df] antialiased">
        {children}
      </body>
    </html>
  );
}
