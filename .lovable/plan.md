

## Plan: Add Reviews Section + Clean Up Em-Dashes

### 1. Add a Reviews/Testimonials Section

Create a new `ReviewsSection.tsx` component placed between **WhyBentechSection** and **RiskSection** in the page flow. This section will display customer reviews in a clean card grid.

**Design:**
- 2-3 column responsive grid of review cards
- Each card shows: reviewer name, business/role (optional), star rating, and quote text
- Reviews stored in `translations.ts` so they work in both EN and HE
- Start with 3-4 placeholder reviews that you can easily replace with real ones
- Clean, minimal design matching the existing card style (white bg, border, shadow-sm)

**Files:**
- `src/translations.ts` — add `reviews` key to both `en` and `he` with heading, subtitle, and an array of review objects
- `src/components/ReviewsSection.tsx` — new component with card grid, scroll reveal animation
- `src/pages/Index.tsx` — import and place `<ReviewsSection />` between WhyBentech and Risk

### 2. Replace Em-Dashes Throughout All Text

The em-dash character ` — ` appears ~30+ times across both EN and HE translations, giving a distinctly AI-generated tone. The plan is to rewrite each occurrence naturally:

**Replacement strategy (not a find-and-replace; each one reviewed individually):**
- **Lists/enumerations**: replace with commas, periods, or "including" / "like"
  - `"Microsoft 365, Google Workspace, cloud infrastructure — and hardware"` → `"...cloud infrastructure, network setup, and hardware deployment."`
- **Explanatory clauses**: replace with periods (split into two sentences) or colons
  - `"I fix it fast — and fix it when something does"` → `"I fix it fast. And when something does break, I'm on it."`
- **Contrast/emphasis**: replace with periods or restructure
  - `"not a helpdesk — not a rotating team"` → `"not a helpdesk. Not a rotating team."`
- **Hebrew text**: same approach, using periods, commas, or restructured sentences

Each of the ~30 em-dash instances in `translations.ts` will be rewritten individually to sound natural and human.

**File:** `src/translations.ts` — all em-dash instances replaced with natural punctuation

### Section Order After Changes

```text
Navbar
Hero
About Me
Repair Lab
Compliance
Who I Help
Services
Why Bentech
Reviews        ← NEW
Risk
Contact Form
Footer
```

