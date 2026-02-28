export default function MediaResources() {
  return (
    <section className="rounded-[3rem] bg-slate-900 p-8 lg:p-16 text-white relative overflow-hidden w-full shadow-2xl">
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-[var(--brand-blue)]/20 rounded-full blur-[100px]"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-normal mb-6">Media Resources</h2>
            <p className="text-slate-300 font-light text-lg leading-relaxed">
              Working on a story about child welfare? We've compiled everything you need for accurate reporting and high-quality assets.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-14 h-12 rounded-full bg-[var(--brand-blue)] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-white">folder_zip</span>
                  </div>
                  <div>
                    <h4 className="font-normal text-lg">Official Press Kit 2024</h4>
                    <p className="text-slate-400 font-light text-sm mt-1">Logos, boilerplate, and fact sheets (PDF/ZIP, 45MB)</p>
                  </div>
                </div>
                <button className="p-3 rounded-full bg-white/10 text-white group-hover:bg-[var(--brand-blue)] transition-colors">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>
            
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-14 h-12 rounded-full bg-[var(--brand-blue)] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-white">image</span>
                  </div>
                  <div>
                    <h4 className="font-normal text-lg">Media Gallery</h4>
                    <p className="text-slate-400 font-light text-sm mt-1">High-res photography and B-roll video library</p>
                  </div>
                </div>
                <button className="p-3 rounded-full bg-white/10 text-white group-hover:bg-[var(--brand-blue)] transition-colors">
                  <span className="material-symbols-outlined">open_in_new</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <p className="text-xs font-normal uppercase tracking-[0.2em] text-[var(--brand-blue)] mb-4">Media Inquiries</p>
            <p className="text-xl font-medium">media@wombto18.org</p>
            <p className="text-slate-400 font-normal mt-1">+1 (555) 902-3456</p>
          </div>
        </div>
        
        <div className="lg:col-span-7 flex flex-col gap-12">
          <h3 className="text-xs font-normal uppercase tracking-[0.2em] text-[var(--brand-blue)]">In the News</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 items-center justify-items-center opacity-70">
            <div className="flex flex-col items-center gap-1 group">
              <span className="text-2xl font-black text-white/80 tracking-tighter group-hover:text-white transition-colors cursor-default">
                NEWS<span className="text-[var(--brand-blue)] font-normal">GLOBE</span>
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
              <span className="text-xl font-serif italic text-white/80 group-hover:text-white transition-colors cursor-default">The Chronicle</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
              <span className="text-2xl font-bold text-white/80 group-hover:text-white transition-colors tracking-tight cursor-default">
                Vanguard<span className="text-[var(--brand-pink)]">.</span>
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
              <span className="text-lg font-mono font-bold text-white/80 group-hover:text-white transition-colors uppercase border-b-2 border-[var(--brand-green)] pb-1 cursor-default">Post Daily</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
              <span className="text-2xl font-black text-white/80 tracking-widest group-hover:text-white transition-colors cursor-default">METRO</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
              <span className="text-xl font-bold italic text-white/80 group-hover:text-white transition-colors cursor-default">WorldToday</span>
            </div>
          </div>
          
          <div className="mt-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-8 lg:p-12 relative backdrop-blur-sm">
            <span className="material-symbols-outlined absolute -top-5 -left-2 text-6xl text-[var(--brand-blue)] opacity-40">format_quote</span>
            <blockquote className="text-xl lg:text-2xl italic font-light text-slate-200 leading-relaxed mb-8 relative z-10">
              "WombTo18 is revolutionizing the way we think about long-term social impact. Their approach to cradle-to-career support is a blueprint for the future of child welfare."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-12 w-1.5 rounded-full bg-[var(--brand-blue)]"></div>
              <div>
                <cite className="not-italic font-normal text-lg text-white">James Arison</cite>
                <p className="text-sm text-[var(--brand-blue)] font-normal">Chief Editor, Social Impact Digest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}