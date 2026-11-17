import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [activeIndex, setActiveIndex] = useState(0);

  // Mouse drag to scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const hasMoved = useRef(false);

  const updateScrollState = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    // Approximate active card index
    const cardWidth = clientWidth * 0.4;
    if (cardWidth > 0) {
      const idx = Math.min(
        Math.max(Math.round(scrollLeft / cardWidth), 0),
        FEATURED_STAGES.length - 1
      );
      setActiveIndex(idx);
    }
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction) => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    // Calculate card width dynamically from visible cards
    const firstCard = container.querySelector('[data-card]');
    const scrollAmount = firstCard
      ? firstCard.getBoundingClientRect().width + 24
      : container.clientWidth * 0.75;

    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  // Drag-to-scroll handlers for desktop
  const handleMouseDown = (e) => {
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftStart.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
    trackRef.current.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) {
      hasMoved.current = true;
    }
    trackRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging.current && trackRef.current) {
      isDragging.current = false;
      trackRef.current.style.cursor = 'grab';
      trackRef.current.style.removeProperty('user-select');
    }
  };

  const handleCardClick = (event) => {
    // If the user was dragging, don't trigger modal click
    if (hasMoved.current) {
      hasMoved.current = false;
      return;
    }
    onOpenProposalModal?.(event);
  };

  return (
    <section
      id="featured-stages"
      className="relative overflow-hidden bg-ink py-16 sm:py-20 lg:py-28 text-white"
    >
      {/* Subtle ambient ruby glow behind track */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[50rem] rounded-full bg-[#991435]/15 blur-[140px]"
      />

      <div className="relative">
        {/* Section Header */}
        <div className="site-container mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-12">
          <div>
            <p className="eyebrow text-gold mb-3">Milestone productions</p>
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl text-white">
              Iconic arenas{' '}
              <span className="accent-serif text-gold-soft">
                we’ve brought to life.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={onViewPortfolio || (() => onOpenProposalModal?.({ title: "Full Portfolio Inquiries" }))}
              className="btn-ghost-light hidden sm:inline-flex cursor-pointer hover:border-gold hover:text-gold transition-all mr-2"
            >
              <span>View case studies</span>
              <ArrowUpRight className="size-4" />
            </button>

            {/* Carousel Previous Button */}
            <button
              onClick={() => scrollByCard('prev')}
              disabled={!canScrollLeft}
              className={`flex size-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 ${
                canScrollLeft
                  ? 'bg-white/10 text-white hover:bg-gold hover:text-ink hover:border-gold cursor-pointer shadow-lg active:scale-95'
                  : 'bg-white/5 text-white/25 border-white/10 cursor-not-allowed opacity-50'
              }`}
              aria-label="Previous slide"
              title="Previous showcase"
            >
              <ChevronLeft className="size-5" />
            </button>

            {/* Carousel Next Button */}
            <button
              onClick={() => scrollByCard('next')}
              disabled={!canScrollRight}
              className={`flex size-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 ${
                canScrollRight
                  ? 'bg-white/10 text-white hover:bg-gold hover:text-ink hover:border-gold cursor-pointer shadow-lg active:scale-95'
                  : 'bg-white/5 text-white/25 border-white/10 cursor-not-allowed opacity-50'
              }`}
              aria-label="Next slide"
              title="Next showcase"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Track: Butter-smooth carousel, draggable on desktop, swipeable on mobile */}
        <div
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 pl-[max(1.25rem,calc((100vw-88rem)/2+1.25rem))] pr-6 sm:pr-12 cursor-grab active:cursor-grabbing"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth',
          }}
        >
          {FEATURED_STAGES.map((event, idx) => (
            <div
              key={event.id}
              data-card
              onClick={() => handleCardClick(event)}
              className="group relative w-[84vw] shrink-0 snap-start overflow-hidden rounded-[2rem] sm:w-[56vw] lg:w-[38vw] xl:w-[32vw] cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-500 hover:border-gold/40 hover:-translate-y-1"
            >
              {/* Photo Container */}
              <div className="aspect-[4/3] max-h-[46vh] overflow-hidden bg-ink">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 select-none"
                />
              </div>

              {/* Gradient overlays matching reference */}
              <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-ink/80 via-ink/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink from-15% via-ink/80 via-50% to-transparent to-85% pointer-events-none" />

              {/* Number Badge (01 / 06) */}
              <span className="absolute top-5 left-6 text-xs sm:text-sm font-semibold tracking-[0.2em] text-white/80 tabular-nums sm:top-7 sm:left-8 font-mono">
                {event.num}
              </span>

              {/* Card Bottom Meta & Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 text-xs text-white/80">
                  <span className="glass rounded-full px-3 py-1 font-semibold text-white">
                    {event.category}
                  </span>
                  <span className="text-white/60 font-medium">
                    {event.meta}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-[1.7rem] line-clamp-1 group-hover:text-gold-soft transition-colors">
                  {event.title}
                </h3>

                <p className="mt-2 line-clamp-2 max-w-lg text-xs sm:text-sm leading-relaxed text-white/65">
                  {event.summary}
                </p>
              </div>
            </div>
          ))}

          {/* End Card: View All Projects */}
          <div
            data-card
            onClick={() => handleCardClick({ title: "All Projects & Archive" })}
            className="group flex aspect-[4/3] w-[70vw] shrink-0 snap-start flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.03] text-center sm:w-[45vw] lg:w-[26vw] xl:w-[22vw] cursor-pointer transition-all duration-500 hover:bg-white/[0.07] hover:border-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <span className="flex size-16 sm:size-20 items-center justify-center rounded-full bg-gold text-ink transition duration-500 group-hover:scale-110 group-hover:rotate-45 shadow-lg shadow-gold/30">
              <ArrowUpRight className="size-8 stroke-[2.5]" />
            </span>
            <span className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold text-white group-hover:text-gold transition-colors">
              View all projects
            </span>
          </div>
        </div>

        {/* Mobile quick-link */}
        <div className="site-container mt-6 flex justify-center sm:hidden">
          <button
            onClick={onViewPortfolio || (() => onOpenProposalModal?.({ title: "Full Portfolio Inquiries" }))}
            className="btn-ghost-light w-full justify-center"
          >
            <span>View all case studies</span>
            <ArrowUpRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
