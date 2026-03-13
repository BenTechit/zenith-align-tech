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
      <ComplianceBanner />
      <Navbar />
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
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Index;
