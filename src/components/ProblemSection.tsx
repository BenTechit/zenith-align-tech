import { motion } from "framer-motion";
import { AlertTriangle, CloudOff, ShieldOff, HardDrive, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const iconList = [Clock, CloudOff, ShieldOff, HardDrive, AlertTriangle];

const ProblemSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t.problem.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t.problem.subtitle}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.problem.items.map((text, i) => {
            const Icon = iconList[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-hover rounded-lg p-5 flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-destructive" />
                </div>
                <span className="text-foreground/90 text-lg">{text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
