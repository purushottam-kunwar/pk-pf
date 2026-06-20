"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { METRICS } from "@/lib/data";

function Counter({ value, suffix }: { value: string; suffix: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const num = parseInt(value, 10);

  useEffect(() => {
    if (!inView || isNaN(num)) {
      setDisplay(value);
      return;
    }
    let start = 0;
    const duration = 1400;
    const step = duration / num;
    const timer = setInterval(() => {
      start += 1;
      setDisplay(String(start));
      if (start >= num) {
        clearInterval(timer);
        setDisplay(value);
      }
    }, Math.max(step, 16));
    return () => clearInterval(timer);
  }, [inView, num, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="py-24 border-t border-[rgba(255,255,255,0.06)]">
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
            Engineering Impact
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#ede8df] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
          >
            Not a skills list.
            <br />
            <span className="text-[#c9a96e] italic">Measurable outcomes.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)]">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              className="bg-[#0a0a0a] p-8 group hover:bg-[#0f0f0f] transition-colors duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div
                className="text-[clamp(3rem,5vw,4.5rem)] font-light text-[#c9a96e] leading-none mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <div
                className="text-[#ede8df] text-sm font-medium mb-2"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {m.label}
              </div>
              <div
                className="text-[#524f4a] text-xs leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {m.description}
              </div>
              <div
                className="mt-6 h-px w-0 group-hover:w-full bg-[rgba(201,169,110,0.3)] transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
