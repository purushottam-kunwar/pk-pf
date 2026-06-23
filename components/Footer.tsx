export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-8 bg-[#0a0a0a]">
      <div className="w-full px-8 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-sm font-bold text-[#e5e5e5]">Purushottam Kunwar</span>
        <span className="text-xs text-[#383838]">Senior Backend Engineer · Kathmandu, Nepal</span>
        <div className="flex items-center gap-5">
          <span className="text-xs text-[#383838]">© {year}</span>
          <a href="/Purushottam_Kunwar_CV.pdf" download className="text-xs text-[#525252] hover:text-[#00f5d4] transition-colors">
            Download CV ↓
          </a>
        </div>
      </div>
    </footer>
  );
}
