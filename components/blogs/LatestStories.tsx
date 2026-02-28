export default function LatestStories() {
  const stories = [
    {
      badge: "Community", badgeColor: "blue",
      title: "Nutrition Programs Reach New Milestone in Q3",
      excerpt: "Over 10,000 warm meals were served to students in rural districts this quarter as part of our 'Healthy Start' initiative.",
      date: "Oct 24, 2023",
      image: "https://www.reliefindiatrust.org/wp-content/uploads/2020/03/food-1200x800.jpg"
    },
    {
      badge: "Mentorship", badgeColor: "green",
      title: "Volunteer Spotlight: Sarah's Mentorship Journey",
      excerpt: "Discover how one volunteer's commitment is changing lives through literacy and emotional support for teens.",
      date: "Oct 20, 2023",
      image: "https://aim.gov.in/images/mentor-img5.jpg"
    },
    {
      badge: "News", badgeColor: "orange",
      title: "Annual Impact Report 2023 Released",
      excerpt: "Explore the full data on our programs, financial transparency, and our roadmap for the coming decade.",
      date: "Oct 15, 2023",
      image: "https://plus.unsplash.com/premium_photo-1682092669026-48734b737083?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section className="mb-24 w-full mt-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-slate-100 pb-6">
        <div>
          <h2 className="text-3xl font-normal text-slate-900">Latest Stories</h2>
          <p className="text-slate-500 font-normal mt-2">Updates from our programs and community members.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button className="shrink-0 rounded-full bg-[var(--brand-blue)] px-6 py-2 text-sm font-normal text-white shadow-md shadow-blue-500/20">All News</button>
          <button className="shrink-0 rounded-full bg-slate-100 px-6 py-2 text-sm font-normal text-slate-600 hover:bg-blue-50 hover:text-[var(--brand-blue)] transition-colors">Education</button>
          <button className="shrink-0 rounded-full bg-slate-100 px-6 py-2 text-sm font-normal text-slate-600 hover:bg-blue-50 hover:text-[var(--brand-blue)] transition-colors">Health</button>
          <button className="shrink-0 rounded-full bg-slate-100 px-6 py-2 text-sm font-normal text-slate-600 hover:bg-blue-50 hover:text-[var(--brand-blue)] transition-colors">Press Releases</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, idx) => (
          <article key={idx} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col hover:-translate-y-1">
            <div className="aspect-[16/10] overflow-hidden relative bg-slate-50">
              <img 
                alt={story.title} 
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src={story.image} 
              />
              <span className={`absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 text-[10px] font-medium tracking-widest text-[var(--brand-${story.badgeColor})] rounded-full uppercase shadow-sm`}>
                {story.badge}
              </span>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-medium text-slate-900 mb-3 group-hover:text-[var(--brand-blue)] transition-colors line-clamp-2">
                {story.title}
              </h3>
              <p className="text-slate-500 font-normal text-sm line-clamp-3 mb-6 leading-relaxed">
                {story.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2 text-xs font-normal text-slate-400 uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  {story.date}
                </div>
                <button className="text-sm font-medium text-[var(--brand-blue)] flex items-center gap-1 group/link">
                  Read More <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-16 text-center">
        <button className="rounded-full border-2 border-slate-200 px-8 py-3 text-sm font-normal text-slate-600 hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-colors">
          Load More Stories
        </button>
      </div>
    </section>
  );
}