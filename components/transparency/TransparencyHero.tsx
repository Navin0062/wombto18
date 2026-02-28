export default function TransparencyHero() {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-4 py-1.5 bg-green-100 text-[var(--brand-green)] rounded-full text-[10px] font-medium uppercase tracking-[0.2em] shadow-sm">
          Real-time Tracking
        </span>
        <span className="px-4 py-1.5 bg-blue-100 text-[var(--brand-blue)] rounded-full text-[10px] font-medium uppercase tracking-[0.2em] shadow-sm">
          ISO 9001 Certified
        </span>
      </div>
      <h1 className="text-slate-900 text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight">
        Transparency &  Impact Reports
      </h1>
      <p className="text-slate-800 text-lg font-light max-w-2xl leading-relaxed mt-2">
        We maintain radical accountability. Access our audited financial statements, annual impact reports, and real-time fund utilization dashboards.
      </p>
    </div>
  );
}