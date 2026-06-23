"use client";

import { Mail, Download, ArrowUpRight, MapPin } from "lucide-react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#0a0a0a]">
      <div className="w-full px-8 xl:px-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-[#00f5d4] uppercase tracking-widest mb-6">Contact</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-[#e5e5e5] mb-6 leading-tight">
            Let&apos;s build<br />something.
          </h2>
          <p className="text-[#737373] text-xl mb-12 leading-relaxed">
            Open to senior backend engineering roles, architecture consulting, and interesting distributed systems problems.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="mailto:pipalpurus@gmail.com"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#00f5d4] text-[#0a0a0a] font-bold rounded-xl hover:bg-[#00e5c4] transition-all text-base"
            >
              <Mail size={18} /> Send an Email
            </a>
            <a
              href="/Purushottam_Kunwar_CV.pdf"
              download
              className="inline-flex items-center gap-3 px-7 py-4 border border-white/15 text-[#e5e5e5] rounded-xl hover:border-white/25 hover:bg-white/5 transition-all text-base"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-sm text-[#525252]">
            <a
              href="https://www.linkedin.com/in/purushottam-kunwar-543032179/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#00f5d4] transition-colors"
            >
              <LinkedInIcon /> LinkedIn <ArrowUpRight size={12} />
            </a>
            <a
              href="https://github.com/purushottam-kunwar"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#e5e5e5] transition-colors"
            >
              <GithubIcon /> GitHub <ArrowUpRight size={12} />
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={12} /> Kathmandu, Nepal · UTC+5:45 · Remote worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
