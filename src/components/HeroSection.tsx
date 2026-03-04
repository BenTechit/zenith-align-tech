import { ArrowRight, CheckCircle2, Wifi, HardDrive, Cloud, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";

const statusItems = [
  { icon: Cloud,    label: "Microsoft 365",  status: "Active" },
  { icon: HardDrive, label: "Backup",        status: "Verified" },
  { icon: Wifi,     label: "Network",        status: "Healthy" },
  { icon: Monitor,  label: "12 Devices",     status: "Managed" },
];

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

          {/* Right: IT Health Dashboard Card */}
          <div className="hidden md:flex items-center justify-center">
            <div className="hero-enter hero-enter-delay-3 w-full max-w-sm rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">{tr.healthTitle}</p>
                <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  {tr.healthStatus}
                </span>
              </div>

              <div className="space-y-3 mb-5">
                {statusItems.map(({ icon: Icon, label, status }, i) => (
                  <div
                    key={label}
                    className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 opacity-0"
                    style={{
                      animation: `healthRowIn 0.5s ease-out forwards`,
                      animationDelay: `${1 + i * 0.2}s`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-white/50" />
                      <span className="text-sm text-white/80">{label}</span>
                    </div>
                    <div className="flex items-center gap-1.5 opacity-0" style={{ animation: `healthCheck 0.3s ease-out forwards`, animationDelay: `${1.3 + i * 0.2}s` }}>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-green-400 font-medium">{status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-xs text-white/40">{tr.healthCheckIn}</span>
                <span className="text-xs text-white/70 font-medium">{tr.healthBy}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
