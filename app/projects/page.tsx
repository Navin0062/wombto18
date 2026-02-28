import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectFeed from "@/components/projects/ProjectFeed";
import TransparencyBanner from "@/components/projects/TransparencyBanner";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center bg-slate-50/50">
        <div className="max-w-[1240px] w-full px-6 py-12 lg:py-16 lg:px-12">
          <ProjectsHero />
          <ProjectFeed />
          <TransparencyBanner />
        </div>
      </main>
      <Footer />
    </>
  );
}