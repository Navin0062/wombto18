export default function Leadership() {
  const leaders = [
    { name: "Dr. Elena Sharma", role: "Founder & Executive Director", desc: "A pediatrician with 15 years of experience in public health, Dr. Sharma founded the organization with a vision to integrate healthcare and education.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxKCOiTOoNw-P46--k8lkVOVC19_k3VdeMEEIAVC7LKVdaZVpQEF5LO5KfpEanjPwIZW8pDglaiO_LecU5fMYI5tQ6uFnKy9XFAkJG1ZNulQRwol2dqe24q4ALwpoejnGLzHLnccLOq86TDr9mtLvGmaAacZbstrkBGAb5ZMiBSzGsGInp_3VGIbCYN9aAJr03UNT7aIBKJQQEGmFga0jcckUPapKs4vnX_RiKEU-fLx6-HMKYd-_RYjmGxsyUPg2C52wOnHdyyoo4" },
    { name: "Marcus Thorne", role: "Chief Strategy Officer", desc: "Formerly a corporate consultant, Marcus brings operational excellence and data-driven impact assessment to our nationwide programs.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaHWvjAuR5N2Py7nscQfQ5y2GiBe0er8J4LbFZ5vdV9RQtNN7VVVDEb9VcZfWuVoXQQPQZm2nf7TqXmRNcf-Srg1IodXwW42GOO5drehtIHhuMqW1HC4scYerURgFFZYDx943xzUVU1AxlSXWVXYU1N_TAPNKTbKepSrvIL8POiXzWaTnZyUEFIR-MVf4PDc9ilTnwDELg9_G1mB5mMCsVkNhOiVEBF0K6IFpfk0uNo3AaKJi0k6-lEg-we-yJFKhB5lPjdNlT1wW0" },
    { name: "Sarah Jenkins", role: "Head of Advocacy", desc: "Sarah leads our community engagement initiatives and works closely with local governments to ensure policy-level support for child welfare.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNAnGkoL--gmJlQN_YgmV-TSOzSjXQ1zAqUPOggph-e9ETSghxrTGQh-VtsaS1tX_azihNlr2BqDbc6mtlc-1kE7atiDV3aSSQAXGplWKCjjmng7-WBkUWKC9j0OkHtFU_ffNDBuI53elu7fEJgOlBy5YjiAreEtF_8QuN6aPWEvPDl4n1Rrb1L3LuAvUicVaPk1K-e9_oqLXBkLJ5G0BjlJ5JpBEYkH15gPUk9fISbq6c2cN40vrDpaV_Geb3q4tLDiXB5X2-SVkf" },
  ];

  return (
    <section className="mb-24 w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-normal mb-4 text-slate-900">Our Leadership</h2>
        <div className="w-20 h-1.5 bg-[var(--brand-blue)] mx-auto rounded-full"></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {leaders.map((leader, idx) => (
          <div key={idx} className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <div className="h-80 bg-slate-200 overflow-hidden relative" style={{ backgroundImage: `url("${leader.img}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-[var(--brand-blue)]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[var(--brand-blue)] hover:bg-blue-50 transition-colors shadow-lg">
                  <span className="material-symbols-outlined text-xl">share</span>
                </button>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-normal mb-1 text-slate-900">{leader.name}</h3>
              <p className="text-[var(--brand-orange)] font-normal text-xs mb-4 uppercase tracking-widest">{leader.role}</p>
              <p className="text-slate-600 font-light text-sm leading-relaxed">{leader.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}