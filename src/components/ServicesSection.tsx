import { Shield, Cloud, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const cards = [
    {
      icon: Shield,
      title: "Business IT Infrastructure",
      items: [
        "Network setup, troubleshooting & optimization",
        "ISP coordination and connectivity issues",
        "NAS configuration and management",
        "NAS to cloud migrations",
        "Backup systems — setup, testing, and monitoring",
        "Remote access and VPN configuration",
        "Security baseline implementation",
      ],
    },
    {
      icon: Cloud,
      title: "Microsoft 365 & Cloud Solutions",
      items: [
        "Microsoft 365 setup and licensing",
        "Email migrations (from any platform to M365)",
        "SharePoint architecture and OneDrive setup",
        "Teams deployment and organization",
        "Cloud transitions from on-premise systems",
        "Azure Active Directory / Entra ID management",
        "User onboarding and offboarding workflows",
      ],
    },
    {
      icon: Laptop,
      title: "Hardware, Devices & Data Recovery",
      items: [
        "Laptop and workstation deployment",
        "Hardware repair and component replacement",
        "SSD upgrades and cloning (GPT/MBR conversion)",
        "BIOS/UEFI configuration",
        "Data recovery scenarios",
        "Operating system installation and configuration",
        "Device refresh and end-of-life replacement planning",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28" style={{ backgroundColor: "hsl(var(--section-alt2))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            What I Handle, So You Don't Have To
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical IT solutions built for how small businesses actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-xl border border-border p-6 shadow-sm">
              <card.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-4">{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            className="text-base px-8 py-6"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Free IT Assessment — I'll tell you exactly what your business needs.
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
