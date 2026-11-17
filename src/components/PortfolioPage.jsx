import React, { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

export const ALL_PORTFOLIO_EVENTS = [
  {
    id: "port-helios",
    category: "corporate",
    categoryLabel: "Corporate Event",
    title: "Apex Mobility National Conclave 2026",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    summary: "A three-day strategic dealer assembly and honors gala for 850 trade partners, culminating in a dramatic new EV line unveiling.",
  },
  {
    id: "port-vertex",
    category: "conference",
    categoryLabel: "Conference",
    title: "Novalis LifeSciences Executive Forum",
    location: "Hyderabad",
    image: "https://images.pexels.com/photos/7581114/pexels-photo-7581114.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary: "A high-level symposium for 600 Indian business leaders featuring keynote addresses, interactive panel debates, and live delegate polling.",
  },
  {
    id: "port-orbit",
    category: "launch",
    categoryLabel: "Product Launch",
    title: "Aura Financial Tech Grand Unveil",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    summary: "An expansive hybrid launch at Jio World Centre streamed to 50,000 live participants, driven by interactive digital canvases and national press coverage.",
  },
  {
    id: "port-indiabuild",
    category: "exhibition",
    categoryLabel: "Exhibition",
    title: "Global Infra Expo — Flagship Pavilion",
    location: "New Delhi",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    summary: "A sprawling 600 sq. m. turnkey showcase at Bharat Mandapam featuring modular experiential zones designed for high-value B2B engagement.",
  },
  {
    id: "port-crestline",
    category: "award",
    categoryLabel: "Award Ceremony",
    title: "Vanguard Capital Annual Honors Night",
    location: "Udaipur",
    image: "https://images.pexels.com/photos/33485963/pexels-photo-33485963/free-photo-of-elegant-indian-palace-courtyard-wedding-venue.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary: "A formal black-tie banquet celebrating standout leadership with bespoke palace stage architecture and a 40-piece live symphony.",
  },
  {
    id: "port-novaline",
    category: "entertainment",
    categoryLabel: "Entertainment",
    title: "Stratosphere Digital Carnival",
    location: "Bengaluru",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    summary: "An electrifying company celebration for 3,500 associates featuring headlining arena musicians and an illuminated aerial drone finale.",
  },
  {
    id: "port-quanta",
    category: "corporate",
    categoryLabel: "Corporate Event",
    title: "Quanta Logistics Leadership Retreat",
    location: "Udaipur",
    image: "https://images.pexels.com/photos/33485963/pexels-photo-33485963/free-photo-of-elegant-indian-palace-courtyard-wedding-venue.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary: "An immersive 4-day executive retreat across heritage lakeside palace grounds with bespoke team strategy sessions.",
  },
  {
    id: "port-bluepeak",
    category: "conference",
    categoryLabel: "Conference",
    title: "BluePeak Capital Sovereign Investor Conclave",
    location: "Mumbai",
    image: "https://images.pexels.com/photos/7580917/pexels-photo-7580917.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary: "A closed-door sovereign wealth conclave gathering 250 institutional fund partners with high-security delegate corridors.",
  },
  {
    id: "port-tarang",
    category: "entertainment",
    categoryLabel: "Entertainment",
    title: "Tarang Media Annual Festive Gala",
    location: "Kolkata",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    summary: "An extravagant cultural festival celebrating 20 years of broadcasting with 4,000 guests, live celebrity musicians and laser shows.",
  },
  {
    id: "port-kairos",
    category: "conference",
    categoryLabel: "Conference",
    title: "Kairos Healthcare Medical Congress",
    location: "Chennai",
    image: "https://images.pexels.com/photos/7581114/pexels-photo-7581114.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary: "A multi-track medical symposium bringing together 1,200 clinicians, featuring live surgical broadcast feeds and exhibition kiosks.",
  },
  {
    id: "port-meridian",
    category: "launch",
    categoryLabel: "Product Launch",
    title: "Meridian Realty Project Reveal",
    location: "Gurugram",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    summary: "A high-net-worth property unveiling featuring architectural 3D hologram models and VIP hospitality banquet.",
  },
  {
    id: "port-aster",
    category: "corporate",
    categoryLabel: "Corporate Event",
    title: "Aster Consumer Brands National Sales Kick-Off",
    location: "Pune",
    image: "https://images.pexels.com/photos/7580648/pexels-photo-7580648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary: "Energizing 1,500 national distributors with dynamic interactive staging, award ceremonies, and motivational keynote productions.",
  },
];

const CATEGORY_TABS = [
  { key: 'all', label: 'All Events', count: 12 },
  { key: 'corporate', label: 'Corporate Events', count: 3 },
  { key: 'conference', label: 'Conferences', count: 3 },
  { key: 'launch', label: 'Product Launches', count: 2 },
  { key: 'exhibition', label: 'Exhibitions', count: 1 },
  { key: 'award', label: 'Award Ceremonies', count: 1 },
  { key: 'entertainment', label: 'Entertainment Events', count: 2 },
];

export default function PortfolioPage({ onNavigateHome, onOpenProposalModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredEvents = activeTab === 'all'
    ? ALL_PORTFOLIO_EVENTS
    : ALL_PORTFOLIO_EVENTS.filter((item) => item.category === activeTab);

  const scrollToGrid = () => {
    const el = document.getElementById('portfolio-grid-top');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-ivory text-ink min-h-screen">
      
      {/* 1. Hero / Header Section (Screenshot 2: media_1794850391657_4a5cf6ff.jpg) */}
      <section className="relative overflow-hidden bg-[#130308] pt-36 pb-20 sm:pt-44 sm:pb-28 text-white">
        {/* Background Image of Concert / Stage with Center Ambient Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.pexels.com/photos/33485963/pexels-photo-33485963/free-photo-of-elegant-indian-palace-courtyard-wedding-venue.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt=""
            className="h-full w-full object-cover opacity-20 filter contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#130308]/90 via-[#130308]/75 to-[#130308]" />
          <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[26rem] w-[55rem] rounded-full bg-[#991435]/35 blur-[130px]" />
          <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-[32rem] rounded-full bg-[#c9a96a]/15 blur-[110px]" />
        </div>

        <div className="site-container relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-medium text-white/50 mb-6">
            <button
              onClick={onNavigateHome}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-white">Portfolio</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              OUR PORTFOLIO
            </span>
          </div>

          {/* Headline */}
          <h1 className="display text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.08] max-w-4xl text-white">
            A decade of stages,{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              one standard.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Browse conferences, launches, award nights, exhibitions and celebrations we’ve produced for India’s leading organisations.
          </p>
        </div>
      </section>

      {/* 2. Portfolio Grid & Filter Section (Screenshots 3, 4, 5) */}
      <section id="portfolio-grid-top" className="bg-ivory py-16 sm:py-24">
        <div className="site-container">
          
          {/* Filter Pills with Count Badges (Screenshot 3) */}
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none mb-10 sm:mb-12 lg:mb-16">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#801436] text-white shadow-lg shadow-[#801436]/40 ring-1 ring-[#c9a96a]/50 scale-102'
                      : 'bg-white border border-ink/10 text-ink/70 hover:border-ink/30 hover:text-ink hover:bg-white/80'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-mono font-bold ${
                      isActive
                        ? 'bg-black/30 text-white ring-1 ring-white/20'
                        : 'bg-ink/5 text-ink/60'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 3-Column Grid of Event Cards (Screenshot 3, 4, 5) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {filteredEvents.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenProposalModal?.({ title: item.title, category: item.categoryLabel })}
                className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-ink shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer flex flex-col justify-end p-6 sm:p-7 text-white"
              >
                {/* Background Image with Zoom on Hover */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent transition-opacity duration-300 group-hover:via-ink/65" />

                {/* Card Content Overlay */}
                <div className="relative z-10">
                  {/* Category Pill & Location Pin */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 text-[11px] font-medium text-white/90">
                      {item.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-white/70">
                      <MapPin className="size-3 text-gold" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-[1.35rem] font-bold leading-snug text-white transition-colors duration-300 group-hover:text-gold-soft">
                    {item.title}
                  </h3>

                  {/* Hover 'View case study ↗' in Gold */}
                  <div className="mt-3.5 flex items-center gap-1.5 text-xs font-semibold text-gold transition-all duration-300 transform opacity-85 group-hover:opacity-100 group-hover:translate-x-1">
                    <span>View case study</span>
                    <ArrowUpRight className="size-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Bottom Banner Card (Screenshot 1 / 6: media_1794850379809_91fc7d25.jpg) */}
      <section className="bg-ivory pb-20 sm:pb-28">
        <div className="site-container">
          <div className="relative isolate overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-ink px-5 py-12 sm:px-14 sm:py-20 text-white shadow-2xl">
            {/* Background Image of Concert / Event Crowd */}
            <img
              src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1800&q=80"
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
              — REQUEST A PROPOSAL
            </p>

            {/* Headline */}
            <h2 className="max-w-2xl text-2xl min-[400px]:text-3xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.15] text-white">
              Want results like these?
            </h2>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-lg text-white/70 leading-relaxed">
              Share a few details and receive a tailored concept note with indicative budget in 48 hours.
            </p>

            {/* Buttons */}
            <div className="mt-8 sm:mt-9 flex flex-col min-[420px]:flex-row min-[420px]:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenProposalModal?.({ title: "Portfolio Inquiries" })}
                className="btn-gold !py-3.5 !px-7 font-semibold text-sm cursor-pointer shadow-lg w-full min-[420px]:w-auto justify-center"
              >
                <span>Start your proposal</span>
                <ArrowUpRight className="size-4" />
              </button>
              <button
                onClick={scrollToGrid}
                className="btn-ghost-light !py-3.5 !px-7 font-semibold text-sm transition-all duration-300 cursor-pointer w-full min-[420px]:w-auto justify-center"
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
