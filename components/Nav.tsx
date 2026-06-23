"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#projects",     label: "Work" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#timeline",     label: "Experience" },
  { href: "#contact",      label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
        <div className="w-full px-8 xl:px-16 h-16 flex items-center justify-between">
          <a href="#" className="text-sm font-bold text-[#e5e5e5] tracking-widest hover:text-[#00f5d4] transition-colors">
            PK
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-[#737373] hover:text-[#e5e5e5] transition-colors tracking-wide">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:inline-flex items-center text-sm font-medium px-5 py-2 border border-[#00f5d4]/30 text-[#00f5d4] rounded-lg hover:bg-[#00f5d4]/10 transition-all">
            Get in Touch
          </a>

          <button type="button" className="md:hidden text-[#737373]" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a] pt-16">
          <nav className="flex flex-col px-8 py-4">
            {LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-4 text-base text-[#e5e5e5] border-b border-white/5">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-6 text-center py-3 border border-[#00f5d4]/30 text-[#00f5d4] rounded-lg text-sm">
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
