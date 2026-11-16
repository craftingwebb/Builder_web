# Lumora Events — Experiential Design & Stage Production Platform

[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-gold?style=for-the-badge)](LICENSE)

An ultra-modern, high-converting digital platform engineered for a premier corporate event management and turnkey experiential production collective. Designed with an editorial luxury aesthetic, cinematic dark-mode palette, GPU-accelerated scroll animations, and interactive client conversion funnels.

---

## ✨ Key Highlights & Features

### 1. Cinematic Visual Architecture
- **Editorial Typography:** Harmonious pairing of *Plus Jakarta Sans* for contemporary legibility and *Instrument Serif* for luxury editorial elegance.
- **Warm Light/Dark Rhythm:** Seamless transitions between deep navy/midnight ink (`#070b1f`), champagne gold accents (`#c9a96a`), and warm tactile ivory (`#f7f5f0`).
- **Micro-Interactions & Transitions:** Hover elevation physics, image scaling (`scale-105`), iris glow radials, and synchronized entrance reveals.

### 2. Multi-Page Architecture (Client-Side Hash Routing)
- **Home Page (`/`):** Full agency showcase covering heritage, specialist capabilities, operational differentiators, horizontal stages, process timeline, client testimonials, and latest insights.
- **Dedicated Portfolio Gallery (`#/portfolio`):**
  - Full-page showcase featuring 12 milestone productions across 6 categories.
  - Interactive category filter tabs with dynamic count badges (`Corporate Events 3`, `Conferences 3`, `Product Launches 2`, etc.).
  - Breadcrumb navigation (`Home / Portfolio`) and bottom proposal banner.
- **Multi-Step Proposal & RFP Engine (`#/request-a-quote`):**
  - 3-step interactive onboarding flow:
    - **Step 1:** Event nature (9 options) + multi-select required services (10 tags).
    - **Step 2:** Scale, guest capacity chips, destination city, target dates, and custom brief notes.
    - **Step 3:** Contact details, NDA requirement toggle, and instant dispatch via WhatsApp/Email.
  - Live trust guarantees and direct concierge hotlines.

### 3. Specialized Interactive Components
- **Smart Navbar:** Auto-hides on downward scroll, smoothly reappears on upward scroll, with mobile navigation drawer and active page tracking.
- **Hero Crossfade Canvas:** Auto-cycling high-res slider with staggered line-by-line entrance typography animations on fresh page load.
- **Service Rows:** Horizontal practice cards with strictly scoped cursor-following thumbnail preview popups.
- **Why Choose Us Section:** IntersectionObserver-driven counter animating from 0 to 72, accompanied by interactive feature cards with dynamic hover states.
- **Horizontal Scroll Carousel:** Pinned 340vh viewport tracking 6 panoramic stage cards moving horizontally on vertical scroll.
- **Testimonial Slider:** Prev/Next controls, active counter indicator (`01 / 06`), and 6 segmented progress tracking bars.
- **Floating Controls:** Smooth circular Scroll-to-Top button paired with an instant WhatsApp concierge widget.
- **Footer:** Pre-footer headline banner, 4-column directory, newsletter subscription pill input, and a giant `17vw` brand watermark.

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
│   │   ├── AboutSection.jsx        # Agency story & metrics
│   │   ├── BookingModal.jsx        # Quick proposal drawer modal
│   │   ├── CostCalculator.jsx      # Standalone estimation utility
│   │   ├── FeaturedEvents.jsx      # Horizontal scroll stage showcase
│   │   ├── Footer.jsx              # Pre-footer CTA, directory & watermark
│   │   ├── Hero.jsx                # Full-bleed slider with entrance reveals
│   │   ├── IndustriesSection.jsx   # 12 industry sectors with gold hover
│   │   ├── InsightsSection.jsx     # Editorial articles & guides
│   │   ├── Navbar.jsx              # Smart auto-hide navigation header
│   │   ├── PortfolioPage.jsx       # Dedicated 12-event portfolio page
│   │   ├── PortfolioSection.jsx    # Homepage selected portfolio preview
│   │   ├── ProcessSection.jsx      # 5-stage production methodology
│   │   ├── ProposalBanner.jsx      # Bottom proposal card + 4-col contact desk
│   │   ├── ProposalPage.jsx        # 3-step interactive RFP proposal flow
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
   git clone https://github.com/your-username/lumora-events-web.git
   cd lumora-events-web
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
1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Leave build settings as default (Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`).
5. Click **"Deploy"**. The included `vercel.json` ensures all SPA routes function seamlessly.

### Deploying to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. The included `netlify.toml` automatically configures the build command (`npm run build`), publish directory (`dist`), and SPA redirect rules.
3. Deploy site with one click.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
