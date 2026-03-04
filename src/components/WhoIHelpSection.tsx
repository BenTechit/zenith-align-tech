const WhoIHelpSection = () => {
  const bullets = [
    "Small businesses where IT failure means the whole team stops",
    "Offices that have outgrown their setup but haven't upgraded",
    "Companies migrating to Microsoft 365 or moving off physical servers",
    "Business owners who want one accountable person for all their IT — not a ticket system",
    "Teams dealing with slow computers, unreliable backups, or chaotic file storage",
  ];

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "hsl(var(--section-alt))" }}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Built for Businesses That Can't Afford IT Problems
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            I work with business owners, not IT departments.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            If you run a team of 5 to 50 people in Modi'in or the surrounding area — and your technology is held together with workarounds and crossed fingers — this is exactly for you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <ul className="space-y-3">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
              <p className="italic text-muted-foreground leading-relaxed">
                "Enterprise companies with internal IT departments have larger providers for that. Bentech specializes in the businesses those providers ignore."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIHelpSection;
