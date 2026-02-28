export default function DailyImpactTable() {
  const rows = [
    { date: "Oct 29, Tue", village: "Bavi Village", meals: "210", status: "Completed" },
    { date: "Oct 28, Mon", village: "Karkamb", meals: "245", status: "Completed" },
    { date: "Oct 27, Sun", village: "Community Day", meals: "180", status: "Completed" },
    { date: "Oct 26, Sat", village: "Vairag", meals: "195", status: "Completed" },
  ];

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden mb-12">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <h3 className="font-normal text-2xl text-slate-900">Detailed Daily Impact</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              {["Date", "Village Reached", "Meals Served", "Status"].map((header, idx) => (
                <th key={idx} className="px-8 py-5 text-[10px] font-medium uppercase tracking-widest text-slate-400">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-6 text-sm font-normal text-slate-600">{row.date}</td>
                <td className="px-8 py-6 text-sm font-medium text-slate-900">{row.village}</td>
                <td className="px-8 py-6 text-sm font-normal text-slate-600">{row.meals}</td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1.5 rounded-xl bg-green-50 text-[var(--brand-green)] text-[10px] font-medium uppercase tracking-widest border border-green-100">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}