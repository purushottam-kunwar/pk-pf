"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const Defs = () => (
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#c9a96e" />
    </marker>
    <marker id="arr-dim" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#3a3a3a" />
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
      fill={accent ? "rgba(201,169,110,0.08)" : "#141414"}
      stroke={accent ? "rgba(201,169,110,0.35)" : "#2a2a2a"}
      strokeWidth={1}
    />
    <text x={x + w / 2} y={y + (sublabel ? h / 2 - 5 : h / 2 + 4)} textAnchor="middle" fill="#ede8df" fontFamily="ui-monospace,monospace" fontSize={11}>
      {label}
    </text>
    {sublabel && (
      <text x={x + w / 2} y={y + h / 2 + 11} textAnchor="middle" fill="#9a948c" fontFamily="ui-monospace,monospace" fontSize={9}>
        {sublabel}
      </text>
    )}
  </g>
);

const Arrow = ({ x1, y1, x2, y2, dim }: { x1: number; y1: number; x2: number; y2: number; dim?: boolean }) => (
  <line
    x1={x1} y1={y1} x2={x2} y2={y2}
    stroke={dim ? "#3a3a3a" : "#c9a96e"}
    strokeWidth={dim ? 1 : 1.5}
    markerEnd={dim ? "url(#arr-dim)" : "url(#arr)"}
  />
);

const Label = ({ x, y, text }: { x: number; y: number; text: string }) => (
  <text x={x} y={y} fill="#524f4a" fontFamily="ui-monospace,monospace" fontSize={9} letterSpacing="0.1em" textAnchor="middle">
    {text.toUpperCase()}
  </text>
);

function DiagNEMCCU() {
  return (
    <svg viewBox="0 0 560 300" className="w-full h-auto">
      <Defs />
      <Label x={280} y={18} text="NEMCCU — Credit Union Accounting" />
      <Box x={10} y={30} w={100} h={36} label="Credit Union 1" />
      <Box x={10} y={80} w={100} h={36} label="Credit Union 2" />
      <Box x={10} y={130} w={100} h={36} label="Credit Union 3" />
      <Arrow x1={110} y1={48} x2={145} y2={115} />
      <Arrow x1={110} y1={98} x2={145} y2={115} />
      <Arrow x1={110} y1={148} x2={145} y2={115} />
      <Box x={150} y={90} w={90} h={50} label="Nginx" sublabel="Reverse Proxy" />
      <Arrow x1={240} y1={115} x2={275} y2={115} />
      <Box x={280} y={76} w={110} h={78} label="Grails MVC" sublabel="RBAC + Auth" accent />
      <Arrow x1={390} y1={105} x2={425} y2={80} />
      <Arrow x1={390} y1={115} x2={425} y2={140} />
      <Box x={430} y={55} w={110} h={44} label="PostgreSQL" sublabel="Schema-per-union" />
      <Box x={430} y={115} w={110} h={44} label="BIRT Reports" sublabel="PDF / Excel" />
      <Box x={10} y={200} w={150} h={36} label="Interest Calculator" sublabel="Automated Engine" accent />
      <Box x={180} y={200} w={120} h={36} label="Audit Logger" sublabel="Compliance Trail" />
      <Arrow x1={280} y1={154} x2={85} y2={200} dim />
      <Arrow x1={280} y1={154} x2={240} y2={200} dim />
    </svg>
  );
}

