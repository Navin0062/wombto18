export default function Newsletter() {
  return (
    <section className="mt-20 mb-10 w-full">
      <div className="bg-blue-50 rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-blue-100">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-normal mb-4 text-slate-900">Never miss an update</h2>
          <p className="text-slate-800 font-light text-lg leading-relaxed">
            Join our monthly newsletter for a curated selection of our most impactful stories and upcoming press events.
          </p>
        </div>
        <form className="w-full max-w-md flex flex-col sm:flex-row gap-4">
          <input 
            className="flex-1 rounded-2xl border-none shadow-sm bg-white px-6 py-4 text-slate-600 font-light focus:ring-2 focus:ring-[var(--brand-blue)] outline-none transition-shadow" 
            placeholder="Enter your email" 
            type="email" 
            required 
          />
          <button 
            type="submit" 
            className="bg-[var(--brand-blue)] text-white font-normal px-8 py-4 rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 hover:bg-blue-600 transition-all hover:-translate-y-1"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}