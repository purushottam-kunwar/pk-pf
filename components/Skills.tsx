"use client";

import { SKILLS } from "@/lib/data";

const GROUPS: { key: keyof typeof SKILLS; label: string }[] = [
  { key: "backend",   label: "Backend" },
  { key: "databases", label: "Databases" },
  { key: "cloud",     label: "Cloud & DevOps" },
  { key: "protocols", label: "APIs & Protocols" },
  { key: "frontend",  label: "Frontend" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#050505] border-y border-white/5">
      <div className="w-full px-8 xl:px-16">
        <div className="mb-16">
          <p className="text-xs font-semibold text-[#00f5d4] uppercase tracking-widest mb-4">Stack</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#e5e5e5] mb-4">Tech Stack</h2>
          <p className="text-[#737373] text-lg">Technologies I use in production — no skill bars, no percentages.</p>
        </div>

        <div className="space-y-8">
          {GROUPS.map(({ key, label }) => (
            <div key={key} className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-4 lg:gap-10 items-start">
              <p className="text-xs font-semibold text-[#383838] uppercase tracking-widest lg:pt-2.5">{label}</p>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS[key].map(tech => (
                  <span
                    key={tech}
                    className="text-sm px-4 py-2 bg-white/4 border border-white/8 text-[#a3a3a3] rounded-lg hover:border-[#00f5d4]/25 hover:text-[#e5e5e5] transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
