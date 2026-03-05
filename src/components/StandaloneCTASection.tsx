import { Button } from "@/components/ui/button";
import WorkflowAnimation from "@/components/animations/WorkflowAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const StandaloneCTASection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].cta;
  const { ref, visible } = useScrollReveal();
  const { ref: stepsRef, visible: stepsVisible } = useScrollReveal(0.05);

  return (
    <section id="cta" className="py-12 sm:py-20 md:py-28 scroll-mt-20" style={{ backgroundColor: "hsl(var(--cta-blue))" }}>
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            {tr.h2}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            {tr.sub}
          </p>
        </div>

        <WorkflowAnimation />
        <div ref={stepsRef} className={`grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12 stagger-children ${stepsVisible ? "visible" : ""}`}>
          {tr.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 text-white text-xl font-bold flex items-center justify-center mx-auto mb-3">
                {i + 1}
              </div>
              <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
              <p className="text-sm text-white/70">{step.desc}</p>
            </div>
          ))}
        </div>

        <Button
          variant="ctaWhite"
          size="lg"
          className="text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-6 mb-4 btn-glow w-full sm:w-auto"
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {tr.button}
        </Button>
        <p className="text-sm text-white/50">
          {tr.areas}
        </p>
      </div>
    </section>
  );
};

export default StandaloneCTASection;
