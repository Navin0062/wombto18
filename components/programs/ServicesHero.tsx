export default function ServicesHero() {
  return (
    <div className="w-full">
      <div className="mb-12">
        <span className="text-[var(--brand-blue)] font-medium tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full">
          Foundation Pillar
        </span>
        <h1 className="text-slate-900 text-5xl font-normal leading-tight tracking-tight mt-4">
          Our Welfare Services
        </h1>
        <p className="text-slate-600 text-xl font-light leading-relaxed mt-4 max-w-3xl">
          Comprehensive care modules designed to support every developmental stage, ensuring every child transitions from birth to adulthood with dignity and opportunity.
        </p>
      </div>

      <div className="flex border-b border-blue-100 mb-12 gap-8 overflow-x-auto scrollbar-hide">
        <button className="flex items-center gap-2 border-b-2 border-[var(--brand-blue)] text-[var(--brand-blue)] pb-4 font-normal whitespace-nowrap">
          <span className="material-symbols-outlined text-xl">grid_view</span> All Services
        </button>
        <button className="flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-[var(--brand-blue)] pb-4 font-normal transition-all whitespace-nowrap">
          <span className="material-symbols-outlined text-xl">medical_services</span> Healthcare
        </button>
        <button className="flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-[var(--brand-blue)] pb-4 font-normal transition-all whitespace-nowrap">
          <span className="material-symbols-outlined text-xl">school</span> Education
        </button>
        <button className="flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-[var(--brand-blue)] pb-4 font-normal transition-all whitespace-nowrap">
          <span className="material-symbols-outlined text-xl">nutrition</span> Nutrition
        </button>
        <button className="flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-[var(--brand-blue)] pb-4 font-normal transition-all whitespace-nowrap">
          <span className="material-symbols-outlined text-xl">psychology</span> Skill Development
        </button>
      </div>
    </div>
  );
}