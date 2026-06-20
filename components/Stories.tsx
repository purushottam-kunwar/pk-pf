"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

const TYPE_COLORS: Record<string, string> = {
  "FinTech / SaaS": "#c9a96e",
  "Media / Streaming": "#7eb8f7",
  "EdTech / SaaS": "#a8e6cf",
  "GovTech / Enterprise": "#f5a623",
  "Maritime / Marketplace": "#6ab9f7",
  "Logistics / IoT": "#c8b5f5",
  "MarTech / SaaS": "#f7a8b8",
  "Security / Enterprise": "#f06a6a",
};

export default function Stories() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label mb-4">
            <span className="gold-line" />
            Engineering Stories
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#ede8df] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
          >
            The systems I built,
            <br />
            <span className="text-[#c9a96e] italic">and why they mattered.</span>
          </h2>
        </motion.div>

        <div className="divide-y divide-[rgba(255,255,255,0.06)]">
          {PROJECTS.map((project, i) => {
            const isOpen = open === project.id;
            const color = TYPE_COLORS[project.type] || "#c9a96e";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <button
                  className="w-full py-6 flex items-start gap-4 group text-left hover:bg-[rgba(255,255,255,0.015)] transition-colors px-0"
                  onClick={() => setOpen(isOpen ? null : project.id)}
                >
                  <span
                    className="text-[#3a3a3a] text-xs mt-1.5 shrink-0 w-6"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span
                        className="text-xl text-[#ede8df] group-hover:text-[#c9a96e] transition-colors"
                        style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                      >
                        {project.name}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-sm border"
                        style={{
                          fontFamily: "var(--font-jetbrains)",
                          color,
                          borderColor: `${color}33`,
                          background: `${color}10`,
                        }}
                      >
                        {project.type}
                      </span>
                      <span
                        className="text-[#524f4a] text-xs"
                        style={{ fontFamily: "var(--font-jetbrains)" }}
                      >
                        {project.period}
                      </span>
                    </div>
                    <div
                      className="text-[#9a948c] text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {project.tagline}
                    </div>
                  </div>

                  <div className="shrink-0 mt-1 text-[#524f4a] group-hover:text-[#c9a96e] transition-colors">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-10 pb-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                          <div>
                            <div
                              className="text-[#c9a96e] text-xs uppercase tracking-widest mb-2"
                              style={{ fontFamily: "var(--font-jetbrains)" }}
                            >
                              Problem
                            </div>
                            <p
                              className="text-[#9a948c] text-sm leading-relaxed"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {project.problem}
                            </p>
                          </div>

                          <div>
                            <div
                              className="text-[#c9a96e] text-xs uppercase tracking-widest mb-2"
                              style={{ fontFamily: "var(--font-jetbrains)" }}
                            >
                              The Challenge
                            </div>
                            <p
                              className="text-[#9a948c] text-sm leading-relaxed"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {project.challenge}
                            </p>
                          </div>

                          <div>
                            <div
                              className="text-[#c9a96e] text-xs uppercase tracking-widest mb-2"
                              style={{ fontFamily: "var(--font-jetbrains)" }}
                            >
                              Solution
                            </div>
                            <p
                              className="text-[#9a948c] text-sm leading-relaxed"
                              style={{ fontFamily: "var(--font-dm-sans)" }}
                            >
                              {project.solution}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-3 py-1 bg-[#161616] border border-[rgba(255,255,255,0.06)] text-[#9a948c]"
                                style={{ fontFamily: "var(--font-jetbrains)" }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div
                            className="text-[#c9a96e] text-xs uppercase tracking-widest mb-3"
                            style={{ fontFamily: "var(--font-jetbrains)" }}
                          >
                            Impact
                          </div>
                          {project.impact.map((line, j) => (
                            <div
                              key={j}
                              className="flex gap-3 items-start"
                            >
                              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#c9a96e] opacity-60" />
                              <span
                                className="text-sm text-[#9a948c] leading-relaxed"
                                style={{ fontFamily: "var(--font-dm-sans)" }}
                              >
                                {line}
                              </span>
                            </div>
                          ))}

                          <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                            <a
                              href="#architecture"
                              className="inline-flex items-center gap-2 text-[#c9a96e] text-xs hover:text-[#e8c99a] transition-colors"
                              style={{ fontFamily: "var(--font-jetbrains)", letterSpacing: "0.08em" }}
                            >
                              VIEW ARCHITECTURE
                              <ArrowUpRight size={12} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
