"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const Defs = () => (
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#3b82f6" />
    </marker>
    <marker id="arr-dim" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#d1d5db" />
    </marker>
  </defs>
);

const Box = ({
  x, y, w, h, label, sublabel, accent,
}: {
  x: number; y: number; w: number; h: number; label: string; sublabel?: string; accent?: boolean;
}) => (
  <g>
    <rect
      x={x} y={y} width={w} height={h} rx={3}
      fill={accent ? "rgba(59,130,246,0.07)" : "#f9fafb"}
      stroke={accent ? "rgba(59,130,246,0.35)" : "#e5e7eb"}
      strokeWidth={1}
    />
    <text x={x + w / 2} y={y + (sublabel ? h / 2 - 5 : h / 2 + 4)} textAnchor="middle" fill="#374151" fontFamily="ui-monospace,monospace" fontSize={11}>
      {label}
    </text>
    {sublabel && (
      <text x={x + w / 2} y={y + h / 2 + 11} textAnchor="middle" fill="#9ca3af" fontFamily="ui-monospace,monospace" fontSize={9}>
        {sublabel}
      </text>
    )}
  </g>
);

const Arrow = ({ x1, y1, x2, y2, dim }: { x1: number; y1: number; x2: number; y2: number; dim?: boolean }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={dim ? "#d1d5db" : "#3b82f6"} strokeWidth={dim ? 1 : 1.5} markerEnd={dim ? "url(#arr-dim)" : "url(#arr)"} />
);

const Label = ({ x, y, text }: { x: number; y: number; text: string }) => (
  <text x={x} y={y} fill="#9ca3af" fontFamily="ui-monospace,monospace" fontSize={9} letterSpacing="0.1em" textAnchor="middle">
    {text.toUpperCase()}
  </text>
);

function DiagNEMCCU() {
  return (
    <svg viewBox="0 0 560 300" className="w-full h-auto">
      <Defs /><Label x={280} y={18} text="NEMCCU — Credit Union Accounting" />
      <Box x={10} y={30} w={100} h={36} label="Credit Union 1" /><Box x={10} y={80} w={100} h={36} label="Credit Union 2" /><Box x={10} y={130} w={100} h={36} label="Credit Union 3" />
      <Arrow x1={110} y1={48} x2={145} y2={115} /><Arrow x1={110} y1={98} x2={145} y2={115} /><Arrow x1={110} y1={148} x2={145} y2={115} />
      <Box x={150} y={90} w={90} h={50} label="Nginx" sublabel="Reverse Proxy" /><Arrow x1={240} y1={115} x2={275} y2={115} />
      <Box x={280} y={76} w={110} h={78} label="Grails MVC" sublabel="RBAC + Auth" accent /><Arrow x1={390} y1={105} x2={425} y2={80} /><Arrow x1={390} y1={115} x2={425} y2={140} />
      <Box x={430} y={55} w={110} h={44} label="PostgreSQL" sublabel="Schema-per-union" /><Box x={430} y={115} w={110} h={44} label="BIRT Reports" sublabel="PDF / Excel" />
      <Box x={10} y={200} w={150} h={36} label="Interest Calculator" sublabel="Automated Engine" accent /><Box x={180} y={200} w={120} h={36} label="Audit Logger" sublabel="Compliance Trail" />
      <Arrow x1={280} y1={154} x2={85} y2={200} dim /><Arrow x1={280} y1={154} x2={240} y2={200} dim />
    </svg>
  );
}

