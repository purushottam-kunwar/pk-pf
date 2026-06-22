"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TIMELINE } from "@/lib/data";

export default function Timeline() {
  const [open, setOpen] = useState<number | null>(TIMELINE.length - 1);

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-medium text-blue-600 mb-2">Experience</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">6 years of production engineering</h2>
          <p className="text-gray-500">Junior developer to senior backend engineer — shipping real systems throughout.</p>
        </div>

        <div className="space-y-0">
          {TIMELINE.map((entry, i) => {
            const isOpen   = open === i;
            const isLatest = i === TIMELINE.length - 1;
            const isLast   = i === TIMELINE.length - 1;

            return (
              <div key={i} className="flex gap-4">
                {/* Dot + connector */}
                <div className="flex flex-col items-center shrink-0 pt-5">
                  <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center z-10 ${isLatest ? "border-blue-500 bg-white" : "border-gray-200 bg-white"}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${isLatest ? "bg-blue-500" : "bg-gray-300"}`} />
                  </div>
                  {!isLast && <div className="flex-1 w-px bg-gray-200 mt-1" />}
                </div>

                {/* Card */}
                <div className="flex-1 pb-4">
                  <button
                    type="button"
                    className="w-full text-left border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors group"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <div className="px-5 py-4 bg-white">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span className="text-xs text-blue-600 font-semibold">{entry.year}</span>
                            {isLatest && (
                              <span className="text-xs px-1.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded">Current</span>
                            )}
                          </div>
                          <div className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {entry.role}
                          </div>
                          <div className="text-sm text-gray-400 mt-0.5">
                            {entry.company} · {entry.location}
                          </div>
                        </div>
                        <ChevronDown
                          size={15}
                          className={`shrink-0 mt-1 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-0 border-t border-gray-100 bg-gray-50 space-y-4">
                            <p className="text-sm text-gray-600 leading-relaxed pt-4">{entry.description}</p>

                            <div>
                              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Key Achievements</p>
                              <div className="flex flex-wrap gap-1.5">
                                {entry.highlights.map((h) => (
                                  <span key={h} className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded">
                                    {h}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Technologies</p>
                              <div className="flex flex-wrap gap-1.5">
                                {entry.tech.map((t) => (
                                  <span key={t} className="text-xs px-2 py-0.5 bg-white border border-gray-200 text-gray-500 rounded">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
