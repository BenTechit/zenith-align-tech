const WhyBentechSection = () => {
  const blocks = [
    {
      title: "One Person. Full Accountability.",
      desc: "You deal with Ben — not a helpdesk, not a rotating support team, not an automated ticket queue. When something breaks, you know exactly who to call.",
    },
    {
      title: "On-Site When It Matters.",
      desc: "Remote support handles most issues fast. When it doesn't, I come to you. Modi'in-based, available for urgent on-site visits without the \"next available slot in 5 days\" answer.",
    },
    {
      title: "Business-Level Thinking.",
      desc: "I don't just fix what's broken. I look at what's about to break, what's slowing your team down, and what your IT setup needs to support your growth — not just survive today.",
    },
    {
      title: "Microsoft Ecosystem Depth.",
      desc: "Microsoft 365, SharePoint, OneDrive, Teams, Azure — these aren't checkboxes on a service list. They're the backbone of how modern small businesses run. I build that backbone properly.",
    },
  ];

  return (
    <section id="why-bentech" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Why Business Owners in Modi'in Choose Bentech
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not because of a brochure. Because of what actually happens when something goes wrong.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {blocks.map((block, i) => (
            <div key={i} className="bg-secondary rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">{block.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{block.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBentechSection;
