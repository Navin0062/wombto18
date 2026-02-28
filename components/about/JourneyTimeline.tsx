export default function JourneyTimeline() {
  const milestones = [
    { year: "2012", title: "The Inception", desc: "Founded in Mumbai with a pilot project supporting 20 expecting mothers in suburban slums with prenatal nutrition kits." },
    { year: "2015", title: "Expanding to Education", desc: "Launched our 'Early Learning' centers, providing pre-school education to 500+ children previously lacking access." },
    { year: "2019", title: "National Scale", desc: "Secured 80G and 12A registrations, enabling large-scale corporate partnerships and expansion into 3 more states." },
    { year: "Today", title: "10,000+ Success Stories", desc: "Now operating 15 centers across India, supporting youth through to vocational graduation at age 18." }
  ];

  return (
    <section className="mb-24 w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-normal mb-4 text-slate-900">Our Journey</h2>
        <div className="w-20 h-1.5 bg-[var(--brand-orange)] mx-auto rounded-full"></div>
        <p className="text-slate-600 font-normal text-lg mt-6 max-w-2xl mx-auto">
          From a humble beginning to a nationwide movement, see how we've grown over the last decade.
        </p>
      </div>
      <div className="relative max-w-5xl mx-auto">
        {/* The center line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-slate-100 rounded-full hidden md:block"></div>
        
        <div className="space-y-12">
          {milestones.map((item, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* The dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--brand-orange)] border-4 border-slate-50 shadow-sm hidden md:block z-10"></div>
              
              <div className={`md:w-1/2 mb-4 md:mb-0 ${idx % 2 !== 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                <span className="text-[var(--brand-orange)] font-medium text-3xl">{item.year}</span>
              </div>
              
              <div className={`md:w-1/2 ${idx % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 transition-transform hover:-translate-y-1">
                  <h3 className="text-xl font-normal mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-900 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}