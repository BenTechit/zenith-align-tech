import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WAIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.67 4.797 1.836 6.787L2 30l7.43-1.812A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.39 19.342c-.35-.175-2.072-1.022-2.394-1.138-.32-.115-.554-.174-.787.175-.234.35-.905 1.138-1.11 1.371-.204.233-.408.263-.758.088-.35-.175-1.478-.545-2.815-1.737-1.04-.928-1.742-2.074-1.946-2.424-.203-.35-.022-.539.153-.713.157-.156.35-.408.524-.611.175-.204.233-.35.35-.583.116-.233.058-.437-.029-.612-.088-.175-.787-1.897-1.078-2.598-.284-.682-.573-.59-.787-.6l-.67-.012a1.286 1.286 0 0 0-.932.437c-.32.35-1.224 1.197-1.224 2.918s1.253 3.385 1.427 3.619c.175.233 2.466 3.765 5.977 5.277.835.36 1.487.575 1.995.737.838.267 1.601.229 2.204.139.672-.1 2.072-.847 2.365-1.664.29-.816.29-1.516.203-1.663-.086-.146-.32-.233-.67-.408z" />
  </svg>
);

const FinalCTASection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="py-14 sm:py-20 scroll-mt-20" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={ref} className={`max-w-2xl mx-auto text-center reveal ${visible ? "visible" : ""}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4" dir="rtl">
            צריך עזרה עם המחשב?
          </h2>
          <p className="text-base text-white/80 mb-8" dir="rtl">
            שלח הודעה או התקשר – אחזור אליך בהקדם
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              variant="hero"
              size="lg"
              className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 btn-glow w-full sm:w-auto"
              asChild
            >
              <a
                href="https://wa.me/972526379747?text=%D7%94%D7%99%D7%99%20%D7%91%D7%9F%2C%20%D7%90%D7%A0%D7%99%20%D7%A6%D7%A8%D7%99%D7%9A%20%D7%A2%D7%96%D7%A8%D7%94%20%D7%A2%D7%9D%3A%20________"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WAIcon className="w-5 h-5 ml-2" />
                שלח הודעה בוואטסאפ
              </a>
            </Button>

            <Button
              variant="heroOutline"
              size="lg"
              className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
              asChild
            >
              <a href="tel:+972526379747">
                <Phone className="w-5 h-5 ml-2" />
                התקשר עכשיו
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
