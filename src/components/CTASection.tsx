import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-radial" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {t.cta.title1}
            <br />
            <span className="text-gradient">{t.cta.title2}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <a href="https://wa.me/972544991540" target="_blank" rel="noopener noreferrer">
                {t.cta.ctaPrimary}
                <ArrowRight className="w-5 h-5 ms-2" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
              <a href="tel:+972544991540">
                <Phone className="w-5 h-5 me-2" />
                {t.cta.ctaSecondary}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
