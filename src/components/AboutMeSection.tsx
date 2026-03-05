import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import benPhoto from "@/assets/ben-photo.jpg";
import labPhoto from "@/assets/lab-photo.png";

const AboutMeSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].about;
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 sm:py-20 md:py-28 scroll-mt-20" style={{ backgroundColor: "#F8F9FA" }}>
      <div ref={ref} className={`container mx-auto px-4 sm:px-6 reveal ${visible ? "visible" : ""}`}>
        {/* Bio row */}
        <div className="grid md:grid-cols-5 gap-10 items-center mb-14">
          {/* Photo */}
          <div className="md:col-span-2 flex justify-center">
            <img
              src={benPhoto}
              alt="Ben Goldenberg"
              className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl object-cover shadow-lg"
            />
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

        {/* Lab photo */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-5">{tr.labTitle}</h3>
          <img
            src={labPhoto}
            alt={lang === "he" ? "מעבדת התיקונים של בנטק" : "Bentech Repair Lab"}
            className="w-full rounded-xl shadow-lg object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
