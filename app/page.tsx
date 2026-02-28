import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Programs from "@/components/home/Programs";
import Transparency from "@/components/home/Transparency";
import Donors from "@/components/home/Donors";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col items-center">
        <Hero />
        <Stats />
        <Programs />
        <Transparency />
        <Donors />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}