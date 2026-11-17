import React, { useState } from 'react';
import { Logo } from './Navbar';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { isValidEmail, sanitizeString } from '../utils/security';
import { saveNewsletterSubscriber } from '../utils/inquiryStorage';
import LegalModal from './LegalModal';
import WhatsAppIcon from './WhatsAppIcon';

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
  const [newsletterFeedback, setNewsletterFeedback] = useState({ text: '', isDuplicate: false });
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'privacy' });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const cleanEmail = sanitizeString(email, 120);
    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      setNewsletterFeedback({ text: 'Please enter a valid email address.', isDuplicate: false });
      setIsSubscribed(true);
      return;
    }

    // Automatically save subscriber to local storage registry
    const result = saveNewsletterSubscriber(cleanEmail);
    setNewsletterFeedback({ text: result.message, isDuplicate: result.isDuplicate });
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer id="contact" className="grain relative overflow-hidden bg-[#130308] text-white">
      {/* Subtle Ruby Wine Ambient Glow behind Pre-footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[#991435]/25 blur-[120px]"
      />

      <div className="site-container relative">
        {/* 1. Pre-footer CTA Section (Screenshot 3) */}
        <div className="flex flex-col gap-8 border-b border-[#c9a96a]/15 py-12 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:py-24">
          <div>
            <h2 className="display max-w-3xl text-[2rem] min-[400px]:text-[2.4rem] sm:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight">
              Let’s engineer something{' '}
              <span className="accent-serif italic font-serif text-[#c9a96a]">
                truly extraordinary.
              </span>
            </h2>
          </div>

          <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="btn-gold cursor-pointer !py-3.5 !px-7 font-semibold text-sm w-full min-[420px]:w-auto justify-center"
            >
              <span>Start your proposal</span>
              <ArrowUpRight className="size-4" />
            </button>
            <a
              href="tel:+917600149422"
              className="btn-ghost-light !py-3.5 !px-7 font-semibold text-sm transition-all duration-300 w-full min-[420px]:w-auto text-center justify-center"
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
                  className="min-w-0 flex-1 bg-transparent px-4 text-base sm:text-sm text-white outline-none placeholder:text-white/35"
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
                <div className={`mt-2.5 flex items-start gap-1.5 text-xs ${newsletterFeedback.isDuplicate ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {newsletterFeedback.isDuplicate ? (
                    <AlertCircle className="size-3.5 shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle2 className="size-3.5 shrink-0 mt-0.5" />
                  )}
                  <span>{newsletterFeedback.text}</span>
                </div>
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
                  onClick={() => onNavigate?.('clients')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Our Clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('clients')}
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
                  onClick={() => onNavigate?.('gallery')}
                  className="hover:text-gold transition-colors cursor-pointer text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('insights')}
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
        <div className="flex flex-col gap-4 border-t border-[#c9a96a]/15 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 S. A Event&apos;s and Manpower Service. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="#/privacy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('privacy');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#/terms"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('terms');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Production
            </a>
            <a
              href="#/sitemap"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('sitemap');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Sitemap
            </a>
          </div>

          {/* Official Direct Contact & Social Links (No Generic Homepages) */}
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

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/917600149422?text=Hello%20S.%20A%20Event's,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="Chat with Concierge on WhatsApp"
              className="flex size-9 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md transition-all duration-200 hover:scale-110 hover:brightness-110"
            >
              <WhatsAppIcon className="size-5 text-white" />
            </a>

            {/* Direct Phone */}
            <a
              href="tel:+917600149422"
              aria-label="Direct Phone"
              title="Call Director: +91 76001 49422"
              className="flex size-9 items-center justify-center rounded-xl bg-gold text-[#130308] shadow-md transition-all duration-200 hover:scale-110 hover:brightness-110"
            >
              <Phone className="size-4" />
            </a>

            {/* Direct Email */}
            <a
              href="mailto:s.aeventsandmanpowerservice@gmail.com"
              aria-label="Direct Email"
              title="Email Concierge: s.aeventsandmanpowerservice@gmail.com"
              className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 shadow-md transition-all duration-200 hover:scale-110 hover:bg-white/20"
            >
              <Mail className="size-4" />
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

      {/* Legal & Sitemap Modal */}
      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal({ isOpen: false, type: 'privacy' })}
        modalType={legalModal.type}
        onNavigate={onNavigate}
      />
    </footer>
  );
}
