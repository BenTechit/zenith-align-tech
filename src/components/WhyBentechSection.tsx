import { User, MapPin, TrendingUp, Cloud } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const icons = [User, MapPin, TrendingUp, Cloud];

const WhyBentechSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].why;
  const blocks = tr.blocks.map((b, i) => ({ ...b, icon: icons[i] }));
  const { ref, visible } = useScrollReveal();

  return (
    <section id="why-bentech" className="py-12 sm:py-20 md:py-28 scroll-mt-20 bg-background">
      <div ref={ref} className={`container mx-auto px-4 sm:px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            {tr.h2}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {tr.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {blocks.map((block, i) => (
            <div key={i} className="bg-secondary rounded-xl p-6 border border-border border-l-4 border-l-primary card-hover" style={{ transitionDelay: `${i * 0.1}s` }}>
              <block.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{block.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{block.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBentechSection;
