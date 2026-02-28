export default function AutomatedReporting() {
  return (
    <div className="bg-slate-900 p-8 md:p-16 rounded-[3rem] text-white mb-16 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-blue)]/20 blur-[120px] rounded-full -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-pink)]/20 blur-[100px] rounded-full -ml-40 -mb-40"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-[var(--brand-pink)] animate-spin-slow h-6 w-6">autorenew</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--brand-pink)]">Real-Time Accountability Engine</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal mb-6 leading-tight">The 7-Day Automated Reporting Promise</h2>
          <p className="text-slate-300 text-lg font-light mb-10 leading-relaxed">
            We've automated our reporting pipeline so you don't have to wait for annual cycles to see where your money goes. 
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex-shrink-0 bg-[var(--brand-blue)] p-3 rounded-xl text-white shadow-lg shadow-blue-500/30">
                <span className="material-symbols-outlined">receipt_long</span>
              </div>
              <div>
                <p className="text-lg font-normal text-white mb-1">Day 1: Instant Confirmation</p>
                <p className="text-sm font-light text-slate-400">80G certificate & tax receipt delivered within 60 seconds.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex-shrink-0 bg-[var(--brand-pink)] p-3 rounded-xl text-white shadow-lg shadow-pink-500/30">
                <span className="material-symbols-outlined">assignment_ind</span>
              </div>
              <div>
                <p className="text-lg font-normal text-white mb-1">Day 3: Project Allocation</p>
                <p className="text-sm font-light text-slate-400">Personalized dashboard update showing the specific center your funds support.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex-shrink-0 bg-[var(--brand-green)] p-3 rounded-xl text-white shadow-lg shadow-green-500/30">
                <span className="material-symbols-outlined">videocam</span>
              </div>
              <div>
                <p className="text-lg font-normal text-white mb-1">Day 7: Field Verification</p>
                <p className="text-sm font-light text-slate-400">Visual update or photo/video evidence of funds in action on the ground.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: "mark_email_read", color: "pink", title: "Smart Receipts", desc: "QR-coded for instant verification by tax authorities." },
            { icon: "dashboard_customize", color: "purple", title: "Donor Portal", desc: "Personal history and impact dashboard for every contributor." },
            { icon: "cloud_sync", color: "green", title: "Live Ledger", desc: "Transparent ledger entries for every single transaction." },
            { icon: "analytics", color: "yellow", title: "Quarterly Audits", desc: "External audits conducted every 90 days for complete trust." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 group hover:bg-white/10 transition-all hover:-translate-y-2 cursor-default">
              <span className={`material-symbols-outlined text-[var(--brand-${item.color})] text-4xl mb-4 group-hover:scale-110 transition-transform block`}>
                {item.icon}
              </span>
              <h4 className="font-normal text-xl mb-2 text-white">{item.title}</h4>
              <p className="text-sm font-light text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}