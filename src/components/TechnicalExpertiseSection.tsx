import { motion } from "framer-motion";
import { Terminal, Layers, ShieldCheck, Activity } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Layers, Terminal, ShieldCheck, Activity];

const TechnicalExpertiseSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-overlay animate-grid-shift opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            {t.technical.title}
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient">{t.technical.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.technical.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.technical.points.map((point, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-hover rounded-xl p-7 group relative overflow-hidden"
              >
                {/* Code-like accent */}
                <div className="absolute top-3 end-4 text-xs text-muted-foreground/30 font-mono select-none">
                  {`0${i + 1}`}
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 tracking-tight">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertiseSection;
