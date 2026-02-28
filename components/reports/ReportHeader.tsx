export default function ReportHeader() {
  return (
    <div className="mb-10">
      <nav className="flex items-center gap-2 mb-6 text-sm font-medium">
        <a className="text-[var(--brand-green)] hover:underline font-medium" href="/projects">Impact Dashboard</a>
        <span className="text-slate-400">/</span>
        <span className="text-slate-600">Weekly Progress Reports</span>
      </nav>
      
      <h1 className="text-4xl md:text-5xl font-normal leading-tight tracking-tight mb-2 text-slate-900">
        Weekly Progress Report
      </h1>
      <p className="text-slate-500 text-lg font-normal">
        Impact summary for the week of <span className="font-medium text-slate-900">Oct 23 - Oct 29, 2025   </span>
      </p>
    </div>
  );
}