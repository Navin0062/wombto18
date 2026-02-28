import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/programs/ServicesHero";
import ServicesGrid from "@/components/programs/ServicesGrid";
import ImpactCTA from "@/components/programs/ImpactCTA";

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center bg-slate-50/50">
        <div className="max-w-[1200px] w-full px-6 py-16 lg:px-12">
          <ServicesHero />
          <ServicesGrid />
          <ImpactCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}