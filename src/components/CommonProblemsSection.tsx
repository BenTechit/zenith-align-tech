import { Monitor, Gauge, Wifi, Mail, HardDrive, Printer } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  { icon: Monitor, text: "מחשב לא נדלק" },
  { icon: Gauge, text: "מחשב איטי או נתקע" },
  { icon: Wifi, text: "בעיות WiFi / קליטה חלשה" },
  { icon: Mail, text: "אאוטלוק או מייל לא מסתנכרן" },
  { icon: HardDrive, text: "הגדרת מחשב חדש והעברת נתונים" },
  { icon: Printer, text: "בעיות מדפסת או רשת" },
];

const CommonProblemsSection = () => {
  const { ref, visible } = useScrollReveal();
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.05);

  return (
    <section className="py-12 sm:py-20 scroll-mt-20" style={{ backgroundColor: "hsl(var(--section-alt))" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-10 reveal ${visible ? "visible" : ""}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3" dir="rtl">
            בעיות נפוצות שאני פותר
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              className="stagger-card flex flex-col items-center text-center p-5 sm:p-6 rounded-xl bg-card border border-border card-hover"
              style={{ transitionDelay: gridVisible ? `${i * 100}ms` : "0ms" }}
              ref={(el) => { if (el && gridVisible) el.classList.add("visible"); }}
            >
              <p.icon className="w-7 h-7 text-primary mb-3" />
              <p className="text-sm font-medium text-foreground" dir="rtl">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonProblemsSection;
