export default function Stats() {
  return (
    <section className="w-full bg-white/40 py-20 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "$2.5M+", label: "Funds Raised", icon: "payments", color: "blue" },
            { value: "15,000+", label: "Children", icon: "group", color: "pink" },
            { value: "1,200+", label: "Donors", icon: "volunteer_activism", color: "green" },
            { value: "45+", label: "Villages", icon: "map", color: "orange" },
          ].map((stat, idx) => (
            <div key={idx} className={`group flex flex-col items-center space-y-4 text-center p-8 rounded-3xl bg-${stat.color}-50 transition-transform hover:-translate-y-2`}>
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-${stat.color})] text-white shadow-lg shadow-${stat.color}-500/30`}>
                <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
              </div>
              <div>
                <h3 className="text-4xl font-normal text-slate-900">{stat.value}</h3>
                <p className={`text-sm font-medium text-[var(--brand-${stat.color})] uppercase tracking-wider`}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}