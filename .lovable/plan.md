

## Plan: Gender-Neutral Hebrew, About Me Section, and Hebrew Default Language

### 1. Set Hebrew as Default Language

**`src/contexts/LanguageContext.tsx`**: Change default state from `"en"` to `"he"`. Also set initial `document.documentElement.dir = "rtl"` and `lang = "he"` on mount.

**`index.html`**: Change `<html lang="en">` to `<html lang="he" dir="rtl">`.

### 2. Fix Gendered Hebrew Throughout Translations

**`src/translations.ts`** — Convert all masculine singular (אתה/אתה מנהל/קבל/ראה/מוכן) to plural forms (אתם/קבלו/ראו/מוכנים) which are gender-neutral in modern Hebrew marketing. Key changes:

- hero.cta1: "קבלו" instead of "קבל"
- hero.cta2: "ראו" instead of "ראה"
- who.intro: "אם אתם מנהלים" instead of "אם אתה מנהל"
- services.h2: "שלא תצטרכו" instead of "שאתה לא תצטרך"
- services.cta: "קבלו...אגיד לכם"
- why.blocks: "אתם מדברים", "אתם יודעים"
- risk.cards: "שאתם לא מקבלים" instead of "שאתה לא מקבל"
- risk.cta: "קבעו" instead of "קבע"
- cta.h2: "מוכנים" instead of "מוכן"
- cta.steps: "אתם יוצרים", "ספרו לי"
- cta.button: "קבלו"
- contact.send: "שלחו"
- contact.error/quote: plural forms
- All other 2nd-person singular → plural

### 3. Create About Me Section

**New file: `src/components/AboutMeSection.tsx`**
- Placed between Hero and Who I Help in `Index.tsx`
- Two-column layout: placeholder photo on left, bio text on right
- Bio text from translations (bilingual)
- Below: a small gallery grid (3 placeholders) for lab photos
- Light background (`#F8F9FA`) to contrast with the dark hero above
- Styled placeholder areas with camera icons so photos can be uploaded later

**`src/translations.ts`** — Add `about` section:
- `h2`: "Meet Ben Goldenberg" / "הכירו את בן גולדנברג"
- `bio`: Short paragraph about background, experience, hands-on approach
- `labTitle`: "Inside the Lab" / "בתוך המעבדה"

**`src/pages/Index.tsx`** — Import and add `<AboutMeSection />` between `<HeroSection />` and `<WhoIHelpSection />`.

### Files Modified
- `src/contexts/LanguageContext.tsx` — Default to Hebrew
- `index.html` — Set `lang="he" dir="rtl"`
- `src/translations.ts` — Gender-neutral Hebrew + about section translations
- `src/components/AboutMeSection.tsx` — New component
- `src/pages/Index.tsx` — Add AboutMeSection

