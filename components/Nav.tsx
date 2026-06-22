"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#projects",    label: "Projects" },
  { href: "#timeline",    label: "Experience" },
  { href: "#skills",      label: "Skills" },
  { href: "#contact",     label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white"} border-b border-gray-100`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">
            Purushottam Kunwar
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Hire Me
            </a>
          </nav>

          <button type="button" className="md:hidden text-gray-500" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-white pt-16">
          <nav className="flex flex-col px-6 py-4">
            {LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-4 text-base text-gray-700 border-b border-gray-100">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="mt-6 text-center py-3 bg-blue-600 text-white text-sm font-medium rounded-lg">
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
