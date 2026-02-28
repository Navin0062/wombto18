export default function Hero() {
  return (
    <>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] top-[5%] h-96 w-96 rounded-full bg-[var(--brand-blue)] bg-blob"></div>
        <div className="absolute -right-[5%] top-[20%] h-[500px] w-[500px] rounded-full bg-[var(--brand-pink)] bg-blob"></div>
        <div className="absolute left-[30%] top-[60%] h-80 w-80 rounded-full bg-[var(--brand-yellow)] bg-blob"></div>
        <div className="absolute right-[10%] bottom-[5%] h-[400px] w-[400px] rounded-full bg-[var(--brand-green)] bg-blob"></div>
      </div>
      <section className="relative w-full py-16 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:px-12">
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-xs font-medium uppercase tracking-widest text-blue-600">
              <span className="material-symbols-outlined text-sm">verified</span>
              80G & 12A Certified NGO
            </div>
            <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-slate-900 lg:text-7xl">
              Empowering <br />Every Child from <br />
              <span className="relative">
                <span className="relative z-10 text-[var(--brand-blue)]">Womb</span>
                <span className="absolute bottom-1 left-0 h-4 w-full bg-blue-100 -z-10"></span>
              </span>{" "}
              to{" "}
              <span className="relative">
                <span className="relative z-10 text-[var(--brand-pink)]">18</span>
                <span className="absolute bottom-1 left-0 h-4 w-full bg-pink-100 -z-10"></span>
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl font-thin leading-relaxed text-slate-900 lg:mx-0">
              Breaking the cycle of poverty through holistic support. We provide nutrition for expectant mothers, early education, and career guidance for teenagers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              <button className="h-16 rounded-2xl bg-[var(--brand-blue)] px-8 text-lg font-normal text-white shadow-2xl shadow-blue-500/40 transition-all hover:scale-105 hover:bg-blue-600">
                Start Monthly Giving
              </button>
              <button className="flex h-16 items-center gap-3 rounded-2xl bg-white px-8 text-lg font-normal text-slate-900 shadow-xl ring-1 ring-slate-100 transition-all hover:scale-105 hover:shadow-2xl">
                <span className="material-symbols-outlined text-[var(--brand-pink)] text-3xl">play_circle</span>
                See Our Impact
              </button>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative z-10 aspect-square w-full max-w-lg overflow-hidden rounded-[3rem] bg-slate-200 shadow-2xl ring-[12px] ring-white">
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1682786308110-fab1fe5e9446?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}></div>
            </div>
            <div className="absolute -bottom-10 -left-10 z-20 flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-2xl border-b-4 border-r-4 border-[var(--brand-green)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                  <span className="material-symbols-outlined">shield_with_heart</span>
                </div>
                <div>
                  <p className="text-[10px] font-normal text-slate-400 uppercase tracking-widest">Trust Index</p>
                  <p className="font-medium text-slate-900">100% Transparency</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-8 -top-8 z-20 rounded-[2.5rem] bg-[var(--brand-yellow)] p-8 text-white shadow-2xl rotate-6 hover:rotate-0 transition-transform cursor-default">
              <p className="text-4xl font-medium">15k+</p>
              <p className="text-xs font-normal uppercase tracking-widest opacity-90">Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}