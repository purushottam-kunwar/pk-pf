export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100 py-8 bg-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-sm font-semibold text-gray-900">Purushottam Kunwar</span>
        <span className="text-sm text-gray-400">Senior Backend Engineer · Kathmandu, Nepal</span>
        <div className="flex items-center gap-5">
          <span className="text-sm text-gray-400">© {year}</span>
          <a href="/Purushottam_Kunwar_CV.pdf" download className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
            Download CV ↓
          </a>
        </div>
      </div>
    </footer>
  );
}
