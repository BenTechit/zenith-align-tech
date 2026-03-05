import { Monitor, Laptop, Smartphone, Cpu, Droplets, Gamepad2, CircuitBoard, TabletSmartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const devices = [
  { icon: Laptop, en: "Laptops", he: "מחשבים ניידים" },
  { icon: Monitor, en: "Desktops", he: "מחשבים שולחניים" },
  { icon: TabletSmartphone, en: "All-in-Ones", he: "מחשבי All-in-One" },
  { icon: Smartphone, en: "MacBooks", he: "מקבוקים" },
  { icon: CircuitBoard, en: "Motherboard Repair", he: "תיקון לוחות אם" },
  { icon: Droplets, en: "Liquid Damage", he: "נזקי נוזלים" },
  { icon: Gamepad2, en: "PlayStation 5", he: "PlayStation 5" },
  { icon: Gamepad2, en: "Xbox", he: "Xbox" },
  { icon: Cpu, en: "Component-Level Fixes", he: "תיקונים ברמת רכיב" },
];

const RepairLabSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].repairLab;
  const { ref, visible } = useScrollReveal();
  const isHe = lang === "he";

  return (
    <section className="py-12 sm:py-20 md:py-28 bg-[hsl(var(--hero-bg))] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, white 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, white 0px, transparent 1px, transparent 40px)`
      }} />

      <div ref={ref} className={`container mx-auto px-4 sm:px-6 relative z-10 reveal ${visible ? "visible" : ""}`}>
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold tracking-wide">
            <Cpu className="w-4 h-4" />
            {tr.badge}
          </span>
        </div>

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            {tr.h2}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {tr.sub}
          </p>
        </div>

        {/* Device grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-4 max-w-5xl mx-auto mb-12">
          {devices.map((device, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <device.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs text-white/80 font-medium text-center leading-tight">
                {isHe ? device.he : device.en}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-white/50 text-sm leading-relaxed">
            {tr.closing}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RepairLabSection;
