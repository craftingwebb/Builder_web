import React from 'react';
import { ArrowUpRight, Phone, Mail, MessageCircle } from 'lucide-react';

function InstagramIcon({ className = "size-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const CONTACT_CHANNELS = [
  {
    icon: Phone,
    label: 'DIRECT LINE',
    value: '+91 76001 49422',
    href: 'tel:+917600149422',
    isExternal: false,
  },
  {
    icon: Mail,
    label: 'EXECUTIVE INBOX',
    value: 's.aeventsandmanpowerservice@gmail.com',
    href: 'mailto:s.aeventsandmanpowerservice@gmail.com',
    isExternal: false,
  },
  {
    icon: MessageCircle,
    label: 'INSTANT CONCIERGE',
    value: 'Connect with a Director',
    href: "https://wa.me/917600149422?text=Hi!%20I'd%20like%20to%20plan%20a%20corporate%20event.",
    isExternal: true,
  },
  {
    icon: InstagramIcon,
    label: 'OFFICIAL INSTAGRAM',
    value: '@s.aeventsandmanpowerservice',
    href: 'https://www.instagram.com/s.aeventsandmanpowerservice/',
    isExternal: true,
  },
];

export default function ProposalBanner({ onOpenProposalModal }) {
  return (
    <section className="bg-ivory pb-24 sm:pb-32 text-ink">
      <div className="site-container">
        {/* 1. Dark Proposal Card (Screenshot 1) */}
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 sm:px-14 sm:py-20 text-white shadow-2xl">
          {/* Background Image of Concert / Event Crowd */}
          <img
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=80"
            alt="Crowd background"
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20 filter grayscale contrast-125 pointer-events-none"
          />

          {/* Radial Ambient Purple / Iris Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full bg-[#6d5efc]/25 blur-[120px] -z-10"
          />

          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
            — INITIATE A COLLABORATION
          </p>

          {/* Headline */}
          <h2 className="max-w-2xl text-3xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.1] text-white">
            Planning a landmark gathering? Let’s craft it to perfection.
          </h2>

          {/* Subtitle */}
          <p className="mt-5 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed">
            Share your preliminary vision and receive an executive concept deck complete with transparent budgetary modeling within 48 hours.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenProposalModal}
              className="btn-gold !py-3.5 !px-7 font-semibold text-sm cursor-pointer shadow-lg"
            >
              <span>Start your proposal</span>
              <ArrowUpRight className="size-4" />
            </button>
            <a
              href="#portfolio"
              className="btn-ghost-light !py-3.5 !px-7 font-semibold text-sm transition-all duration-300"
            >
              View selected portfolio
            </a>
          </div>
        </div>

        {/* 2. 4-Column Contact Desk (Screenshot 2) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-[2rem] border border-ink/[0.08] bg-ink/[0.08] shadow-sm">
          {CONTACT_CHANNELS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noreferrer' : undefined}
              className="group bg-ivory p-7 transition-colors duration-300 hover:bg-white flex flex-col justify-between"
            >
              {/* Circle Icon Badge */}
              <div>
                <span className="flex size-11 items-center justify-center rounded-full bg-ink text-gold transition-colors duration-300 group-hover:bg-[#6d5efc] group-hover:text-white">
                  <item.icon className="size-[1.15rem]" />
                </span>
                <p className="mt-5 text-xs font-semibold tracking-wider text-ink/45 uppercase">
                  {item.label}
                </p>
              </div>

              {/* Value Text */}
              <p className="mt-2 text-[0.95rem] leading-snug font-semibold text-ink">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
