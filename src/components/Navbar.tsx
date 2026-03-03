import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { t, lang, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.businessIT, href: "#business-it" },
    { label: t.nav.hardware, href: "#hardware" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" onClick={() => handleClick("#home")} className="text-xl font-bold tracking-tight">
          <span className="text-foreground">Ben</span>
          <span className="text-primary">tech</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={toggleLang}
            className="text-sm font-semibold px-3 py-1.5 rounded-md border border-border/60 bg-secondary/50 hover:bg-secondary transition-colors duration-200"
          >
            {lang === "en" ? "HE" : "EN"}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-sm font-semibold px-3 py-1.5 rounded-md border border-border/60 bg-secondary/50"
          >
            {lang === "en" ? "HE" : "EN"}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-border/30 py-4 px-6 space-y-3"
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block w-full text-start text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
