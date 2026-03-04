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
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6">
              {tr.h1}
            </h1>
            <p className="text-lg text-white/80 mb-4 leading-relaxed">
              {tr.sub}
            </p>
            <p className="text-base text-white/70 mb-4 leading-relaxed">
              {tr.body}
            </p>
            <p className="text-sm text-white/50 mb-8" dir={lang === "en" ? "rtl" : "ltr"}>
              {tr.hebrew}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button
                variant="hero"
                size="lg"
                className="text-base px-8 py-6"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {tr.cta1}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="text-base px-8 py-6"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {tr.cta2}
              </Button>
            </div>
            <p className="text-xs text-white/40">
              {tr.trust}
            </p>
          </div>

          {/* Right: IT Health Dashboard Card */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-sm rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">{tr.healthTitle}</p>
                <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  {tr.healthStatus}
                </span>
              </div>

              <div className="space-y-3 mb-5">
                {statusItems.map(({ icon: Icon, label, status }) => (
                  <div key={label} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-white/50" />
                      <span className="text-sm text-white/80">{label}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
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
