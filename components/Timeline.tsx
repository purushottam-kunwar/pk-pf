"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 border-t border-[rgba(255,255,255,0.06)]">
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
            Career Timeline
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#ede8df] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
          >
            Six years of systems,
            <br />
            <span className="text-[#c9a96e] italic">one engineer.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-px ml-[5.5rem]"
            style={{ background: "linear-gradient(to bottom, rgba(201,169,110,0.4), rgba(201,169,110,0.05))" }}
          />

          <div className="space-y-0">
            {TIMELINE.map((entry, i) => (
              <motion.div
                key={i}
                className="relative flex gap-6 sm:gap-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="w-20 shrink-0 pt-6 text-right">
                  <span
                    className="text-[#c9a96e] text-xs font-medium leading-relaxed"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {entry.year}
                  </span>
                </div>

                <div className="relative pt-7">
                  <div
                    className="absolute left-[-5px] top-8 w-2.5 h-2.5 rounded-full border-2 border-[#c9a96e] bg-[#0a0a0a]"
                  />
                </div>

                <div className="flex-1 pb-12 pt-6">
                  <div className="mb-1">
                    <span
                      className="text-[#ede8df] text-lg"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                    >
                      {entry.role}
                    </span>
                  </div>
                  <div
                    className="text-[#9a948c] text-xs mb-4"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {entry.company} · {entry.location}
                  </div>
                  <p
                    className="text-[#9a948c] text-sm leading-relaxed mb-4 max-w-2xl"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {entry.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {entry.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs text-[#c9a96e] border border-[rgba(201,169,110,0.2)] bg-[rgba(201,169,110,0.05)] px-2.5 py-1"
                        style={{ fontFamily: "var(--font-jetbrains)" }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {entry.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-[#524f4a] bg-[#141414] border border-[rgba(255,255,255,0.05)] px-2.5 py-1"
                        style={{ fontFamily: "var(--font-jetbrains)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
