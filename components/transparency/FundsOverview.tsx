export default function FundsOverview() {
  const chartData = [
    { label: "Education", received: "90%", utilized: "78%" },
    { label: "Healthcare", received: "70%", utilized: "65%" },
    { label: "Nutrition", received: "55%", utilized: "52%" },
    { label: "Livelihood", received: "40%", utilized: "38%" },
    { label: "Emergency", received: "30%", utilized: "25%" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {/* Chart Section */}
      <div className="lg:col-span-2 flex flex-col gap-8 rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/40 hover:-translate-y-1 transition-transform duration-300">
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div>
            <h3 className="text-slate-900 text-2xl font-medium mb-1">Funds Received vs. Utilized</h3>
            <p className="text-slate-500 text-sm font-light">FY 2023-24 Consolidated View</p>
          </div>
          <div className="flex gap-5 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--brand-green)] shadow-sm"></div>
              <span className="text-xs font-medium text-slate-600 uppercase tracking-wider">Total Receipts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--brand-yellow)] shadow-sm"></div>
              <span className="text-xs font-medium text-slate-600 uppercase tracking-wider">Total Deployment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-green-50 border border-green-100 flex flex-col relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl text-[var(--brand-green)] opacity-5">account_balance_wallet</span>
            <span className="text-[var(--brand-green)] text-[10px] font-medium uppercase tracking-widest mb-2 relative z-10">Funds Received</span>
            <div className="flex items-baseline gap-3 relative z-10">
              <span className="text-slate-900 text-4xl font-normal">₹18.42 Cr</span>
              <span className="text-[var(--brand-green)] text-xs font-medium   flex items-center bg-white px-2 py-1 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span> 12%
              </span>
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-yellow-50 border border-yellow-100 flex flex-col relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl text-[var(--brand-yellow)] opacity-10">donut_large</span>
            <span className="text-[var(--brand-yellow)] text-[10px] font-medium uppercase tracking-widest mb-2 relative z-10">Funds Utilized</span>
            <div className="flex items-baseline gap-3 relative z-10">
              <span className="text-slate-900 text-4xl font-normal">₹15.90 Cr</span>
              <span className="text-slate-500 text-xs font-medium bg-white px-2 py-1 rounded-lg shadow-sm">86.3% Efficiency</span>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between h-64 w-full px-2 gap-4 md:gap-8 pt-6 border-t border-slate-50">
          {chartData.map((data, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 gap-4 h-full justify-end group cursor-crosshair">
              <div className="flex w-full gap-1.5 items-end h-full relative">
                {/* Tooltip on hover */}
                <div className="opacity-0 group-hover:opacity-100 absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg whitespace-nowrap transition-opacity shadow-xl z-10">
                  {data.received} / {data.utilized}
                </div>
                <div className="flex-1 bg-[var(--brand-green)] rounded-t-xl transition-all group-hover:opacity-80 group-hover:scale-y-105 origin-bottom shadow-sm" style={{ height: data.received }}></div>
                <div className="flex-1 bg-[var(--brand-yellow)] rounded-t-xl transition-all group-hover:opacity-80 group-hover:scale-y-105 origin-bottom shadow-sm" style={{ height: data.utilized }}></div>
              </div>
              <p className="text-slate-500 text-[10px] font-medium uppercase text-center tracking-widest">{data.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tax Compliance Section */}
      <div className="flex flex-col gap-6">
        <div className="p-8 rounded-[2.5rem] flex flex-col h-full bg-white shadow-xl shadow-blue-500/10 border-2 border-[var(--brand-blue)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="bg-blue-100 p-3 rounded-2xl">
              <span className="material-symbols-outlined text-[var(--brand-blue)] font-normal text-2xl">verified</span>
            </div>
            <h3 className="text-2xl font-medium text-slate-900">Tax Compliance</h3>
          </div>
          
          <p className="text-slate-600 font-normal text-sm mb-8 leading-relaxed relative z-10">
            Donors are eligible for immediate 80G tax exemptions. Certificates are issued automatically via our secure portal.
          </p>
          
          <div className="space-y-4 mb-8 relative z-10">
            <div className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">80G Reg.</span>
              <span className="text-sm font-medium text-slate-900">CIT/80G/102</span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">12A Reg.</span>
              <span className="text-sm font-medium text-slate-900">AABTW2102DE</span>
            </div>
          </div>
          
          <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 mt-auto relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[var(--brand-blue)] text-lg">schedule</span>
              <span className="text-xs font-medium text-[var(--brand-blue)] uppercase tracking-widest">7-Day Reporting</span>
            </div>
            <p className="text-xs font-normal text-slate-600 leading-relaxed">
              Every donation is followed by an automated impact report within 7 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}