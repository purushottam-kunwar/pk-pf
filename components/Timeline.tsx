"use client";

import { TIMELINE } from "@/lib/data";

export default function Timeline() {
  const entries = [...TIMELINE].reverse();

  return (
    <section id="timeline" className="py-28 bg-[#0a0a0a]">
      <div className="w-full px-8 xl:px-16">
        <div className="mb-16">
          <p className="text-xs font-semibold text-[#00f5d4] uppercase tracking-widest mb-4">Experience</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#e5e5e5] mb-4">6 years of production engineering</h2>
          <p className="text-[#737373] text-lg">From junior developer to senior backend engineer.</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-48 top-0 bottom-0 w-px bg-white/8" />

          <div className="space-y-14">
            {entries.map((entry, i) => (
              <div key={i} className="relative grid grid-cols-1 lg:grid-cols-[192px_1fr] gap-6 lg:gap-16">

                {/* Left: Year + Company */}
                <div className="lg:pt-1">
                  <div className={`text-base font-bold mb-1 tabular-nums ${i === 0 ? "text-[#00f5d4]" : "text-[#525252]"}`}>
                    {entry.year}
                  </div>
                  <div className="text-sm text-[#525252]">{entry.company}</div>
                  <div className="text-xs text-[#383838] mt-0.5">{entry.location}</div>
                  {i === 0 && (
                    <span className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#00f5d4] bg-[#00f5d4]/8 border border-[#00f5d4]/15 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f5d4] animate-pulse" />
                      Current
                    </span>
                  )}
                </div>

                {/* Timeline dot */}
                <div className={`hidden lg:block absolute left-48 top-1.5 w-2 h-2 translate-x-[-3.5px] rounded-full ${i === 0 ? "bg-[#00f5d4]" : "bg-[#333]"}`} />

                {/* Right: Role + Content */}
                <div>
                  <h3 className="text-xl font-bold text-[#e5e5e5] mb-4">{entry.role}</h3>
                  <ul className="space-y-2.5 mb-6">
                    {entry.highlights.slice(0, 3).map((h, j) => (
                      <li key={j} className="text-sm text-[#737373] flex gap-2.5 items-start leading-relaxed">
                        <span className="text-[#00f5d4]/60 shrink-0 mt-0.5 text-xs font-bold">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {entry.tech.slice(0, 6).map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 bg-white/5 text-[#525252] rounded-md">
                        {t}
                      </span>
                    ))}
                    {entry.tech.length > 6 && (
                      <span className="text-xs px-2.5 py-1 text-[#383838]">+{entry.tech.length - 6}</span>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
