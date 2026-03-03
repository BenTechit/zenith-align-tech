const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-foreground">Ben</span>
              <span className="text-primary">tech</span>
            </span>
            <p className="text-sm text-muted-foreground mt-1">Business IT Infrastructure Partner — Modi'in, Israel</p>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bentech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
