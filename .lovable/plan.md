# STAYEST — Premium Company Let & Property Management Website

A multi-page, corporate-grade marketing site aimed at landlords, letting agents, investors and developers, built to drive property assessment enquiries.

## One note on the stack
This project runs on TanStack Start (React 19 + TypeScript + Vite), not Next.js. It gives the same things you asked for — file-based routing, server-side rendering, per-page SEO metadata, fast loads — so everything in the brief is deliverable; only the framework name differs. Tailwind CSS, Framer Motion (Motion for React), reusable components and a clean folder structure all stay exactly as specified.

## Brand system
- Navy `#0F2747` primary, Gold `#C7A34B` secondary, white background, light grey surfaces, dark charcoal text — all as semantic design tokens so nothing is hardcoded.
- Poppins for headings, Inter for body, loaded via the root route.
- Wordmark logo: "STAYEST" in Poppins with letter-spacing and a gold hairline rule, tagline "Premium Company Let & Property Management" beneath. No house or roof icons. Matching square monogram used as the favicon.
- Generous whitespace, rounded corners, soft elevation, restrained glass treatment on the sticky navbar only.

## Pages
1. **Home** — Hero (your exact headline, subheading, two CTAs) → Benefits (8 cards) → Services overview → Why Choose Us with animated statistics → How It Works (6-step vertical/horizontal timeline) → Areas Covered → Testimonials → FAQ accordion → Property Assessment form → Footer.
2. **About** — story, values, credibility, leadership placeholder.
3. **Services** — all 7 services with detail sections and CTA.
4. **Guaranteed Rent** — dedicated landing page: how it works, what's covered, comparison against traditional letting, FAQ, CTA.
5. **Company Let** — what a company let is, landlord protections, suitability, CTA.
6. **Why Choose Us** — differentiators, process quality, stats, testimonials.
7. **Areas We Cover** — regional coverage grid with expansion note.
8. **FAQs** — grouped accordions with FAQPage schema.
9. **Blog** — index plus article template using local content data (ready to swap for a CMS or database later).
10. **Contact** — full enquiry form (Name, Email, Phone, Property Address, Bedrooms, Property Type, Message) plus contact details and office info.
11. **Privacy Policy, Terms, Cookies** — app-owner-maintained legal pages with placeholder-flagged company details for you to confirm.

## Forms
Both the home assessment form and contact form use a shared validated form component (Zod validation, accessible labels and error messages, success state). Submissions are handled server-side and logged; wiring them to a database or email delivery is a small follow-up once you confirm where enquiries should land.

## Motion
Scroll-triggered fade and slide reveals on section entry, count-up statistics, subtle card hover lift, smooth anchor scrolling, respected `prefers-reduced-motion`. Nothing bouncy or decorative.

## Accessibility & SEO
Semantic landmarks, single H1 per page, visible focus rings, keyboard-navigable nav/accordions/forms, AA contrast. Per-page title, description, Open Graph and Twitter tags; JSON-LD for Organization, LocalBusiness, Service, FAQPage and BreadcrumbList; sitemap and robots updated.

## Imagery
Generated placeholders only: modern UK apartment interiors, professional business meetings, city residential exteriors. No beach or holiday imagery.

## Technical notes
- Routes in `src/routes/*`, shared UI in `src/components/` split into `layout/`, `sections/`, and `ui/` primitives; page content (services, benefits, FAQs, areas, testimonials, blog posts) in typed data modules under `src/content/` so copy edits never touch JSX.
- Design tokens in `src/styles.css` via `@theme inline`; Button/Card/Section/Stat/Accordion primitives with variants.
- Layout shell already anticipates the future additions: an authenticated route group can be dropped in for the Landlord Portal and Property Dashboard, the navbar supports a right-side account slot, content data modules can be swapped for API/CMS reads, and a persistent widget slot in the root layout is reserved for live chat or an AI assistant. No redesign needed to add them.

## Out of scope for this build
Landlord Portal, dashboard, booking, CRM, live chat and property listings are architected for but not implemented.
