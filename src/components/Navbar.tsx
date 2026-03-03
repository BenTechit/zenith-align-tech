import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import logoben from "@/assets/logoben.png";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { t, lang, toggleLang } = useLanguage();
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.businessIT, href: "#business-it" },
    { label: t.nav.cloud, href: "#cloud" },
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
        <a href="#home" onClick={() => handleClick("#home")} className="flex items-center gap-2">
          <img src={logoben} alt="Bentech" className="h-24 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative text-sm px-3 py-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
          <button
            onClick={toggleLang}
            className="ms-3 text-sm font-semibold px-3 py-1.5 rounded-md border border-border/60 bg-secondary/50 hover:bg-secondary transition-colors duration-200"
          >
            {lang === "en" ? "HE" : "EN"}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-3">
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
          className="lg:hidden glass border-t border-border/30 py-4 px-6 space-y-1"
        >
          {links.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`block w-full text-start text-sm py-2 px-3 rounded-md transition-colors ${
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
