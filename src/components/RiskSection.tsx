import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";

const RiskSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].risk;

  return (
    <section id="risk" className="py-20 md:py-28 scroll-mt-20" style={{ backgroundColor: "hsl(var(--risk-bg))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            {tr.h2}
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-4">
            {tr.sub}
          </p>
          <p className="text-base text-white/60 max-w-3xl mx-auto leading-relaxed">
            {tr.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tr.cards.map((card, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-white/60 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="italic text-white/50 mb-6 text-lg">
            {tr.closing}
          </p>
          <Button
            variant="hero"
            size="lg"
            className="text-base px-8 py-6"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {tr.cta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
