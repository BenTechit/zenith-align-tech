import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";
import { Link } from "react-router-dom";

const Footer = () => {
  const { lang } = useLanguage();
  const tr = t[lang].footer;

  return (
    <footer className="border-t border-border py-6 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            {tr.copy}
          </div>
          <div className="flex items-center gap-4">
            <Link to="/accessibility" className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors">
              הצהרת נגישות
            </Link>
            <div className="text-xs text-muted-foreground/60" dir="rtl">
              {tr.seo}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
