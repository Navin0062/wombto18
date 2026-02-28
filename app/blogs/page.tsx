import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsHero from "@/components/blogs/NewsHero";
import LatestStories from "@/components/blogs/LatestStories";
import MediaResources from "@/components/blogs/MediaResources";
import Newsletter from "@/components/blogs/Newsletter";

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center bg-slate-50/50">
        <div className="max-w-[1200px] w-full px-6 py-16 lg:px-12 flex flex-col items-center">
          <NewsHero />
          <LatestStories />
          <MediaResources />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </>
  );
}