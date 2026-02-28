export default function MissionVision() {
  return (
    <section className="grid md:grid-cols-2 gap-8 mb-24 w-full">
      <div className="group flex flex-col gap-6 p-10 rounded-[2.5rem] border border-blue-100 bg-white shadow-xl shadow-slate-200/50 relative overflow-hidden transition-transform hover:-translate-y-1">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
        <div className="bg-blue-100 text-[var(--brand-blue)] w-16 h-16 rounded-2xl flex items-center justify-center z-10">
          <span className="material-symbols-outlined text-3xl">rocket_launch</span>
        </div>
        <div className="z-10">
          <h2 className="text-3xl font-normal mb-4 text-slate-900">Our Mission</h2>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            To provide a continuous ecosystem of support—from prenatal care for mothers to vocational training for 18-year-olds—ensuring no child is left behind due to socio-economic barriers.
          </p>
        </div>
      </div>
      <div className="group flex flex-col gap-6 p-10 rounded-[2.5rem] border border-orange-100 bg-white shadow-xl shadow-slate-200/50 relative overflow-hidden transition-transform hover:-translate-y-1">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
        <div className="bg-orange-100 text-[var(--brand-orange)] w-16 h-16 rounded-2xl flex items-center justify-center z-10">
          <span className="material-symbols-outlined text-3xl">visibility</span>
        </div>
        <div className="z-10">
          <h2 className="text-3xl font-normal mb-4 text-slate-900">Our Vision</h2>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            A society where every child, regardless of their birth circumstances, has equal access to quality healthcare and education to become a self-reliant citizen.
          </p>
        </div>
      </div>
    </section>
  );
}