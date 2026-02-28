export default function ImpactCTA() {
  return (
    <div className="mt-20 relative overflow-hidden rounded-[3rem] bg-[var(--brand-blue)] px-8 py-16 text-center text-white shadow-2xl shadow-blue-500/20">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"></path>
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-4xl font-normal mb-4">Make a Global Impact</h2>
        <p className="text-lg font-thin opacity-90 max-w-2xl mb-10">
          Whether it's providing a single meal or sponsoring a full vocational course, your contribution fuels our mission to protect and empower.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-[var(--brand-blue)] px-8 py-4 rounded-2xl font-normal hover:scale-105 transition-transform shadow-xl">
            Become a Partner
          </button>
          <button className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-normal hover:bg-white/20 transition-colors">
            View Our Impact Report
          </button>
        </div>
      </div>
    </div>
  );
}