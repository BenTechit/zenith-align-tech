import { motion } from "framer-motion";
import { Cloud, Shield, Server, Monitor, Mail, Database, Lock, Cpu, Settings, HardDrive, Network, Workflow } from "lucide-react";

const services = [
  {
    title: "Business IT & Microsoft 365",
    icon: Monitor,
    items: [
      "Microsoft 365 tenant architecture & migration",
      "Exchange Online, Teams & SharePoint setup",
      "User provisioning & license optimization",
      "Email security & compliance policies",
      "Endpoint management & device policies",
    ],
  },
  {
    title: "Cloud & Backup Strategy",
    icon: Cloud,
    items: [
      "Automated cloud backup solutions",
      "Disaster recovery planning & testing",
      "Azure AD & hybrid identity management",
      "Cloud storage architecture",
      "Business continuity framework",
    ],
  },
  {
    title: "Advanced Infrastructure",
    icon: Server,
    items: [
      "Network design & security hardening",
      "Server deployment & virtualization",
      "BIOS/UEFI, GPT/MBR disk architecture",
      "Hardware diagnostics & optimization",
      "Vendor coordination & procurement",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Enterprise-Grade Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Comprehensive IT solutions designed for businesses that take technology seriously.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-hover rounded-xl p-8 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-5 tracking-tight">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
