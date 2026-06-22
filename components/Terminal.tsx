"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface Line {
  type: "prompt" | "output" | "error" | "gap";
  text?: string;
}

const COMMANDS: Record<string, Line[]> = {
  whoami: [
    { type: "output", text: "Purushottam Kunwar" },
    { type: "output", text: "Senior Backend Engineer @ Azminds Pvt. Ltd." },
    { type: "output", text: "Kathmandu, Nepal · pipalpurus@gmail.com" },
  ],
  help: [
    { type: "output", text: "Available commands:" },
    { type: "output", text: "  whoami      — Who is this engineer?" },
    { type: "output", text: "  skills      — Core technical skills" },
    { type: "output", text: "  projects    — List of systems built" },
    { type: "output", text: "  stack       — Preferred technology stack" },
    { type: "output", text: "  contact     — How to reach me" },
    { type: "output", text: "  clear       — Clear terminal" },
  ],
  skills: [
    { type: "output", text: "Backend" },
    { type: "output", text: "  └─ FastAPI · Laravel · Node.js · Grails · Python · PHP" },
    { type: "output", text: "Databases" },
    { type: "output", text: "  └─ PostgreSQL · MySQL · Redis · Elasticsearch" },
    { type: "output", text: "Infrastructure" },
    { type: "output", text: "  └─ Docker · AWS (EC2, S3, Lambda) · GitLab CI/CD · Nginx" },
    { type: "output", text: "Protocols" },
    { type: "output", text: "  └─ OAuth 2.0 · SAML 2.0 · JWT · WebSocket · GraphQL · REST" },
  ],
  projects: [
    { type: "output", text: "total 8" },
    { type: "output", text: "drwxr-xr-x  NEMCCU               FinTech · 2019" },
    { type: "output", text: "drwxr-xr-x  Listen on Repeat      Media Streaming · 2020" },
    { type: "output", text: "drwxr-xr-x  Skills Transfers      EdTech SaaS · 2020" },
    { type: "output", text: "drwxr-xr-x  PIMS                  GovTech · 2021" },
    { type: "output", text: "drwxr-xr-x  Yacht Cloud           Maritime · 2022" },
    { type: "output", text: "drwxr-xr-x  FleetPro              Logistics IoT · 2023" },
    { type: "output", text: "drwxr-xr-x  Loyalty Platform      MarTech SaaS · 2023" },
    { type: "output", text: "drwxr-xr-x  Enterprise SSO        Identity · 2024" },
  ],
  stack: [
    { type: "output", text: "{" },
    { type: "output", text: '  "preferred_language": "Python / PHP / TypeScript",' },
    { type: "output", text: '  "api_style": "REST + GraphQL",' },
    { type: "output", text: '  "database": "PostgreSQL + Redis",' },
    { type: "output", text: '  "infra": "Docker + AWS + Nginx",' },
    { type: "output", text: '  "auth": "OAuth 2.0 + JWT",' },
    { type: "output", text: '  "ci_cd": "GitLab Pipelines"' },
    { type: "output", text: "}" },
  ],
  contact: [
    { type: "output", text: "Email:    pipalpurus@gmail.com" },
    { type: "output", text: "LinkedIn: linkedin.com/in/purushottam-kunwar-543032179" },
    { type: "output", text: "GitHub:   github.com/purushottam-kunwar" },
    { type: "output", text: "Phone:    +977 9860648598" },
    { type: "output", text: "Location: Kathmandu, Nepal (UTC+5:45)" },
  ],
};

const BOOT: Line[] = [
  { type: "output", text: "pk-portfolio v1.0.0 · backend systems terminal" },
  { type: "output", text: 'Type "help" to see available commands.' },
  { type: "gap" },
];

export default function Terminal() {
  const [history, setHistory] = useState<Line[]>(BOOT);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const run = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();
      const newLines: Line[] = [
        { type: "prompt", text: cmd },
      ];

      if (trimmed === "clear") {
        setHistory(BOOT);
        return;
      }

      if (COMMANDS[trimmed]) {
        newLines.push(...COMMANDS[trimmed], { type: "gap" });
      } else if (trimmed === "") {
        newLines.push({ type: "gap" });
      } else {
        newLines.push(
          { type: "error", text: `command not found: ${trimmed}` },
          { type: "output", text: 'Try "help" for available commands.' },
          { type: "gap" }
        );
      }

      setHistory((h) => [...h, ...newLines]);
      setCmdHistory((h) => [cmd, ...h]);
      setHistoryIdx(-1);
    },
    []
  );

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(next);
      setInput(cmdHistory[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIdx - 1, -1);
      setHistoryIdx(next);
      setInput(next === -1 ? "" : cmdHistory[next] ?? "");
    }
  };

  return (
    <section className="py-24 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="section-label mb-4">
            <span className="gold-line" />
            Interactive Terminal
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#ede8df] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
          >
            Ask the terminal
            <br />
            <span className="text-[#c9a96e] italic">anything.</span>
          </h2>
        </motion.div>

        <motion.div
          className="border border-[rgba(255,255,255,0.08)] bg-[#080808] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-[rgba(255,255,255,0.06)]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span
              className="ml-3 text-[#524f4a] text-xs"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              pk@portfolio ~ bash
            </span>
          </div>

          <div
            ref={containerRef}
            className="h-72 overflow-y-auto p-5 font-mono text-sm leading-6"
            style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.8rem" }}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line, i) => {
              if (line.type === "gap") return <div key={i} className="h-2" />;
              if (line.type === "prompt") {
                return (
                  <div key={i} className="flex gap-2">
                    <span className="text-[#c9a96e] shrink-0">❯</span>
                    <span className="text-[#ede8df]">{line.text}</span>
                  </div>
                );
              }
              if (line.type === "error") {
                return (
                  <div key={i} className="text-[#f06a6a]">
                    {line.text}
                  </div>
                );
              }
              return (
                <div key={i} className="text-[#9a948c]">
                  {line.text}
                </div>
              );
            })}

            <div className="flex gap-2 items-center mt-1">
              <span className="text-[#c9a96e]">❯</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                className="flex-1 bg-transparent text-[#ede8df] outline-none caret-[#c9a96e]"
                style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.8rem" }}
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-4 flex flex-wrap gap-2">
          {["whoami", "skills", "projects", "stack", "contact"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => { run(cmd); inputRef.current?.focus(); }}
              className="text-xs px-3 py-1.5 bg-[#111] border border-[rgba(255,255,255,0.06)] text-[#9a948c] hover:border-[rgba(201,169,110,0.3)] hover:text-[#c9a96e] transition-all"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              $ {cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
