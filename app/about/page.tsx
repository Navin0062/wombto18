import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import Leadership from "@/components/about/Leadership";
import Compliance from "@/components/about/Compliance";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center bg-slate-50/50">
        <div className="max-w-[1200px] w-full px-6 py-16 lg:px-12 flex flex-col items-center">
          <AboutHero />
          <MissionVision />
          <JourneyTimeline />
          <Leadership />
          <Compliance />
        </div>
      </main>
      <Footer />
    </>
  );
}