export default function ReportFooter() {
  return (
    <div className="mt-16 py-12 border-t border-slate-200 text-center">
      <p className="text-slate-500 font-normal text-sm mb-8 max-w-2xl mx-auto leading-relaxed">
        This automated report is generated to keep our community updated on our mission. 
        Thank you for being part of the WombTo18 Foundation family. Together, we are changing lives.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <button className="flex items-center gap-2 text-[var(--brand-green)] font-medium hover:-translate-y-1 transition-transform">
          <span className="material-symbols-outlined text-xl">share</span> 
          Share Progress
        </button>
        <span className="text-slate-200 hidden sm:block">|</span>
        <button className="flex items-center gap-2 text-[var(--brand-green)] font-medium hover:-translate-y-1 transition-transform">
          <span className="material-symbols-outlined text-xl">download</span> 
          Download PDF
        </button>
      </div>
    </div>
  );
}