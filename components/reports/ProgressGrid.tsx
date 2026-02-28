export default function ProgressGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
      {/* Progress Card */}
      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 lg:col-span-2 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-2xl font-normal mb-1 text-slate-900">Weekly Goal Progress</h3>
            <p className="text-sm font-normal text-slate-500">Target: 2,000 Meals this month</p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-[var(--brand-green)] border border-green-100 shadow-sm">
            <span className="material-symbols-outlined text-3xl">trending_up</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between text-sm font-medium text-slate-900">
            <span>1,450 Meals Served</span>
            <span className="text-[var(--brand-green)]">72%</span>
          </div>
          <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden p-0.5">
            <div className="h-full bg-[var(--brand-green)] rounded-full shadow-sm" style={{ width: '72%' }}></div>
          </div>
          <p className="text-sm text-slate-500 font-normal italic flex items-center gap-2 mt-2">
            <span className="material-symbols-outlined text-sm">info</span>
            You are ahead of schedule by 15% compared to last week!
          </p>
        </div>
      </div>

      {/* Countdown Card */}
      <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden shadow-2xl">
        <div className="absolute -right-12 -top-12 w-40 h-40 bg-[var(--brand-green)]/20 rounded-full blur-[40px]"></div>
        <div className="relative z-10">
          <h3 className="text-lg font-normal mb-5 text-slate-300 tracking-wide">Phase 1 Closing In:</h3>
          <div className="flex gap-3 text-center">
            <div className="flex-1 bg-white/10 border border-white/5 p-3 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-normal text-[var(--brand-green)]">04</div>
              <div className="text-[10px] uppercase font-normal tracking-widest opacity-60 mt-1">Days</div>
            </div>
            <div className="flex-1 bg-white/10 border border-white/5 p-3 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-normal text-[var(--brand-green)]">18</div>
              <div className="text-[10px] uppercase font-normal tracking-widest opacity-60 mt-1">Hours</div>
            </div>
            <div className="flex-1 bg-white/10 border border-white/5 p-3 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-normal text-[var(--brand-green)]">32</div>
              <div className="text-[10px] uppercase font-normal tracking-widest opacity-60 mt-1">Mins</div>
            </div>
          </div>
        </div>
        <div className="mt-8 relative z-10">
          <p className="text-sm font-normal mb-3 text-slate-300">Help us hit the finish line!</p>
          <button className="w-full bg-white text-slate-900 py-4 rounded-2xl font-normal text-sm hover:bg-[var(--brand-green)] hover:text-white transition-colors shadow-lg">
            Boost Support Now
          </button>
        </div>
      </div>
    </div>
  );
}