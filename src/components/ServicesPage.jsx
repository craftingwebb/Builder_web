import React, { useState } from 'react';
import {
  Briefcase,
  Presentation,
  Rocket,
  Store,
  Trophy,
  Music,
  Users,
  PartyPopper,
  MonitorPlay,
  Check,
  ArrowUpRight
} from 'lucide-react';

export const SERVICES_CATALOG = [
  {
    num: '01',
    id: 'service-01',
    title: 'Corporate Event Management',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=85',
    description:
      'Annual events, AGMs, dealer meets and leadership gatherings delivered end-to-end. Every engagement is led by a dedicated event director with transparent, line-item costing.',
    features: [
      'Annual Corporate Events',
      'Annual General Meetings (AGM)',
      'Corporate Meetings',
      'Dealer Meets',
      'Business Networking Events',
    ],
  },
  {
    num: '02',
    id: 'service-02',
    title: 'Conference & Seminar Management',
    icon: Presentation,
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=85',
    description:
      'Multi-track summits, technical conferences and academic symposia engineered for seamless speaker flow, delegate immersion and live broadcast.',
    features: [
      'Multi-track Summits',
      'Keynote & Panel Production',
      'Delegate Registration & Badging',
      'Speaker Green Rooms',
      'Simultaneous Interpretation',
    ],
  },
  {
    num: '03',
    id: 'service-03',
    title: 'Product Launch Events',
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=85',
    description:
      'Reveal moments engineered for media, partners and social amplification. Every engagement is led by a dedicated event director with transparent, line-item costing.',
    features: [
      'New Product Launch',
      'Brand Launch',
      'Media Launch',
      'Press Conferences',
    ],
  },
  {
    num: '04',
    id: 'service-04',
    title: 'Exhibition & Trade Shows',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85',
    description:
      'Booths that stop footfall, and show operations that convert it into pipeline. Every engagement is led by a dedicated event director with transparent, line-item costing.',
    features: [
      'Exhibition Management',
      'Stall & Booth Design',
      'Trade Fairs',
      'Business Expo',
    ],
  },
  {
    num: '05',
    id: 'service-05',
    title: 'Award Ceremonies',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85',
    description:
      'Gala nights that honour achievement with cinematic production and impeccable flow. Every engagement is led by a dedicated event director with transparent, line-item costing.',
    features: [
      'Corporate Award Nights',
      'Employee Recognition',
      'Achievement Celebrations',
    ],
  },
  {
    num: '06',
    id: 'service-06',
    title: 'Corporate Entertainment',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85',
    description:
      'Celebrity, live music and curated performances that elevate every agenda. Every engagement is led by a dedicated event director with transparent, line-item costing.',
    features: [
      'Celebrity Management',
      'Live Music & Performances',
      'Celebrity Guest Management',
      'Entertainment Shows',
    ],
  },
  {
    num: '07',
    id: 'service-07',
    title: 'Team Building Events',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85',
    description:
      'Offsites and engagement programmes that strengthen culture and collaboration. Every engagement is led by a dedicated event director with transparent, line-item costing.',
    features: [
      'Corporate Outings',
      'Team Activities',
      'Employee Engagement',
      'Corporate Retreats',
    ],
  },
  {
    num: '08',
    id: 'service-08',
    title: 'Corporate Celebrations',
    icon: PartyPopper,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85',
    description:
      'Milestones, anniversaries and festivals celebrated with warmth and polish. Every engagement is led by a dedicated event director with transparent, line-item costing.',
    features: [
      'Foundation Day',
      'Company Anniversary',
      'Festival Celebrations',
      'Office Parties',
    ],
  },
  {
    num: '09',
    id: 'service-09',
    title: 'Virtual & Hybrid Events',
    icon: MonitorPlay,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=85',
    description:
      'Studio-grade streaming and engagement platforms for distributed audiences. Every engagement is led by a dedicated event director with transparent, line-item costing.',
    features: [
      'Virtual Conferences',
      'Hybrid Meetings',
      'Live Streaming Management',
    ],
  },
];

