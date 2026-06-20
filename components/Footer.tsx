export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="text-[#3a3a3a] text-xs"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          © {year} Purushottam Kunwar
        </span>
        <span
          className="text-[#3a3a3a] text-xs"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Senior Backend Engineer · Kathmandu, Nepal
        </span>
        <a
          href="/Purushottam_Kunwar_CV.pdf"
          download
          className="text-[#524f4a] text-xs hover:text-[#c9a96e] transition-colors"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Download CV ↓
        </a>
      </div>
    </footer>
  );
}
