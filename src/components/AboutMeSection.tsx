import { Camera } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutMeSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].about;
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 sm:py-20 md:py-28 scroll-mt-20" style={{ backgroundColor: "#F8F9FA" }}>
      <div ref={ref} className={`container mx-auto px-4 sm:px-6 reveal ${visible ? "visible" : ""}`}>
        {/* Bio row */}
        <div className="grid md:grid-cols-5 gap-10 items-center mb-14">
          {/* Photo placeholder */}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-muted border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground gap-2">
              <Camera className="w-10 h-10" />
              <span className="text-sm font-medium">{lang === "he" ? "תמונה שלי" : "My Photo"}</span>
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              {tr.h2}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {tr.bio}
            </p>
          </div>
        </div>

        {/* Lab gallery */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-5">{tr.labTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video rounded-xl bg-muted border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground gap-2"
              >
                <Camera className="w-8 h-8" />
                <span className="text-xs">{lang === "he" ? `תמונת מעבדה ${i}` : `Lab Photo ${i}`}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
