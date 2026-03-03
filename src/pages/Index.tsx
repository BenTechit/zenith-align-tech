import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import WhyBentechSection from "@/components/WhyBentechSection";
import PreventionSection from "@/components/PreventionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <WhyBentechSection />
      <PreventionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
