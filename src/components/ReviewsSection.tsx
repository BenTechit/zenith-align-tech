import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ReviewsSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].reviews;
  const { ref, visible } = useScrollReveal();
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.05);

  return (
    <section id="reviews" className="py-12 sm:py-20 md:py-28 scroll-mt-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-14 reveal ${visible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            {tr.h2}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {tr.sub}
          </p>
        </div>

        <div ref={gridRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-children ${gridVisible ? "visible" : ""}`}>
          {tr.items.map((review, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 border border-border shadow-sm card-hover flex flex-col"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.stars }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed flex-1 mb-4">
                "{review.quote}"
              </blockquote>
              <div className="border-t border-border pt-3">
                <p className="font-semibold text-foreground text-sm">{review.name}</p>
                {review.role && (
                  <p className="text-muted-foreground text-xs">{review.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
