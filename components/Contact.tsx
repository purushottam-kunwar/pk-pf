"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LINKS = [
  {
    Icon: Mail,
    label: "Email",
    value: "pipalpurus@gmail.com",
    href: "mailto:pipalpurus@gmail.com",
  },
  {
    Icon: LinkedInIcon,
    label: "LinkedIn",
    value: "purushottam-kunwar-543032179",
    href: "https://www.linkedin.com/in/purushottam-kunwar-543032179/",
  },
  {
    Icon: GitHubIcon,
    label: "GitHub",
    value: "purushottam-kunwar",
    href: "https://github.com/purushottam-kunwar",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+977 9860648598",
    href: "tel:+9779860648598",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-[rgba(255,255,255,0.06)] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label mb-6">
            <span className="gold-line" />
            Contact
          </div>
          <h2
            className="text-[clamp(2.8rem,6vw,5rem)] font-light text-[#ede8df] leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
          >
            Let&apos;s build something
            <br />
            <span className="text-[#c9a96e] italic">that matters.</span>
          </h2>
          <p
            className="text-[#9a948c] text-base leading-relaxed mb-12 max-w-lg"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            I&apos;m open to senior backend engineering roles, consulting on
            distributed systems, and interesting architecture problems.
            Based in Kathmandu, available remotely worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-5 border border-[rgba(255,255,255,0.06)] bg-[#0d0d0d] hover:border-[rgba(201,169,110,0.3)] hover:bg-[#111] transition-all duration-300"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <div className="w-9 h-9 flex items-center justify-center border border-[rgba(255,255,255,0.08)] bg-[#141414] group-hover:border-[rgba(201,169,110,0.3)] group-hover:bg-[rgba(201,169,110,0.06)] transition-all">
                  <link.Icon className="text-[#9a948c] group-hover:text-[#c9a96e] transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[#524f4a] text-xs mb-0.5"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {link.label}
                  </div>
                  <div
                    className="text-[#ede8df] text-sm truncate group-hover:text-[#c9a96e] transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {link.value}
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="shrink-0 text-[#3a3a3a] group-hover:text-[#c9a96e] transition-colors"
                />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3 text-[#524f4a]">
            <MapPin size={13} />
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Kathmandu, Nepal · UTC+5:45 · Open to remote worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
