import { Button } from "@/components/ui/button";

const StandaloneCTASection = () => {
  const steps = [
    { num: "1", title: "You contact me", desc: "Call, WhatsApp, or fill in the form" },
    { num: "2", title: "We talk for 15 minutes", desc: "Tell me about your setup and your biggest pain point" },
    { num: "3", title: "I give you a straight answer", desc: "What needs attention, what can wait, and what it would cost" },
  ];

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "hsl(var(--cta-blue))" }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Ready to Stop Worrying About IT?
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Let's start with a free assessment. I'll look at what you have, tell you what's working, what isn't, and what should change. No sales pitch. No obligation.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 text-white text-xl font-bold flex items-center justify-center mx-auto mb-3">
                {step.num}
              </div>
              <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
              <p className="text-sm text-white/70">{step.desc}</p>
            </div>
          ))}
        </div>

        <Button
          variant="ctaWhite"
          size="lg"
          className="text-base px-8 py-6 mb-4"
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Your Free IT Assessment
        </Button>
        <p className="text-sm text-white/50">
          Available for businesses in Modi'in, Maccabim-Re'ut, Shoham, Beit Shemesh, and surrounding areas.
        </p>
      </div>
    </section>
  );
};

export default StandaloneCTASection;
