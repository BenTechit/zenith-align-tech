import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

const reactive = [
  "Emergency calls at the worst times",
  "Data loss with no recovery path",
  "Unpredictable costs and downtime",
  "Band-aid fixes that never hold",
  "No visibility into infrastructure health",
];

const strategic = [
  "Scheduled maintenance and monitoring",
  "Automated backups with tested recovery",
  "Predictable costs and zero surprises",
  "Root-cause resolution, not patches",
  "Full infrastructure documentation",
];

const PreventionSection = () => {
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
            Reactive vs. Strategic IT
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The cost of waiting is always higher than the cost of planning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Reactive */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8 border-destructive/20"
          >
            <h3 className="text-xl font-semibold mb-6 text-destructive/80">Reactive IT</h3>
            <ul className="space-y-4">
              {reactive.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <XCircle className="w-5 h-5 text-destructive/60 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Strategic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8 border-primary/30 glow-border"
          >
            <h3 className="text-xl font-semibold mb-6 glow-text">Strategic IT</h3>
            <ul className="space-y-4">
              {strategic.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <CheckCircle className="w-5 h-5 text-primary/80 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreventionSection;
