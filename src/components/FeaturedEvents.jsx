import React, { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const FEATURED_STAGES = [
  {
    id: "stage-1",
    num: "01 / 06",
    category: "Corporate Conclave",
    meta: "850 guests · Goa · Oct 2026",
    title: "Apex Mobility National Conclave 2026",
    summary: "A three-day strategic dealer assembly and honors gala for 850 trade partners, culminating in a dramatic new EV line unveiling.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "stage-2",
    num: "02 / 06",
    category: "Leadership Summit",
    meta: "600 guests · Hyderabad · Aug 2026",
    title: "Novalis LifeSciences Executive Forum",
    summary: "A high-level symposium for 600 global directors featuring keynote addresses, interactive panel debates, and live delegate polling.",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "stage-3",
    num: "03 / 06",
    category: "Product Reveal",
    meta: "1,200 guests · Mumbai · Jun 2026",
    title: "Aura Financial Tech Grand Unveil",
    summary: "An expansive hybrid launch streamed to 50,000 live participants, driven by interactive digital canvases and global press coverage.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "stage-4",
    num: "04 / 06",
    category: "Exhibition Pavilion",
    meta: "15,000 guests · New Delhi · Apr 2026",
    title: "Global Infra Expo — Flagship Pavilion",
    summary: "A sprawling 600 sq. m. turnkey showcase featuring modular experiential zones designed for high-value B2B engagement.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "stage-5",
    num: "05 / 06",
    category: "Honors Gala",
    meta: "900 guests · Mumbai · Feb 2026",
    title: "Vanguard Capital Annual Honors Night",
    summary: "A formal black-tie banquet celebrating standout leadership with bespoke stage architecture and a 40-piece live symphony.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "stage-6",
    num: "06 / 06",
    category: "Arena Experience",
    meta: "3,500 guests · Bengaluru · Dec 2025",
    title: "Stratosphere Digital Carnival",
    summary: "An electrifying company celebration for 3,500 associates featuring headlining arena musicians and an illuminated aerial drone finale.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function FeaturedEvents({ onOpenProposalModal, onViewPortfolio }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollByCard = (direction) => {
    if (!trackRef.current) return;
    const card = trackRef.current.firstElementChild;
    const scrollAmount = card ? card.clientWidth + 20 : 360;
    trackRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="featured-stages"
      className="relative overflow-hidden bg-ink py-20 sm:py-28 lg:py-32 text-white"
    >
      {/* Background ambient radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 h-[32rem] w-[32rem] rounded-full bg-[#991435]/20 blur-[130px]"
      />

      <div className="site-container">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-gold mb-3">Milestone productions</p>
            <h2 className="display text-[2.2rem] sm:text-5xl lg:text-6xl text-white">
              Iconic arenas{' '}
              <span className="accent-serif text-gold-soft">
                we’ve brought to life.
              </span>
            </h2>
          </div>

          {/* Right Action: Case studies link & Prev/Next Arrow buttons */}
          <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
            <button
              onClick={onViewPortfolio || (() => onOpenProposalModal?.({ title: "Full Portfolio Inquiries" }))}
              className="btn-ghost-light !px-5 !py-2.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer hover:border-gold hover:text-gold transition-all"
            >
              <span>View case studies</span>
              <ArrowUpRight className="size-4" />
            </button>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-2 ml-1">
              <button
                onClick={() => scrollByCard('prev')}
                disabled={!canScrollLeft}
                aria-label="Previous milestone"
                className={`flex size-10 items-center justify-center rounded-full border transition-all cursor-pointer ${
                  canScrollLeft
                    ? 'border-white/20 bg-white/5 text-white hover:border-gold hover:text-gold hover:bg-white/10 active:scale-95'
                    : 'border-white/10 bg-transparent text-white/30 cursor-not-allowed opacity-40'
                }`}
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                onClick={() => scrollByCard('next')}
                disabled={!canScrollRight}
                aria-label="Next milestone"
                className={`flex size-10 items-center justify-center rounded-full border transition-all cursor-pointer ${
                  canScrollRight
                    ? 'border-white/20 bg-white/5 text-white hover:border-gold hover:text-gold hover:bg-white/10 active:scale-95'
                    : 'border-white/10 bg-transparent text-white/30 cursor-not-allowed opacity-40'
                }`}
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Moving Track / Native Snap Carousel */}
      <div
        ref={trackRef}
        className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pl-[max(1.25rem,calc((100vw-88rem)/2+1.25rem))] pr-6 sm:pr-12 pb-4 pt-1"
      >
        {FEATURED_STAGES.map((event) => (
          <div
            key={event.id}
            onClick={() => onOpenProposalModal?.(event)}
            className="group relative w-[82vw] sm:w-[55vw] lg:w-[38vw] xl:w-[32vw] shrink-0 snap-start overflow-hidden rounded-2xl sm:rounded-[2rem] bg-zinc-900 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 transition-all duration-500 hover:border-gold/40 flex flex-col justify-end"
          >
            {/* Big Photo Container (Aspect 4/3) */}
            <div className="aspect-[4/3] overflow-hidden bg-ink w-full relative">
              <img
                src={event.image}
                alt={event.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient overlays */}
              <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-ink/80 via-ink/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink from-15% via-ink/80 via-50% to-transparent to-85% pointer-events-none" />

              {/* Number Badge (01 / 06) */}
              <span className="absolute top-4 left-5 sm:top-6 sm:left-7 text-xs sm:text-sm font-semibold tracking-[0.2em] text-white/80 tabular-nums font-mono">
                {event.num}
              </span>
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-7 bg-ink">
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/80">
                <span className="glass rounded-full px-3 py-1 font-semibold text-white">
                  {event.category}
                </span>
                <span className="text-white/60 font-medium">
                  {event.meta}
                </span>
              </div>

              <h3 className="mt-3 text-lg sm:text-xl lg:text-[1.5rem] font-bold tracking-tight text-white line-clamp-1 group-hover:text-gold-soft transition-colors">
                {event.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-xs sm:text-sm leading-relaxed text-white/65">
                {event.summary}
              </p>
            </div>
          </div>
        ))}

        {/* End Card: View All Projects */}
        <div
          onClick={() => onOpenProposalModal?.({ title: "All Projects & Archive" })}
          className="group flex aspect-[4/3] w-[70vw] sm:w-[45vw] lg:w-[26vw] xl:w-[22vw] shrink-0 snap-start flex-col items-center justify-center rounded-2xl sm:rounded-[2rem] border border-white/10 bg-white/[0.03] text-center cursor-pointer transition-all duration-500 hover:bg-white/[0.07] hover:border-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          <span className="flex size-14 sm:size-18 items-center justify-center rounded-full bg-gold text-ink transition duration-500 group-hover:scale-110 group-hover:rotate-45 shadow-lg shadow-gold/30">
            <ArrowUpRight className="size-6 sm:size-7 stroke-[2.5]" />
          </span>
          <span className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-white group-hover:text-gold transition-colors">
            View all projects
          </span>
        </div>
      </div>
    </section>
  );
}