function DiagListenOnRepeat() {
  return (
    <svg viewBox="0 0 580 310" className="w-full h-auto">
      <Defs /><Label x={290} y={18} text="Listen on Repeat — Music Streaming" />
      <Box x={10} y={30} w={90} h={36} label="Users / Web" /><Arrow x1={100} y1={48} x2={135} y2={48} />
      <Box x={140} y={30} w={90} h={36} label="CloudFront" sublabel="CDN" /><Arrow x1={230} y1={48} x2={265} y2={48} />
      <Box x={270} y={30} w={100} h={36} label="Node.js API" accent /><Arrow x1={370} y1={48} x2={405} y2={48} />
      <Box x={410} y={30} w={110} h={36} label="GraphQL Gateway" sublabel="Schema Stitching" accent />
      <Arrow x1={320} y1={66} x2={320} y2={100} /><Box x={260} y={105} w={120} h={36} label="Redis" sublabel="Cache + Sessions" />
      <Arrow x1={465} y1={66} x2={465} y2={100} /><Box x={410} y={105} w={110} h={36} label="iHeartRadio" sublabel="External API" />
      <Arrow x1={320} y1={141} x2={320} y2={175} /><Box x={260} y={180} w={120} h={36} label="AWS S3" sublabel="Media Storage" />
      <Box x={10} y={130} w={120} h={36} label="WebRTC Server" sublabel="Sync Playback" accent /><Arrow x1={100} y1={66} x2={65} y2={130} />
      <Box x={10} y={200} w={120} h={36} label="WebSocket" sublabel="Real-time Chat" /><Arrow x1={65} y1={166} x2={65} y2={200} />
      <Box x={410} y={180} w={110} h={36} label="Spotify API" sublabel="External API" /><Arrow x1={465} y1={141} x2={465} y2={180} />
    </svg>
  );
}

function DiagSkillsTransfers() {
  return (
    <svg viewBox="0 0 580 290" className="w-full h-auto">
      <Defs /><Label x={290} y={18} text="Skills Transfers — Multi-Tenant E-Learning" />
      <Box x={10} y={30} w={90} h={36} label="Students" /><Box x={10} y={80} w={90} h={36} label="Instructors" />
      <Arrow x1={100} y1={48} x2={135} y2={75} /><Arrow x1={100} y1={98} x2={135} y2={75} />
      <Box x={140} y={55} w={100} h={40} label="Laravel API" sublabel="Multi-tenant" accent />
      <Arrow x1={240} y1={75} x2={275} y2={55} /><Arrow x1={240} y1={75} x2={275} y2={115} /><Arrow x1={240} y1={75} x2={275} y2={175} />
      <Box x={280} y={35} w={110} h={38} label="Auth Service" sublabel="Session + RBAC" />
      <Box x={280} y={95} w={110} h={38} label="SCORM Engine" sublabel="1.2 / 2004" accent />
      <Box x={280} y={155} w={110} h={38} label="Stripe" sublabel="Subscription Billing" />
      <Arrow x1={390} y1={75} x2={425} y2={50} /><Arrow x1={390} y1={115} x2={425} y2={115} /><Arrow x1={390} y1={175} x2={425} y2={195} />
      <Box x={430} y={30} w={120} h={40} label="PostgreSQL" sublabel="Schema-per-tenant" accent />
      <Box x={430} y={95} w={120} h={40} label="Redis" sublabel="Cache / Sessions" />
      <Box x={430} y={175} w={120} h={40} label="AWS S3" sublabel="Course Media" />
    </svg>
  );
}

function DiagPIMS() {
  return (
    <svg viewBox="0 0 580 300" className="w-full h-auto">
      <Defs /><Label x={290} y={18} text="PIMS — Government Pension System" />
      <Box x={10} y={30} w={110} h={36} label="Gov Staff" sublabel="Ministry Users" /><Arrow x1={120} y1={48} x2={155} y2={48} />
      <Box x={160} y={30} w={110} h={36} label="FastAPI" sublabel="REST + Auth" accent />
      <Arrow x1={270} y1={48} x2={305} y2={35} /><Arrow x1={270} y1={48} x2={305} y2={75} /><Arrow x1={270} y1={48} x2={305} y2={115} />
      <Box x={310} y={20} w={120} h={36} label="Enrollment Svc" sublabel="Pensioner Registry" accent />
      <Box x={310} y={60} w={120} h={36} label="Pension Calc" sublabel="Rule Engine" accent />
      <Box x={310} y={100} w={120} h={36} label="Disbursement Svc" sublabel="Payment Processing" accent />
      <Arrow x1={430} y1={38} x2={460} y2={80} /><Arrow x1={430} y1={78} x2={460} y2={80} /><Arrow x1={430} y1={118} x2={460} y2={80} />
      <Box x={465} y={60} w={100} h={40} label="MySQL" sublabel="AES Encrypted" />
      <Box x={10} y={150} w={120} h={36} label="ETL Pipeline" sublabel="Legacy Migration" />
      <Box x={150} y={150} w={120} h={36} label="Docker Compose" sublabel="Containerized" />
      <Box x={290} y={150} w={130} h={36} label="GitLab CI/CD" sublabel="Auto Deploy" />
      <Box x={440} y={150} w={100} h={36} label="Audit Trail" sublabel="Compliance Log" />
      <Arrow x1={160} y1={66} x2={85} y2={150} dim /><Arrow x1={160} y1={66} x2={210} y2={150} dim />
    </svg>
  );
}

