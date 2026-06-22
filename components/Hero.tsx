"use client";

import { ArrowRight, Download, MapPin, Calendar, Briefcase } from "lucide-react";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const STACK = ["Go", "Laravel", "FastAPI", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker", "Elasticsearch", "MySQL", "RabbitMQ", "WebSockets"];

const STATS = [
  { value: "6+",    label: "Years Experience", sub: "2019 – Present" },
  { value: "8+",    label: "Systems Built",     sub: "Production grade" },
  { value: "15+",   label: "Enterprise Clients",sub: "Across industries" },
  { value: "10TB+", label: "Data Managed",      sub: "S3 + PostgreSQL" },
];

const HIGHLIGHTS = [
  { icon: Briefcase, text: "Senior Backend Engineer at Azminds Pvt. Ltd." },
  { icon: MapPin,    text: "Kathmandu, Nepal · UTC+5:45" },
  { icon: Calendar,  text: "6+ years in distributed systems & enterprise platforms" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col bg-white pt-16">
      <div className="flex-1 w-full px-10 xl:px-16 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-start">

          {/* Left */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-green-700 font-medium">Open to remote roles worldwide</span>
            </div>

            <h1 className="text-7xl font-extrabold text-gray-900 leading-none tracking-tight mb-5">
              Hi, I&apos;m<br />
              Purushottam<br />
              <span className="text-blue-600">Kunwar</span>
            </h1>

            <p className="text-2xl text-gray-400 font-medium mb-6">Senior Backend Engineer</p>

            <p className="text-gray-500 leading-relaxed mb-8 text-lg max-w-xl">
              I design and build distributed systems, enterprise platforms,
              identity infrastructure, and high-scale backend services
              that serve real users in production — across fintech, govtech,
              maritime, and logistics.
            </p>

            <div className="space-y-3 mb-10">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-gray-500">
                  <Icon size={16} className="text-blue-500 shrink-0" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-base">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="/Purushottam_Kunwar_CV.pdf" download className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors text-base">
                <Download size={16} /> Resume
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a href="https://www.linkedin.com/in/purushottam-kunwar-543032179/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 bg-gray-100 rounded-xl text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <LinkedinIcon />
              </a>
              <a href="https://github.com/purushottam-kunwar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 bg-gray-100 rounded-xl text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors">
                <GithubIcon />
              </a>
            </div>
          </div>

          {/* Right — info panel */}
          <div className="flex flex-col gap-5">
            {/* Profile card */}
            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Purushottam Kunwar"
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <span className="text-2xl font-bold text-white absolute">PK</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">Purushottam Kunwar</h2>
                  <p className="text-blue-200 text-sm mb-2">Senior Backend Engineer</p>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-green-500/20 border border-green-400/30 text-green-300 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Available for remote
                  </span>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Backend-focused engineer who has shipped 8 enterprise systems across fintech, govtech, maritime, and logistics. Specialist in distributed systems, identity platforms, and high-throughput data pipelines.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(s => (
                <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <div className="text-4xl font-extrabold text-blue-600 mb-1">{s.value}</div>
                  <div className="text-sm font-semibold text-gray-800 mb-0.5">{s.label}</div>
                  <div className="text-xs text-gray-400">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech stack strip */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="w-full px-10 xl:px-16 py-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide mr-3">Core Stack</span>
            {STACK.map(t => (
              <span key={t} className="text-xs px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
