import { useScrollReveal } from "@/hooks/useScrollReveal";
import benPhoto from "@/assets/ben-photo.jpg";

const AboutMeSection = () => {
  const { ref: photoRef, visible: photoVisible, className: photoClass } = useScrollReveal(0.08, "left");
  const { ref: textRef, visible: textVisible, className: textClass } = useScrollReveal(0.08, "right");

  return (
    <section className="py-12 sm:py-20 scroll-mt-20" style={{ backgroundColor: "hsl(var(--section-alt))" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-5 gap-10 items-center max-w-4xl mx-auto">
          {/* Photo */}
          <div ref={photoRef} className={`md:col-span-2 flex justify-center ${photoClass} ${photoVisible ? "visible" : ""}`}>
            <img
              src={benPhoto}
              alt="בן גולדנברג, טכנאי IT ממודיעין"
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Text */}
          <div ref={textRef} className={`md:col-span-3 ${textClass} ${textVisible ? "visible" : ""}`} dir="rtl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              קצת עליי
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-3">
              היי, אני בן גולדנברג, טכנאי ומומחה IT ממודיעין.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-3">
              אני נותן שירות למחשבים לבית ולעסקים קטנים – מתיקון תקלות חומרה ועד הקמה וניהול של מערכות, רשתות ו-<span lang="en">Microsoft 365</span>.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-medium">
              המטרה שלי: לפתור בעיות מהר ולתת שירות אמין וברור.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
