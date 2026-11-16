import React, { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

const PORTFOLIO_ITEMS = [
  {
    id: "port-helios",
    category: "corporate",
    categoryLabel: "Corporate Conclave",
    title: "Apex Mobility National Conclave 2026",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    summary: "A three-day strategic dealer assembly and honors gala for 850 trade partners, culminating in a dramatic new EV line unveiling.",
  },
  {
    id: "port-vertex",
    category: "conference",
    categoryLabel: "Leadership Summit",
    title: "Novalis LifeSciences Executive Forum",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
    summary: "A high-level symposium for 600 global directors featuring keynote addresses, interactive panel debates, and live delegate polling.",
  },
  {
    id: "port-orbit",
    category: "launch",
    categoryLabel: "Product Reveal",
    title: "Aura Financial Tech Grand Unveil",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    summary: "An expansive hybrid launch streamed to 50,000 live participants, driven by interactive digital canvases and global press coverage.",
  },
  {
    id: "port-indiabuild",
    category: "exhibition",
    categoryLabel: "Exhibition Pavilion",
    title: "Global Infra Expo — Flagship Pavilion",
    location: "New Delhi",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80",
    summary: "A sprawling 600 sq. m. turnkey showcase featuring modular experiential zones designed for high-value B2B engagement.",
  },
  {
    id: "port-crestline",
    category: "award",
    categoryLabel: "Honors Gala",
    title: "Vanguard Capital Annual Honors Night",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    summary: "A formal black-tie banquet celebrating standout leadership with bespoke stage architecture and a 40-piece live symphony.",
  },
  {
    id: "port-novaline",
    category: "entertainment",
    categoryLabel: "Arena Experience",
    title: "Stratosphere Digital Carnival",
    location: "Bengaluru",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    summary: "An electrifying company celebration for 3,500 associates featuring headlining arena musicians and an illuminated aerial drone finale.",
  },
];

const CATEGORIES = [
  ['all', 'All'],
  ['corporate', 'Corporate Events'],
  ['conference', 'Conferences'],
  ['launch', 'Product Launches'],
  ['exhibition', 'Exhibitions'],
  ['award', 'Award Ceremonies'],
  ['entertainment', 'Entertainment Events'],
];

export default function PortfolioSection({ onOpenQuoteModal, onViewFullPortfolio }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="bg-ivory py-24 sm:py-32 text-ink">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <div>
            <p className="eyebrow text-[#a07e3a] mb-3">Selected engagements</p>
            <h2 className="display text-ink text-[2.6rem] sm:text-6xl lg:text-7xl">
              Results that leave{' '}
              <span className="accent-serif text-[#a07e3a]">
                an indelible mark.
              </span>
            </h2>
          </div>

          {/* Filter Pills with Horizontal Scroll on Mobile */}
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
            {CATEGORIES.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition cursor-pointer ${
                  activeCategory === key
                    ? 'border-ink bg-ink text-white shadow-md'
                    : 'border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Staggered Masonry Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => {
            const isTall = idx % 3 === 1;
            return (
              <div
                key={item.id}
                onClick={() => onOpenQuoteModal(item)}
                className={`group relative block overflow-hidden rounded-[1.6rem] bg-ink cursor-pointer shadow-md transition-all duration-500 hover:shadow-2xl ${
                  isTall ? 'lg:row-span-2' : ''
                }`}
              >
                {/* 
                  Image wrapper with subtle zoom on hover
                  transition duration-[1.2s] ease-out group-hover:scale-[1.08]
                */}
                <div className={`relative overflow-hidden ${isTall ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] cubic-bezier(0.16,1,0.3,1) ease-out group-hover:scale-[1.08]"
                  />
                  {/* Subtle darkening gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink from-5% via-ink/60 via-35% to-transparent to-70% pointer-events-none" />
                </div>

                {/* Card Content at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6 pointer-events-none">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="glass rounded-full px-3 py-1 text-[0.7rem] font-semibold text-white">
                      {item.categoryLabel}
                    </span>
                    {item.location && (
                      <span className="inline-flex items-center gap-1 text-xs text-white/85">
                        <MapPin className="size-3 text-gold" /> {item.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg leading-snug font-semibold sm:text-xl text-white group-hover:text-gold-soft transition-colors">
                    {item.title}
                  </h3>

                  {/* View case study in gold that fades in smoothly on hover */}
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span>View case study</span>
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Full Portfolio Center CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewFullPortfolio || (() => onOpenQuoteModal({ title: "Full Portfolio Inquiries" }))}
            className="btn-outline-ink !border-ink !bg-ink !text-white hover:!bg-gold hover:!text-ink hover:!border-gold transition-all !px-8 !py-3.5 text-sm font-semibold rounded-full inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-ink/10"
          >
            <span>Discover all case studies</span>
            <ArrowUpRight className="size-4" />
          </button>
        </div>

      </div>
    </section>
  );
}