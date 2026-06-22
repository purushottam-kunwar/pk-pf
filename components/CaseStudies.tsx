"use client";

import { PROJECTS } from "@/lib/data";

const FEATURED_IDS = ["sso-gateway", "fleetpro", "pims", "yacht-cloud"];

const ARCH_DECISIONS: Record<string, string[]> = {
  "sso-gateway": [
    "Protocol translation layer converts SAML 2.0 assertions → JWT via OAuth 2.0, giving all client apps a single standard interface regardless of IdP",
    "PKCE for all public clients — no client_secret exposure surface",
    "Redis token store enforces sub-100ms rotation and revocation at 100K+ auth events/month",
    "Admin portal reduces IdP onboarding from 2 weeks of engineering to 2 hours of config",
    "Blue/green deployment with session-preserving token migration — zero-downtime auth cutover",
  ],
  "fleetpro": [
    "Laravel Reverb WebSocket server holds 200+ persistent GPS device connections on a single process",
    "Queue workers batch-write telemetry to PostgreSQL, preventing write contention at 50K+ records/day",
    "Mapbox GL renders live vehicle positions with sub-5s update latency on the dispatch dashboard",
    "Custom ETL aggregates historical GPS data for fuel consumption and route optimization analytics",
  ],
  "pims": [
    "FastAPI microservices split by domain (enrollment → calculation → disbursement) — independent audit trail per lifecycle stage",
    "Custom rule engine handles tier multipliers, service-year brackets, and spousal benefit adjustments without redeploy",
    "MySQL with column-level AES-256 encryption satisfies government data-at-rest compliance requirements",
    "Legacy ETL transforms 10+ years of paper forms into structured DB rows with zero data loss",
    "GitLab CI/CD + Docker provides reproducible builds across dev, staging, and ministry environments",
  ],
  "yacht-cloud": [
    "Elasticsearch with custom analyzers for faceted search — location, capacity, amenities, price across 500+ listings",
    "AWS S3 + CloudFront serves 10TB+ yacht media at 99.9% availability with global edge caching",
    "AWS Lambda generates on-demand PDF charter agreements — manual hours reduced to seconds",
    "Stripe + PayPal with escrow logic handles multi-currency transactions across 12 countries",
  ],
};

export default function CaseStudies() {
  const featured = FEATURED_IDS.map(id => PROJECTS.find(p => p.id === id)).filter(Boolean) as typeof PROJECTS;

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="w-full px-10 xl:px-16">
        <div className="mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Technical Case Studies</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Engineering decisions that mattered</h2>
          <p className="text-gray-400 text-xl max-w-3xl">
            Deep dives into the hardest problems — architecture choices, technical constraints, and production outcomes.
          </p>
        </div>

        <div className="space-y-8">
          {featured.map((p, i) => {
            const decisions = ARCH_DECISIONS[p.id] ?? [];
            return (
              <div key={p.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                {/* Header */}
                <div className="px-10 py-8 border-b border-gray-100">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="text-sm font-bold text-white bg-blue-600 px-4 py-1.5 rounded-full tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-gray-400">{p.type}</span>
                    <span className="text-gray-200">·</span>
                    <span className="text-gray-400">{p.period}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{p.name}</h3>
                  <p className="text-gray-500 text-lg mb-6">{p.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map(tech => (
                      <span key={tech} className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg font-medium">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* 3-column body */}
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
                  <div className="px-10 py-8">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5">Problem</p>
                    <p className="text-gray-600 leading-relaxed text-[15px]">{p.problem}</p>
                  </div>
                  <div className="px-10 py-8">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5">Architecture Decisions</p>
                    <ul className="space-y-4">
                      {decisions.map((d, j) => (
                        <li key={j} className="flex gap-3 items-start text-gray-600 text-[15px]">
                          <span className="text-blue-500 shrink-0 mt-0.5 font-bold text-base">→</span>
                          <span className="leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-10 py-8">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5">Results</p>
                    <ul className="space-y-4">
                      {p.impact.map((line, j) => (
                        <li key={j} className="flex gap-3 items-start text-gray-600 text-[15px]">
                          <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="leading-relaxed">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-10 py-6 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-10">
                    {p.metrics.map(m => (
                      <div key={m.label}>
                        <div className="text-3xl font-extrabold text-blue-600 leading-none">{m.value}</div>
                        <div className="text-sm text-gray-400 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <a href="#architecture" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">
                    View architecture diagram →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
