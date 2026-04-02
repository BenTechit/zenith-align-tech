import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBarSection from "@/components/TrustBarSection";
import CommonProblemsSection from "@/components/CommonProblemsSection";
import HomeServicesSection from "@/components/HomeServicesSection";
import AboutMeSection from "@/components/AboutMeSection";
import BusinessServicesSection from "@/components/BusinessServicesSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-1/2 focus:-translate-x-1/2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
      >
        דלג לתוכן הראשי
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <HeroSection />
        <TrustBarSection />
        <CommonProblemsSection />
        <HomeServicesSection />
        <AboutMeSection />
        <BusinessServicesSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Index;