function DiagYachtCloud() {
  return (
    <svg viewBox="0 0 580 300" className="w-full h-auto">
      <Defs /><Label x={290} y={18} text="Yacht Cloud — Maritime Fleet Management" />
      <Box x={10} y={30} w={90} h={36} label="Brokers" /><Box x={10} y={80} w={90} h={36} label="Renters" />
      <Arrow x1={100} y1={48} x2={135} y2={75} /><Arrow x1={100} y1={98} x2={135} y2={75} />
      <Box x={140} y={55} w={100} h={40} label="Grails API" sublabel="REST + Auth" accent />
      <Arrow x1={240} y1={75} x2={275} y2={50} /><Arrow x1={240} y1={75} x2={275} y2={100} /><Arrow x1={240} y1={75} x2={275} y2={150} /><Arrow x1={240} y1={75} x2={275} y2={200} />
      <Box x={280} y={30} w={120} h={38} label="Elasticsearch" sublabel="Faceted Search" accent />
      <Box x={280} y={80} w={120} h={38} label="PostgreSQL" sublabel="Listings + Bookings" />
      <Box x={280} y={130} w={120} h={38} label="AWS S3 + CDN" sublabel="10TB+ Media" accent />
      <Box x={280} y={180} w={120} h={38} label="AWS Lambda" sublabel="PDF Agreements" />
      <Arrow x1={400} y1={150} x2={435} y2={100} /><Arrow x1={400} y1={200} x2={435} y2={100} />
      <Box x={440} y={75} w={110} h={50} label="Stripe + PayPal" sublabel="Multi-currency" />
      <Box x={10} y={200} w={100} h={36} label="Yacht Owners" /><Box x={125} y={200} w={100} h={36} label="Fleet API" sublabel="Owner Portal" />
      <Arrow x1={110} y1={218} x2={125} y2={218} />
    </svg>
  );
}

function DiagFleetPro() {
  return (
    <svg viewBox="0 0 580 290" className="w-full h-auto">
      <Defs /><Label x={290} y={18} text="FleetPro — Real-Time Logistics" />
      <Box x={10} y={30} w={100} h={36} label="Fleet Managers" sublabel="Web Dashboard" />
      <Box x={10} y={80} w={100} h={36} label="GPS Devices" sublabel="200+ Vehicles" accent />
      <Arrow x1={110} y1={48} x2={145} y2={80} /><Arrow x1={110} y1={98} x2={145} y2={115} />
      <Box x={150} y={60} w={100} h={40} label="Laravel API" sublabel="REST + Logic" accent />
      <Box x={150} y={120} w={100} h={40} label="WebSocket Srv" sublabel="Persistent Conn." accent />
      <Arrow x1={250} y1={80} x2={285} y2={55} /><Arrow x1={250} y1={140} x2={285} y2={140} /><Arrow x1={250} y1={80} x2={285} y2={105} />
      <Box x={290} y={35} w={110} h={38} label="PostgreSQL" sublabel="Routes + Telemetry" />
      <Box x={290} y={85} w={110} h={38} label="Queue Worker" sublabel="Batch GPS Writes" />
      <Box x={290} y={120} w={110} h={38} label="Mapbox GL" sublabel="Real-time Map" />
      <Arrow x1={400} y1={54} x2={435} y2={54} /><Arrow x1={400} y1={135} x2={435} y2={135} />
      <Box x={440} y={35} w={110} h={38} label="Dashboard UI" sublabel="Live Vehicle Map" accent />
      <Box x={440} y={115} w={110} h={38} label="Dispatch Panel" sublabel="ETA + Alerts" />
      <Box x={10} y={195} w={130} h={36} label="ETL Pipeline" sublabel="50K+ Records / Day" />
      <Box x={160} y={195} w={120} h={36} label="Analytics Engine" sublabel="Fuel + Route" />
      <Box x={300} y={195} w={120} h={36} label="Notification Svc" sublabel="SMS + Push" />
      <Arrow x1={250} y1={104} x2={85} y2={195} dim />
    </svg>
  );
}

