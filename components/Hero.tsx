"use client";

import { ArrowRight, Download } from "lucide-react";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0a] pt-16 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-175 h-175 bg-[#00f5d4]/2.5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#00f5d4]/1.5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full px-8 xl:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

          {/* Left: content */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#00f5d4]/20 bg-[#00f5d4]/5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f5d4] animate-pulse" />
              <span className="text-xs text-[#00f5d4] tracking-widest font-medium">AVAILABLE FOR REMOTE ROLES</span>
            </div>

            <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-extrabold text-[#e5e5e5] leading-none tracking-tight mb-5">
              Purushottam<br />
              <span className="text-[#00f5d4]">Kunwar</span>
            </h1>

            <p className="text-xl text-[#525252] mb-5 font-medium">Senior Backend Engineer</p>

            <p className="text-lg text-[#737373] leading-relaxed mb-10 max-w-lg">
              I design and ship high-impact backend systems that scale to millions — across fintech, govtech, maritime, and logistics.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#00f5d4] text-[#0a0a0a] font-bold rounded-xl hover:bg-[#00e5c4] transition-all text-base"
              >
                View My Work <ArrowRight size={17} />
              </a>
              <a
                href="/Purushottam_Kunwar_CV.pdf"
                download
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/15 text-[#e5e5e5] rounded-xl hover:border-white/30 hover:bg-white/5 transition-all text-base"
              >
                <Download size={16} /> Resume
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/purushottam-kunwar-543032179/"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 border border-white/10 rounded-lg text-[#737373] hover:text-[#00f5d4] hover:border-[#00f5d4]/30 transition-all"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com/purushottam-kunwar"
                target="_blank" rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 border border-white/10 rounded-lg text-[#737373] hover:text-[#e5e5e5] hover:border-white/30 transition-all"
              >
                <GithubIcon />
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-[#00f5d4]/10 blur-2xl scale-110 pointer-events-none" />
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl border border-[#00f5d4]/20 overflow-hidden bg-[#111111]">
                <img
                  src="/profile.jpg"
                  alt="Purushottam Kunwar"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-7xl font-extrabold text-white/5 select-none">PK</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
