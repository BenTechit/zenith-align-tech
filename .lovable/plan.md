

## Plan: Remove CMS Brand + Add Privacy Compliance Section

### 1. Remove CMS from brand logos
In `src/components/WhyBentechSection.tsx`, delete the `{ name: "CMS", src: "" }` entry and revert to simple `<img>` rendering (remove the conditional `brand.src` check since all remaining brands have icons).

### 2. Add translations for the new Compliance section
In `src/translations.ts`, add a new `compliance` key under both `en` and `he` with:
- Headline, subtitle, intro text
- 3-4 bullet points covering the process (assessment, gap analysis, implementation, ongoing support)
- CTA text

**English content outline:**
- Headline: "Privacy Protection Compliance for Your Business"
- Subtitle: "Many businesses don't realize they're required to meet Israeli data protection regulations."
- Bullets covering: legal requirement awareness, security assessment with consultants, gap identification, technical implementation
- CTA: "Schedule a Compliance Review"

**Hebrew content outline:**
- Headline: "עמידה בתקנות הגנת הפרטיות לעסק שלכם"
- Matching professional Hebrew phrasing for all points

### 3. Create `ComplianceSection.tsx`
New component placed between Why Bentech and Risk Section in the page flow. Design:
- Shield/lock icon header
- Strong headline + explanatory paragraph
- 3-4 process bullet points with icons (CheckCircle or similar)
- CTA button linking to contact section
- Styled consistently with existing sections (alternating background, scroll reveal animation)

### 4. Update `Index.tsx`
Import and insert `ComplianceSection` between `WhyBentechSection` and `RiskSection`.

