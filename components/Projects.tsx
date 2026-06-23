"use client";

import { PROJECTS } from "@/lib/data";

const FEATURED_IDS = ["sso-gateway", "fleetpro", "pims", "yacht-cloud", "nemccu", "listen-on-repeat"];

const VISUAL_CLASS: Record<string, string> = {
  "sso-gateway":      "pv-sso-gateway",
  "fleetpro":         "pv-fleetpro",
  "pims":             "pv-pims",
  "yacht-cloud":      "pv-yacht-cloud",
  "nemccu":           "pv-nemccu",
  "listen-on-repeat": "pv-listen-on-repeat",
};

export default function Projects() {
  const featured = FEATURED_IDS
    .map(id => PROJECTS.find(p => p.id === id))
    .filter(Boolean) as typeof PROJECTS;

  return (
    <section id="projects" className="py-28 bg-[#0a0a0a]">
      <div className="w-full px-8 xl:px-16">
        <div className="mb-16">
          <p className="text-xs font-semibold text-[#00f5d4] uppercase tracking-widest mb-4">Featured Work</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#e5e5e5] mb-4">Projects</h2>
          <p className="text-[#737373] text-lg">Enterprise-grade systems I designed and shipped.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {featured.map(p => (
            <div
              key={p.id}
              className="group border border-white/8 rounded-2xl overflow-hidden bg-[#0f0f0f] hover:border-[#00f5d4]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,245,212,0.06)] flex flex-col"
            >
              {/* Visual header */}
              <div className={`h-32 relative overflow-hidden shrink-0 ${VISUAL_CLASS[p.id] ?? "pv-default"}`}>
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-medium px-3 py-1.5 bg-black/40 border border-white/10 text-[#a3a3a3] rounded-full backdrop-blur-sm">
                    {p.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-[#e5e5e5] group-hover:text-[#00f5d4] transition-colors leading-snug">
                    {p.name}
                  </h3>
                  <span className="text-xs text-[#525252] shrink-0 mt-0.5 tabular-nums">{p.period}</span>
                </div>

                <p className="text-[#737373] text-sm leading-relaxed mb-6">{p.tagline}</p>

                {/* Metrics */}
                {p.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.metrics.slice(0, 3).map(m => (
                      <span
                        key={m.label}
                        className="text-xs px-3 py-1.5 bg-[#00f5d4]/8 border border-[#00f5d4]/15 text-[#00f5d4] rounded-full font-medium"
                      >
                        {m.value} {m.label}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5 mt-auto">
                  {p.stack.slice(0, 6).map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 bg-white/5 text-[#525252] rounded-md">
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 6 && (
                    <span className="text-xs px-2.5 py-1 text-[#525252]">+{p.stack.length - 6}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
