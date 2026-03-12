import { Users, Zap, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: Users, value: "5–50 עובדים", label: "גודל עסקים נתמך" },
  { icon: Zap, value: "שירות באותו היום", label: "זמן תגובה" },
  { icon: MapPin, value: "מודיעין והסביבה", label: "אזור שירות" },
];

const SocialProofSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section className="py-8 sm:py-12 bg-background">
      <div ref={ref} className={`container mx-auto px-4 sm:px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-secondary border border-border"
            >
              <stat.icon className="w-6 h-6 text-primary mb-2" />
              <p className="text-sm sm:text-lg font-bold text-foreground" dir="rtl">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5" dir="rtl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
