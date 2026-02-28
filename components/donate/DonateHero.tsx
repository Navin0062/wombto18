export default function DonateHero() {
  return (
    <div className="lg:col-span-5 space-y-8">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-[var(--brand-green)] text-xs font-medium uppercase tracking-wider">
          <span className="material-symbols-outlined text-sm">verified</span>
          Government Registered NGO
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-[1.1]">
          Transform a Life <br />
          <span className="text-[var(--brand-blue)]">Save on Taxes</span>
        </h1>
        <p className="text-lg text-slate-600 font-light leading-relaxed max-w-lg">
          Join the WombTo18 Foundation in securing the future of underprivileged children. Your contribution is fully secure and tax-exempt under Section 80G.
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-3xl border border-green-100 shadow-sm relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
          <span className="material-symbols-outlined text-8xl text-[var(--brand-green)]">workspace_premium</span>
        </div>
        <div className="flex items-center gap-4 mb-4 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-[var(--brand-green)] flex items-center justify-center text-white shadow-lg shadow-green-500/20">
            <span className="material-symbols-outlined text-2xl">electric_bolt</span>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 text-lg">Instant 80G Certification</h4>
            <p className="text-xs text-slate-500 font-normal mt-0.5">Download certificate immediately after payment</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--brand-green)] font-normal relative z-10">
          <span className="material-symbols-outlined text-base">check_circle</span>
          <span>Verified Tax Exemption Portal</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 space-y-5">
        <h4 className="font-medium text-xs uppercase tracking-[0.2em] text-slate-400">Why Trust Us?</h4>
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-xl bg-blue-50">
              <span className="material-symbols-outlined text-[var(--brand-blue)] text-xl">account_balance</span>
            </div>
            <p className="text-sm text-slate-600 font-normal leading-relaxed mt-1">
              <span className="font-medium text-slate-900">Financial Transparency :</span> Real-time tracking of funds and impact audits available.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-xl bg-green-50">
              <span className="material-symbols-outlined text-[var(--brand-green)] text-xl">shield_person</span>
            </div>
            <p className="text-sm text-slate-600 font-normal leading-relaxed mt-1">
              <span className="font-medium text-slate-900">Data Protection :</span> Full DPDP Act compliance. Your personal data is encrypted.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-100 p-8 rounded-3xl relative">
        <span className="material-symbols-outlined absolute right-6 top-6 text-[var(--brand-orange)] opacity-20 text-5xl">format_quote</span>
        <p className="text-slate-700 font-normal text-sm leading-relaxed mb-6 relative z-10 italic">
          "The 80G certificate was generated instantly, and I can see exactly how my donation is helping the children in the health program."
        </p>
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBv1ne8hVRLBtGLR8Jufeu61bYvylE6kvulYW_b4-FkS1sO8YFCB72xrrMNCxpxNw2f1K0PL7yJ42fy33qWs3J8RtGFL57_-1quw_VMihX5reOZDzTjnI0spu6kOJmSHRgA_yBqyTNtmRNr1ThGHmEe4urAdVfAc150-fCXVN54q6SgVtfHfIPw5VnCvsyBkN8JK3IZPz48e8YnQof4pVvTrlpqJ0E9xTBi-ozvn7SFVpWhr244CVrbfNp2rVB6rzx1brSME2_R_Ixh")', backgroundSize: 'cover' }}></div>
          <span className="text-sm font-medium text-slate-900">Anjali K., Regular Donor</span>
        </div>
      </div>
    </div>
  );
}