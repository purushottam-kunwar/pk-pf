import { METRICS } from "@/lib/data";

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-600 mb-2">By the numbers</p>
          <h2 className="text-3xl font-bold text-gray-900">Engineering Impact</h2>
          <p className="text-gray-500 mt-3">Real metrics from production systems I designed and shipped.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {METRICS.map(m => (
            <div key={m.label} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{m.value}{m.suffix}</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{m.label}</div>
              <div className="text-xs text-gray-400 leading-relaxed">{m.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
