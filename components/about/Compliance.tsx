export default function Compliance() {
  return (
    <section className="mb-20 w-full">
      <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-500/10">
        <div className="grid lg:grid-cols-5">
          <div className="lg:col-span-2 bg-[var(--brand-blue)] p-12 text-white flex flex-col justify-center">
            <span className="material-symbols-outlined text-6xl mb-6">gavel</span>
            <h2 className="text-3xl font-normal mb-4">Legal & Compliance</h2>
            <p className="text-blue-100 font-light mb-10 leading-relaxed">
              Transparency is the bedrock of our foundation. We maintain rigorous compliance with all national regulatory standards for non-profits.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-sm">verified</span>
                </div>
                <span className="font-normal text-lg">100% Transparent Operations</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-sm">verified</span>
                </div>
                <span className="font-normal text-lg">Annual Audited Reports</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 p-12 bg-white">
            <h3 className="text-2xl font-normal mb-8 text-slate-900">Registration Details</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 py-1.5 px-3 bg-orange-100 text-[var(--brand-orange)] text-[10px] font-medium uppercase tracking-widest rounded-bl-2xl">Tax Benefit</div>
                <span className="material-symbols-outlined text-[var(--brand-blue)] text-4xl mb-4">account_balance</span>
                <h4 className="text-xl font-medium mb-1 text-slate-900">80G Registered</h4>
                <p className="text-[10px] text-slate-400 mb-3 uppercase font-medium tracking-widest">Reg No: AACTW1234F2021</p>
                <p className="text-sm font-light text-slate-800 leading-relaxed">All donations made to WombTo18 are eligible for 50% tax exemption under Section 80G of the Income Tax Act.</p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 py-1.5 px-3 bg-orange-100 text-[var(--brand-orange)] text-[10px] font-medium uppercase tracking-widest rounded-bl-2xl">Charity Status</div>
                <span className="material-symbols-outlined text-[var(--brand-blue)] text-4xl mb-4">description</span>
                <h4 className="text-xl font-medium mb-1 text-slate-900">12A Compliant</h4>
                <p className="text-[10px] text-slate-400 mb-3 uppercase font-medium tracking-widest">Cert No: 12A/345/2012</p>
                <p className="text-sm font-light text-slate-800 leading-relaxed">Our foundation is registered under Section 12A(a) of the Income Tax Act, 1961 as a charitable organization.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-between p-5 border-2 border-slate-100 rounded-2xl hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-colors group">
                <span className="font-medium text-slate-700 group-hover:text-[var(--brand-blue)] transition-colors">Annual Report 2023</span>
                <span className="material-symbols-outlined text-[var(--brand-blue)] group-hover:-translate-y-1 transition-transform">download</span>
              </button>
              <button className="flex-1 flex items-center justify-between p-5 border-2 border-slate-100 rounded-2xl hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-colors group">
                <span className="font-medium text-slate-700 group-hover:text-[var(--brand-blue)] transition-colors">Audited Financials</span>
                <span className="material-symbols-outlined text-[var(--brand-blue)] group-hover:-translate-y-1 transition-transform">download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}