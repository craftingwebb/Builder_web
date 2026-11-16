import React, { useState } from 'react';
import { Logo } from './Navbar';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
} from 'lucide-react';

export function InstagramLogo({ className = "size-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sa-ig-radial-grad" cx="20%" cy="105%" r="130%" fx="20%" fy="105%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      {/* Background squircle with official gradient */}
      <rect width="24" height="24" rx="6.5" fill="url(#sa-ig-radial-grad)" />
      {/* White camera housing */}
      <rect
        x="4.75"
        y="4.75"
        width="14.5"
        height="14.5"
        rx="4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.75"
      />
      {/* Center camera aperture */}
      <circle
        cx="12"
        cy="12"
        r="3.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.75"
      />
      {/* Upper-right flash element */}
      <circle
        cx="16"
        cy="8"
        r="1.1"
        fill="#ffffff"
      />
    </svg>
  );
}

export default function Footer({ onOpenQuoteModal, onNavigate }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer id="contact" className="grain relative overflow-hidden bg-ink text-white">
      {/* Subtle Iris Ambient Glow behind Pre-footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[#6d5efc]/20 blur-[120px]"
      />

      <div className="site-container relative">
        {/* 1. Pre-footer CTA Section (Screenshot 3) */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-24">
          <div>
            <h2 className="display max-w-3xl text-[2.6rem] sm:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight">
              Let’s engineer something{' '}
              <span className="accent-serif italic font-serif text-[#c9a96a]">
                truly extraordinary.
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="btn-gold cursor-pointer !py-3.5 !px-7 font-semibold text-sm"
            >
              <span>Start your proposal</span>
              <ArrowUpRight className="size-4" />
            </button>
            <a
              href="tel:+917600149422"
              className="btn-ghost-light !py-3.5 !px-7 font-semibold text-sm transition-all duration-300"
            >
              Speak with a director
            </a>
          </div>
        </div>

        {/* 2. Main Directory Grid (Screenshot 4) */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Info & Newsletter (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Logo light={true} />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
                End-to-end creative direction, stage engineering, and turnkey production for landmark conferences, brand reveals, and gala evenings across India and abroad.
              </p>
            </div>

            {/* Newsletter Input Box */}
            <form onSubmit={handleNewsletterSubmit} className="mt-8 max-w-sm">
              <label
                htmlFor="newsletter"
                className="text-xs font-semibold tracking-wider text-white/70 uppercase"
              >
                CURATED PRODUCTION INTELLIGENCE, DELIVERED MONTHLY.
              </label>

              <div className="mt-3 flex rounded-full border border-white/15 bg-white/5 p-1 transition focus-within:border-gold/60">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/35"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold text-ink transition hover:scale-105 cursor-pointer"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>

              {isSubscribed && (
                <p className="mt-2.5 flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 className="size-3.5" />
                  <span>Thank you for subscribing to S. A Event&apos;s and Manpower Service Insights!</span>
                </p>
              )}
            </form>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              SERVICES
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <button
                  onClick={() => onNavigate?.('services', '#service-01')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Corporate Event Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('services', '#service-02')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Conference &amp; Seminar Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('services', '#service-03')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Product Launch Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('services', '#service-04')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Exhibition &amp; Trade Shows
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('services', '#service-05')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Award Ceremonies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('services', '#service-06')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Corporate Entertainment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('services', '#service-07')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Team Building Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('services', '#service-08')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Corporate Celebrations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('services', '#service-09')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Virtual &amp; Hybrid Events
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              COMPANY
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <button
                  onClick={() => onNavigate?.('about')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('home', '#testimonials')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Our Clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('home', '#testimonials')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Partners
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('proposal')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Become a Partner
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Explore Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              EXPLORE
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <button
                  onClick={() => onNavigate?.('portfolio')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('home', '#featured-stages')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('home', '#insights')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('portfolio')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('proposal')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* 3. Bottom Rounded Contact Desk Card (Screenshot 4) */}
          <div className="md:col-span-2 lg:col-span-12 xl:col-span-12">
            <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-2 lg:grid-cols-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span className="leading-snug">22/a gora chand lane, Kolkata, West Bengal</span>
              </div>
              <a
                href="https://www.instagram.com/s.aeventsandmanpowerservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 hover:text-white transition-colors"
                title="Follow @s.aeventsandmanpowerservice on Instagram"
              >
                <InstagramLogo className="size-6 shrink-0 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-200" />
                <span className="truncate font-medium">@s.aeventsandmanpowerservice</span>
              </a>
              <a
                href="tel:+917600149422"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="size-4 shrink-0 text-gold" />
                <span>+91 76001 49422</span>
              </a>
              <a
                href="mailto:s.aeventsandmanpowerservice@gmail.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="size-4 shrink-0 text-gold" />
                <span className="truncate">s.aeventsandmanpowerservice@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. Copyright & Legal Bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} S. A Event&apos;s and Manpower Service. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Production
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>

          {/* Official Social Links */}
          <div className="flex items-center gap-2.5">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/s.aeventsandmanpowerservice/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Official Instagram: @s.aeventsandmanpowerservice"
              className="inline-flex transition-transform duration-200 hover:scale-110"
            >
              <InstagramLogo className="size-9 rounded-xl shadow-md" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="Connect on LinkedIn"
              className="flex size-9 items-center justify-center rounded-xl bg-[#0A66C2] text-white shadow-md transition-all duration-200 hover:scale-110 hover:brightness-110"
            >
              <svg className="size-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Follow on Facebook"
              className="flex size-9 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-md transition-all duration-200 hover:scale-110 hover:brightness-110"
            >
              <svg className="size-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              title="Subscribe on YouTube"
              className="flex size-9 items-center justify-center rounded-xl bg-[#FF0000] text-white shadow-md transition-all duration-200 hover:scale-110 hover:brightness-110"
            >
              <svg className="size-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 5. Giant Brand Watermark at Bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative -mb-[3vw] overflow-hidden text-center leading-none font-bold tracking-[-0.06em] whitespace-nowrap text-white/[0.04] select-none text-[17vw]"
      >
        S.A EVENTS
      </div>
    </footer>
  );
}
