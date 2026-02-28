export default function AboutHero() {
  return (
    <section className="mb-16 w-full">
      <div 
        className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-[2.5rem] min-h-[450px] relative shadow-xl" 
        style={{ backgroundImage: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.2) 70%), url("https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
      >
        <div className="p-8 md:p-12 max-w-3xl relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[var(--brand-orange)] text-white text-xs font-medium rounded-full mb-6 uppercase tracking-widest shadow-lg shadow-orange-500/30">
            About Our Foundation
          </span>
          <h1 className="text-white tracking-tight text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
            Empowering Every Child's Journey from Birth to Adulthood
          </h1>
          <p className="text-slate-200 text-xl font-light leading-relaxed">
            WombTo18 Foundation is dedicated to bridging the gap in healthcare and education for underprivileged children during their most critical formative years.
          </p>
        </div>
      </div>
    </section>
  );
}