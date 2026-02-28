import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonateHero from "@/components/donate/DonateHero";
import DonateForm from "@/components/donate/DonateForm";
import DonateStats from "@/components/donate/DonateStats";

export default function DonatePage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center bg-slate-50/30">
        <div className="max-w-[1240px] w-full px-6 py-10 lg:py-20 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <DonateHero />
            <DonateForm />
          </div>
          
          <DonateStats />
        </div>
      </main>
      <Footer />
    </>
  );
}