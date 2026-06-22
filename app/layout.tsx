import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Purushottam Kunwar — Senior Backend Engineer",
  description:
    "Senior Backend Engineer with 6+ years building distributed systems, enterprise platforms, and identity infrastructure. Available for remote international roles.",
  keywords: [
    "backend engineer",
    "senior backend engineer",
    "distributed systems",
    "Nepal",
    "remote",
    "FastAPI",
    "Laravel",
    "AWS",
    "PostgreSQL",
    "enterprise",
  ],
  authors: [{ name: "Purushottam Kunwar" }],
  openGraph: {
    title: "Purushottam Kunwar — Senior Backend Engineer",
    description:
      "8 production systems. 15+ enterprise clients. Senior Backend Engineer open to remote international roles.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
