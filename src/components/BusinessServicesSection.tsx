import { Cloud, Database, Headphones, Network, RefreshCw } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Cloud, title: "Microsoft 365", desc: "הקמה, ניהול, רישוי והעברת דואר אלקטרוני" },
  { icon: Database, title: "גיבויים", desc: "הגדרת מערכות גיבוי, בדיקה תקופתית ושחזור נתונים" },
  { icon: Headphones, title: "תמיכה מרחוק", desc: "פתרון תקלות מהיר מרחוק בלי להמתין לטכנאי" },
  { icon: Network, title: "הקמת רשתות", desc: "תכנון והקמת רשת עסקית, ראוטרים, מתגים, VPN" },
  { icon: RefreshCw, title: "שירותי IT שוטפים", desc: "ליווי טכני מתמשך, ניטור מערכות ותחזוקה מונעת" },
];

const BusinessServicesSection = () => {
  const { ref, visible } = useScrollReveal();
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.05);

  return (
    <section className="py-12 sm:py-20 scroll-mt-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-10 reveal ${visible ? "visible" : ""}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3" dir="rtl">
            פתרונות לעסקים
          </h2>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="stagger-card flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border card-hover"
              style={{ transitionDelay: gridVisible ? `${i * 100}ms` : "0ms" }}
              ref={(el) => { if (el && gridVisible) el.classList.add("visible"); }}
            >
              <s.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-base font-semibold text-foreground mb-1" dir="rtl">{s.title}</h3>
              <p className="text-sm text-muted-foreground" dir="rtl">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessServicesSection;
