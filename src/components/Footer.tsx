import { useLanguage } from "@/i18n/LanguageContext";
import logoben from "@/assets/logoben.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="block h-16 w-60 overflow-hidden rounded-sm">
              <img src={logoben} alt="Bentech" className="h-full w-full object-cover object-center scale-[1.45]" />
            </span>
            <p className="text-sm text-muted-foreground mt-1">{t.footer.tagline}</p>
          </div>
          <div className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
