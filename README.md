# GetBackTime — Design System

GetBackTime is a service that **assesses the operations of small business owners and consultants**, identifies the repetitive work clogging their day, and helps them automate the obvious — without needing them to become technologists. We hand customers their time back, one workflow at a time.

The brand voice is **calm, advisory, and time-respecting**. Think of a thoughtful business friend who has read every spreadsheet you've ever sent them and isn't going to make you feel bad about any of it. The visuals follow: warm cream paper, a single terracotta-amber accent for action, a sage secondary for the operational/dashboard side, and a deep warm-near-black ("dusk") used for hero bands and the footer in place of the conventional saas-blue.

> **Source / context:** No existing codebase, Figma, or asset library was attached. The visual structure (pill CTAs, hero band over light pricing, three-tier comparison, code-mockup-on-dark) is borrowed structurally from a brief shared at kickoff; **all colors, typography, voice, illustration approach, and copy were invented for GetBackTime.** If you have brand assets, please attach them and we'll re-pin everything to the source of truth.

---

## Index

| File / Folder | What it is |
|---|---|
| `README.md` | This file. Brand overview + voice + visual foundations + index. |
| `colors_and_type.css` | Single source of truth for color, type, spacing, radius, shadow tokens. Import this into anything. |
| `SKILL.md` | Drop-in skill descriptor (works in Claude Code) so the brand can be invoked as `getbacktime-design`. |
| `assets/` | Logo wordmark (light + on-dark), monogram, favicon. |
| `fonts/` | Web-font fallbacks. (Currently using Google-hosted Newsreader + Hanken Grotesk + JetBrains Mono — no local TTFs needed.) |
| `preview/` | Small specimen cards rendered in the Design System tab — type, color, spacing, components, logos. |
| `ui_kits/marketing/` | Marketing-site kit (homepage, pricing, assessment landing) as JSX components. |
| `ui_kits/dashboard/` | Customer dashboard kit (assessment results, automation queue) as JSX components. |

---

## Content fundamentals

**Tone:** Plain-spoken, warm, lightly editorial. We sound like a smart operator at the next desk, not a SaaS landing page. Sentences are short. We trust the reader.

**Person:** Second person (**"you"**, "your business") throughout. First-person plural (**"we"**) when describing what the GetBackTime team does. Never first-person singular.

**Casing:** Sentence case for everything — headlines, buttons, navigation, card titles. No Title Case. Acronyms (CRM, QuickBooks) keep their native casing.

**Numbers:** Numerals from 1 upward in all UI ("Save 4 hours a week", not "four hours"). Spell out ranges with an en-dash ("3–6 hours"). Hour figures are the unit of value — preferred over "%" or "x" wherever possible.

**Punctuation:** Em-dashes used sparingly for asides. No exclamation marks except in success toasts. No ALL-CAPS shouting; we use the `micro` eyebrow style for emphasis instead.

**Emoji:** Not used in product UI. Permitted in customer email replies and Slack. Never on the marketing site.

**Vocabulary we use**
- "Get time back" (the brand promise verb)
- "Audit" / "assessment" (what we deliver)
- "Busywork", "repetition", "the same thing every Tuesday"
- "Automation" (always lowercase, never branded)
- "Hand-off" / "running on its own"

**Vocabulary we avoid**
- "AI-powered", "AI-first", "leverage", "synergy", "transformation"
- "Game-changer", "10x", "revolutionary"
- "Effortless" (we acknowledge it takes one good conversation)
- "Solution" as a standalone noun ("our solution")

**Example copy (in voice)**

> **Hero:** Get back the hours your business keeps eating.
> *Subtitle:* We sit with you for an hour, watch how your week actually runs, and hand back a list of the repetitive work worth automating — and the work that isn't.

> **Pricing eyebrow:** Three ways to start.
> *Tier names:* Audit · Audit + Build · Ongoing
> *Tier copy:* "We come in once, look at everything, and leave you with a prioritized list."

> **Empty state:** Nothing flagged yet. Your first audit is scheduled for Tuesday — we'll fill this in after we sit with you.

> **Success toast:** Saved. We'll pick this back up next week.

---

## Visual foundations

### Color
A **warm cream-paper canvas** (`#FBF7EE`) — never a flat #FFF — anchors every surface. Body text is a warm near-black (`#1E1A16`), not pure black, so the page reads like printed paper.

The single brand action color is **Brand Amber `#D97742`** — a clay-terracotta. It carries every primary CTA, every active state, and every link. There is exactly **one** action color across the entire system; if you find yourself reaching for a second, you're solving the wrong problem.

A muted **Sage `#5E7C6E`** is the secondary — used for "operational" surfaces (dashboards, charts, "now running on its own" badges) where amber would feel too loud. Sage is an accent, not a brand replacement.

A 4-color **category palette** (Sky / Plum / Ochre / Clay) tags audit categories — Communications, Reporting, Finance, Operations — and **only** that. Don't use them for buttons, banners, or decoration.

Hero bands and the footer use **Dusk `#2C2722`** — a warm near-black, never blue. On dark surfaces, body type drops to `--gbt-on-dark-muted` (66% white) and the amber CTA stays exactly as it is on light.

### Type
- **Display: Newsreader** (variable serif). Used for hero, h1, h2. Optical sizing on. The serif gives the warmth; the geometry keeps it modern.
- **UI sans: Hanken Grotesk.** Used for h3 down, all body, all UI controls. Friendly, low-personality, readable at 14px.
- **Mono: JetBrains Mono.** Code samples and the occasional table figure.
- **Mixing rule:** Display serif sets headlines; sans does the work. **Never** use serif for buttons, table cells, or labels.
- **Italic display serif** is used very sparingly — usually a single italicized clause inside a hero ("the work that *isn't*"). Don't italicize in body.

