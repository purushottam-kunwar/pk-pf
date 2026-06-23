const STATS = [
  { value: "8+",    label: "Enterprise Systems",       sub: "Production shipped" },
  { value: "10TB+", label: "Data Managed",             sub: "S3 + PostgreSQL" },
  { value: "15+",   label: "Enterprise Clients",       sub: "Across industries" },
  { value: "70%",   label: "Processing Reduction",     sub: "Through optimization" },
];

export default function Impact() {
  return (
    <section id="impact" className="bg-[#0a0a0a] border-y border-white/5">
      <div className="w-full px-8 xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5">
          {STATS.map(s => (
            <div key={s.label} className="py-12 px-6 lg:px-10">
              <div className="text-5xl lg:text-6xl font-extrabold text-[#00f5d4] mb-2 tabular-nums leading-none">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-[#e5e5e5] mb-1">{s.label}</div>
              <div className="text-xs text-[#525252]">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
