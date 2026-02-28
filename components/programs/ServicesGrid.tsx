export default function ServicesGrid() {
  const services = [
    {
      title: "Maternal & Neonatal Support",
      desc: "Safe deliveries and postnatal checkups for underprivileged mothers, ensuring a healthy foundation for both parent and child.",
      category: "Healthcare",
      catIcon: "health_and_safety",
      metricLabel: "Lives Impacted",
      metricValue: "500+ Vaccinated",
      metricIcon: "verified_user",
      btnText: "Support Healthcare",
      btnIcon: "volunteer_activism",
      image: "https://www.shutterstock.com/shutterstock/photos/2249870971/display_1500/stock-photo-young-woman-doctor-checking-blood-pressure-to-rural-woman-at-clinic-2249870971.jpg",
      styles: {
        catBg: "bg-pink-100", catText: "text-pink-600",
        metricBg: "bg-pink-50", metricBorder: "border-pink-100", metricIconColor: "text-pink-300",
        btn: "bg-pink-600 hover:bg-pink-700"
      }
    },
    {
      title: "Early Learning Centers",
      desc: "Quality early education programs that bridge the literacy gap and foster cognitive development in rural communities.",
      category: "Education",
      catIcon: "school",
      metricLabel: "Active Enrollment",
      metricValue: "1,200+ Students",
      metricIcon: "auto_stories",
      btnText: "Sponsor a Student",
      btnIcon: "local_library",
      image: "https://plus.unsplash.com/premium_photo-1769893363231-60295b7a16b8?q=80&w=1726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      styles: {
        catBg: "bg-blue-100", catText: "text-blue-600",
        metricBg: "bg-blue-50", metricBorder: "border-blue-100", metricIconColor: "text-blue-300",
        btn: "bg-[var(--brand-blue)] hover:bg-blue-600"
      }
    },
    {
      title: "Zero Hunger Initiative",
      desc: "Providing daily nutrient-rich meals and supplements to combat childhood stunting and nutritional deficiencies.",
      category: "Nutrition",
      catIcon: "restaurant",
      metricLabel: "Meals Served",
      metricValue: "45k+ Monthly",
      metricIcon: "spa",
      btnText: "Fund Nutrition",
      btnIcon: "favorite",
      image: "https://images.unsplash.com/photo-1694886322023-0b0c4283f3f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      styles: {
        catBg: "bg-green-100", catText: "text-[var(--brand-green)]",
        metricBg: "bg-green-50", metricBorder: "border-green-100", metricIconColor: "text-green-300",
        btn: "bg-[var(--brand-green)] hover:bg-green-600"
      }
    },
    {
      title: "Future-Ready Skills",
      desc: "Vocational training and digital literacy workshops that empower adolescents to enter the modern workforce.",
      category: "Skill Development",
      catIcon: "terminal",
      metricLabel: "Job Ready",
      metricValue: "300+ Certified",
      metricIcon: "psychology",
      btnText: "Support Skills Training",
      btnIcon: "star",
      image: "https://images.unsplash.com/photo-1623303366639-0e330d7c3d9f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      styles: {
        catBg: "bg-purple-100", catText: "text-[var(--brand-purple)]",
        metricBg: "bg-purple-50", metricBorder: "border-purple-100", metricIconColor: "text-purple-300",
        btn: "bg-[var(--brand-purple)] hover:bg-purple-600"
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {services.map((service, idx) => (
        <div key={idx} className="group bg-white rounded-3xl border border-slate-100 p-8 flex flex-col hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-50">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                alt={service.title} 
                src={service.image} 
              />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-1 rounded-full ${service.styles.catBg} ${service.styles.catText}`}>
                  <span className="material-symbols-outlined text-sm">{service.catIcon}</span>
                </div>
                <span className={`text-xs font-medium uppercase tracking-wider ${service.styles.catText}`}>
                  {service.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-normal text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-900 text-sm font-light leading-relaxed mb-6">
                {service.desc}
              </p>
              
              <div className={`rounded-2xl p-4 mb-6 flex items-center justify-between border ${service.styles.metricBg} ${service.styles.metricBorder}`}>
                <div>
                  <p className={`text-[10px] uppercase font-normal tracking-widest opacity-70 ${service.styles.catText}`}>
                    {service.metricLabel}
                  </p>
                  <p className={`text-2xl font-normal ${service.styles.catText}`}>
                    {service.metricValue}
                  </p>
                </div>
                <span className={`material-symbols-outlined text-4xl ${service.styles.metricIconColor}`}>
                  {service.metricIcon}
                </span>
              </div>
              
              <button className={`mt-auto w-full text-white font-normal py-4 px-6 rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${service.styles.btn}`}>
                <span className="material-symbols-outlined text-md">{service.btnIcon}</span>
                {service.btnText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}