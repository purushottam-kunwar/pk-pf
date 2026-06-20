"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

const TECH = [
  "FastAPI", "Laravel", "Node.js", "Grails", "PostgreSQL", "MySQL",
  "Elasticsearch", "Redis", "Docker", "AWS", "OAuth 2.0", "SAML 2.0",
  "WebSocket", "GraphQL", "Python", "TypeScript", "PHP", "JWT",
  "FastAPI", "Laravel", "Node.js", "Grails", "PostgreSQL", "MySQL",
  "Elasticsearch", "Redis", "Docker", "AWS", "OAuth 2.0", "SAML 2.0",
  "WebSocket", "GraphQL", "Python", "TypeScript", "PHP", "JWT",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(201,169,110,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)" }}
        />
      </div>

      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span
            className="text-[#c9a96e] text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Senior Backend Engineer
          </span>
          <span className="h-px flex-1 max-w-12 bg-[rgba(201,169,110,0.4)]" />
          <span className="flex items-center gap-1.5 text-[#9a948c] text-xs" style={{ fontFamily: "var(--font-jetbrains)" }}>
            <MapPin size={11} />
            Kathmandu, Nepal
          </span>
          <span className="flex items-center gap-1.5 text-xs" style={{ fontFamily: "var(--font-jetbrains)" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-green-400">Available</span>
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            className="text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] font-light tracking-tight text-[#ede8df]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Purushottam
            <br />
            <span className="italic text-[#c9a96e]">Kunwar</span>
          </motion.h1>
        </div>

        <motion.p
          className="mt-8 max-w-xl text-[#9a948c] text-base leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          I build the systems companies depend on — pension platforms for governments,
          identity gateways for enterprises, fleet management for logistics companies.
          6+ years turning complex requirements into reliable production software.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <a
            href="#work"
            className="group flex items-center gap-2 px-6 py-3 bg-[#c9a96e] text-[#0a0a0a] text-sm font-medium hover:bg-[#e8c99a] transition-colors duration-200"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
          >
            View my work
            <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 border border-[rgba(255,255,255,0.12)] text-[#ede8df] text-sm hover:border-[rgba(201,169,110,0.4)] hover:text-[#c9a96e] transition-all duration-200"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.06)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: "8+", label: "Enterprise Systems" },
            { value: "6+", label: "Years Building" },
            { value: "10TB+", label: "Data at Scale" },
            { value: "15+", label: "Enterprise Clients" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0a0a0a] px-6 py-5 group hover:bg-[#111] transition-colors"
            >
              <div
                className="text-3xl text-[#c9a96e] font-light mb-1"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[#524f4a] text-xs tracking-wide uppercase"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="relative overflow-hidden border-t border-[rgba(255,255,255,0.06)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex whitespace-nowrap">
          <div className="marquee-track flex">
            {TECH.map((t, i) => (
              <span
                key={i}
                className="px-6 py-3 text-[#3a3a3a] text-xs tracking-[0.15em] uppercase border-r border-[rgba(255,255,255,0.04)] hover:text-[#c9a96e] transition-colors"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