function DiagListenOnRepeat() {
  return (
    <svg viewBox="0 0 580 310" className="w-full h-auto">
      <Defs />
      <Label x={290} y={18} text="Listen on Repeat — Music Streaming Platform" />
      <Box x={10} y={30} w={90} h={36} label="Users / Web" />
      <Arrow x1={100} y1={48} x2={135} y2={48} />
      <Box x={140} y={30} w={90} h={36} label="CloudFront" sublabel="CDN" />
      <Arrow x1={230} y1={48} x2={265} y2={48} />
      <Box x={270} y={30} w={100} h={36} label="Node.js API" accent />
      <Arrow x1={370} y1={48} x2={405} y2={48} />
      <Box x={410} y={30} w={110} h={36} label="GraphQL Gateway" sublabel="Schema Stitching" accent />
      <Arrow x1={320} y1={66} x2={320} y2={100} />
      <Box x={260} y={105} w={120} h={36} label="Redis" sublabel="Cache + Sessions" />
      <Arrow x1={465} y1={66} x2={465} y2={100} />
      <Box x={410} y={105} w={110} h={36} label="iHeartRadio" sublabel="External API" />
      <Arrow x1={320} y1={141} x2={320} y2={175} />
      <Box x={260} y={180} w={120} h={36} label="AWS S3" sublabel="Media Storage" />
      <Box x={10} y={130} w={120} h={36} label="WebRTC Server" sublabel="Sync Playback" accent />
      <Arrow x1={100} y1={66} x2={65} y2={130} />
      <Box x={10} y={200} w={120} h={36} label="WebSocket" sublabel="Real-time Chat" />
      <Arrow x1={65} y1={166} x2={65} y2={200} />
      <Box x={410} y={180} w={110} h={36} label="Spotify API" sublabel="External API" />
      <Arrow x1={465} y1={141} x2={465} y2={180} />
      <Arrow x1={410} y1={48} x2={410} y2={105} dim />
    </svg>
  );
}

function DiagSkillsTransfers() {
  return (
    <svg viewBox="0 0 580 290" className="w-full h-auto">
      <Defs />
      <Label x={290} y={18} text="Skills Transfers — Multi-Tenant E-Learning SaaS" />
      <Box x={10} y={30} w={90} h={36} label="Students" />
      <Box x={10} y={80} w={90} h={36} label="Instructors" />
      <Arrow x1={100} y1={48} x2={135} y2={75} />
      <Arrow x1={100} y1={98} x2={135} y2={75} />
      <Box x={140} y={55} w={100} h={40} label="Laravel API" sublabel="Multi-tenant" accent />
      <Arrow x1={240} y1={75} x2={275} y2={55} />
      <Arrow x1={240} y1={75} x2={275} y2={115} />
      <Arrow x1={240} y1={75} x2={275} y2={175} />
      <Box x={280} y={35} w={110} h={38} label="Auth Service" sublabel="Session + RBAC" />
      <Box x={280} y={95} w={110} h={38} label="SCORM Engine" sublabel="1.2 / 2004" accent />
      <Box x={280} y={155} w={110} h={38} label="Stripe" sublabel="Subscription Billing" />
      <Arrow x1={390} y1={75} x2={425} y2={50} />
      <Arrow x1={390} y1={115} x2={425} y2={115} />
      <Arrow x1={390} y1={175} x2={425} y2={195} />
      <Box x={430} y={30} w={120} h={40} label="PostgreSQL" sublabel="Schema-per-tenant" accent />
      <Box x={430} y={95} w={120} h={40} label="Redis" sublabel="Cache / Sessions" />
      <Box x={430} y={175} w={120} h={40} label="AWS S3" sublabel="Course Media" />
      <Box x={10} y={195} w={120} h={36} label="Course Builder" sublabel="Content Authoring" />
      <Box x={150} y={195} w={100} h={36} label="Analytics" sublabel="Progress Tracking" />
    </svg>
  );
}

function DiagPIMS() {
  return (
    <svg viewBox="0 0 580 300" className="w-full h-auto">
      <Defs />
      <Label x={290} y={18} text="PIMS — Government Pension Information System" />
      <Box x={10} y={30} w={110} h={36} label="Gov Staff" sublabel="Ministry Users" />
      <Arrow x1={120} y1={48} x2={155} y2={48} />
      <Box x={160} y={30} w={110} h={36} label="FastAPI" sublabel="REST + Auth" accent />
      <Arrow x1={270} y1={48} x2={305} y2={35} />
      <Arrow x1={270} y1={48} x2={305} y2={75} />
      <Arrow x1={270} y1={48} x2={305} y2={115} />
      <Box x={310} y={20} w={120} h={36} label="Enrollment Svc" sublabel="Pensioner Registry" accent />
      <Box x={310} y={60} w={120} h={36} label="Pension Calc" sublabel="Rule Engine" accent />
      <Box x={310} y={100} w={120} h={36} label="Disbursement Svc" sublabel="Payment Processing" accent />
      <Arrow x1={430} y1={38} x2={460} y2={80} />
      <Arrow x1={430} y1={78} x2={460} y2={80} />
      <Arrow x1={430} y1={118} x2={460} y2={80} />
      <Box x={465} y={60} w={100} h={40} label="MySQL" sublabel="AES Encrypted" />
      <Box x={10} y={150} w={120} h={36} label="ETL Pipeline" sublabel="Legacy Migration" />
      <Box x={150} y={150} w={120} h={36} label="Docker Compose" sublabel="Containerized" />
      <Box x={290} y={150} w={130} h={36} label="GitLab CI/CD" sublabel="Auto Deploy" />
      <Box x={440} y={150} w={100} h={36} label="Audit Trail" sublabel="Compliance Log" />
      <Arrow x1={160} y1={66} x2={85} y2={150} dim />
      <Arrow x1={160} y1={66} x2={210} y2={150} dim />
      <Arrow x1={210} y1={186} x2={290} y2={168} dim />
    </svg>
  );
}

