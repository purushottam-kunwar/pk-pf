"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PROJECTS } from "@/lib/data";

const TYPE_COLOR: Record<string, string> = {
  "FinTech / SaaS":         "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Media / Streaming":      "bg-sky-50 text-sky-700 border-sky-200",
  "EdTech / SaaS":          "bg-violet-50 text-violet-700 border-violet-200",
  "GovTech / Enterprise":   "bg-orange-50 text-orange-700 border-orange-200",
  "Maritime / Marketplace": "bg-cyan-50 text-cyan-700 border-cyan-200",
  "Logistics / IoT":        "bg-indigo-50 text-indigo-700 border-indigo-200",
  "MarTech / SaaS":         "bg-pink-50 text-pink-700 border-pink-200",
  "Security / Enterprise":  "bg-red-50 text-red-700 border-red-200",
};

export default function Projects() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="w-full px-10 xl:px-16">
        <div className="mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">What I&apos;ve built</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-xl">8 enterprise-grade systems across fintech, govtech, maritime, logistics, and identity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map(p => {
            const isOpen = open === p.id;
            const badge = TYPE_COLOR[p.type] ?? "bg-gray-100 text-gray-600 border-gray-200";
            return (
              <div key={p.id} className={`border rounded-2xl overflow-hidden transition-all duration-200 flex flex-col ${isOpen ? "border-blue-200 shadow-md" : "border-gray-200 hover:border-gray-300 hover:shadow-sm"}`}>
                <button type="button" className="w-full text-left p-8 flex-1" onClick={() => setOpen(isOpen ? null : p.id)}>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex flex-wrap gap-2">
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${badge}`}>{p.type}</span>
                      <span className="text-xs text-gray-400 py-1.5">{p.period}</span>
                    </div>
                    <ChevronDown size={18} className={`shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{p.name}</h3>
                  <p className="text-gray-500 mb-6">{p.tagline}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map(t => (
                      <span key={t} className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg font-medium">{t}</span>
                    ))}
                  </div>

                  {p.metrics.length > 0 && (
                    <div className="flex gap-8 pt-5 border-t border-gray-100">
                      {p.metrics.map(m => (
                        <div key={m.label}>
                          <div className="text-2xl font-extrabold text-blue-600">{m.value}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </button>

                {isOpen && (
                  <div className="px-8 pb-8 border-t border-gray-100 bg-gray-50">
                    <div className="grid grid-cols-1 gap-5 pt-6">
                      {[{ label: "Problem", text: p.problem }, { label: "Challenge", text: p.challenge }, { label: "Solution", text: p.solution }].map(({ label, text }) => (
                        <div key={label}>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{label}</p>
                          <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Results</p>
                      <ul className="space-y-2">
                        {p.impact.map((line, i) => (
                          <li key={i} className="flex gap-2.5 text-sm text-gray-600">
                            <span className="text-blue-500 shrink-0 font-bold">→</span>{line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
