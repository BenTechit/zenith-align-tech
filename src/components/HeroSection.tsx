import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-16" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6">
              Your Business Runs on IT. Make Sure It Actually Runs.
            </h1>
            <p className="text-lg text-white/80 mb-4 leading-relaxed">
              On-site and remote IT support for businesses in Modi'in — Microsoft 365, cloud infrastructure, network setup, and hardware deployment. Done right, the first time.
            </p>
            <p className="text-base text-white/70 mb-4 leading-relaxed">
              When your systems go down, your team goes down. I'm Ben Goldenberg, and I work with businesses of 5–50 people to build IT infrastructure that doesn't fail — and fix it fast when something does.
            </p>
            <p className="text-sm text-white/50 mb-8" dir="rtl">
              העסק שלך רץ על מחשוב. בואו שנוודא שהוא רץ כמו שצריך.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button
                variant="hero"
                size="lg"
                className="text-base px-8 py-6"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get a Free IT Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="text-base px-8 py-6"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See What I Do
              </Button>
            </div>
            <p className="text-xs text-white/40">
              No commitment. No jargon. Just a straight conversation about your setup.
            </p>
          </div>

          {/* Right: Visual placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-md aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="text-center text-white/30">
                <Phone className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-sm">IT Infrastructure Partner</p>
                <p className="text-xs mt-1">Modi'in, Israel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
