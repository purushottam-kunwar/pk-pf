"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2, MapPin, Calendar } from "lucide-react";
import { TIMELINE } from "@/lib/data";

export default function Timeline() {
  const [open, setOpen] = useState<number | null>(TIMELINE.length - 1);

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="w-full px-10 xl:px-16">
        <div className="mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Experience</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">6 years of production engineering</h2>
          <p className="text-gray-400 text-xl">Junior developer to senior backend engineer — shipping real systems throughout.</p>
        </div>

        <div className="space-y-4">
          {TIMELINE.map((entry, i) => {
            const isOpen   = open === i;
            const isLatest = i === TIMELINE.length - 1;

            return (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-200 ${isOpen ? "border-blue-200 shadow-sm" : "border-gray-200 hover:border-gray-300"}`}>
                <button
                  type="button"
                  className="w-full text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className="px-8 py-6 flex items-center gap-8">
                    {/* Year column */}
                    <div className="shrink-0 w-28">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-lg font-bold ${isLatest ? "text-blue-600" : "text-gray-400"}`}>{entry.year}</span>
                        {isLatest && (
                          <span className="text-xs px-2 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full">Current</span>
                        )}
                      </div>
                      <div className={`w-10 h-1 rounded-full ${isLatest ? "bg-blue-500" : "bg-gray-200"}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="text-xl font-bold text-gray-900 mb-2">{entry.role}</div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1.5"><Building2 size={14} />{entry.company}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14} />{entry.location}</span>
                      </div>
                    </div>

                    {/* Tech preview */}
                    <div className="hidden lg:flex flex-wrap gap-2 max-w-xs">
                      {entry.tech.slice(0, 4).map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-500 rounded-lg">{t}</span>
                      ))}
                      {entry.tech.length > 4 && (
                        <span className="text-xs px-2.5 py-1 bg-gray-100 text-gray-400 rounded-lg">+{entry.tech.length - 4}</span>
                      )}
                    </div>

                    <ChevronDown size={18} className={`shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 border-t border-gray-100 bg-gray-50">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-7">
                          {/* Description */}
                          <div className="lg:col-span-2">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">About this role</p>
                            <p className="text-gray-600 leading-relaxed mb-6">{entry.description}</p>

                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Key Achievements</p>
                            <div className="flex flex-wrap gap-2">
                              {entry.highlights.map((h) => (
                                <span key={h} className="text-sm px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg">
                                  {h}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Tech stack */}
                          <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Technologies</p>
                            <div className="flex flex-wrap gap-2">
                              {entry.tech.map((t) => (
                                <span key={t} className="text-sm px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
