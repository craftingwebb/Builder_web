# S. A Event's and Manpower Service — Turnkey Corporate Events & Production Collective

[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Repository](https://img.shields.io/badge/GitHub-s.a__events-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/craftingwebb/s.a_events)
[![License](https://img.shields.io/badge/License-MIT-gold?style=for-the-badge)](LICENSE)

An ultra-modern, high-converting digital platform engineered for **S. A Event's and Manpower Service** — Kolkata's premier corporate event management, stage engineering, and turnkey experiential production collective. Designed with an editorial luxury aesthetic, cinematic dark-mode palette, GPU-accelerated scroll animations, and interactive client conversion funnels.

---

## 🏢 Business & Contact Details

* **Company Name:** S. A Event's and Manpower Service
* **Studio & Headquarters:** 22/a gora chand lane, Kolkata, West Bengal
* **Direct Hotline / WhatsApp:** [+91 76001 49422](https://wa.me/917600149422)
* **Executive Inbox:** [s.aeventsandmanpowerservice@gmail.com](mailto:s.aeventsandmanpowerservice@gmail.com)
* **Official Instagram:** [@s.aeventsandmanpowerservice](https://www.instagram.com/s.aeventsandmanpowerservice/)
* **Official GitHub Repository:** [https://github.com/craftingwebb/s.a_events](https://github.com/craftingwebb/s.a_events)

---

## 📖 How to Use This Website (Visitor & Client Guide)

This website is designed for corporate executives, brand custodians, exhibition organizers, and wedding families looking for turnkey event production and certified manpower across India.

### 1. Navigating the Site
* **Smart Header Navbar:** The header stays out of the way while scrolling down and reappears immediately when scrolling up. Use the top menu to jump between **About**, **Services**, **Portfolio**, **Clients**, **Gallery**, **Insights**, and **Contact**.
* **Direct Proposal CTA:** The golden `Request a Proposal →` button in the top header is accessible on every page and opens the multi-step RFP builder.

### 2. Exploring the Services Catalog (`#/services`)
* **3 Master Service Streams (39 Total Services):**
  - **Corporate Events (8 Services):** Product launches, summits, AGMs, BTL activations, exhibition stalls, college fests, school annual days, and roadshows.
  - **Weddings & Social Celebrations (11 Services):** Thematic floral decor, palatial mandaps, concert AV lighting, Udaipur/heritage venue liaisons, vibrant Haldi & Mehndi carnivals, royal entries, curved LED walls, and traditional Annaprashan ceremonies.
  - **Manpower & Certified Staffing (20 Services):** 5-star hotel hospitality squads, dance troupes, hostesses, floor managers, VIP protocol marshals, armed/unarmed security guards, male/female bouncers, banquet waiters, DJs, emcees, Varanasi Ganga Aarti priests, Punjabi live dholis, drone/candid photographers, cinematographers, models, and live fusion bands.
* **Layout Switcher:** Toggle between **Executive Grid** (balanced 2-column cards) and **Editorial Split** (classic alternating widescreen layout) based on your reading preference.
* **Instant WhatsApp Inquiries:** Every single service tile includes a direct `Inquire on WhatsApp` green button with prefilled service titles for fast quote turnaround.

### 3. Reviewing Selected Work & Portfolio (`#/portfolio`)
* Filter across 12 milestone productions using category tabs (*Conferences*, *Product Launches*, *Exhibitions*, *Award Ceremonies*, *Entertainment*, *Corporate Retreats*).
* View attendee numbers, venue locations (Mumbai Jio World Centre, New Delhi Bharat Mandapam, Hyderabad HICC, Udaipur Palaces, Kolkata ITC Sonar), and technical scope tags.

### 4. Viewing the Photography Showcase (`#/gallery`)
* **Pure High-Definition Photography:** Browse authentic photography of actual Indian stages, LED canvas reveals, royal palace lighting, cultural ceremonies, and behind-the-scenes control booths.
* **Category Filters:** Filter by *All Photography*, *Event Highlights*, *Stages & AV Production*, *Royal Weddings & Decor*, and *Behind The Scenes*.
* **Fullscreen Lightbox Viewer:** Click on any photo to open a crystal-clear lightbox with venue metadata, production story, and navigation chevrons (`Prev` / `Next` or `Esc` key).

### 5. Requesting a Quote & Proposal Funnel (`#/request-a-quote`)
* **Step 1 — Event Scope:** Select event format (Conference, Product Launch, Gala, Wedding, etc.) and required disciplines (Staging, Sound & Lights, Manpower, Venue, Artists).
* **Step 2 — Scale & Logistics:** Choose guest capacity, destination city, target dates, and custom brief notes.
* **Step 3 — Final Submission:** Enter your corporate credentials, toggle NDA requirement if necessary, and dispatch directly to the director via WhatsApp or email.

### 6. Floating Concierge & Quick Controls
* **Floating WhatsApp Button:** Available in the bottom-right corner of every screen for instant direct communication with production directors.
* **Scroll-to-Top Button:** Pops up automatically when scrolling past the first screen to quickly return to the top.

---

## 🚀 Recent Updates & Major Architecture Improvements

### 1. 100% Authentic Indian Visuals
* Purged all foreign stock imagery, foreign models, and unrelated landscapes (such as overseas tourist rocks, Greek architecture, and foreign business executives).
* Standardized 100% of the media across the entire application on verified, high-resolution **Indian production photography**:
  - Varanasi Dashashwamedh Ghat Ganga Aarti with brass fire lamps.
  - Udaipur Lake Palace and heritage venue night illuminations.
  - Authentic Punjabi and Nasik live Dhol players in traditional turbans.
  - Traditional Indian Haldi ceremonies with yellow marigold canopies and brass urli tubs.
  - High-level Indian corporate leadership summits, auditorium conferences, and delegate keynotes.
  - Disciplined Indian event security marshals, protocol officers, and groomed hospitality hostesses in designer sarees.

### 2. Removal of Fake Video Players in Gallery
* Removed simulated video cards, dummy durations (`02:45`, `02:10`), and non-functioning play/pause overlays that frustrated users.
* Refactored `GalleryPage.jsx` into a clean, authentic, high-definition photo gallery with an elegant fullscreen lightbox viewer.

### 3. Content Security Policy (CSP) & CDN Reliability Fix
* Resolved the browser security issue where external image CDNs were being silently blocked, resulting in black backgrounds and broken image icons.
* Verified that all image assets return clean `HTTP 200 OK` status and load instantaneously without hotlink restrictions.

### 4. Services Section Hover Previews
* Fixed the cursor-following floating preview inside `ServicesSection.jsx` to render verified image assets seamlessly without triggering broken image icons.
* Implemented graceful fallback error handling on all dynamic image elements.

### 5. Repository Migration
* Updated remote tracking from the legacy repository name to the official repository:
  ```text
  https://github.com/craftingwebb/s.a_events.git
  ```

---

## 🛠️ Tech Stack

* **Framework:** [React 19](https://react.dev/)
* **Build Tool:** [Vite 8](https://vitejs.dev/) with Fast Refresh & Rolldown engine
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` tokens
* **Iconography:** [Lucide React](https://lucide.dev/) + Custom SVG emblems
* **Type of Routing:** Client-Side Hash Routing (zero server-side route rewrites needed)

---

## 📁 Project Structure

```
├── public/                 # Static assets & favicon
├── src/
│   ├── components/         # Modular React UI components
│   │   ├── AboutPage.jsx           # Dedicated About Us page with leadership matrix
│   │   ├── AboutSection.jsx        # Agency story & metrics (Homepage)
│   │   ├── BookingModal.jsx        # Quick booking drawer modal
│   │   ├── ClientsPage.jsx         # 16-client matrix & case studies page
│   │   ├── ContactPage.jsx         # Contact Us page with direct inquiry form
│   │   ├── FeaturedEvents.jsx      # Dynamic horizontal scroll stage showcase
│   │   ├── Footer.jsx              # Pre-footer CTA, directory, social links & watermark
│   │   ├── GalleryPage.jsx         # Authentic Indian photography masonry & lightbox
│   │   ├── Hero.jsx                # Full-bleed cinematic slider with entrance typography
│   │   ├── IndustriesSection.jsx   # 12 industry sectors with gold hover effects
│   │   ├── InsightsPage.jsx        # Comprehensive production intelligence articles
│   │   ├── InsightsSection.jsx     # Homepage editorial insights preview
│   │   ├── Navbar.jsx              # Smart auto-hide navigation header
│   │   ├── PortfolioPage.jsx       # Dedicated 12-event portfolio showcase
│   │   ├── PortfolioSection.jsx    # Homepage selected portfolio preview
│   │   ├── ProcessSection.jsx      # 5-stage turnkey production methodology
│   │   ├── ProposalBanner.jsx      # Bottom proposal card + 4-col contact desk
│   │   ├── ProposalPage.jsx        # 3-step interactive RFP proposal flow
│   │   ├── ServicesPage.jsx        # Unified master catalog of 39 services
│   │   ├── ServicesSection.jsx     # Row strips with cursor-following preview popups
│   │   ├── TestimonialsSection.jsx # Editorial quote slider & client brand marquee
│   │   ├── WhatsAppButton.jsx      # Floating WhatsApp & Scroll-To-Top button
│   │   ├── WhatsAppIcon.jsx        # Official WhatsApp vector graphic emblem
│   │   └── WhyChooseUs.jsx         # NPS counter & operational edge cards
│   ├── data/
│   │   └── eventsData.js           # Master datasets for Corporate, Weddings & Manpower
│   ├── App.jsx                     # Root application with hash routing & modal states
│   ├── index.css                   # Global Tailwind CSS theme tokens & styling
│   └── main.jsx                    # Application entry point
├── index.html              # HTML shell with Google Fonts, CSP & SEO meta tags
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
   git clone https://github.com/craftingwebb/s.a_events.git
   cd s.a_events
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
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
1. Push your code to the GitHub repository: `https://github.com/craftingwebb/s.a_events.git`.
2. Connect your repo in [Vercel](https://vercel.com/).
3. Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`.
4. Click **"Deploy"**. The included `vercel.json` ensures all SPA routes function seamlessly.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
