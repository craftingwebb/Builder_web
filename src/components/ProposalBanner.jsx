import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

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
    icon: WhatsAppIcon,
    label: 'INSTANT CONCIERGE',
    value: 'Connect with a Director',
    href: "https://wa.me/917600149422?text=Hi!%20I'd%20like%20to%20plan%20a%20corporate%20event.",
    isExternal: true,
  },
  {
    icon: MapPin,
    label: 'STUDIO & HEADQUARTERS',
    value: '22/a gora chand lane, Kolkata, West Bengal',
    href: '#/contact',
    isExternal: false,
  },
];

export default function ProposalBanner({ onOpenProposalModal }) {
  return (
    <section className="bg-ivory pb-24 sm:pb-32 text-ink">
      <div className="site-container">
        {/* 1. Dark Proposal Card (Screenshot 1) */}
        <div className="relative isolate overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-ink px-5 py-12 sm:px-14 sm:py-20 text-white shadow-2xl">
          {/* Background Image of Concert / Event Crowd */}
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=80"
            alt="Crowd background"
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20 filter grayscale contrast-125 pointer-events-none"
          />

          {/* Radial Ambient Ruby Wine Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full bg-[#991435]/25 blur-[120px] -z-10"
          />

          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4 sm:mb-6">
            — INITIATE A COLLABORATION
          </p>

          {/* Headline */}
          <h2 className="max-w-2xl text-2xl min-[400px]:text-3xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.15] text-white">
            Planning a landmark gathering? Let’s craft it to perfection.
          </h2>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-lg text-white/70 leading-relaxed">
            Share your preliminary vision and receive an executive concept deck complete with transparent budgetary modeling within 48 hours.
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-9 flex flex-col min-[440px]:flex-row min-[440px]:items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenProposalModal}
              className="btn-gold !py-3.5 !px-7 font-semibold text-sm cursor-pointer shadow-lg w-full min-[440px]:w-auto justify-center"
            >
              <span>Start your proposal</span>
              <ArrowUpRight className="size-4" />
            </button>
            <a
              href="#portfolio"
              className="btn-ghost-light !py-3.5 !px-7 font-semibold text-sm transition-all duration-300 w-full min-[440px]:w-auto text-center justify-center"
            >
              View selected portfolio
            </a>
          </div>
        </div>

        {/* 2. 4-Column Contact Desk (Screenshot 2) */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl sm:rounded-[2rem] border border-ink/[0.08] bg-ink/[0.08] shadow-sm">
          {CONTACT_CHANNELS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noreferrer' : undefined}
              className="group bg-ivory p-6 sm:p-7 transition-colors duration-300 hover:bg-white flex flex-col justify-start min-w-0"
            >
              {/* Circle Icon Badge */}
              <span className="flex size-11 items-center justify-center rounded-full bg-ink text-gold transition-colors duration-300 group-hover:bg-[#871834] group-hover:text-white">
                <item.icon className="size-[1.15rem]" />
              </span>

              {/* Eyebrow Label */}
              <p className="mt-5 text-xs font-semibold tracking-wider text-ink/45 uppercase">
                {item.label}
              </p>

              {/* Value Text */}
              {item.label === 'EXECUTIVE INBOX' ? (
                <p
                  className="mt-2 text-xs sm:text-[0.78rem] xl:text-[0.82rem] leading-snug font-medium text-ink tracking-tight truncate group-hover:text-[#871834] transition-colors"
                  title={item.value}
                >
                  {item.value}
                </p>
              ) : (
                <p
                  className="mt-2 text-sm xl:text-[0.95rem] leading-snug font-semibold text-ink group-hover:text-[#871834] transition-colors"
                  title={item.value}
                >
                  {item.value}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
