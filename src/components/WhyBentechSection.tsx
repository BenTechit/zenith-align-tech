import { motion } from "framer-motion";
import { User, MapPin, Wrench, Handshake, Target, Zap } from "lucide-react";

const reasons = [
  { icon: User, title: "Independent Consultant", desc: "Direct relationship with a senior engineer, not a call center ticket queue." },
  { icon: MapPin, title: "On-site in Modi'in", desc: "Local presence with hands-on support when it matters most." },
  { icon: Wrench, title: "Deep Technical Expertise", desc: "From BIOS-level diagnostics to cloud architecture — real depth." },
  { icon: Handshake, title: "Vendor Coordination", desc: "Direct communication with Microsoft, hardware vendors, and ISPs on your behalf." },
  { icon: Target, title: "Strategic Mindset", desc: "IT decisions aligned with your business goals, not just quick fixes." },
  { icon: Zap, title: "Proactive, Not Reactive", desc: "Prevention-first approach that saves time, money, and stress." },
];

const WhyBentechSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Why Bentech
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The difference between having IT support and having an IT partner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-hover rounded-xl p-6 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 tracking-tight">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBentechSection;