### Spacing
4px base unit. Section rhythm is generous on marketing (`section-lg`, 96px) and tight inside the dashboard (`lg`, 24px between cards). Hero bands carry the largest air (`hero`, 120px vertical). The amount of negative space is itself a brand signal — we sell time back, the page should feel unrushed.

### Backgrounds
- **No gradients on hero bands.** Solid Dusk. Atmospheric depth comes from a single soft amber radial glow placed behind the headline (low opacity, no banding).
- **No photography of stock people.** When we do show humans, it's the customer's actual environment — spreadsheets on a real laptop, a clipboard on a counter, a cluttered email inbox. Cool-warm balance, slightly desaturated, never crisp/glossy.
- **Hand-drawn marks** (a single-stroke clock arc, an arrow that loops back, a checkmark) are okay as accents — drawn in amber, never as illustrations of products.

### Borders, corners, shadows
- Cards: `radius-lg` (12px) **always**. Buttons: `radius-full` (pills) **always**. Status badges: pills. Inputs: `radius-md` (8px).
- The default card carries a 1px hairline (`#E8DFD2`) and **no shadow**. Elevation is reserved for floating things — modals, dropdowns, the code-mockup card on the hero. Don't shadow flat documentation cards "for depth"; the hairline is enough.
- A **brand-tinted shadow** (`--gbt-shadow-amber`) is used exclusively under the featured pricing tier and the primary CTA on long pages. It is the visual exclamation point of the system; if it appears more than once on a page, remove one.

### Animation
- **Duration: 160–200ms** for any color/opacity transition; 240ms for transform.
- **Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`** — a gentle settle, no overshoot.
- **No bounces, no springs, no skeumorphic motion.** A button on press subtly darkens and shrinks 1% — that's it. We're selling calm.
- Page-load reveals fade up 8px at the same easing, staggered 40ms per row.

### Hover & press
- **Hover** (default state): primary pill background lightens from `#D97742` → `#E89868`. Secondary outlined buttons gain a `#F1EADE` fill. Cards lift to `shadow-1` and the hairline darkens to `--gbt-hairline-strong`.
- **Press**: amber deepens to `--gbt-brand-amber-deep` (`#B05A28`); button scales `0.99`.
- **Focus**: 2px outline in `--gbt-brand-amber` offset 3px from the element. Visible on keyboard nav only (`:focus-visible`).

### Transparency & blur
Used sparingly. The sticky top nav becomes `rgba(251,247,238,0.85)` with `backdrop-filter: blur(12px)` once the user has scrolled past hero. Modals use a `rgba(31,27,23,0.45)` scrim. **No frosted-glass cards** in normal flow.

### Layout rules
- Max content width: **1200px**, 32px gutters. (Tighter than the 1280px default — the brand reads better in a slightly narrower column.)
- Grid: 12 columns on desktop, 6 on tablet, 4 on mobile.
- Sticky elements: top nav (after scroll), promo strip (above nav, dismissible), assessment progress strip on intake flow.
- The footer is always Dusk and always tall — generous, restful, not a list of links crammed at the bottom.

---

## Iconography

GetBackTime uses **[Lucide](https://lucide.dev)** as its icon system — clean, geometric, single-stroke at 1.75px. Lucide is loaded from CDN; no icon font is bundled.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
<script>lucide.createIcons();</script>
```

```html
<i data-lucide="clock-3" class="gbt-icon"></i>
```

**Defaults:** 20×20px stroke icons, `currentColor`, 1.75px stroke. Two custom-drawn glyphs are checked into `assets/`:
- `assets/logo-mark.svg` — the GetBackTime monogram (clock with amber hand)
- An optional **rolled-back-clock** glyph used as the favicon and the brand "loading" indicator

**Usage rules**
- Stroke icons everywhere. **No filled icons** in the system.
- Never use emoji as an icon in product UI. Emoji is fine in customer Slack/email correspondence only.
- Unicode characters used as glyphs: only `→` (right-facing arrow in inline links — "Read the assessment →") and `·` (middle-dot meta-separator). Nothing else.
- When an icon doesn't exist in Lucide, draw it in the same single-stroke style at 1.75px and check it into `assets/icons/`. Do not import a different icon family.

> **Substitution flag:** Lucide is the closest open match to the hand-drawn-but-precise look the brand wants. If you'd like a custom icon set drawn in-house, flag it and we'll commission one — Lucide is the working stand-in.

---

## Font substitution flag

The system specifies **Newsreader** + **Hanken Grotesk** + **JetBrains Mono** — all loaded from Google Fonts. No local TTF/OTF files are committed because Google-hosted is the canonical delivery. **If you'd prefer a paid display face** (e.g. a custom commission, or licensing Söhne / Editorial New), tell us and we'll swap Newsreader out — every other token will stay put.

---

## Quick start

```html
<link rel="stylesheet" href="colors_and_type.css">
<style>
  body { background: var(--gbt-canvas); color: var(--gbt-ink); margin: 0;
         font-family: var(--gbt-font-sans); }
</style>
<h1 class="gbt-hero-display">Get back the hours your business keeps eating.</h1>
<p class="gbt-subtitle">We sit with you for an hour and hand back what's worth automating.</p>
<button class="gbt-button" style="
  background: var(--gbt-brand-amber); color: var(--gbt-on-primary);
  border: 0; padding: 10px 22px; border-radius: var(--gbt-radius-full);
  cursor: pointer;">Book a free audit</button>
```
