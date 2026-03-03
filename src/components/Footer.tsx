import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/30 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold tracking-tight">
              <span className="text-foreground">Ben</span>
              <span className="text-primary">tech</span>
            </span>
            <span className="text-xs text-muted-foreground">{t.footer.tagline}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
