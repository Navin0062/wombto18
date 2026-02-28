export default function ProjectFeed() {
  const projects = [
    {
      theme: {
        wrapper: "bg-blue-50/50 border-blue-100 hover:shadow-blue-500/10",
        iconBox: "bg-[var(--brand-blue)] shadow-blue-500/20",
        badge: "bg-blue-100 text-blue-700 border-blue-200",
        targetText: "text-blue-600",
        activeText: "text-[var(--brand-blue)]",
        boxBorder: "border-blue-100",
        ctaBox: "bg-[var(--brand-blue)]",
        ctaBtnText: "text-[var(--brand-blue)]",
        ctaIconFade: "text-blue-400/20"
      },
      icon: "baby_changing_station",
      title: "Prenatal Health & Supplements",
      desc: "Focusing on maternal nutrition, folic acid distribution, and specialized medical checkups for expectant mothers in high-risk rural areas.",
      targetGoal: "$45,000",
      ctaTitle: "Support Prenatal Care",
      ctaDesc: "Help us reach 200 more mothers this quarter.",
      ctaIcon: "volunteer_activism",
      timeline: [
        { label: "Today", title: "Supplies", desc: "Delivered to Hub", active: true },
        { label: "Yesterday", title: "Health Camp", desc: "42 Checked-in", active: false },
        { label: "2 days ago", title: "Midwife", desc: "Training Session", active: false },
        { label: "3 days ago", title: "Audit", desc: "Nutritional Pass", active: false },
        { label: "4 days ago", title: "Volunteer", desc: "Briefing Day", active: false, hiddenOnMobile: true },
        { label: "5 days ago", title: "Report", desc: "Monthly Review", active: false, hiddenOnMobile: true },
        { label: "6 days ago", title: "Inventory", desc: "Stock Update", active: false, hiddenOnMobile: true },
      ]
    },
    {
      theme: {
        wrapper: "bg-orange-50/50 border-orange-100 hover:shadow-orange-500/10",
        iconBox: "bg-[var(--brand-orange)] shadow-orange-500/20",
        badge: "bg-orange-100 text-orange-700 border-orange-200",
        targetText: "text-orange-600",
        activeText: "text-[var(--brand-orange)]",
        boxBorder: "border-orange-100",
        ctaBox: "bg-[var(--brand-orange)]",
        ctaBtnText: "text-[var(--brand-orange)]",
        ctaIconFade: "text-orange-400/20"
      },
      icon: "restaurant",
      title: "Nutrition & Growth Monitoring",
      desc: "Combatting childhood malnutrition through protein-rich meal programs and monthly developmental screening for toddlers.",
      targetGoal: "$32,000",
      ctaTitle: "Provide a Meal",
      ctaDesc: "Just $5 can provide 10 nutritious meals for a child.",
      ctaIcon: "lunch_dining",
      timeline: [
        { label: "Today", title: "Kitchen", desc: "500 Meals Cooked", active: true },
        { label: "Yesterday", title: "Screening", desc: "Growth Metrics Log", active: false },
        { label: "2 days ago", title: "Vitamins", desc: "Batch Received", active: false },
        { label: "3 days ago", title: "Audit", desc: "Quality Check", active: false },
        { label: "4 days ago", title: "Farmers", desc: "Direct Sourcing", active: false, hiddenOnMobile: true },
        { label: "5 days ago", title: "Hygiene", desc: "Workshop Held", active: false, hiddenOnMobile: true },
        { label: "6 days ago", title: "Data", desc: "Region Analysis", active: false, hiddenOnMobile: true },
      ]
    },
    {
      theme: {
        wrapper: "bg-emerald-50/50 border-emerald-100 hover:shadow-emerald-500/10",
        iconBox: "bg-[var(--brand-green)] shadow-emerald-500/20",
        badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
        targetText: "text-[var(--brand-green)]",
        activeText: "text-[var(--brand-green)]",
        boxBorder: "border-emerald-100",
        ctaBox: "bg-[var(--brand-green)]",
        ctaBtnText: "text-[var(--brand-green)]",
        ctaIconFade: "text-emerald-400/20"
      },
      icon: "school",
      title: "Foundational Education Fund",
      desc: "Providing school kits, digital tablets, and funding for community teachers to ensure every child reaches 18 with high-school proficiency.",
      targetGoal: "$120,000",
      ctaTitle: "Empower a Student",
      ctaDesc: "One student's full yearly kit costs only $85.",
      ctaIcon: "local_library",
      timeline: [
        { label: "Today", title: "Tablets", desc: "Software Update", active: true },
        { label: "Yesterday", title: "Teachers", desc: "Salary Disbursement", active: false },
        { label: "2 days ago", title: "Kits", desc: "New Batch Prep", active: false },
        { label: "3 days ago", title: "Enroll", desc: "15 New Students", active: false },
        { label: "4 days ago", title: "Library", desc: "Books Donated", active: false, hiddenOnMobile: true },
        { label: "5 days ago", title: "STEM", desc: "Module Created", active: false, hiddenOnMobile: true },
        { label: "6 days ago", title: "Exam", desc: "Monthly Assessment", active: false, hiddenOnMobile: true },
      ]
    }
  ];

  return (
    <div className="space-y-10">
      {projects.map((project, idx) => (
        <section key={idx} className={`group border rounded-[2.5rem] overflow-hidden transition-all duration-300 ${project.theme.wrapper}`}>
          <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-8">
              
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className={`text-white p-9 rounded-full shadow-lg shrink-0 flex items-center justify-center ${project.theme.iconBox}`}>
                    <span className="material-symbols-outlined text-2xl">{project.icon}</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-medium text-slate-900">{project.title}</h3>
                      <span className={`px-3 py-1.5 rounded-full text-[10px] font-normal uppercase tracking-widest border flex items-center gap-1 ${project.theme.badge}`}>
                        <span className="material-symbols-outlined text-xs">verified</span> 80G Eligible
                      </span>
                    </div>
                    <p className="text-slate-600 font-normal leading-relaxed max-w-xl">{project.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Target Goal</p>
                  <p className={`text-2xl font-black ${project.theme.targetText}`}>{project.targetGoal}</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">history</span> 7-Day Activity History
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {project.timeline.map((item, tIdx) => (
                    <div key={tIdx} className={`p-4 rounded-2xl border transition-colors ${item.hiddenOnMobile ? 'hidden lg:block' : ''} ${item.active ? `bg-white ${project.theme.boxBorder}` : `bg-white/40 border-transparent`}`}>
                      <p className="text-[10px] font-medium  text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="font-medium text-slate-700 text-sm">{item.title}</p>
                      <p className={`text-[11px] font-normal mt-0.5 ${item.active ? project.theme.activeText : 'text-slate-500'}`}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* CTA Box */}
            <div className="lg:w-72 flex flex-col shrink-0">
              <div className={`h-full text-white rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group/cta shadow-lg ${project.theme.ctaBox}`}>
                <div className="relative z-10">
                  <h4 className="text-2xl font-semibold mb-2">{project.ctaTitle}</h4>
                  <p className="text-white/80 font-light text-sm leading-relaxed">{project.ctaDesc}</p>
                </div>
                <button className={`relative z-10 mt-8 w-full bg-white font- text-lg py-3 rounded-full shadow-xl hover:scale-105 transition-transform active:scale-95 ${project.theme.ctaBtnText}`}>
                  DONATE NOW
                </button>
                <div className={`absolute -bottom-10 -right-10 transition-transform group-hover/cta:scale-110 duration-500 ${project.theme.ctaIconFade}`}>
                  <span className="material-symbols-outlined text-[150px]">{project.ctaIcon}</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      ))}
    </div>
  );
}