import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RiskSection = () => {
  const cards = [
    {
      title: "No Backup = No Recovery",
      desc: "Businesses that lose data without a tested backup don't always survive it. A backup that was set up once and never verified is the same as no backup.",
    },
    {
      title: "Old Hardware, Modern Workload",
      desc: "A team running on underpowered or aging hardware loses hours every week. That's not a hardware problem — it's a revenue problem measured in productivity you're not getting.",
    },
    {
      title: "IT by Committee Costs More",
      desc: "Hiring different people for different problems creates gaps. Nobody owns the full picture. Nobody catches what's falling through.",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "hsl(var(--risk-bg))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            What Happens When IT Gets Left on the Back Burner
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-4">
            Most IT problems don't announce themselves. They build quietly — until they stop your business.
          </p>
          <p className="text-base text-white/60 max-w-3xl mx-auto leading-relaxed">
            A failing hard drive gives warnings. An insecure network has gaps. An M365 setup without proper backup is one accidental deletion away from a crisis. These aren't theoretical risks — they're the situations I get called into after they've already happened.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-white/60 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="italic text-white/50 mb-6 text-lg">
            The best time to look at your IT infrastructure is before something fails. The second best time is right now.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="text-base px-8 py-6"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Free IT Check — No commitment required.
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
