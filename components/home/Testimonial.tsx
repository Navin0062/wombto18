export default function Testimonial() {
  return (
    <section className="w-full bg-[var(--brand-blue)] py-24 text-white overflow-hidden relative">
      <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-white/10"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div className="space-y-10">
            <span className="material-symbols-outlined text-8xl text-[var(--brand-yellow)] opacity-50">format_quote</span>
            <p className="text-4xl font-light leading-tight italic">
              "WombTo18 didn't just give me books; they gave me a path when I thought I had none. Now, I'm the first in my family to attend university."
            </p>
            <div className="flex items-center gap-5">
              <div className="h-16 w-16 rounded-3xl bg-white/20 border-2 border-white/30"></div>
              <div>
                <p className="text-xl font-normal">Ananya Singh</p>
                <p className="font-normal opacity-80 text-blue-100">Computer Science Student</p>
              </div>
            </div>
          </div>
          <div className="rounded-[3rem] bg-white p-12 text-slate-900 shadow-2xl border-b-[12px] border-[var(--brand-pink)]">
            <h3 className="text-4xl font-normal">Change a Life Today</h3>
            <p className="mt-4 text-lg font-light text-slate-800">Just $30 a month provides complete nutrition and education for one child.</p>
            <div className="mt-10 flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-4">
                <button className="rounded-2xl border-4 border-slate-100 py-4 font-normal text-xl hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-colors">$10</button>
                <button className="rounded-2xl border-4 border-[var(--brand-pink)] bg-[var(--brand-pink)] py-4 font-normal text-xl text-white shadow-lg shadow-pink-500/20">$30</button>
                <button className="rounded-2xl border-4 border-slate-100 py-4 font-normal text-xl hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-colors">$50</button>
              </div>
              <button className="w-full rounded-full bg-[var(--brand-blue)] py-4 text-xl font-normal text-white shadow-2xl shadow-blue-500/40 hover:scale-[1.02] transition-transform">
                Continue to Secure Checkout
              </button>
              <div className="flex items-center justify-center gap-2 text-xs font-normal text-slate-400 uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">lock</span>
                Secure 256-bit SSL encrypted
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}