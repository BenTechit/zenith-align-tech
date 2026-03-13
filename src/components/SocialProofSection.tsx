import { Users, Zap, MapPin } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const stats = [
  { icon: Users, value: "5–50 עובדים", label: "גודל עסקים נתמך", hasCountUp: true },
  { icon: Zap, value: "שירות באותו היום", label: "זמן תגובה", hasCountUp: false },
  { icon: MapPin, value: "מודיעין והסביבה", label: "אזור שירות", hasCountUp: false },
];

const useCountUp = (end: number, start: number, duration: number, trigger: boolean) => {
  const [value, setValue] = useState(start);
  useEffect(() => {
    if (!trigger) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOut
      setValue(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, end, start, duration]);
  return value;
};

const SocialProofSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const countUpValue = useCountUp(50, 5, 1500, visible);

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
              <p className="text-sm sm:text-lg font-bold text-foreground" dir="rtl">
                {stat.hasCountUp ? `5–${countUpValue} עובדים` : stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5" dir="rtl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
