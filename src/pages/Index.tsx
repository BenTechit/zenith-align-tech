import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import WhoIHelpSection from "@/components/WhoIHelpSection";
import ServicesSection from "@/components/ServicesSection";
import RepairLabSection from "@/components/RepairLabSection";
import WhyBentechSection from "@/components/WhyBentechSection";
import RiskSection from "@/components/RiskSection";
import StandaloneCTASection from "@/components/StandaloneCTASection";
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
      <WhoIHelpSection />
      <ServicesSection />
      <WhyBentechSection />
      <RiskSection />
      <StandaloneCTASection />
      <ContactFormSection />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Index;
