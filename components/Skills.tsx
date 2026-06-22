"use client";

import { SKILLS } from "@/lib/data";

const GROUPS: { key: keyof typeof SKILLS; label: string }[] = [
  { key: "backend",   label: "Backend" },
  { key: "databases", label: "Databases" },
  { key: "cloud",     label: "Cloud & DevOps" },
  { key: "protocols", label: "Protocols & APIs" },
  { key: "frontend",  label: "Frontend" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-medium text-blue-600 mb-2">Technology</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Technical expertise</h2>
          <p className="text-gray-500 max-w-xl">
            Technologies I use in production — grouped by domain. No skill bars, no percentages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GROUPS.map(({ key, label }) => (
            <div key={key} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-4">{label}</p>
              <div className="flex flex-wrap gap-2">
                {SKILLS[key].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 bg-gray-50 text-gray-600 border border-gray-200 rounded hover:border-blue-200 hover:text-blue-600 transition-colors"
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
