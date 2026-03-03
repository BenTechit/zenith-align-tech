import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";

const ContactFormSection = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) errs.name = t.contactForm.errors.name;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t.contactForm.errors.email;
    if (form.message.trim().length < 5 || form.message.length > 1000) errs.message = t.contactForm.errors.message;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = [
      `*${t.contactForm.waLabels.name}:* ${form.name.trim()}`,
      `*${t.contactForm.waLabels.email}:* ${form.email.trim()}`,
      form.phone.trim() ? `*${t.contactForm.waLabels.phone}:* ${form.phone.trim()}` : "",
      `*${t.contactForm.waLabels.message}:*\n${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/972544991540?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const inputClass =
    "w-full bg-secondary/50 border border-border/60 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200 text-sm";

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t.contactForm.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t.contactForm.subtitle}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto glass rounded-2xl p-8 md:p-10 space-y-5"
        >
          {/* Name */}
          <div>
            <div className="relative">
              <User className="absolute start-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
              <input
                type="text"
                placeholder={t.contactForm.placeholders.name}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`${inputClass} ps-10`}
                maxLength={100}
              />
            </div>
            {errors.name && <p className="text-destructive text-xs mt-1.5 ms-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <Mail className="absolute start-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
              <input
                type="email"
                placeholder={t.contactForm.placeholders.email}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`${inputClass} ps-10`}
                maxLength={255}
              />
            </div>
            {errors.email && <p className="text-destructive text-xs mt-1.5 ms-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute start-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
            <input
              type="tel"
              placeholder={t.contactForm.placeholders.phone}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={`${inputClass} ps-10`}
              maxLength={20}
            />
          </div>

          {/* Message */}
          <div>
            <div className="relative">
              <MessageSquare className="absolute start-3 top-3.5 w-4 h-4 text-muted-foreground/50" />
              <textarea
                placeholder={t.contactForm.placeholders.message}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className={`${inputClass} ps-10 resize-none`}
                maxLength={1000}
              />
            </div>
            {errors.message && <p className="text-destructive text-xs mt-1.5 ms-1">{errors.message}</p>}
          </div>

          <Button variant="hero" size="lg" className="w-full text-base py-6 group" type="submit">
            <Send className="w-4 h-4 me-2 group-hover:translate-x-0.5 transition-transform" />
            {t.contactForm.submit}
          </Button>

          <p className="text-center text-xs text-muted-foreground/60">{t.contactForm.note}</p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactFormSection;
