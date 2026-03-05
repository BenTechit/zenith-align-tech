import { ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ComplianceSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].compliance;
  const { ref, visible, className } = useScrollReveal(0.08);
  const { ref: iconRef, visible: iconVisible, className: iconClass } = useScrollReveal(0.1, "scale");
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.05);

  return (
    <section id="compliance" className="py-12 sm:py-20 md:py-28 scroll-mt-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-14 ${className} ${visible ? "visible" : ""}`}>
          <div
            ref={iconRef}
            className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5 animate-float animate-glow-pulse ${iconClass} ${iconVisible ? "visible" : ""}`}
          >
            <ShieldCheck className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            {tr.h2}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            {tr.sub}
          </p>
          <p className="text-base text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {tr.intro}
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12 stagger-children ${gridVisible ? "visible" : ""}`}
        >
          {tr.bullets.map((bullet, i) => (
            <div
              key={i}
              className="bg-background rounded-xl p-6 border border-border border-l-4 border-l-primary card-hover"
            >
              <CheckCircle className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{bullet.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{bullet.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            className="text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-6 btn-glow w-full sm:w-auto"
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

export default ComplianceSection;
