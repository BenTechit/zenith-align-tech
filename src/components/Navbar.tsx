import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";

const WAIcon = () => (
  <svg viewBox="0 0 32 32" width="16" height="16" fill="#25D366" aria-hidden="true">
    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.67 4.797 1.836 6.787L2 30l7.43-1.812A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.39 19.342c-.35-.175-2.072-1.022-2.394-1.138-.32-.115-.554-.174-.787.175-.234.35-.905 1.138-1.11 1.371-.204.233-.408.263-.758.088-.35-.175-1.478-.545-2.815-1.737-1.04-.928-1.742-2.074-1.946-2.424-.203-.35-.022-.539.153-.713.157-.156.35-.408.524-.611.175-.204.233-.35.35-.583.116-.233.058-.437-.029-.612-.088-.175-.787-1.897-1.078-2.598-.284-.682-.573-.59-.787-.6l-.67-.012a1.286 1.286 0 0 0-.932.437c-.32.35-1.224 1.197-1.224 2.918s1.253 3.385 1.427 3.619c.175.233 2.466 3.765 5.977 5.277.835.36 1.487.575 1.995.737.838.267 1.601.229 2.204.139.672-.1 2.072-.847 2.365-1.664.29-.816.29-1.516.203-1.663-.086-.146-.32-.233-.67-.408z" />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const nav = t[lang].nav;

  const links = [
    { label: nav.services, href: "#services" },
    { label: nav.whyBentech, href: "#why-bentech" },
    { label: nav.contact, href: "#contact" },
  ];

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
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
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+972526379747"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {nav.phone}
          </a>
          <a
            href="https://wa.me/972526379747"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#25D366" }}
          >
            <WAIcon />
            WhatsApp
          </a>
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "he" : "en")}
            className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1.5 hover:bg-accent transition-colors"
            aria-label="Toggle language"
          >
            <span className={`text-base leading-none ${lang === "en" ? "opacity-100" : "opacity-40"}`}>🇺🇸</span>
            <span className="text-muted-foreground text-xs mx-0.5">|</span>
            <span className={`text-base leading-none ${lang === "he" ? "opacity-100" : "opacity-40"}`}>🇮🇱</span>
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "he" : "en")}
            className="rounded-full border border-border px-2 py-1 hover:bg-accent transition-colors"
            aria-label="Toggle language"
          >
            <span className="text-base leading-none">{lang === "en" ? "🇮🇱" : "🇺🇸"}</span>
          </button>
          <a href="https://wa.me/972526379747" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <WAIcon />
          </a>
          <a href="tel:+972526379747" className="text-primary" aria-label="Call">
            <Phone className="w-5 h-5" />
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border py-4 px-6 space-y-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block w-full text-left text-sm py-2 px-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
