"use client";

import { SKILLS } from "@/lib/data";

const GROUPS: { key: keyof typeof SKILLS; label: string; description: string }[] = [
  { key: "backend",   label: "Backend",          description: "Languages, frameworks, and runtimes" },
  { key: "databases", label: "Databases",         description: "Relational, NoSQL, and caching" },
  { key: "cloud",     label: "Cloud & DevOps",    description: "Infrastructure, CI/CD, and containers" },
  { key: "protocols", label: "Protocols & APIs",  description: "Communication standards and patterns" },
  { key: "frontend",  label: "Frontend",          description: "UI frameworks and tooling" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="w-full px-10 xl:px-16">
        <div className="mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Technology</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Technical expertise</h2>
          <p className="text-gray-400 text-xl">Technologies I use in production — grouped by domain. No skill bars, no percentages.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GROUPS.map(({ key, label, description }) => (
            <div key={key} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">{label}</p>
              <p className="text-sm text-gray-400 mb-6">{description}</p>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS[key].map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1.5 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg hover:border-blue-200 hover:text-blue-600 transition-colors"
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
