---
name: getbacktime-design
description: Use this skill to generate well-branded interfaces and assets for GetBackTime — an automation-assessment service for small business owners and consultants — for production work or throwaway prototypes / mocks. Contains the brand voice, color and typography tokens, fonts, logo assets, and recreated UI kits (marketing site + customer dashboard).
user-invocable: true
---

Read the README.md file at the root of this skill, and explore the other available files. The most important files are:

- `README.md` — brand overview, content fundamentals, visual foundations, iconography rules
- `colors_and_type.css` — every color, type, spacing, radius and shadow token. Always import this; never re-invent values.
- `assets/` — logo wordmarks (light + on-dark) and monogram
- `ui_kits/marketing/` — homepage / pricing / story / footer recreated as React JSX
- `ui_kits/dashboard/` — customer-facing dashboard (overview / findings / running automations)

If creating visual artifacts (slides, mocks, throwaway prototypes, landing pages, etc), copy the assets you need out and write static HTML files. Always link `colors_and_type.css` and use the variables — never re-pick colors by eye.

If working on production code, you can copy the JSX components from `ui_kits/` as starting points and read the rules in `README.md` to become an expert in designing with this brand. The voice is **calm, advisory, second-person, time-respecting** — never breathless SaaS hype.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask the questions an experienced designer would ask (audience, surface, tone, level of polish), and then act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Two non-negotiables:
1. Brand Amber (`#D97742`) is the **only** action color. Don't introduce a second.
2. Every button is a **pill** (`border-radius: 9999px`); every card is **12px** rounded.
