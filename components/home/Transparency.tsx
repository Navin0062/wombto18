export default function Transparency() {
  return (
    <section className="w-full bg-white/60 py-24 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center gap-20 lg:flex-row">
          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative h-80 w-80 flex items-center justify-center">
              <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                <circle className="text-slate-100" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="12"></circle>
                <circle className="text-[var(--brand-blue)]" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="20.1" strokeWidth="12"></circle>
                <circle className="text-[var(--brand-pink)]" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="220" strokeWidth="12"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <p className="text-5xl font-normal text-slate-900">92%</p>
                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Direct Impact</p>
              </div>
            </div>
            <div className="absolute -right-4 top-4 rounded-2xl bg-white p-5 shadow-2xl border-2 border-blue-50">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-[var(--brand-blue)]"></div>
                <span className="text-xs font-normal uppercase tracking-wider">Programs</span>
              </div>
            </div>
            <div className="absolute bottom-4 -left-4 rounded-2xl bg-white p-5 shadow-2xl border-2 border-pink-50">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-[var(--brand-pink)]"></div>
                <span className="text-xs font-normal uppercase tracking-wider">Admin</span>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-10">
            <h2 className="text-5xl font-normal text-slate-900">Radical Transparency</h2>
            <p className="text-xl font-normal text-slate-600">We believe you deserve to know exactly where your money goes. Every single donation is tracked and reported with meticulous care.</p>
            <ul className="space-y-6">
              {[
                { text: "92% of funds go directly to child welfare programs.", color: "green" },
                { text: "Audited financial statements published quarterly.", color: "blue" },
                { text: "Real-time tracking of individual student progress.", color: "pink" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-${item.color}-100 text-${item.color}-600`}>
                    <span className="material-symbols-outlined text-sm font-normal">check</span>
                  </div>
                  <span className="text-lg font-normal text-slate-700">{item.text}</span>
                </li>
              ))}
            </ul>
            <button className="rounded-2xl bg-[var(--brand-green)] px-8 py-4 text-lg font-normal text-white shadow-xl shadow-green-500/30 hover:scale-105 transition-transform">
              View Transparency Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}