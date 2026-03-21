import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl" lang="he">
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">תנאי שימוש</h1>

        <div className="space-y-6 text-base text-foreground leading-relaxed">
          <p>
            ברוכים הבאים לאתר bentechit.com ("האתר"), המופעל על ידי Bentech ("אנחנו").
            השימוש באתר מהווה הסכמה לתנאים המפורטים להלן.
          </p>

          <h2 className="text-xl font-semibold mt-8">שימוש באתר</h2>
          <p>
            האתר מספק מידע אודות שירותי IT לעסקים ולקוחות פרטיים באזור מודיעין והסביבה.
            השימוש באתר מותר למטרות אישיות ועסקיות בלבד, בהתאם לכל דין.
          </p>

          <h2 className="text-xl font-semibold mt-8">קניין רוחני</h2>
          <p>
            כל התכנים באתר, לרבות טקסטים, עיצוב, לוגואים, גרפיקה וקוד, הם רכושה
            של Bentech ואין לעשות בהם שימוש ללא אישור מראש ובכתב.
          </p>

          <h2 className="text-xl font-semibold mt-8">הגבלת אחריות</h2>
          <p>
            המידע באתר מוצג "כמות שהוא" (as-is) ואינו מהווה ייעוץ מקצועי מחייב.
            Bentech אינה אחראית לנזק ישיר או עקיף הנובע משימוש במידע המוצג באתר.
          </p>

          <h2 className="text-xl font-semibold mt-8">שירותים והצעות מחיר</h2>
          <p>
            כל הצעות המחיר והשירותים המוצגים באתר הם לצורכי מידע כללי בלבד.
            המחירים והתנאים הסופיים ייקבעו בהסכם אישי מול הלקוח.
          </p>

          <h2 className="text-xl font-semibold mt-8">קישורים חיצוניים</h2>
          <p>
            האתר עשוי להכיל קישורים לאתרים חיצוניים. אנו לא אחראים לתוכן,
            למדיניות הפרטיות או לשירותים של אתרים אלה.
          </p>

          <h2 className="text-xl font-semibold mt-8">שינויים בתנאים</h2>
          <p>
            אנו שומרים לעצמנו את הזכות לעדכן תנאים אלה בכל עת. עדכון אחרון: מרץ 2026.
          </p>

          <h2 className="text-xl font-semibold mt-8">יצירת קשר</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>טלפון: <a href="tel:+972526379747" className="text-primary hover:underline font-medium">052-637-9747</a></li>
            <li>דרך <Link to="/#contact" className="text-primary hover:underline font-medium">טופס יצירת הקשר</Link> באתר</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">דין חל וסמכות שיפוט</h2>
          <p>
            על תנאי שימוש אלה יחולו דיני מדינת ישראל. סמכות השיפוט הבלעדית תהיה
            לבתי המשפט המוסמכים במחוז מרכז.
          </p>
        </div>

        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline font-medium">← חזרה לעמוד הראשי</Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
