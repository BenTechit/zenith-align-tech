

# Bentech Landing Page — Complete Redesign Plan

This is a full rebuild of the site's visual identity, content, and structure. The current dark-mode glassmorphism SaaS aesthetic will be replaced with a clean, light-mode, conversion-focused business landing page.

---

## Summary of Changes

The entire site shifts from a dark-mode tech aesthetic to a light professional design with dark navy hero, alternating white/gray sections, orange CTAs, and strong blue standalone CTA. All copy is replaced with the provided content. The bilingual toggle is removed — English is primary with Hebrew SEO phrases embedded in hero and footer. The phone number changes to +972-54-499-1540.

---

## Color System Overhaul

Replace the current dark theme CSS variables in `src/index.css`:

| Element | Current | New |
|---------|---------|-----|
| Hero bg | Dark with cyan glow | `#0F1B2D` navy |
| Primary accent | Cyan `190 80% 50%` | Orange `#F97316` |
| Sections | All dark | Alternating white `#FFFFFF`, light gray `#F8F9FA`, `#EEF2F7` |
| CTA section | Dark with cyan | Strong blue `#2563EB` |
| Risk section | — (new) | Dark navy `#1A1A2E` |
| Text | Light on dark | Dark `#1A1A1A` on light, white on dark sections |

Remove glassmorphism utilities (`glass`, `glass-hover`, `glow-text`, `glow-border`, `grid-overlay`, `gradient-radial`, `text-gradient`). Replace with simple card styles.

---

## Section Structure (7 sections + header + footer)

Current 10 sections → 7 new sections in exact order specified:

1. **Hero** — Dark navy bg, text-left + image-right layout, two CTAs (orange primary, ghost secondary), Hebrew SEO line, trust micro-copy
2. **Who I Help** — Light gray `#F8F9FA`, two-column (bullets left, callout box right)
3. **Services** — `#EEF2F7`, 3-column card grid with detailed bullet lists, section CTA
4. **Why Choose Bentech** — White, 2x2 feature grid
5. **Risk Section** — Dark navy `#1A1A2E`, 3 dark callout cards, closing italic line + orange CTA
6. **CTA Standalone** — Strong blue `#2563EB`, 3-step numbered process, white button
7. **Contact** — `#F3F4F6`, 2-column (form left, contact details right)

---

## Files to Create/Modify

### New files:
- `src/components/WhoIHelpSection.tsx` — Replaces ProblemSection
- `src/components/RiskSection.tsx` — New dark section about IT consequences
- `src/components/StandaloneCTASection.tsx` — Blue CTA with 3-step process

### Files to heavily rewrite:
- `src/index.css` — New light-mode color system, remove glass utilities
- `src/i18n/translations.ts` — All new English copy (Hebrew translations removed except embedded SEO phrases)
- `src/pages/Index.tsx` — New section order and imports
- `src/components/Navbar.tsx` — Sticky header with phone number top-right, remove language toggle, simpler nav links
- `src/components/HeroSection.tsx` — Complete rewrite: split layout, new copy, orange CTA
- `src/components/ServicesSection.tsx` — 3-column cards with detailed bullet lists
- `src/components/WhyBentechSection.tsx` — 2x2 grid with new copy
- `src/components/ContactFormSection.tsx` — 2-column layout with form + contact details
- `src/components/Footer.tsx` — Simple text footer with Hebrew SEO line
- `src/components/CTASection.tsx` — Remove (replaced by StandaloneCTASection)

### Files to delete (no longer needed):
- `src/components/ProblemSection.tsx` (replaced by WhoIHelpSection)
- `src/components/HardwareSection.tsx` (merged into Services card 3)
- `src/components/TechnicalExpertiseSection.tsx` (content merged into Why Choose)
- `src/components/PreventionSection.tsx` (replaced by RiskSection)
- `src/i18n/LanguageContext.tsx` — Simplify or remove (no toggle needed, but keep for SEO Hebrew strings)

### SEO changes in `index.html`:
- Update `<title>` and `<meta name="description">`
- Add LocalBusiness JSON-LD schema in `<script type="application/ld+json">`

---

## Design Principles

- **No animations/parallax/gimmicks** — Remove all framer-motion animations. Clean static layout.
- **Mobile-first** — All CTAs full-width on mobile. Responsive grid breakpoints.
- **"I" and "Ben" throughout** — Never "our team" or "we."
- **High-contrast CTAs** — Orange `#F97316` buttons on light backgrounds, white buttons on blue.
- **Inter font** — Already loaded, keep it.
- **WhatsApp link** — Clickable `https://wa.me/972544991540` in contact section.

---

## Translation/i18n Approach

Since bilingual toggle is being removed, the LanguageContext can be simplified. English is the only rendered language. Hebrew SEO phrases are hardcoded directly in the Hero and Footer components. The translations file becomes a simple constants file for English content only.

---

## Contact Form

Keep the existing Google Sheets integration (`SHEETS_URL`) but update the form fields to: Name, Business Name, Phone, Email, Brief description. Update the fetch payload accordingly.

