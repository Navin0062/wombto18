export default function TransparencyBanner() {
  return (
    <div className="mt-16 bg-slate-900 rounded-[3rem] p-10 md:p-12 text-white relative overflow-hidden shadow-2xl">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-">100% Transparency Commitment</h2>
          <p className="text-slate-400 font-light text-lg max-w-2xl leading-relaxed">
            Every dollar you donate is tracked through our ledger system. Access real-time financial audits and impact metrics anytime.
          </p>
        </div>
        <div className="flex shrink-0">
          <button className="px-8 py-5 bg-[var(--brand-blue)] text-white rounded-full font-medium text-lg hover:bg-blue-600 transition-all flex items-center gap-3 shadow-xl shadow-blue-500/30 hover:-translate-y-1">
            Go to Transparency Dashboard
            <span className="material-symbols-outlined font-bold">arrow_forward</span>
          </button>
        </div>
      </div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--brand-blue)]/20 rounded-full -mr-40 -mt-40 blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--brand-pink)]/10 rounded-full -ml-40 -mb-40 blur-[80px]"></div>
    </div>
  );
}