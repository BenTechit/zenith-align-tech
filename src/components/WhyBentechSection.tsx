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
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.05);

  return (
    <section id="why-bentech" className="py-12 sm:py-20 md:py-28 scroll-mt-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-14 reveal ${visible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            {tr.h2}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {tr.sub}
          </p>
        </div>

        <div ref={gridRef} className={`grid md:grid-cols-2 gap-6 max-w-4xl mx-auto stagger-children ${gridVisible ? "visible" : ""}`}>
          {blocks.map((block, i) => (
            <div key={i} className="bg-secondary rounded-xl p-6 border border-border border-l-4 border-l-primary card-hover">
              <block.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{block.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{block.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
            {lang === "he" ? "מותגים שאני עובד ומשתף פעולה איתם" : "Brands I Work & Partner With"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60">
            {[
              { name: "Microsoft", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg" },
              { name: "Google", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" },
              { name: "Dell", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dell.svg" },
              { name: "Lenovo", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/lenovo.svg" },
              { name: "ASUS", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/asus.svg" },
              { name: "HP", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hp.svg" },
              { name: "Intel", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/intel.svg" },
              { name: "Apple", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg" },
            ].map((brand) => (
              <div key={brand.name} className="flex flex-col items-center gap-1.5">
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-8 sm:h-10 w-auto transition-all duration-300"
                  style={{ filter: `brightness(0) saturate(100%)` }}
                  loading="lazy"
                />
                <span className="text-[10px] text-muted-foreground font-medium">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBentechSection;
