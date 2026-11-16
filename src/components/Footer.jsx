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
              <Logo name="Lumora Events" light={true} />
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
                  <span>Thank you for subscribing to Lumora Insights!</span>
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
                <a href="#services" className="hover:text-gold transition-colors">
                  Corporate Event Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Conference &amp; Seminar Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Product Launch Events
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Exhibition &amp; Trade Shows
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Award Ceremonies
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Corporate Entertainment
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Team Building Events
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Corporate Celebrations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Virtual &amp; Hybrid Events
                </a>
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
            <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-3 text-sm text-white/70">
              <a
                href="https://www.instagram.com/s.aeventsandmanpowerservice/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-sm">
                  <svg className="size-3.5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </span>
                <span className="truncate">@s.aeventsandmanpowerservice</span>
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
                <span>s.aeventsandmanpowerservice@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. Copyright & Legal Bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lumora Events. All rights reserved.</p>
          
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

          {/* Clean Vector Social Links */}
          <div className="flex gap-2">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/s.aeventsandmanpowerservice/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-gold hover:text-gold"
            >
              <svg className="size-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-gold hover:text-gold"
            >
              <svg className="size-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-gold hover:text-gold"
            >
              <svg className="size-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-gold hover:text-gold"
            >
              <svg className="size-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <polygon points="10 15 15 12 10 9 10 15" />
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
        LUMORA
      </div>
    </footer>
  );
}
