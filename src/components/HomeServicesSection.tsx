import { Laptop, Globe, Settings, Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  { icon: Laptop, title: "תיקון מחשבים", desc: "אבחון ותיקון תקלות חומרה ותוכנה, שדרוג רכיבים, החלפת מסכים ועוד" },
  { icon: Globe, title: "רשתות ואינטרנט", desc: "הקמת רשת ביתית או עסקית, פתרון בעיות WiFi, הגדרת ראוטרים ומתגים" },
  { icon: Settings, title: "התקנות והגדרות", desc: "התקנת מערכת הפעלה, הגדרת מחשב חדש, העברת נתונים, התקנת תוכנות" },
  { icon: Briefcase, title: "תמיכה לעסקים", desc: "תמיכה טכנית שוטפת, ניהול תשתיות, פתרונות ענן ו-Microsoft 365" },
];

const HomeServicesSection = () => {
  const { ref, visible } = useScrollReveal();
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.05);

  return (
    <section id="services" className="py-12 sm:py-20 scroll-mt-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-10 reveal ${visible ? "visible" : ""}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3" dir="rtl">
            שירותי מחשוב לבית ולעסק
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto" dir="rtl">
            מטיפול בתקלות ועד הקמה מלאה של מערכות – הכל במקום אחד
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="stagger-card bg-card rounded-xl border border-border p-6 card-hover"
              style={{ transitionDelay: gridVisible ? `${i * 120}ms` : "0ms" }}
              ref={(el) => { if (el && gridVisible) el.classList.add("visible"); }}
            >
              <cat.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2" dir="rtl">{cat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed" dir="rtl">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;
