# S. A Event's and Manpower Service — Turnkey Corporate Events & Production Collective

[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-gold?style=for-the-badge)](LICENSE)

An ultra-modern, high-converting digital platform engineered for **S. A Event's and Manpower Service** — Kolkata's premier corporate event management, stage engineering, and turnkey experiential production collective. Designed with an editorial luxury aesthetic, cinematic dark-mode palette, GPU-accelerated scroll animations, and interactive client conversion funnels.

---

## 🏢 Business & Contact Details

* **Company Name:** S. A Event's and Manpower Service
* **Studio & Headquarters:** 22/a gora chand lane, Kolkata, West Bengal
* **Direct Hotline / WhatsApp:** [+91 76001 49422](tel:+917600149422)
* **Executive Inbox:** [s.aeventsandmanpowerservice@gmail.com](mailto:s.aeventsandmanpowerservice@gmail.com)
* **Official Instagram:** [@s.aeventsandmanpowerservice](https://www.instagram.com/s.aeventsandmanpowerservice/)

---

## ✨ Key Highlights & Features

### 1. Cinematic Visual Architecture
- **Editorial Typography:** Harmonious pairing of *Plus Jakarta Sans* for contemporary legibility and *Instrument Serif* for luxury editorial elegance.
- **Warm Light/Dark Rhythm:** Seamless transitions between deep navy/midnight ink (`#070b1f`), champagne gold accents (`#c9a96a`), and warm tactile ivory (`#f7f5f0`).
- **Micro-Interactions & Transitions:** Hover elevation physics, image scaling (`scale-105`), iris glow radials, and synchronized entrance reveals.

### 2. Multi-Page Architecture (Client-Side Hash Routing)
- **Home Page (`/`):** Full agency showcase covering heritage, specialist capabilities, operational differentiators, horizontal stages, process timeline, client testimonials, and latest insights.
- **Dedicated About Page (`#/about`):**
  - Origin story, core leadership principles, and 7-stage production philosophy.
  - Interactive board of directors profile matrix and production statistics.
- **Dedicated Services Catalog (`#/services`):**
  - 9 turnkey specialist practices (Corporate Events, Conferences, Product Launches, Trade Shows, Award Ceremonies, Entertainment, Team Building, Celebrations, Virtual & Hybrid).
  - 9 interactive category filter pills with live count indicators.
  - Alternating layout cards with detailed scope of work, technical inclusions, and direct quote requests.
- **Dedicated Portfolio Page (`#/portfolio`):**
  - Full-page showcase featuring 12 milestone productions across 6 categories.
  - Interactive category filter tabs with dynamic count badges (`Corporate Events 3`, `Conferences 3`, `Product Launches 2`, etc.).
  - Breadcrumb navigation (`Home / Portfolio`) and bottom proposal banner.
- **Dedicated Clients & Case Studies Page (`#/clients`):**
  - 16-corporate-client identity matrix with sector tags and monogram badges.
  - 4 featured deep-dive case studies with key business metric pills.
  - 6 verified client testimonials with 5-star ratings.
  - 6 national industry affiliations and production standards badges.
- **Dedicated Event Gallery (`#/gallery`):**
  - 4-column responsive masonry photo and video grid.
  - 6 category tabs (`All`, `Photo Gallery`, `Video Gallery`, `Event Highlights`, `Event Photos`, `Behind The Scenes`).
  - Interactive HD Cinema Video Player modal with scrub bar, play/pause, timecode, and volume controls.
  - High-res photo lightbox with keyboard navigation (`Esc`, Next/Prev chevrons).
- **Dedicated Contact Us Page (`#/contact`):**
  - Executive headquarters desk information with direct phone, email, and Kolkata address.
  - Interactive contact inquiry form with automatic WhatsApp / mailto message formatting.
  - Custom SVG social media badges (Instagram 5-color radial gradient squircle, LinkedIn, Facebook, YouTube).
- **Multi-Step Proposal & RFP Engine (`#/request-a-quote`):**
  - 3-step interactive onboarding flow:
    - **Step 1:** Event nature (9 options) + multi-select required services (10 tags).
    - **Step 2:** Scale, guest capacity chips, destination city, target dates, and custom brief notes.
    - **Step 3:** Contact details, NDA requirement toggle, and instant dispatch via WhatsApp/Email.
  - Live trust guarantees and direct concierge hotlines.

### 3. Specialized Interactive Components
- **Smart Navbar:** Auto-hides on downward scroll, smoothly reappears on upward scroll, with mobile navigation drawer and active page tracking.
- **Hero Crossfade Canvas:** Auto-cycling high-res slider with staggered line-by-line entrance typography animations on fresh page load.
- **Service Rows:** Horizontal practice cards with strictly scoped cursor-following thumbnail preview popups and direct `Explore services ↗` routing.
- **Why Choose Us Section:** IntersectionObserver-driven counter animating from 0 to 72, accompanied by interactive feature cards with dynamic hover states.
- **Horizontal Scroll Carousel:** Pinned 340vh viewport tracking 6 panoramic stage cards moving horizontally on vertical scroll.
- **Testimonial Slider:** Prev/Next controls, active counter indicator (`01 / 06`), and 6 segmented progress tracking bars.
- **Floating Controls:** Smooth circular Scroll-to-Top button paired with an instant WhatsApp concierge widget.
- **Footer:** Pre-footer headline banner, 4-column directory, newsletter subscription pill input, high-contrast social badges, and a giant `17vw` brand watermark.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/) with Fast Refresh
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@theme` token customization
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Linter:** [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

```
├── public/                 # Static assets & favicon
├── src/
│   ├── components/         # Modular React UI components
│   │   ├── AboutPage.jsx           # Dedicated About Us multi-page component
│   │   ├── AboutSection.jsx        # Agency story & metrics (Homepage)
│   │   ├── BookingModal.jsx        # Quick proposal drawer modal
│   │   ├── ClientsPage.jsx         # Dedicated 16-client matrix & case studies page
│   │   ├── ContactPage.jsx         # Dedicated Contact Us & inquiry form page
│   │   ├── CostCalculator.jsx      # Standalone estimation utility
│   │   ├── FeaturedEvents.jsx      # Horizontal scroll stage showcase
│   │   ├── Footer.jsx              # Pre-footer CTA, directory & watermark
│   │   ├── GalleryPage.jsx         # Dedicated 4-col masonry gallery & video player
│   │   ├── Hero.jsx                # Full-bleed slider with entrance reveals
│   │   ├── IndustriesSection.jsx   # 12 industry sectors with gold hover
│   │   ├── InsightsSection.jsx     # Editorial articles & guides
│   │   ├── Navbar.jsx              # Smart auto-hide navigation header
│   │   ├── PortfolioPage.jsx       # Dedicated 12-event portfolio page
│   │   ├── PortfolioSection.jsx    # Homepage selected portfolio preview
│   │   ├── ProcessSection.jsx      # 5-stage production methodology
│   │   ├── ProposalBanner.jsx      # Bottom proposal card + 4-col contact desk
│   │   ├── ProposalPage.jsx        # 3-step interactive RFP proposal flow
│   │   ├── ServicesPage.jsx        # Dedicated 9-practice services catalog
│   │   ├── ServicesSection.jsx     # Row strips with hover image popups
│   │   ├── TestimonialsSection.jsx # Editorial quote slider & brand marquee
│   │   ├── WhatsAppButton.jsx      # Floating WhatsApp & Scroll-To-Top button
│   │   └── WhyChooseUs.jsx         # NPS counter & operational edge cards
│   ├── data/
│   │   └── eventsData.js           # Structured datasets & practice specs
│   ├── App.jsx                     # Root application with hash routing
│   ├── index.css                   # Global Tailwind theme tokens & fonts
│   └── main.jsx                    # Application entry point
├── index.html              # HTML shell with Google Fonts & meta tags
├── netlify.toml            # Netlify deployment configuration
├── vercel.json             # Vercel deployment configuration
├── vite.config.js          # Vite build & plugin settings
├── package.json            # Scripts & project dependencies
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or higher recommended).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/craftingwebb/Builder_web.git
   cd Builder_web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with Hot Module Replacement (HMR).

---

## 📦 Production Build

To compile a production-ready, minified bundle:
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory.

To locally preview the production build:
```bash
npm run preview
```

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your code to the GitHub repository: `https://github.com/craftingwebb/Builder_web.git`.
2. Connect your repo in [Vercel](https://vercel.com/).
3. Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`.
4. Click **"Deploy"**. The included `vercel.json` ensures all SPA routes function seamlessly.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