function DiagYachtCloud() {
  return (
    <svg viewBox="0 0 580 300" className="w-full h-auto">
      <Defs />
      <Label x={290} y={18} text="Yacht Cloud — Maritime Fleet Management" />
      <Box x={10} y={30} w={90} h={36} label="Brokers" />
      <Box x={10} y={80} w={90} h={36} label="Renters" />
      <Arrow x1={100} y1={48} x2={135} y2={75} />
      <Arrow x1={100} y1={98} x2={135} y2={75} />
      <Box x={140} y={55} w={100} h={40} label="Grails API" sublabel="REST + Auth" accent />
      <Arrow x1={240} y1={75} x2={275} y2={50} />
      <Arrow x1={240} y1={75} x2={275} y2={100} />
      <Arrow x1={240} y1={75} x2={275} y2={150} />
      <Arrow x1={240} y1={75} x2={275} y2={200} />
      <Box x={280} y={30} w={120} h={38} label="Elasticsearch" sublabel="Faceted Search" accent />
      <Box x={280} y={80} w={120} h={38} label="PostgreSQL" sublabel="Listings + Bookings" />
      <Box x={280} y={130} w={120} h={38} label="AWS S3 + CDN" sublabel="10TB+ Media" accent />
      <Box x={280} y={180} w={120} h={38} label="AWS Lambda" sublabel="PDF Agreements" />
      <Arrow x1={400} y1={150} x2={435} y2={100} />
      <Arrow x1={400} y1={200} x2={435} y2={100} />
      <Box x={440} y={75} w={110} h={50} label="Stripe + PayPal" sublabel="Multi-currency" />
      <Box x={10} y={200} w={100} h={36} label="Yacht Owners" />
      <Box x={125} y={200} w={100} h={36} label="Fleet API" sublabel="Owner Portal" />
      <Arrow x1={110} y1={218} x2={125} y2={218} />
      <Arrow x1={225} y1={218} x2={280} y2={100} dim />
    </svg>
  );
}

function DiagFleetPro() {
  return (
    <svg viewBox="0 0 580 290" className="w-full h-auto">
      <Defs />
      <Label x={290} y={18} text="FleetPro — Real-Time Logistics Fleet Management" />
      <Box x={10} y={30} w={100} h={36} label="Fleet Managers" sublabel="Web Dashboard" />
      <Box x={10} y={80} w={100} h={36} label="GPS Devices" sublabel="200+ Vehicles" accent />
      <Arrow x1={110} y1={48} x2={145} y2={80} />
      <Arrow x1={110} y1={98} x2={145} y2={115} />
      <Box x={150} y={60} w={100} h={40} label="Laravel API" sublabel="REST + Business Logic" accent />
      <Box x={150} y={120} w={100} h={40} label="WebSocket Srv" sublabel="Persistent Conn." accent />
      <Arrow x1={250} y1={80} x2={285} y2={55} />
      <Arrow x1={250} y1={140} x2={285} y2={140} />
      <Arrow x1={250} y1={80} x2={285} y2={105} />
      <Box x={290} y={35} w={110} h={38} label="PostgreSQL" sublabel="Routes + Telemetry" />
      <Box x={290} y={85} w={110} h={38} label="Queue Worker" sublabel="Batch GPS Writes" />
      <Box x={290} y={120} w={110} h={38} label="Mapbox GL" sublabel="Real-time Map" />
      <Arrow x1={400} y1={54} x2={435} y2={54} />
      <Arrow x1={400} y1={135} x2={435} y2={135} />
      <Box x={440} y={35} w={110} h={38} label="Dashboard UI" sublabel="Live Vehicle Map" accent />
      <Box x={440} y={115} w={110} h={38} label="Dispatch Panel" sublabel="ETA + Alerts" />
      <Box x={10} y={195} w={130} h={36} label="ETL Pipeline" sublabel="50K+ Records / Day" />
      <Box x={160} y={195} w={120} h={36} label="Analytics Engine" sublabel="Fuel + Route Metrics" />
      <Box x={300} y={195} w={120} h={36} label="Notification Svc" sublabel="SMS + Push" />
      <Arrow x1={250} y1={104} x2={85} y2={195} dim />
    </svg>
  );
}