export default function ServicesPage({ onOpenProposalModal, onViewPortfolio, onNavigateHome }) {
  const [activeFilter, setActiveFilter] = useState(null);

  const handlePillClick = (id) => {
    setActiveFilter(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleServiceWhatsApp = (serviceTitle) => {
    const text = encodeURIComponent(
      `Hello S. A Event's and Manpower Service, I would like to inquire about *${serviceTitle}*. Please share details and pricing options.`
    );
    window.open(`https://wa.me/917600149422?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-ivory text-ink min-h-screen">
      {/* ========================================================= */}
      {/* 1. HERO HEADER SECTION (Screenshot 3: media_1794856868447_ca415645.jpg) */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-28 sm:pt-44 sm:pb-36 text-white">
        {/* Background Image of Event Hall Stage with Lighting */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=2000&q=85"
            alt=""
            className="h-full w-full object-cover opacity-20 filter contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink" />
          <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-[50rem] rounded-full bg-[#991435]/25 blur-[130px]" />
        </div>

        <div className="site-container relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-white/50 mb-8">
            <button
              onClick={onNavigateHome}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              OUR SERVICES
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-semibold tracking-tight leading-[1.1] text-white">
            Every format of corporate event,{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              under one roof.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            From AGMs and dealer meets to award nights, product launches and hybrid summits — choose a single service or the full stack.
          </p>

          {/* Horizontal Filter Pills (Screenshot 3) */}
          <div className="mt-10 flex flex-wrap items-center gap-2.5">
            {SERVICES_CATALOG.map((s) => (
              <button
                key={s.id}
                onClick={() => handlePillClick(s.id)}
                className={`rounded-full border px-4 py-2 text-xs font-medium backdrop-blur-sm transition-all cursor-pointer ${
                  activeFilter === s.id
                    ? 'border-gold bg-gold/20 text-gold shadow-sm'
                    : 'border-white/15 bg-white/5 text-white/80 hover:border-gold hover:bg-white/10 hover:text-white'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SERVICES CATALOG (9 Full Alternating Cards on Ivory) */}
      {/* ========================================================= */}
      <section className="bg-ivory py-10 sm:py-14">
        <div className="site-container space-y-6">
          {SERVICES_CATALOG.map((service, idx) => {
            const isReversed = idx % 2 !== 0; // Alternates image left / right
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-black/5 transition-all duration-300 hover:shadow-xl"
              >
                <div className="grid lg:grid-cols-12 items-stretch min-h-[420px]">
                  
                  {/* IMAGE COLUMN (6 cols) */}
                  <div
                    className={`relative min-h-[280px] sm:min-h-[360px] lg:min-h-[460px] lg:col-span-6 overflow-hidden ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                    {/* Watermark Number in top-left corner (Screenshots 4, 5, 6, 7, 8, 9, 10, 11) */}
                    <span className="absolute top-6 left-6 font-bold text-6xl sm:text-7xl lg:text-8xl text-white/40 select-none tracking-tighter leading-none pointer-events-none font-serif drop-shadow-sm">
                      {service.num}
                    </span>
                  </div>

                  {/* CONTENT COLUMN (6 cols) */}
                  <div
                    className={`flex flex-col justify-between p-8 sm:p-12 lg:p-14 lg:col-span-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      {/* Royal Maroon Square Icon Badge */}
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-[#130308] text-gold border border-gold/20 shadow-md">
                        <IconComponent className="size-5" />
                      </div>

                      {/* Service Title */}
                      <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                        {service.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-4 text-sm sm:text-base text-ink/70 leading-relaxed">
                        {service.description}
                      </p>

                      {/* 2-Column Checkpoints Grid */}
                      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2.5">
                            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#f4e8d1] text-amber-800">
                              <Check className="size-2.5 stroke-[3]" />
                            </span>
                            <span className="text-xs sm:text-[0.875rem] font-medium text-ink/85">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="mt-8 pt-6 border-t border-black/5 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => handleServiceWhatsApp(service.title)}
                        className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:bg-black hover:shadow-lg cursor-pointer active:scale-95"
                      >
                        <span>Explore service</span>
                        <ArrowUpRight className="size-4" />
                      </button>

                      <button
                        onClick={() => onOpenProposalModal?.(service.title)}
                        className="rounded-full border border-black/15 bg-white px-6 py-3.5 text-xs sm:text-sm font-semibold text-ink transition-all hover:border-ink hover:bg-zinc-50 cursor-pointer active:scale-95"
                      >
                        Get a quote
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. BOTTOM BANNER CARD (Screenshots 2 & 12: Have an event on the horizon?) */}
      {/* ========================================================= */}
      <section className="bg-ivory pb-20 sm:pb-28">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#130308] p-8 sm:p-14 lg:p-16 text-white shadow-2xl border border-gold/20">
            {/* Background Texture & Ambient Radial Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full bg-[#991435]/25 blur-[120px] -z-10"
            />
            <img
              src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1800&q=80"
              alt=""
              className="absolute inset-0 -z-20 h-full w-full object-cover opacity-15 filter grayscale pointer-events-none"
            />

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                REQUEST A PROPOSAL
              </span>
            </div>

            {/* Headline */}
            <h2 className="max-w-2xl text-3xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.1] text-white">
              Have an event on the horizon?
            </h2>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed">
              Share a few details and receive a tailored concept note with indicative budget in 48 hours.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenProposalModal?.()}
                className="btn-gold !py-3.5 !px-7 font-semibold text-sm cursor-pointer shadow-lg"
              >
                <span>Start your proposal</span>
                <ArrowUpRight className="size-4" />
              </button>
              <button
                onClick={onViewPortfolio}
                className="btn-ghost-light !py-3.5 !px-7 font-semibold text-sm transition-all duration-300 cursor-pointer"
              >
                See our work
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
