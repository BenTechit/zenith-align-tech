import { Home, Zap, UserCheck, Wrench } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { icon: Home, text: "שירות עד הבית / העסק" },
  { icon: Zap, text: "זמינות מהירה (לעיתים באותו יום)" },
  { icon: UserCheck, text: "שירות אישי ואמין" },
  { icon: Wrench, text: "ניסיון בחומרה ותוכנה" },
];

const TrustBarSection = () => {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <section className="py-8 sm:py-12 bg-background">
      <div ref={ref} className={`container mx-auto px-4 sm:px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-4 sm:p-5 rounded-xl bg-secondary border border-border"
            >
              <item.icon className="w-6 h-6 text-primary mb-2" />
              <p className="text-xs sm:text-sm font-semibold text-foreground" dir="rtl">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;
