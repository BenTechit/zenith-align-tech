import DataLossAnimation from "@/components/animations/DataLossAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const RiskSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].risk;
  const { ref, visible } = useScrollReveal();
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.05);

  return (
    <section id="risk" className="py-12 sm:py-20 md:py-28 scroll-mt-20" style={{ backgroundColor: "hsl(var(--risk-bg))" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <DataLossAnimation />
        <div ref={ref} className={`text-center mb-14 reveal ${visible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            {tr.h2}
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            {tr.sub}
          </p>
        </div>

        <div ref={gridRef} className={`grid md:grid-cols-3 gap-6 mb-12 stagger-children ${gridVisible ? "visible" : ""}`}>
          {tr.cards.map((card, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 card-hover">
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-white/60 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="italic text-white/50 text-lg">
            {tr.closing}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
