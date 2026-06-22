import { METRICS } from "@/lib/data";

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="w-full px-10 xl:px-16">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">By the numbers</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Engineering Impact</h2>
          <p className="text-gray-400 text-xl">Real metrics from production systems I designed and shipped.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {METRICS.map(m => (
            <div key={m.label} className="bg-white rounded-2xl p-12 border border-gray-100 shadow-sm text-center">
              <div className="text-7xl font-extrabold text-blue-600 mb-4">{m.value}{m.suffix}</div>
              <div className="text-xl font-bold text-gray-900 mb-3">{m.label}</div>
              <div className="text-gray-400 leading-relaxed">{m.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
