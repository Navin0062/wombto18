import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TransparencyHero from "@/components/transparency/TransparencyHero";
import FundsOverview from "@/components/transparency/FundsOverview";
import ImpactReportsGrid from "@/components/transparency/ImpactReportsGrid";
import AutomatedReporting from "@/components/transparency/AutomatedReporting";

export default function TransparencyPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center bg-slate-50/50">
        <div className="max-w-[1300px] w-full px-6 py-16 lg:px-12">
          
          <TransparencyHero />
          <FundsOverview />
          <ImpactReportsGrid />
          <AutomatedReporting />
          
          {/* Trust Footer Row */}
          <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-200">
            <div className="flex items-center gap-5 text-slate-500 max-w-lg">
              <div className="bg-blue-50 p-4 rounded-full">
                <span className="material-symbols-outlined text-[var(--brand-blue)] text-3xl">security</span>
              </div>
              <p className="text-sm font-normal leading-relaxed">
                WombTo18 Foundation is a registered Section 8 non-profit organization. All donations are secure and encrypted. Transparency is our core value.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-200 text-slate-700 font-normal hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-colors">
                <span className="material-symbols-outlined text-lg">contact_support</span>
                <span>Audit Questions?</span>
              </button>
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-[var(--brand-blue)] text-white font-normal shadow-xl shadow-blue-500/30 hover:-translate-y-1 hover:shadow-2xl transition-all">
                <span>Start Giving Monthly </span>
              </button>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}