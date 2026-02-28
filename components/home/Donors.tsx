export default function Donors() {
  const donors = [
    { name: "Rahul Sharma", initials: "RS", color: "blue" },
    { name: "W2D-492102", initials: "W2D", color: "blue" },
    { name: "Priya Mehta", initials: "PM", color: "green" },
    { name: "W2D-882194", initials: "W2D", color: "blue" },
    { name: "Anil Kumar", initials: "AK", color: "orange" },
    { name: "W2D-001229", initials: "W2D", color: "blue" },
    { name: "Sonia V.", initials: "SV", color: "purple" },
  ];

  return (
    <section className="w-full bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-normal text-slate-900 mb-4">Our Generous Donors</h2>
        <p className="text-lg text-slate-500 font-normal mb-12">
          Every drop makes an ocean. Thank you for your support.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {donors.map((donor, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-sm border border-slate-100 transition-transform hover:-translate-y-1"
            >
              <div 
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-${donor.color}-100 text-xs font-normal text-${donor.color}-700`}
              >
                {donor.initials}
              </div>
              <span className="font-normal text-slate-900">{donor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}