function DiagLoyalty() {
  return (
    <svg viewBox="0 0 580 300" className="w-full h-auto">
      <Defs />
      <Label x={290} y={18} text="Loyalty Platform — White-Label SaaS" />
      <Box x={10} y={30} w={90} h={36} label="Brand API" sublabel="Config + Rules" />
      <Box x={10} y={85} w={90} h={36} label="Loyalty Users" sublabel="Mobile / Web" />
      <Arrow x1={100} y1={48} x2={155} y2={80} />
      <Arrow x1={100} y1={103} x2={155} y2={90} />
      <Box x={160} y={60} w={100} h={50} label="Laravel API" sublabel="Multi-tenant" accent />
      <Arrow x1={260} y1={75} x2={295} y2={45} />
      <Arrow x1={260} y1={85} x2={295} y2={95} />
      <Arrow x1={260} y1={85} x2={295} y2={145} />
      <Box x={300} y={25} w={120} h={40} label="Campaign Engine" sublabel="Scheduled Rules" accent />
      <Box x={300} y={75} w={120} h={40} label="Points Ledger" sublabel="Redis + PostgreSQL" accent />
      <Box x={300} y={125} w={120} h={40} label="Brand Config" sublabel="JSON Rule Store" />
      <Arrow x1={420} y1={45} x2={455} y2={45} />
      <Arrow x1={420} y1={95} x2={455} y2={95} />
      <Arrow x1={420} y1={145} x2={455} y2={145} />
      <Box x={460} y={25} w={100} h={40} label="PostgreSQL" sublabel="Txn History" />
      <Box x={460} y={75} w={100} h={40} label="AWS SQS" sublabel="Async Jobs" />
      <Box x={460} y={125} w={100} h={40} label="Mixpanel" sublabel="Analytics" />
      <Box x={10} y={195} w={100} h={36} label="Twilio SMS" />
      <Box x={125} y={195} w={100} h={36} label="SendGrid" sublabel="Email" />
      <Box x={240} y={195} w={130} h={36} label="AWS Auto-scaling" sublabel="EC2 + ELB" accent />
      <Box x={385} y={195} w={100} h={36} label="Admin Portal" sublabel="Brand Mgmt" />
      <Arrow x1={210} y1={90} x2={55} y2={195} dim />
      <Arrow x1={210} y1={90} x2={175} y2={195} dim />
    </svg>
  );
}

function DiagSSO() {
  return (
    <svg viewBox="0 0 580 290" className="w-full h-auto">
      <Defs />
      <Label x={290} y={18} text="Enterprise SSO Gateway — Federated Identity" />
      <Box x={10} y={30} w={90} h={32} label="App A" />
      <Box x={10} y={72} w={90} h={32} label="App B" />
      <Box x={10} y={114} w={90} h={32} label="App C" />
      <Arrow x1={100} y1={46} x2={155} y2={88} />
      <Arrow x1={100} y1={88} x2={155} y2={88} />
      <Arrow x1={100} y1={130} x2={155} y2={88} />
      <Box x={160} y={65} w={120} h={46} label="SSO Gateway" sublabel="Protocol Bridge" accent />
      <Arrow x1={280} y1={88} x2={315} y2={55} />
      <Arrow x1={280} y1={88} x2={315} y2={100} />
      <Arrow x1={280} y1={88} x2={315} y2={150} />
      <Box x={320} y={35} w={130} h={38} label="OAuth 2.0 + PKCE" sublabel="Token Issuance" accent />
      <Box x={320} y={80} w={130} h={38} label="SAML 2.0 Bridge" sublabel="Assertion Parser" accent />
      <Box x={320} y={130} w={130} h={38} label="JWT Token Store" sublabel="Redis + Rotation" />
      <Arrow x1={450} y1={54} x2={485} y2={54} />
      <Arrow x1={450} y1={99} x2={485} y2={99} />
      <Arrow x1={450} y1={149} x2={485} y2={149} />
      <Box x={490} y={35} w={75} h={38} label="Okta" sublabel="IdP" />
      <Box x={490} y={80} w={75} h={38} label="Active Dir." sublabel="IdP" />
      <Box x={490} y={125} w={75} h={38} label="Google WS" sublabel="IdP" />
      <Box x={10} y={195} w={130} h={36} label="Admin Portal" sublabel="IdP Onboarding" />
      <Box x={160} y={195} w={130} h={36} label="Audit Log" sublabel="All Auth Events" />
      <Box x={310} y={195} w={130} h={36} label="Blue/Green Deploy" sublabel="Zero Downtime" accent />
      <Box x={460} y={195} w={100} h={36} label="Revocation API" sublabel="<100ms TTR" />
      <Arrow x1={220} y1={111} x2={75} y2={195} dim />
      <Arrow x1={220} y1={111} x2={225} y2={195} dim />
    </svg>
  );
}

