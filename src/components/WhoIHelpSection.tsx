import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhoIHelpSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].who;
  const { ref, visible } = useScrollReveal();
  const { ref: listRef, visible: listVisible, className: listClass } = useScrollReveal(0.05, "left");
  const { ref: calloutRef, visible: calloutVisible, className: calloutClass } = useScrollReveal(0.08, "right");

  return (
    <section id="who-i-help" className="py-12 sm:py-20 md:py-28 scroll-mt-20" style={{ backgroundColor: "hsl(var(--section-alt))" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className={`max-w-3xl mb-12 reveal ${visible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            {tr.h2}
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            {tr.sub}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            {tr.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div ref={listRef} className={`md:col-span-3 ${listClass} ${listVisible ? "visible" : ""}`}>
            <ul className="space-y-3">
              {tr.bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={calloutRef} className={`md:col-span-2 ${calloutClass} ${calloutVisible ? "visible" : ""}`}>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm card-hover">
              <p className="italic text-muted-foreground leading-relaxed">
                {tr.callout}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIHelpSection;