function DiagLoyalty() {
  return (
    <svg viewBox="0 0 580 300" className="w-full h-auto">
      <Defs /><Label x={290} y={18} text="Loyalty Platform — White-Label SaaS" />
      <Box x={10} y={30} w={90} h={36} label="Brand API" sublabel="Config + Rules" />
      <Box x={10} y={85} w={90} h={36} label="Loyalty Users" sublabel="Mobile / Web" />
      <Arrow x1={100} y1={48} x2={155} y2={80} /><Arrow x1={100} y1={103} x2={155} y2={90} />
      <Box x={160} y={60} w={100} h={50} label="Laravel API" sublabel="Multi-tenant" accent />
      <Arrow x1={260} y1={75} x2={295} y2={45} /><Arrow x1={260} y1={85} x2={295} y2={95} /><Arrow x1={260} y1={85} x2={295} y2={145} />
      <Box x={300} y={25} w={120} h={40} label="Campaign Engine" sublabel="Scheduled Rules" accent />
      <Box x={300} y={75} w={120} h={40} label="Points Ledger" sublabel="Redis + PostgreSQL" accent />
      <Box x={300} y={125} w={120} h={40} label="Brand Config" sublabel="JSON Rule Store" />
      <Arrow x1={420} y1={45} x2={455} y2={45} /><Arrow x1={420} y1={95} x2={455} y2={95} /><Arrow x1={420} y1={145} x2={455} y2={145} />
      <Box x={460} y={25} w={100} h={40} label="PostgreSQL" sublabel="Txn History" />
      <Box x={460} y={75} w={100} h={40} label="AWS SQS" sublabel="Async Jobs" />
      <Box x={460} y={125} w={100} h={40} label="Mixpanel" sublabel="Analytics" />
      <Box x={10} y={195} w={100} h={36} label="Twilio SMS" /><Box x={125} y={195} w={100} h={36} label="SendGrid" sublabel="Email" />
      <Box x={240} y={195} w={130} h={36} label="AWS Auto-scaling" sublabel="EC2 + ELB" accent />
      <Box x={385} y={195} w={100} h={36} label="Admin Portal" sublabel="Brand Mgmt" />
      <Arrow x1={210} y1={90} x2={55} y2={195} dim /><Arrow x1={210} y1={90} x2={175} y2={195} dim />
    </svg>
  );
}

