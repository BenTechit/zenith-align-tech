import { motion } from "framer-motion";
import { AlertTriangle, CloudOff, ShieldOff, HardDrive, Clock } from "lucide-react";

const problems = [
  { icon: Clock, text: "Hours of downtime with no response" },
  { icon: CloudOff, text: "No real backup or disaster recovery plan" },
  { icon: ShieldOff, text: "Reactive fixes instead of prevention" },
  { icon: HardDrive, text: "Poorly structured Microsoft 365 setup" },
  { icon: AlertTriangle, text: "No strategic IT roadmap for growth" },
];

const ProblemSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Is Your IT Holding You Back?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Most businesses don't realize the risk until it's too late.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-hover rounded-lg p-5 flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <problem.icon className="w-5 h-5 text-destructive" />
              </div>
              <span className="text-foreground/90 text-lg">{problem.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
