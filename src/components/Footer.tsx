import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-6 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground" dir="rtl">
            © {new Date().getFullYear()} <span lang="en">Bentech</span> | בן גולדנברג | מודיעין, ישראל
          </div>
          <div className="flex items-center gap-4">
            <Link to="/accessibility" className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors">
              הצהרת נגישות
            </Link>
            <Link to="/privacy" className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors">
              מדיניות פרטיות
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors">
              תנאי שימוש
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
