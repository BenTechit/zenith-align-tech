const Accessibility = () => {
  const now = new Date();
  const month = now.toLocaleDateString("he-IL", { month: "long", year: "numeric" });

  return (
    <div className="min-h-screen bg-background" dir="rtl" lang="he">
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">הצהרת נגישות</h1>

        <div className="space-y-6 text-base text-foreground leading-relaxed">
          <p>
            אתר זה שואף לעמוד בדרישות תקן ישראלי IS 5568 (בהתאם להנחיות WCAG 2.1 ברמה AA).
          </p>

          <p>
            אנו מחויבים להנגיש את האתר לכלל המשתמשים, כולל אנשים עם מוגבלויות, ועושים מאמצים
            מתמשכים לשפר את חווית הגלישה עבור כולם.
          </p>

          <p>
            הסקירה האחרונה של נגישות האתר בוצעה ב{month}.
          </p>

          <h2 className="text-xl font-semibold mt-8">יצירת קשר בנושא נגישות</h2>
          <p>
            אם נתקלתם בבעיית נגישות באתר, אנא פנו אלינו ונשמח לסייע:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>טלפון: <a href="tel:+972526379747" className="text-primary hover:underline font-medium">052-637-9747</a></li>
            <li>דרך <a href="/#contact" className="text-primary hover:underline font-medium">טופס יצירת הקשר</a> באתר</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">שפת האתר</h2>
          <p>
            השפה הראשית של האתר היא עברית (RTL). חלק מהתכנים מוצגים גם באנגלית.
          </p>
        </div>

        <div className="mt-12">
          <a href="/" className="text-primary hover:underline font-medium">← חזרה לעמוד הראשי</a>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