function DiagSSO() {
  return (
    <svg viewBox="0 0 580 290" className="w-full h-auto">
      <Defs /><Label x={290} y={18} text="Enterprise SSO Gateway — Federated Identity" />
      <Box x={10} y={30} w={90} h={32} label="App A" /><Box x={10} y={72} w={90} h={32} label="App B" /><Box x={10} y={114} w={90} h={32} label="App C" />
      <Arrow x1={100} y1={46} x2={155} y2={88} /><Arrow x1={100} y1={88} x2={155} y2={88} /><Arrow x1={100} y1={130} x2={155} y2={88} />
      <Box x={160} y={65} w={120} h={46} label="SSO Gateway" sublabel="Protocol Bridge" accent />
      <Arrow x1={280} y1={88} x2={315} y2={55} /><Arrow x1={280} y1={88} x2={315} y2={100} /><Arrow x1={280} y1={88} x2={315} y2={150} />
      <Box x={320} y={35} w={130} h={38} label="OAuth 2.0 + PKCE" sublabel="Token Issuance" accent />
      <Box x={320} y={80} w={130} h={38} label="SAML 2.0 Bridge" sublabel="Assertion Parser" accent />
      <Box x={320} y={130} w={130} h={38} label="JWT Token Store" sublabel="Redis + Rotation" />
      <Arrow x1={450} y1={54} x2={485} y2={54} /><Arrow x1={450} y1={99} x2={485} y2={99} /><Arrow x1={450} y1={149} x2={485} y2={149} />
      <Box x={490} y={35} w={75} h={38} label="Okta" sublabel="IdP" />
      <Box x={490} y={80} w={75} h={38} label="Active Dir." sublabel="IdP" />
      <Box x={490} y={125} w={75} h={38} label="Google WS" sublabel="IdP" />
      <Box x={10} y={195} w={130} h={36} label="Admin Portal" sublabel="IdP Onboarding" />
      <Box x={160} y={195} w={130} h={36} label="Audit Log" sublabel="All Auth Events" />
      <Box x={310} y={195} w={130} h={36} label="Blue/Green Deploy" sublabel="Zero Downtime" accent />
      <Box x={460} y={195} w={100} h={36} label="Revocation API" sublabel="<100ms TTR" />
      <Arrow x1={220} y1={111} x2={75} y2={195} dim /><Arrow x1={220} y1={111} x2={225} y2={195} dim />
    </svg>
  );
}

const DIAGRAMS = [
  { id: "nemccu",           name: "NEMCCU",                type: "FinTech / SaaS",         Diagram: DiagNEMCCU },
  { id: "listen-on-repeat", name: "Listen on Repeat",      type: "Media / Streaming",      Diagram: DiagListenOnRepeat },
  { id: "skills-transfers", name: "Skills Transfers",      type: "EdTech / SaaS",          Diagram: DiagSkillsTransfers },
  { id: "pims",             name: "PIMS",                  type: "GovTech / Enterprise",   Diagram: DiagPIMS },
  { id: "yacht-cloud",      name: "Yacht Cloud",           type: "Maritime / Marketplace", Diagram: DiagYachtCloud },
  { id: "fleetpro",         name: "FleetPro",              type: "Logistics / IoT",        Diagram: DiagFleetPro },
  { id: "loyalty-platform", name: "Loyalty Platform",      type: "MarTech / SaaS",         Diagram: DiagLoyalty },
  { id: "sso-gateway",      name: "Enterprise SSO Gateway",type: "Security / Enterprise",  Diagram: DiagSSO },
];

export default function Architecture() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const active = DIAGRAMS.find((d) => d.id === expanded);

  return (
    <section id="architecture" className="py-20 bg-white border-y border-gray-100">
      <div className="w-full px-10 xl:px-16">
        <div className="mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Architecture Gallery</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">How these systems fit together</h2>
          <p className="text-gray-400 text-xl max-w-3xl">
            Real production architectures — simplified for clarity but accurate in structure. Click any diagram to expand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIAGRAMS.map((d) => (
            <button
              type="button"
              key={d.id}
              onClick={() => setExpanded(d.id)}
              className="group text-left bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all duration-200"
            >
              <div className="mb-5 pointer-events-none bg-white rounded-xl border border-gray-100 p-4">
                <d.Diagram />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{d.name}</div>
                  <div className="text-sm text-gray-400 mt-0.5">{d.type}</div>
                </div>
                <ZoomIn size={16} className="shrink-0 mt-0.5 text-gray-300 group-hover:text-blue-500 transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setExpanded(null)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              className="relative w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-8"
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-2xl font-bold text-gray-900">{active.name}</div>
                  <div className="text-sm text-gray-400 mt-0.5">{active.type}</div>
                </div>
                <button type="button" onClick={() => setExpanded(null)} className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="Close diagram">
                  <X size={22} aria-hidden="true" />
                </button>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <active.Diagram />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
