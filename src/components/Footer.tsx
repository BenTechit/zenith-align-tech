const Footer = () => {
  return (
    <footer className="border-t border-border py-6 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            © 2025 Bentech | Ben Goldenberg | Modi'in, Israel
          </div>
          <div className="text-xs text-muted-foreground/60" dir="rtl">
            שירותי מחשוב לעסקים במודיעין | מיקרוסופט 365 | תמיכת מחשבים מקצועית
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
