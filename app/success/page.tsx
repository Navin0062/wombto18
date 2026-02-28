import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SuccessCard from "@/components/success/SuccessCard";
import Link from "next/link";

export default function SuccessPage() {
  // Inline style for the background dotted confetti pattern
  const confettiStyle = {
    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
    backgroundSize: '24px 24px'
  };

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 lg:py-24 relative bg-slate-50/50 min-h-[80vh]">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none" style={confettiStyle}></div>
        
        {/* Main Card Component */}
        <SuccessCard />

        {/* Bottom Action Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 relative z-10">
          <button className="flex items-center gap-2 text-slate-500 hover:text-[var(--brand-blue)] transition-colors text-sm font-normal uppercase tracking-widest">
            <span className="material-symbols-outlined text-xl">share</span>
            Share Impact
          </button>
          
          <button className="flex items-center gap-2 text-slate-500 hover:text-[var(--brand-blue)] transition-colors text-sm font-normal uppercase tracking-widest">
            <span className="material-symbols-outlined text-xl">print</span>
            Print Receipt
          </button>
          
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-[var(--brand-blue)] transition-colors text-sm font-normal uppercase tracking-widest">
            <span className="material-symbols-outlined text-xl">home</span>
            Back to Home
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}