import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";
import NetworkPulseAnimation from "@/components/animations/NetworkPulseAnimation";

const HeroSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].hero;

  return (
    <section id="home" className="relative pt-16 scroll-mt-20" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h1 className="hero-enter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-4 sm:mb-6">
              {tr.h1}
            </h1>
            <p className="hero-enter hero-enter-delay-1 text-base sm:text-lg text-white/80 mb-3 sm:mb-4 leading-relaxed">
              {tr.sub}
            </p>
            <p className="hero-enter hero-enter-delay-2 text-sm sm:text-base text-white/70 mb-3 sm:mb-4 leading-relaxed">
              {tr.body}
            </p>
            <p className="hero-enter hero-enter-delay-2 text-xs sm:text-sm text-white/50 mb-6 sm:mb-8" dir={lang === "en" ? "rtl" : "ltr"}>
              {tr.hebrew}
            </p>

            <div className="hero-enter hero-enter-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
              <Button
                variant="hero"
                size="lg"
                className="text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-6 btn-glow w-full sm:w-auto"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {tr.cta1}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {tr.cta2}
              </Button>
            </div>
            <p className="hero-enter hero-enter-delay-4 text-xs text-white/40">
              {tr.trust}
            </p>
          </div>

          {/* Right: Network Pulse Animation */}
          <div className="hidden md:flex items-center justify-center">
            <div className="hero-enter hero-enter-delay-3">
              <NetworkPulseAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
