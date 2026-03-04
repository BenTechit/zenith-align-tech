import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoIHelpSection from "@/components/WhoIHelpSection";
import ServicesSection from "@/components/ServicesSection";
import WhyBentechSection from "@/components/WhyBentechSection";
import RiskSection from "@/components/RiskSection";
import StandaloneCTASection from "@/components/StandaloneCTASection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhoIHelpSection />
      <ServicesSection />
      <WhyBentechSection />
      <RiskSection />
      <StandaloneCTASection />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default Index;
