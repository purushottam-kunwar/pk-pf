"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#impact", label: "Impact" },
  { href: "#work", label: "Work" },
  { href: "#architecture", label: "Architecture" },
  { href: "#timeline", label: "Timeline" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span
              className="text-[#c9a96e] font-mono text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              PK
            </span>
            <span
              className="hidden sm:block text-[#ede8df] text-sm"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Purushottam Kunwar
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#9a948c] hover:text-[#ede8df] text-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Purushottam_Kunwar_CV.pdf"
              download
              className="px-4 py-1.5 border border-[rgba(201,169,110,0.4)] text-[#c9a96e] text-sm rounded-sm hover:bg-[rgba(201,169,110,0.08)] transition-all duration-200"
              style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.75rem", letterSpacing: "0.08em" }}
            >
              Resume ↓
            </a>
          </nav>

          <button
            className="md:hidden text-[#9a948c] hover:text-[#ede8df] transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col pt-20 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-6 mt-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[#ede8df] text-2xl border-b border-[rgba(255,255,255,0.06)] pb-4"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-[#c9a96e] text-sm mr-3" style={{ fontFamily: "var(--font-jetbrains)" }}>
                    0{i + 1}
                  </span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="/Purushottam_Kunwar_CV.pdf"
              download
              className="mt-8 w-full py-3 border border-[rgba(201,169,110,0.4)] text-[#c9a96e] text-center text-sm"
              style={{ fontFamily: "var(--font-jetbrains)", letterSpacing: "0.1em" }}
            >
              DOWNLOAD RESUME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