const DIAGRAMS = [
  { id: "nemccu", name: "NEMCCU", type: "FinTech / SaaS", Diagram: DiagNEMCCU },
  { id: "listen-on-repeat", name: "Listen on Repeat", type: "Media / Streaming", Diagram: DiagListenOnRepeat },
  { id: "skills-transfers", name: "Skills Transfers", type: "EdTech / SaaS", Diagram: DiagSkillsTransfers },
  { id: "pims", name: "PIMS", type: "GovTech / Enterprise", Diagram: DiagPIMS },
  { id: "yacht-cloud", name: "Yacht Cloud", type: "Maritime / Marketplace", Diagram: DiagYachtCloud },
  { id: "fleetpro", name: "FleetPro", type: "Logistics / IoT", Diagram: DiagFleetPro },
  { id: "loyalty-platform", name: "Loyalty Platform", type: "MarTech / SaaS", Diagram: DiagLoyalty },
  { id: "sso-gateway", name: "Enterprise SSO Gateway", type: "Security / Enterprise", Diagram: DiagSSO },
];

export default function Architecture() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const active = DIAGRAMS.find((d) => d.id === expanded);

  return (
    <section id="architecture" className="py-24 border-t border-[rgba(255,255,255,0.06)]">
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
            Architecture Gallery
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#ede8df] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
          >
            How these systems
            <br />
            <span className="text-[#c9a96e] italic">actually fit together.</span>
          </h2>
          <p
            className="mt-4 text-[#9a948c] text-sm max-w-lg"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Click any diagram to expand it. These are real production architectures —
            simplified for clarity but accurate in structure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {DIAGRAMS.map((d, i) => (
            <motion.button
              key={d.id}
              onClick={() => setExpanded(d.id)}
              className="group relative border border-[rgba(255,255,255,0.06)] bg-[#0d0d0d] p-4 text-left hover:border-[rgba(201,169,110,0.25)] hover:bg-[#111] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <div className="mb-3 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none">
                <d.Diagram />
              </div>
              <div className="border-t border-[rgba(255,255,255,0.06)] pt-3 flex items-start justify-between gap-2">
                <div>
                  <div
                    className="text-[#ede8df] text-sm font-medium group-hover:text-[#c9a96e] transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}
                  >
                    {d.name}
                  </div>
                  <div
                    className="text-[#524f4a] text-xs mt-0.5"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {d.type}
                  </div>
                </div>
                <ZoomIn
                  size={14}
                  className="shrink-0 mt-1 text-[#3a3a3a] group-hover:text-[#c9a96e] transition-colors"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(null)}
          >
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.88)] backdrop-blur-sm" />
            <motion.div
              className="relative w-full max-w-4xl bg-[#0d0d0d] border border-[rgba(255,255,255,0.1)] p-6"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div
                    className="text-[#ede8df] text-2xl"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                  >
                    {active.name}
                  </div>
                  <div
                    className="text-[#9a948c] text-xs mt-1"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {active.type}
                  </div>
                </div>
                <button
                  onClick={() => setExpanded(null)}
                  className="text-[#524f4a] hover:text-[#ede8df] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="bg-[#080808] border border-[rgba(255,255,255,0.04)] p-4">
                <active.Diagram />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
