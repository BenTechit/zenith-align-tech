import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl" lang="he">
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">מדיניות פרטיות</h1>

        <div className="space-y-6 text-base text-foreground leading-relaxed">
          <p>
            Bentech ("אנחנו", "שלנו") מכבדת את פרטיות המשתמשים באתר bentechit.com ("האתר").
            מדיניות זו מסבירה אילו נתונים נאסף, כיצד נשתמש בהם וכיצד אנו מגינים עליהם,
            בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, ותקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017.
          </p>

          <h2 className="text-xl font-semibold mt-8">מידע שאנו אוספים</h2>
          <p>
            כאשר אתם ממלאים את טופס יצירת הקשר באתר, אנו אוספים את הפרטים הבאים:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>שם מלא</li>
            <li>מספר טלפון</li>
            <li>כתובת דואר אלקטרוני (אופציונלי)</li>
            <li>שם העסק (אופציונלי)</li>
            <li>תיאור הבעיה או השירות המבוקש</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">שימוש במידע</h2>
          <p>המידע שנאסף ישמש אך ורק למטרות הבאות:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>יצירת קשר חוזר עמכם בנוגע לפנייתכם</li>
            <li>מתן הצעת מחיר או שירות IT מותאם</li>
            <li>שיפור השירותים שלנו</li>
          </ul>
          <p>
            לא נעביר, נמכור או נשתף את המידע שלכם עם צדדים שלישיים, למעט כנדרש על פי חוק.
          </p>

          <h2 className="text-xl font-semibold mt-8">אבטחת מידע</h2>
          <p>
            אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלכם מפני גישה בלתי
            מורשית, שינוי, חשיפה או השמדה. הנתונים מועברים בחיבור מוצפן (HTTPS).
          </p>

          <h2 className="text-xl font-semibold mt-8">זכויות המשתמש</h2>
          <p>
            בהתאם לחוק הגנת הפרטיות, יש לכם זכות לעיין במידע שנאסף אודותיכם,
            לתקן אותו או לבקש את מחיקתו. לבקשות אלה, פנו אלינו באמצעות פרטי
            הקשר שלהלן.
          </p>

          <h2 className="text-xl font-semibold mt-8">עוגיות (Cookies)</h2>
          <p>
            האתר אינו משתמש בעוגיות מעקב או כלי אנליטיקה של צד שלישי.
          </p>

          <h2 className="text-xl font-semibold mt-8">יצירת קשר</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>טלפון: <a href="tel:+972526379747" className="text-primary hover:underline font-medium">052-637-9747</a></li>
            <li>דרך <Link to="/#contact" className="text-primary hover:underline font-medium">טופס יצירת הקשר</Link> באתר</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">עדכונים למדיניות</h2>
          <p>
            אנו עשויים לעדכן מדיניות זו מעת לעת. עדכון אחרון: מרץ 2026.
          </p>
        </div>

        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline font-medium">← חזרה לעמוד הראשי</Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
