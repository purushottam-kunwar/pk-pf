import { PROJECTS } from "@/lib/data";

const FEATURED_IDS = ["sso-gateway", "fleetpro", "pims"];

const KEY_DECISIONS: Record<string, string> = {
  "sso-gateway": "Built a SAML→JWT protocol bridge so every client app speaks one auth standard regardless of IdP. Redis enforces sub-100ms token rotation across 100K+ monthly events. Blue/green deployment preserves sessions during cutover — zero downtime.",
  "fleetpro": "Laravel Reverb WebSocket server holds 200+ persistent GPS device connections on a single process. Queue workers batch-write telemetry to prevent write contention at 50K+ records/day. Mapbox GL delivers sub-5s live position updates to dispatch dashboards.",
  "pims": "FastAPI microservices split by lifecycle domain — enrollment, calculation, disbursement — each with its own audit trail. A custom rule engine handles tier multipliers and benefit brackets without redeployment. Column-level AES-256 encryption satisfies government compliance.",
};

export default function CaseStudies() {
  const studies = FEATURED_IDS
    .map(id => PROJECTS.find(p => p.id === id))
    .filter(Boolean) as typeof PROJECTS;

  return (
    <section id="case-studies" className="py-28 bg-[#050505]">
      <div className="w-full px-8 xl:px-16">
        <div className="mb-16">
          <p className="text-xs font-semibold text-[#00f5d4] uppercase tracking-widest mb-4">Deep Dives</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#e5e5e5] mb-4">Case Studies</h2>
          <p className="text-[#737373] text-lg">How I solved the hard problems.</p>
        </div>

        <div className="space-y-4">
          {studies.map((p, i) => (
            <div key={p.id} className="border border-white/8 rounded-2xl bg-[#0f0f0f] overflow-hidden">
              <div className="p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">

                  {/* Number + Meta */}
                  <div>
                    <div className="text-6xl font-extrabold text-white/4 mb-5 tabular-nums leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-xs text-[#525252] mb-1">{p.type}</p>
                    <p className="text-xs text-[#525252] mb-6">{p.period}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                      {p.metrics.map(m => (
                        <div key={m.label}>
                          <div className="text-2xl font-bold text-[#00f5d4] leading-none">{m.value}</div>
                          <div className="text-xs text-[#525252] mt-1">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Context */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#e5e5e5] mb-3">{p.name}</h3>
                    <p className="text-[#737373] text-sm leading-relaxed">{p.problem}</p>
                  </div>

                  {/* Key Decision */}
                  <div>
                    <p className="text-xs font-semibold text-[#00f5d4] uppercase tracking-widest mb-4">Key Decision</p>
                    <p className="text-[#737373] text-sm leading-relaxed">{KEY_DECISIONS[p.id]}</p>
                  </div>

                  {/* Impact */}
                  <div>
                    <p className="text-xs font-semibold text-[#00f5d4] uppercase tracking-widest mb-4">Impact</p>
                    <ul className="space-y-3">
                      {p.impact.slice(0, 3).map((line, j) => (
                        <li key={j} className="text-sm text-[#737373] flex gap-2.5 items-start leading-relaxed">
                          <span className="text-[#00f5d4] shrink-0 mt-0.5 font-bold">→</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
