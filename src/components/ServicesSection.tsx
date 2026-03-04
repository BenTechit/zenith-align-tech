import { Shield, Cloud, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";

const icons = [Shield, Cloud, Laptop];

const ServicesSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].services;
  const cards = tr.cards.map((card, i) => ({ ...card, icon: icons[i] }));

  return (
    <section id="services" className="py-20 md:py-28 scroll-mt-20" style={{ backgroundColor: "hsl(var(--section-alt2))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            {tr.h2}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {tr.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-xl border border-border p-6 shadow-sm">
              <card.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-4">{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            className="text-base px-8 py-6"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {tr.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
