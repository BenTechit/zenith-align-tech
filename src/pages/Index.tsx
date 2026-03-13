import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComplianceBanner from "@/components/ComplianceBanner";
import SocialProofSection from "@/components/SocialProofSection";
import AboutMeSection from "@/components/AboutMeSection";
import RepairLabSection from "@/components/RepairLabSection";
import WhoIHelpSection from "@/components/WhoIHelpSection";
import ServicesSection from "@/components/ServicesSection";
import ComplianceSection from "@/components/ComplianceSection";
import WhyBentechSection from "@/components/WhyBentechSection";
import ReviewsSection from "@/components/ReviewsSection";
import RiskSection from "@/components/RiskSection";
import ContactFormSection from "@/components/ContactFormSection";
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
      <ComplianceBanner />
      <Navbar />
      <main id="main-content" role="main">
        <HeroSection />
        <SocialProofSection />
        <RiskSection />
        <WhoIHelpSection />
        <ServicesSection />
        <RepairLabSection />
        <ComplianceSection />
        <WhyBentechSection />
        <AboutMeSection />
        <ReviewsSection />
        <ContactFormSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Index;
