export default function HighlightsGallery() {
  const highlights = [
    { title: "Distribution Hub", date: "Oct 24, 2024", img: "https://images.unsplash.com/photo-1512403762066-73452496b7db?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Healthy Starts", date: "Oct 26, 2024", img: "https://images.unsplash.com/photo-1763368403529-0b8d9108cf9c?q=80&w=2154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Health Literacy", date: "Oct 27, 2024", img: "https://images.unsplash.com/photo-1623863568368-69e4cbe6cc0b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Community Joy", date: "Oct 28, 2024", img: "https://thumbs.dreamstime.com/b/happy-rural-indian-kids-expressing-their-joy-happiness-very-remote-jungle-village-india-58057120.jpg" }
  ];

  return (
    <div className="mb-12 mt-16">
      <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-normal text-slate-900">This Week's Highlights</h2>
        <button className="text-[var(--brand-green)] font-medium text-sm flex items-center gap-1 hover:underline">
          View Gallery <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, idx) => (
          <div key={idx} className="group relative aspect-square rounded-[2rem] overflow-hidden bg-slate-100 shadow-md">
            <img 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src={item.img} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <p className="text-white text-lg font-normal mb-1">{item.title}</p>
              <p className="text-white/70 text-[10px] font-medium uppercase tracking-widest">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}