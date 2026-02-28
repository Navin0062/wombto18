import Link from "next/link";

export default function DonateForm() {
  return (
    <div className="lg:col-span-7">
      <div className="bg-white shadow-2xl shadow-blue-500/10 rounded-[2.5rem] border border-slate-100 overflow-hidden">
        {/* Top Color Bar */}
        <div className="h-2 w-full flex">
          <div className="h-full w-1/3 bg-[var(--brand-blue)]"></div>
          <div className="h-full w-1/3 bg-[var(--brand-green)]"></div>
          <div className="h-full w-1/3 bg-[var(--brand-yellow)]"></div>
        </div>
        
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h3 className="text-2xl font-medium text-slate-900">Donation Details</h3>
            <p className="text-xs text-slate-500 font-normal mt-1">
              All fields marked with <span className="text-[var(--brand-pink)]">*</span> are mandatory for 80G
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-green-50 text-[var(--brand-green)] border border-green-100">
            <span className="material-symbols-outlined text-lg">verified_user</span>
            <span className="text-[10px] font-medium uppercase tracking-widest">PCI-DSS Secure</span>
          </div>
        </div>

        <form className="p-8 space-y-8">
          {/* Amount Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-4">Select Donation Amount</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <button type="button" className="py-3 px-4 border-2 border-[var(--brand-blue)] bg-blue-50 rounded-2xl text-[var(--brand-blue)] font-normal text-lg transition-all">
                ₹500
              </button>
              <button type="button" className="py-3 px-4 border-2 border-slate-100 rounded-2xl text-slate-600 font-normal text-lg hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-all">
                ₹1000
              </button>
              <button type="button" className="py-3 px-4 border-2 border-slate-100 rounded-2xl text-slate-600 font-normal text-lg hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-all">
                ₹5000
              </button>
              <button type="button" className="py-3 px-4 border-2 border-slate-100 rounded-2xl text-slate-600 font-normal text-lg hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-all">
                Custom
              </button>
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal text-lg">₹</span>
              <input 
                className="w-full pl-10 pr-4 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-[var(--brand-blue)] focus:ring-0 transition-all outline-none font-normal text-lg text-slate-900" 
                placeholder="Enter other amount" 
                required 
                type="number" 
              />
            </div>
          </div>

          {/* Cause Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-3" htmlFor="project">
              Choose a Cause <span className="text-[var(--brand-pink)]">*</span>
            </label>
            <select 
              className="w-full px-4 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 text-slate-900 focus:border-[var(--brand-blue)] focus:ring-0 transition-all font-normal appearance-none outline-none" 
              id="project" 
              required
            >
              <option value="general">General Fund (Most Urgent Need)</option>
              <option value="health">Newborn Healthcare & Nutrition</option>
              <option value="education">Primary & Secondary Education</option>
              <option value="vocational">Vocational Training for Young Adults</option>
            </select>
          </div>

          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-medium uppercase tracking-widest text-slate-500">
                Full Name <span className="text-[var(--brand-pink)]">*</span>
              </label>
              <input 
                className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-normal focus:border-[var(--brand-blue)] focus:ring-0 outline-none transition-all" 
                placeholder="Enter your full name" 
                required 
                type="text" 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-medium uppercase tracking-widest text-slate-500">
                Email Address <span className="text-[var(--brand-pink)]">*</span>
              </label>
              <input 
                className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-normal focus:border-[var(--brand-blue)] focus:ring-0 outline-none transition-all" 
                placeholder="email@example.com" 
                required 
                type="email" 
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-medium uppercase tracking-widest text-slate-500">
                Mobile Number <span className="text-[var(--brand-pink)]">*</span>
              </label>
              <input 
                className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-normal focus:border-[var(--brand-blue)] focus:ring-0 outline-none transition-all" 
                placeholder="+91 XXXXX XXXXX" 
                required 
                type="tel" 
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <label className="block text-[10px] font-medium uppercase tracking-widest text-slate-500">
                  PAN Card Number <span className="text-[var(--brand-pink)]">*</span>
                </label>
                {/* Pure Tailwind Tooltip */}
                <div className="group relative flex items-center">
                  <span className="material-symbols-outlined text-[16px] text-[var(--brand-blue)] cursor-help">info</span>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-slate-800 text-white text-xs font-normal rounded-xl text-center shadow-xl z-20">
                    Essential for issuing your 80G Tax Exemption Certificate as per IT regulations.
                  </div>
                </div>
              </div>
              <input 
                className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-100 bg-slate-50 text-slate-900 font-normal focus:border-[var(--brand-blue)] focus:ring-0 outline-none transition-all uppercase placeholder:normal-case" 
                placeholder="ABCDE1234F" 
                required 
                type="text" 
              />
            </div>
          </div>

          {/* Consents */}
          <div className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-[var(--brand-orange)]">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Publicly display my name</p>
                  <p className="text-xs font-normal text-slate-500 mt-0.5">Join our digital Donor Wall of Fame</p>
                </div>
              </div>
              {/* Pure Tailwind Toggle Switch */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-14 h-7 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[var(--brand-green)]"></div>
              </label>
            </div>
            
            <label className="flex items-start gap-4 cursor-pointer group">
              <input 
                checked 
                className="mt-1 w-5 h-5 rounded text-[var(--brand-green)] focus:ring-[var(--brand-green)] border-slate-300" 
                required 
                type="checkbox" 
                readOnly
              />
              <span className="text-sm font-normal text-slate-600 leading-relaxed">
                I agree to the <a className="text-[var(--brand-blue)] font-medium hover:underline" href="#">DPDP Act compliance</a> and terms of data processing. I understand my data is stored securely.
              </span>
            </label>
          </div>

          {/* Submit Action */}
          <div className="pt-4">
            <Link href="/success" className="w-full bg-[var(--brand-blue)] text-white py-5 rounded-2xl font-normal text-xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex flex-col items-center justify-center gap-1 group">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl">lock_person</span>
                Proceed to Secure Payment
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-light text-blue-200 group-hover:text-white transition-colors">
                Instant 80G Certificate Generation
              </span>
            </Link>
            
            <div className="mt-8 flex flex-col items-center gap-6">
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-2xl text-slate-500">credit_card</span>
                  <span className="text-[9px] font-medium uppercase tracking-widest text-slate-500">Cards</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-2xl text-slate-500">qr_code_2</span>
                  <span className="text-[9px] font-medium uppercase tracking-widest text-slate-500">UPI</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-2xl text-slate-500">account_balance</span>
                  <span className="text-[9px] font-medium uppercase tracking-widest text-slate-500">Net Banking</span>
                </div>
              </div>
              <div className="flex gap-6 text-[11px] font-normal text-slate-400 uppercase tracking-widest">
                <a className="hover:text-[var(--brand-blue)] transition-colors underline decoration-slate-300 underline-offset-4" href="#">Refund Policy</a>
                <span className="text-slate-300">•</span>
                <a className="hover:text-[var(--brand-blue)] transition-colors underline decoration-slate-300 underline-offset-4" href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}