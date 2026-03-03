# The Renewal Protocol — Semi-Annual Liver & Kidney Cleanse

A full-page marketing website for "The Renewal Protocol," a semi-annual liver and kidney cleanse product, built as a static HTML/CSS/JavaScript site.

## ✅ Completed Features

- **Responsive Design** — Mobile-first, works on all screen sizes
- **Bilingual Support** — Full English / Spanish language toggle (EN/ES)
- **Sticky Navbar** — Frosted glass effect on scroll with language switcher
- **Animated Sections** — Fade-up reveal animations on scroll (IntersectionObserver)
- **Hero Section** — Full-height landing with stats (35M / 90% / $90K+)
- **Forbidden Ingredients Table** — 8 banned additives with data on where found, where banned, and health concerns
- **24% Problem Section** — CKD research data with imagery
- **Dialysis Machine Section** — Business model expose with 5-step pipeline
- **Disparity Section** — Racial health disparities (4×, 2×, 90%)
- **Protocol Tabs** — 3-phase interactive tabbed protocol (Phases 1/2/3)
- **7-Day Window Section** — Lifestyle guidelines with imagery
- **Results Grid** — 6-card results carousel with images
- **Evidence Table** — 8 cited scientific sources
- **Order Section** — Complete order form with all fields
- **Email Order Flow** — Form generates mailto: link to CesarJames@mail.com
- **Success State** — Post-submission order summary confirmation screen
- **Warnings Section** — FDA disclaimer & medical warnings
- **Final CTA Section** — "Spring. Fall. Seven Days Each."
- **Back to Top Button** — Animated scroll-to-top button
- **FDA Disclaimer** — Full disclaimer footer

## 📂 File Structure

```
index.html          — Main page (all sections)
js/
  app.js            — All JavaScript (data, rendering, lang toggle, form)
source/             — Downloaded source reference files (not deployed)
README.md           — This file
```

## 🔗 Functional Entry Points

| Path | Description |
|------|-------------|
| `index.html` | Main website page |
| `index.html#truth` | Jumps to Forbidden Ingredients section |
| `index.html#protocol` | Jumps to The Renewal Protocol section |
| `index.html#order` | Jumps to Order section |
| `index.html#order-form` | Jumps directly to the order form |

## 🗂️ Data Models

All content data is stored in `js/app.js` under the `DATA` object:

- `DATA.ingredients` — 8 banned food additives (EN + ES)
- `DATA.evidence` — 8 scientific study citations (EN + ES)
- `DATA.disparity` — 3 racial health disparity stats (EN + ES)
- `DATA.pipeline` — 5-step dialysis industry pipeline (EN + ES)
- `DATA.phases` — 3 protocol phases with ingredient descriptions (EN + ES)
- `DATA.results` — 6 expected results with images (EN + ES)
- `DATA.lifestyle` — 4 lifestyle guidelines with images (EN + ES)
- `DATA.included` — 6 kit components list (EN + ES)

## 🛠️ Technologies Used

- **HTML5** — Semantic markup
- **Tailwind CSS** (CDN) — Utility-first styling
- **Vanilla JavaScript** — No frameworks, all custom
- **Google Fonts** — Inter typeface
- **IntersectionObserver API** — Scroll-triggered animations

## 📬 Order Contact

Orders are submitted via mailto: to `CesarJames@mail.com`

## ⚠️ Features Not Yet Implemented

- Server-side order processing / payment gateway
- Email confirmation system
- CMS for content management
- Analytics integration
- SEO meta tags / Open Graph

## 🚀 Next Steps

1. Replace Tailwind CDN with production build
2. Add real payment processing (Stripe/PayPal)
3. Set up order management backend
4. Add SEO meta tags and Open Graph
5. Add Google Analytics
6. Optimize images (WebP format, lazy loading)
