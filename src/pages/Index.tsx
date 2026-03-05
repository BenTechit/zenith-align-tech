import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import WhoIHelpSection from "@/components/WhoIHelpSection";
import ServicesSection from "@/components/ServicesSection";
import RepairLabSection from "@/components/RepairLabSection";
import WhyBentechSection from "@/components/WhyBentechSection";
import ReviewsSection from "@/components/ReviewsSection";
import ComplianceSection from "@/components/ComplianceSection";
import RiskSection from "@/components/RiskSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <RepairLabSection />
      <ComplianceSection />
      <WhoIHelpSection />
      <ServicesSection />
      <WhyBentechSection />
      <ReviewsSection />
      <RiskSection />
      <ContactFormSection />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Index;
