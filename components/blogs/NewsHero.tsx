export default function NewsHero() {
  return (
    <section className="mb-16 w-full">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-4xl lg:text-5xl font-normal mb-4 text-slate-900">News & Media Center</h1>
          <p className="text-lg text-slate-600 max-w-2xl font-normal">
            Your destination for the latest stories from the field, official press releases, and media resources for the WombTo18 Foundation.
          </p>
        </div>
        
        <div className="relative group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-blue-500/10 border border-slate-100 transition-transform hover:-translate-y-1 duration-300">
            <div className="h-[400px] lg:h-[500px] relative overflow-hidden bg-slate-100">
              <img 
                alt="Children in classroom" 
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              />
            </div>
            <div className="p-8 lg:p-16 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-3">
                <span className="bg-[var(--brand-blue)] px-4 py-1.5 text-[10px] font-medium text-white rounded-full uppercase tracking-widest shadow-md shadow-blue-500/30">
                  Featured Story
                </span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">October 28, 2023</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-normal leading-tight text-slate-900">
                Empowering Rural Youth Through Digital Literacy
              </h2>
              <p className="text-lg text-slate-600 font-normal leading-relaxed">
                Our new initiative is bringing high-speed connectivity and digital learning tools to over 50 schools across the region.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <button className="rounded-full bg-[var(--brand-blue)] px-8 py-4 text-base font-normal text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2 group/btn">
                  Read Story 
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <button className="w-12 h-1.5 rounded-full bg-[var(--brand-blue)] transition-all"></button>
            <button className="w-12 h-1.5 rounded-full bg-slate-200 hover:bg-blue-300 transition-colors"></button>
            <button className="w-12 h-1.5 rounded-full bg-slate-200 hover:bg-blue-300 transition-colors"></button>
          </div>
        </div>
      </div>
    </section>
  );
}