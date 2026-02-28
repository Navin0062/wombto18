export default function SuccessCard() {
  return (
    <div className="max-w-4xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-blue-500/10 overflow-hidden relative z-10 border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side: Image & Quote */}
        <div className="relative h-64 md:h-full min-h-[450px]">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617350033070-f16e86872d78?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGluZGlhbiUyMHBvb3IlMjBraWR8ZW58MHx8MHx8fDA%3D")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-blue)]/80 via-[var(--brand-blue)]/20 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/20 backdrop-blur-md p-5 rounded-2xl border border-white/30 shadow-lg">
              <p className="text-white text-lg font-normal italic leading-snug">
                "Because of you, I can dream of becoming a teacher."
              </p>
              <p className="text-white/90 font-normal text-sm mt-2">- Anjali, Grade 4</p>
            </div>
          </div>
        </div>

        {/* Right Side: Details & Actions */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-[var(--brand-green)] text-4xl">check_circle</span>
            <h1 className="text-3xl font-medium tracking-tight text-slate-900">Success!</h1>
          </div>
          
          <p className="text-slate-600 font-normal text-lg mb-8 leading-relaxed">
            Thank you for your generous contribution. Your support empowers children with education and healthcare essentials.
          </p>

          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-medium text-[var(--brand-blue)] mb-1">Donor ID</p>
                <p className="text-2xl font-normal text-slate-900 tracking-tight">W2D-749201</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[var(--brand-blue)]">
                <span className="material-symbols-outlined">badge</span>
              </div>
            </div>

            <button className="w-full flex items-center justify-between p-5 bg-slate-900 text-white rounded-2xl hover:bg-[var(--brand-blue)] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 group">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white/70 group-hover:text-white">description</span>
                <span className="font-normal text-lg">Download 80G/12A Certificate</span>
              </div>
              <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">download</span>
            </button>
          </div>

          <div className="flex gap-4 p-5 bg-yellow-50 border border-yellow-100 rounded-2xl mb-8">
            <span className="material-symbols-outlined text-[var(--brand-yellow)] text-2xl">notifications_active</span>
            <div>
              <p className="font-medium text-slate-900 text-sm mb-1">Progress Report Update</p>
              <p className="text-slate-600 font-normal text-sm leading-relaxed">Your first personalized impact report will arrive in your inbox in 7 days.</p>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 bg-cover shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBt83Vn781j7Zo0rccaa3dr57ntP49ngIj7DlaZYKkmcb0xCRK-bDvcB0pHeNQL7t_uUcwcyddG9b0-cBR_vUl9PRU2Akp6vbBxymhRYZyhgKtC3mhpChWfIw2IXX4A2ovHBVJ7OgordDcPcZrVFpsYsnZ1-Jfgvmfbr7XpAgvjpYut00l1mXVugFu2vl95DOH3Z8TWMgFX5HQ7ONv_RLs2RJLyy7QFjfNU8PW_wWVrsYCoYrsVhRmydOKguin7KoJ2qomIKE0kfw_C")' }}></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 bg-cover shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMfPUFtr-t4NkNvqPqOwG18P3UZQ-3vFqItV0ZvKVF6Ge7U-1JGV1BCizUe9Ms7NuypJ33ejeQB1qV2ErCulQqccgk77I1_cICrL-D_6gDU3cPhnnE2Hw4ZwmyB-P4jsR3JJDtoosFkkonzKbCK8hb2lShGXwayNSd_q7eGZ7_0EaJGDKj5TOKIEoVNrpxhMGKb1oxehjRrbqLRSPObRbYpsHVl4JtRcvFlNvxRYWZFRWWE_o2syrmxQMXDlrzJG2vZb5YtuDUpdXi")' }}></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-normal text-slate-500 shadow-sm">+12k</div>
            </div>
            <p className="text-xs text-slate-500 font-normal uppercase tracking-wider text-right max-w-[120px]">
              Joined <span className="text-[var(--brand-blue)]">12,400+</span> active donors this month
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}