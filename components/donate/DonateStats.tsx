export default function DonateStats() {
  const stats = [
    { value: "95%", label: "Efficiency Rating", color: "blue" },
    { value: "15K+", label: "Children Served", color: "green" },
    { value: "80G", label: "Tax Exempt Status", color: "orange" },
    { value: "100%", label: "Digital Trust Score", color: "slate" }
  ];

  return (
    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-100 py-12">
      {stats.map((stat, idx) => (
        <div key={idx} className="text-center group cursor-default">
          <p className={`text-4xl md:text-5xl font-medium mb-2 group-hover:scale-110 transition-transform ${
            stat.color === 'slate' ? 'text-slate-900' : `text-[var(--brand-${stat.color})]`
          }`}>
            {stat.value}
          </p>
          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}