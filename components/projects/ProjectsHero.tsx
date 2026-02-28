export default function ProjectsHero() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-200 pb-10 mb-10">
      <div className="space-y-3 max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[var(--brand-blue)] px-4 py-1.5 rounded-full text-[10px] font-medium uppercase tracking-widest shadow-sm">
          <span className="material-symbols-outlined text-sm">analytics</span>
          Real-time Impact
        </div>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900">
          Our Ongoing Initiatives
        </h2>
        <p className="text-slate-600 font-normal text-lg leading-relaxed">
          Detailed progress logs and financial transparency for every child welfare project in our system.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 font-normal text-sm text-slate-700 hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-colors shadow-sm">
          <span className="material-symbols-outlined text-lg">download</span>
          Annual Impact Report
        </button>
        <button className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-normal text-sm hover:bg-[var(--brand-blue)] transition-colors shadow-xl shadow-blue-500/10">
          <span className="material-symbols-outlined text-lg">dashboard</span>
          Data Dashboard
        </button>
      </div>
    </div>
  );
}