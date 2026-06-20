export interface Project {
  id: string;
  name: string;
  tagline: string;
  period: string;
  type: string;
  stack: string[];
  problem: string;
  challenge: string;
  solution: string;
  impact: string[];
  metrics: { value: string; label: string }[];
}

export interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export const METRICS = [
  { value: "8", suffix: "+", label: "Enterprise Systems", description: "Production systems across finance, logistics, maritime, and government sectors" },
  { value: "10", suffix: "TB+", label: "Data Managed", description: "Media and structured data served at scale through S3 and PostgreSQL" },
  { value: "50", suffix: "K+", label: "ETL Records", description: "Legacy data migrated with zero data loss using custom pipeline scripts" },
  { value: "15", suffix: "+", label: "Enterprise Clients", description: "Organizations running auth through SSO Gateway with zero downtime" },
  { value: "70", suffix: "%", label: "Processing Reduction", description: "Pension processing time cut via FastAPI automation and smart caching" },
  { value: "5", suffix: "", label: "Brands Deployed", description: "White-label loyalty platforms live with custom branding and rule engines" },
];

export const PROJECTS: Project[] = [
  {
    id: "nemccu",
    name: "NEMCCU",
    tagline: "Credit Union Accounting System",
    period: "2019 – 2020",
    type: "FinTech / SaaS",
    stack: ["Grails", "PostgreSQL", "jQuery", "Apache", "BIRT"],
    problem: "Three credit unions in Nepal were managing member accounts, loans, and interest calculations on paper and ad-hoc spreadsheets — creating reconciliation errors and regulatory risk.",
    challenge: "Build a multi-tenant accounting system from scratch while supporting the existing workflows of non-technical credit union staff and ensuring auditability for regulatory compliance.",
    solution: "Designed a Grails MVC application with schema-per-union PostgreSQL isolation, automated interest calculation engines, and BIRT-powered financial reports exportable as PDF/Excel. Role-based access control ensured tellers, managers, and auditors saw only what they needed.",
    impact: [
      "40% reduction in manual data entry time across all three unions",
      "Eliminated reconciliation errors that previously required weekly manual correction",
      "3 credit unions onboarded with full data migration from legacy records",
      "Regulatory audit report generation automated from 2 days to under 5 minutes",
    ],
    metrics: [
      { value: "3", label: "Credit Unions" },
      { value: "40%", label: "Time Saved" },
      { value: "0", label: "Reconciliation Errors" },
    ],
  },
  {
    id: "listen-on-repeat",
    name: "Listen on Repeat",
    tagline: "Music Streaming Platform",
    period: "2020",
    type: "Media / Streaming",
    stack: ["Node.js", "GraphQL", "AWS", "Redis", "WebRTC", "S3"],
    problem: "Users wanted a unified space to loop music tracks, share listening sessions, and connect with friends — but existing platforms had no cross-service playlist federation or real-time collaborative listening.",
    challenge: "Aggregate streams from multiple music providers (iHeartRadio, Spotify) via a GraphQL stitching layer while delivering sub-100ms latency for real-time collaborative sessions over WebRTC.",
    solution: "Built a Node.js API with a GraphQL federation gateway that stitched music metadata from multiple sources behind a single schema. Redis handled session state and playlist caching. WebRTC signaling enabled synchronized playback across users. Deployed entirely on AWS (EC2, S3, CloudFront).",
    impact: [
      "50% reduction in API latency through Redis caching of music metadata",
      "Streamed seamlessly for 10K+ concurrent users during peak load",
      "WebRTC collaborative sessions with sub-200ms sync across continents",
    ],
    metrics: [
      { value: "50%", label: "Latency Cut" },
      { value: "10K+", label: "Concurrent Users" },
      { value: "<200ms", label: "Sync Latency" },
    ],
  },
  {
    id: "skills-transfers",
    name: "Skills Transfers",
    tagline: "Multi-Tenant E-Learning SaaS",
    period: "2020 – 2021",
    type: "EdTech / SaaS",
    stack: ["Laravel", "PostgreSQL", "Redis", "AWS S3", "Stripe", "SCORM"],
    problem: "Educational institutions needed a white-label LMS they could fully brand, with proper multi-tenancy so student data from one institution was never exposed to another.",
    challenge: "Implement true multi-tenancy with per-schema PostgreSQL isolation (not row-level filtering), SCORM 1.2/2004 compliance for course tracking, and Stripe payment integration — all within a single Laravel monolith.",
    solution: "Used Laravel's database connection manager to dynamically switch to per-tenant PostgreSQL schemas at request time. Built a SCORM engine for tracking course completion, quiz scores, and time-on-task. Stripe subscriptions managed per-tenant billing with usage metering.",
    impact: [
      "300% user growth over 6 months after SaaS launch",
      "SCORM 1.2 and 2004 compliance certified — enabling institutional procurement",
      "Zero cross-tenant data leaks across the full production lifecycle",
      "Stripe subscription billing automated for 15+ paying institutions",
    ],
    metrics: [
      { value: "300%", label: "User Growth" },
      { value: "15+", label: "Institutions" },
      { value: "0", label: "Data Leaks" },
    ],
  },
  {
    id: "pims",
    name: "PIMS",
    tagline: "Government Pension Information System",
    period: "2021 – 2022",
    type: "GovTech / Enterprise",
    stack: ["FastAPI", "Python", "MySQL", "Docker", "GitLab CI/CD"],
    problem: "A government ministry was processing pension disbursements for 10,000+ retirees manually — paper forms, offline spreadsheets, no audit trail, and monthly errors in payment calculations.",
    challenge: "Digitize the entire pension lifecycle (enrollment → calculation → disbursement → audit) within strict government security requirements, with data encryption at rest and a complete audit trail.",
    solution: "Built a FastAPI microservice architecture with domain-separated services for enrollment, pension calculation (rule-engine for service years, tier brackets, spousal benefits), and disbursement. MySQL with column-level AES encryption. Custom ETL pipeline for migrating 10+ years of paper records into structured data. Dockerized for reproducible deployment. CI/CD via GitLab pipelines.",
    impact: [
      "70% reduction in monthly processing time — from 3 weeks to under 4 days",
      "10,000+ pensioner records digitized and migrated from paper",
      "Zero payment errors post-launch vs. monthly corrections previously",
      "Full audit trail enabling government compliance review",
    ],
    metrics: [
      { value: "70%", label: "Faster Processing" },
      { value: "10K+", label: "Pensioners" },
      { value: "0", label: "Payment Errors" },
    ],
  },
  {
    id: "yacht-cloud",
    name: "Yacht Cloud",
    tagline: "Maritime Fleet Management Platform",
    period: "2022 – 2023",
    type: "Maritime / Marketplace",
    stack: ["Grails", "Elasticsearch", "PostgreSQL", "AWS S3", "AWS Lambda", "Stripe", "PayPal"],
    problem: "The yacht rental market was fragmented — brokers used emails and phone calls, listings were scattered, and search across 500+ yachts with specs and availability was impossible.",
    challenge: "Build a marketplace platform that handles 10TB+ of yacht media (photos/videos/documents), delivers sub-second full-text search across complex yacht specifications, and manages multi-currency transactions.",
    solution: "Grails REST API with Elasticsearch for faceted yacht search (capacity, location, amenities, price range). AWS S3 for 10TB+ media storage with CloudFront CDN. AWS Lambda functions for on-demand PDF charter agreements. Stripe + PayPal for multi-currency charter payments with escrow logic.",
    impact: [
      "60% improvement in search relevance through Elasticsearch custom analyzers",
      "10TB+ yacht media served via S3 + CloudFront with 99.9% availability",
      "500+ active yacht listings across 12 countries",
      "PDF charter agreement generation automated — from hours to seconds",
    ],
    metrics: [
      { value: "500+", label: "Yacht Listings" },
      { value: "10TB+", label: "Media Stored" },
      { value: "60%", label: "Search Improvement" },
    ],
  },
  {
    id: "fleetpro",
    name: "FleetPro",
    tagline: "Real-Time Logistics Fleet Management",
    period: "2023",
    type: "Logistics / IoT",
    stack: ["Laravel", "WebSocket", "PostgreSQL", "Mapbox", "GPS SDK"],
    problem: "A logistics company with 200+ vehicles had zero real-time visibility — dispatch called drivers individually, fuel consumption was untracked, and route optimization was guesswork.",
    challenge: "Ingest GPS telemetry from 200+ devices simultaneously over WebSocket, process and store 50K+ location records per day, and render live vehicle positions on a map without melting the database.",
    solution: "Laravel backend with a dedicated WebSocket server (Laravel Reverb) handling persistent GPS device connections. Incoming telemetry batch-written to PostgreSQL via queue workers to prevent write contention. Custom ETL pipeline processed historical route data. Mapbox GL integration for the real-time dispatch dashboard.",
    impact: [
      "40% reduction in fuel costs through route optimization insights",
      "Real-time tracking of 200+ vehicles with sub-5 second update latency",
      "50K+ GPS records ingested daily with no data loss",
      "Dispatch call volume reduced by 60% through live ETA dashboard",
    ],
    metrics: [
      { value: "40%", label: "Fuel Savings" },
      { value: "200+", label: "Vehicles Live" },
      { value: "50K+", label: "Records/Day" },
    ],
  },
  {
    id: "loyalty-platform",
    name: "Loyalty Platform",
    tagline: "White-Label SaaS Loyalty System",
    period: "2023 – 2024",
    type: "MarTech / SaaS",
    stack: ["Laravel", "AWS", "Redis", "Twilio", "SendGrid", "Mixpanel"],
    problem: "Retail brands needed custom loyalty programs but couldn't afford bespoke development — they needed a configurable platform that looked and felt like their own product.",
    challenge: "Build a white-label system where each brand gets custom branding, custom point rules, and custom reward catalogs — all running on shared infrastructure with strict data isolation and 2M+ loyalty transactions to handle.",
    solution: "Multi-tenant Laravel platform with per-brand configuration (branding, point earn/burn rules, reward catalog) stored as JSON config. Redis-backed points ledger for high-throughput transactions. Campaign engine with scheduled rule evaluation. Twilio SMS and SendGrid email for engagement. Mixpanel for per-brand analytics. AWS auto-scaling groups handle seasonal traffic spikes.",
    impact: [
      "5 retail brands deployed with full custom branding in under 2 weeks each",
      "2M+ loyalty points tracked across all brands",
      "Campaign open rates 3× industry average through personalized SMS/email",
      "Platform scaled to 10× traffic during holiday campaigns via AWS auto-scaling",
    ],
    metrics: [
      { value: "5", label: "Brands Live" },
      { value: "2M+", label: "Points Tracked" },
      { value: "3×", label: "Campaign CTR" },
    ],
  },
  {
    id: "sso-gateway",
    name: "Enterprise SSO Gateway",
    tagline: "Federated Identity & Access Platform",
    period: "2024 – Present",
    type: "Security / Enterprise",
    stack: ["OAuth 2.0", "SAML 2.0", "JWT", "Node.js", "Python", "Redis"],
    problem: "Enterprise clients needed to authenticate their employees into client apps using their existing identity providers (Active Directory, Okta, Google Workspace) — but each integration was being built separately, creating maintenance sprawl.",
    challenge: "Design a gateway that speaks both OAuth 2.0 (PKCE) and SAML 2.0 on the IdP side, while presenting a clean OAuth 2.0 interface to all client applications — with zero downtime across auth flows.",
    solution: "Designed a protocol translation layer: inbound SAML assertions from enterprise IdPs are translated into JWT access tokens issued via OAuth 2.0. PKCE flow for all public clients. Redis token store with rotation and revocation. Admin portal for onboarding new IdPs without code changes. Blue/green deployment with session-preserving token migration.",
    impact: [
      "15+ enterprise clients onboarded with zero auth downtime",
      "SAML ↔ OAuth protocol bridge handling 100K+ auth events/month",
      "IdP onboarding time reduced from 2 weeks of engineering to 2 hours of config",
      "JWT rotation and revocation with sub-100ms enforcement latency",
    ],
    metrics: [
      { value: "15+", label: "Enterprise Clients" },
      { value: "100K+", label: "Auth Events/Mo" },
      { value: "<100ms", label: "Token Revocation" },
    ],
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2019",
    role: "Junior Software Developer",
    company: "Azminds Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    description: "Started professional career building the NEMCCU accounting system for credit unions. First exposure to production database design and multi-tenant architecture.",
    highlights: ["Built first production system", "Multi-tenant PostgreSQL architecture", "Financial domain expertise"],
    tech: ["Grails", "PostgreSQL", "jQuery"],
  },
  {
    year: "2020",
    role: "Software Engineer",
    company: "Azminds Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    description: "Expanded into media streaming and EdTech. Built Listen on Repeat (streaming platform) and Skills Transfers (E-Learning SaaS) — first time working with AWS, Redis, and multi-tenant SaaS patterns.",
    highlights: ["First AWS production deployment", "WebRTC real-time collaboration", "SCORM compliance implementation"],
    tech: ["Node.js", "GraphQL", "Laravel", "Redis", "AWS", "WebRTC"],
  },
  {
    year: "2021 – 2022",
    role: "Backend Engineer",
    company: "Azminds Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    description: "Led backend development for PIMS, a government pension digitization project with strict security requirements. First experience with FastAPI, Docker, and CI/CD pipelines in a regulated environment.",
    highlights: ["Government-grade security", "FastAPI microservices", "Legacy data migration at scale"],
    tech: ["FastAPI", "Python", "MySQL", "Docker", "GitLab CI/CD"],
  },
  {
    year: "2022 – 2023",
    role: "Senior Backend Engineer",
    company: "Azminds Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    description: "Promoted to Senior. Led Yacht Cloud — most technically complex project: Elasticsearch at scale, 10TB+ S3 media, AWS Lambda serverless, and multi-currency marketplace transactions.",
    highlights: ["First senior role", "Elasticsearch at scale", "10TB+ media infrastructure"],
    tech: ["Grails", "Elasticsearch", "AWS S3", "AWS Lambda", "Stripe", "PayPal"],
  },
  {
    year: "2023 – 2024",
    role: "Senior Backend Engineer",
    company: "Azminds Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    description: "Simultaneously led FleetPro (IoT/logistics) and the Loyalty Platform (MarTech SaaS). First time managing WebSocket infrastructure and designing systems for horizontal auto-scaling.",
    highlights: ["Real-time GPS WebSocket", "Auto-scaling SaaS", "Multi-brand platform architecture"],
    tech: ["Laravel", "WebSocket", "AWS Auto-scaling", "Redis", "Twilio", "Mapbox"],
  },
  {
    year: "2024 – Present",
    role: "Senior Backend Engineer",
    company: "Azminds Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    description: "Designing and building the Enterprise SSO Gateway — OAuth 2.0 + SAML 2.0 protocol bridge serving 15+ enterprise clients. Also mentoring junior engineers and driving backend architecture decisions.",
    highlights: ["Enterprise identity protocols", "Protocol translation bridge", "Team technical leadership"],
    tech: ["OAuth 2.0", "SAML 2.0", "JWT", "Node.js", "Python", "Redis"],
  },
];
