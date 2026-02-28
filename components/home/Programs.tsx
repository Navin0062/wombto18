export default function Programs() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="space-y-4">
            <h2 className="text-5xl font- tracking-tight text-slate-900">Our Core Programs</h2>
            <p className="max-w-xl text-lg font-medium text-slate-600">Targeted interventions at every stage of a child's development to ensure a bright, self-sustaining future.</p>
          </div>
          <button className="group flex items-center gap-3 rounded-full bg-slate-100 px-6 py-3 font- text-slate-900 hover:bg-slate-200 transition-all">
            View All Programs
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group flex flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-2">
            <div className="aspect-video w-full bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1682003446498-199455a03e13?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-4 inline-block w-fit rounded-full bg-blue-100 px-4 py-1 text-[10px] font-medium uppercase text-blue-600">Health & Care</div>
              <h4 className="text-2xl font- text-slate-900">Prenatal & Infant Care</h4>
              <p className="mt-3 text-slate-700 font-light">Supporting expectant mothers with nutrition and medical aid.</p>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex justify-between text-xs font-normal text-slate-500 uppercase tracking-widest">
                  <span>Funded</span><span className="text-[var(--brand-blue)]">85%</span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-slate-100 p-1">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-blue-400"></div>
                </div>
              </div>
              <button className="mt-8 w-full rounded-2xl bg-blue-50 py-4 text-sm font-medium text-[var(--brand-blue)] transition-all hover:bg-[var(--brand-blue)] hover:text-white hover:shadow-lg hover:shadow-blue-500/30">
                Support This Program
              </button>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="group flex flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-2">
            <div className="aspect-video w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1692269725836-fbd72e98883f?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-4 inline-block w-fit rounded-full bg-pink-100 px-4 py-1 text-[10px] font-medium uppercase text-pink-600">Education</div>
              <h4 className="text-2xl font-normal text-slate-900">Primary Education</h4>
              <p className="mt-3 text-slate-700 font-light">Quality schooling and digital literacy for children in rural areas.</p>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex justify-between text-xs font-normal text-slate-500 uppercase tracking-widest">
                  <span>Funded</span><span className="text-[var(--brand-pink)]">62%</span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-slate-100 p-1">
                  <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-[var(--brand-pink)] to-pink-400"></div>
                </div>
              </div>
              <button className="mt-8 w-full rounded-2xl bg-pink-50 py-4 text-sm font-medium text-[var(--brand-pink)] transition-all hover:bg-[var(--brand-pink)] hover:text-white hover:shadow-lg hover:shadow-pink-500/30">
                Support This Program
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-2">
            <div className="aspect-video w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1765572144519-1dc1e6e07bc9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-4 inline-block w-fit rounded-full bg-green-100 px-4 py-1 text-[10px] font-medium uppercase text-green-600">Futures</div>
              <h4 className="text-2xl font-normal text-slate-900">Youth Mentorship</h4>
              <p className="mt-3 text-slate-700 font-light">Career counseling and skill-based training for teenagers.</p>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex justify-between text-xs font-normal text-slate-500 uppercase tracking-widest">
                  <span>Funded</span><span className="text-[var(--brand-green)]">48%</span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-slate-100 p-1">
                  <div className="h-full w-[48%] rounded-full bg-gradient-to-r from-[var(--brand-green)] to-green-400"></div>
                </div>
              </div>
              <button className="mt-8 w-full rounded-2xl bg-green-50 py-4 text-sm font-medium text-[var(--brand-green)] transition-all hover:bg-[var(--brand-green)] hover:text-white hover:shadow-lg hover:shadow-green-500/30">
                Support This Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}