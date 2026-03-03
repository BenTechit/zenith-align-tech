import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const PreventionSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t.prevention.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t.prevention.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8 border-destructive/20"
          >
            <h3 className="text-xl font-semibold mb-6 text-destructive/80">{t.prevention.reactiveTitle}</h3>
            <ul className="space-y-4">
              {t.prevention.reactive.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <XCircle className="w-5 h-5 text-destructive/60 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8 border-primary/30 glow-border"
          >
            <h3 className="text-xl font-semibold mb-6 glow-text">{t.prevention.strategicTitle}</h3>
            <ul className="space-y-4">
              {t.prevention.strategic.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <CheckCircle className="w-5 h-5 text-primary/80 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreventionSection;
