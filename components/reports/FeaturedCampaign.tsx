export default function FeaturedCampaign() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 mb-10 transition-transform hover:-translate-y-1 duration-300">
      <div className="flex flex-col md:flex-row">
        <div 
          className="w-full md:w-2/5 h-64 md:h-auto bg-center bg-cover" 
          style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1344025665/photo/teacher-distributing-healthy-meal-to-students-in-classroom.jpg?s=1024x1024&w=is&k=20&c=NQ5lIyg4mWNFhcZGIjWSvNYeI1y4Sr7NTH6bEHivr8g=")' }}
        ></div>
        <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-50 text-[var(--brand-green)] text-[10px] font-medium uppercase tracking-widest mb-4 w-fit border border-green-100">
            Active Campaign
          </div>
          <h2 className="text-3xl font-normal mb-4 text-slate-900">Rural Nutrition Drive</h2>
          <p className="text-slate-600 font-normal mb-8 leading-relaxed text-lg">
            Our mission this week focused on providing balanced nutritional kits to children in the 
            <span className="font-medium text-slate-900"> Solapur District</span>. 
            We've successfully reached 3 new villages in the last 7 days.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <button className="bg-[var(--brand-green)] text-white px-8 py-3.5 rounded-full font-normal hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">description</span>
              View Full Project Details
            </button>
            <div className="flex items-center gap-2 text-slate-500">
              <span className="material-symbols-outlined text-[var(--brand-green)]">location_on</span>
              <span className="text-sm font-normal uppercase tracking-wider">Solapur, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}