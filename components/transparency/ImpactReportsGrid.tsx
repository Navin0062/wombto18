export default function ImpactReportsGrid() {
  const reports = [
    { title: "Annual Impact Report 2023-24", size: "4.2 MB", status: "LATEST", statusColor: "text-[var(--brand-green)]", statusBg: "bg-green-100", iconColor: "text-[var(--brand-blue)]", bgGradient: "from-blue-50 to-purple-50", border: "border-blue-100" },
    { title: "Annual Impact Report 2022-23", size: "3.8 MB", status: "ARCHIVE", statusColor: "text-slate-500", statusBg: "bg-slate-100", iconColor: "text-[var(--brand-pink)]", bgGradient: "from-pink-50 to-purple-50", border: "border-pink-100" },
    { title: "Financial Audit FY 2022-23", size: "5.1 MB", status: "ARCHIVE", statusColor: "text-slate-500", statusBg: "bg-slate-100", iconColor: "text-[var(--brand-yellow)]", bgGradient: "from-yellow-50 to-pink-50", border: "border-yellow-100" },
    { title: "Annual Impact Report 2021-22", size: "4.0 MB", status: "ARCHIVE", statusColor: "text-slate-500", statusBg: "bg-slate-100", iconColor: "text-[var(--brand-green)]", bgGradient: "from-blue-50 to-green-50", border: "border-green-100" }
  ];

  return (
    <section className="mb-20">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10 border-b border-slate-100 pb-6">
        <div>
          <h2 className="text-3xl font-medium text-slate-900">Impact Reports</h2>
          <p className="text-slate-500 font-normal mt-2 text-lg">Deep dives into our annual activities, financial audits, and beneficiary stories.</p>
        </div>
        <button className="flex items-center gap-2 text-[var(--brand-blue)] font-medium text-sm hover:underline bg-blue-50 px-5 py-2.5 rounded-full transition-colors w-fit">
          <span className="material-symbols-outlined text-lg">filter_list</span>
          Filter by Year
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reports.map((report, idx) => (
          <div key={idx} className={`group relative bg-white border-2 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${report.border}`}>
            <div className={`h-48 bg-gradient-to-br flex items-center justify-center p-8 ${report.bgGradient}`}>
              <span className={`material-symbols-outlined text-7xl opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all ${report.iconColor}`}>picture_as_pdf</span>
            </div>
            <div className="p-6 flex flex-col min-h-[200px]">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 ${report.statusBg} ${report.statusColor} text-[10px] font-medium rounded-lg uppercase tracking-widest`}>
                  {report.status}
                </span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">{report.size}</span>
              </div>
              <h4 className="text-slate-900 font-medium text-xl leading-tight mb-6 flex-1">{report.title}</h4>
              <button className={`w-full flex items-center justify-center gap-2 py-2 rounded-full font-normal transition-all ${
                report.status === 'LATEST' 
                  ? 'bg-slate-900 text-white hover:bg-[var(--brand-blue)] shadow-lg' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}>
                <span className="material-symbols-outlined text-lg">download</span>
                Download PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}