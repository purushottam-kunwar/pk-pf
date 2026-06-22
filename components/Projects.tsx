"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PROJECTS } from "@/lib/data";

const TYPE_COLOR: Record<string, string> = {
  "FinTech / SaaS":         "bg-emerald-50 text-emerald-700",
  "Media / Streaming":      "bg-sky-50 text-sky-700",
  "EdTech / SaaS":          "bg-violet-50 text-violet-700",
  "GovTech / Enterprise":   "bg-orange-50 text-orange-700",
  "Maritime / Marketplace": "bg-cyan-50 text-cyan-700",
  "Logistics / IoT":        "bg-indigo-50 text-indigo-700",
  "MarTech / SaaS":         "bg-pink-50 text-pink-700",
  "Security / Enterprise":  "bg-red-50 text-red-700",
};

export default function Projects() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-medium text-blue-600 mb-2">What I've built</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Projects</h2>
          <p className="text-gray-500 max-w-xl">
            8 enterprise-grade systems across fintech, govtech, maritime, logistics, and identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map(p => {
            const isOpen = open === p.id;
            const badge = TYPE_COLOR[p.type] ?? "bg-gray-100 text-gray-600";
            return (
              <div key={p.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <button
                  type="button"
                  className="w-full text-left p-6"
                  onClick={() => setOpen(isOpen ? null : p.id)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badge}`}>{p.type}</span>
                        <span className="text-xs text-gray-400 py-1">{p.period}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{p.name}</h3>
                      <p className="text-sm text-gray-500">{p.tagline}</p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {p.stack.map(t => (
                          <span key={t} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">{t}</span>
                        ))}
                      </div>
                    </div>
                    <ChevronDown size={18} className={`shrink-0 mt-1 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </div>

                  {p.metrics.length > 0 && (
                    <div className="flex gap-6 mt-4 pt-4 border-t border-gray-100">
                      {p.metrics.map(m => (
                        <div key={m.label}>
                          <div className="text-base font-bold text-blue-600">{m.value}</div>
                          <div className="text-xs text-gray-400">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 border-t border-gray-100 bg-gray-50">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5">
                      {[{ label: "Problem", text: p.problem }, { label: "Challenge", text: p.challenge }, { label: "Solution", text: p.solution }].map(({ label, text }) => (
                        <div key={label}>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">{label}</p>
                          <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Results</p>
                      <ul className="space-y-1">
                        {p.impact.map((line, i) => (
                          <li key={i} className="flex gap-2 text-sm text-gray-600">
                            <span className="text-blue-500 mt-1 shrink-0">→</span>{line}
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
