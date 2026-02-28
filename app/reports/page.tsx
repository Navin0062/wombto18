import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReportHeader from "@/components/reports/ReportHeader";
import FeaturedCampaign from "@/components/reports/FeaturedCampaign";
import ProgressGrid from "@/components/reports/ProgressGrid";
import HighlightsGallery from "@/components/reports/HighlightsGallery";
import DailyImpactTable from "@/components/reports/DailyImpactTable";
import ReportFooter from "@/components/reports/ReportFooter";

export default function WeeklyReportPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center bg-slate-50/50">
        <div className="max-w-[1200px] w-full px-6 py-12 md:py-16 lg:px-10">
          <ReportHeader />
          <FeaturedCampaign />
          <ProgressGrid />
          <HighlightsGallery />
          <DailyImpactTable />
          <ReportFooter />
        </div>
      </main>
      <Footer />
    </>
  );
}