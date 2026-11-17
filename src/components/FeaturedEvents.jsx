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
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "stage-2",
    num: "02 / 06",
    category: "Leadership Summit",
    meta: "600 guests · Hyderabad · Aug 2026",
    title: "Novalis LifeSciences Executive Forum",
    summary: "A high-level symposium for 600 Indian business leaders and directors featuring keynote addresses, interactive panel debates, and live polling.",
    image: "https://images.pexels.com/photos/7581114/pexels-photo-7581114.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    id: "stage-3",
    num: "03 / 06",
    category: "Product Reveal",
    meta: "1,200 guests · Mumbai · Jun 2026",
    title: "Aura Financial Tech Grand Unveil",
    summary: "An expansive hybrid launch at Jio World Centre streamed to 50,000 live participants, driven by interactive digital canvases and nationwide press coverage.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "stage-4",
    num: "04 / 06",
    category: "Exhibition Pavilion",
    meta: "15,000 guests · New Delhi · Apr 2026",
    title: "Global Infra Expo — Flagship Pavilion",
    summary: "A sprawling 600 sq. m. turnkey showcase at Bharat Mandapam featuring modular experiential zones designed for high-value B2B engagement.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "stage-5",
    num: "05 / 06",
    category: "Honors Gala",
    meta: "900 guests · Udaipur · Feb 2026",
    title: "Vanguard Heritage Annual Honors Night",
    summary: "A formal black-tie banquet celebrating standout leadership with bespoke palace stage architecture and a 40-piece live symphony.",
    image: "https://images.pexels.com/photos/33485963/pexels-photo-33485963/free-photo-of-elegant-indian-palace-courtyard-wedding-venue.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    id: "stage-6",
    num: "06 / 06",
    category: "Arena Experience",
    meta: "3,500 guests · Bengaluru · Dec 2025",
    title: "Stratosphere Digital Carnival",
    summary: "An electrifying company celebration for 3,500 associates featuring headlining arena musicians and an illuminated aerial drone finale.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function FeaturedEvents({ onOpenProposalModal, onViewPortfolio }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);
  const [containerHeight, setContainerHeight] = useState('auto');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Measure dynamic scroll distance for desktop horizontal pinning
  const calculateMetrics = useCallback(() => {
    const desktop = window.innerWidth >= 1024;
    setIsDesktop(desktop);

    if (desktop && trackRef.current) {
      const scrollWidth = trackRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      const maxTranslate = Math.max(scrollWidth - windowWidth + 120, 0);
      
      // Exact height: horizontal scroll travel distance + full viewport height (ZERO void/dead space)
      const exactHeight = maxTranslate + window.innerHeight;
      setContainerHeight(`${exactHeight}px`);

      // Update current translation based on existing scroll position
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrolled = -rect.top;
        if (maxTranslate > 0) {
          const progress = Math.min(Math.max(scrolled / maxTranslate, 0), 1);
          setTranslateX(progress * maxTranslate);
          setCanScrollLeft(progress > 0.02);
          setCanScrollRight(progress < 0.98);
        }
      }
    } else {
      setContainerHeight('auto');
      setTranslateX(0);
    }
  }, []);

  useEffect(() => {
    calculateMetrics();
    window.addEventListener('resize', calculateMetrics);
    return () => window.removeEventListener('resize', calculateMetrics);
  }, [calculateMetrics]);

  // Sync scroll on desktop
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (window.innerWidth < 1024) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current || !trackRef.current) return;

          const rect = containerRef.current.getBoundingClientRect();
          const scrollWidth = trackRef.current.scrollWidth;
          const windowWidth = window.innerWidth;
          const maxTranslate = Math.max(scrollWidth - windowWidth + 120, 0);

          if (maxTranslate <= 0) return;

          const scrolled = -rect.top;
          const progress = Math.min(Math.max(scrolled / maxTranslate, 0), 1);
          const newTranslate = progress * maxTranslate;

          setTranslateX(newTranslate);
          setCanScrollLeft(progress > 0.02);
          setCanScrollRight(progress < 0.98);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync mobile touch scroll
  const handleMobileScroll = () => {
    if (isDesktop || !trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scrollByCard = (direction) => {
    if (isDesktop) {
      // In desktop sticky mode, scroll vertical window by 1 card distance (~500px)
      const scrollStep = window.innerWidth * 0.35;
      window.scrollBy({
        top: direction === 'next' ? scrollStep : -scrollStep,
        behavior: 'smooth',
      });
    } else if (trackRef.current) {
      const scrollStep = trackRef.current.clientWidth * 0.8;
      trackRef.current.scrollBy({
        left: direction === 'next' ? scrollStep : -scrollStep,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="featured-stages"
      ref={containerRef}
      style={isDesktop ? { height: containerHeight } : undefined}
      className={`relative bg-ink text-white ${
        isDesktop ? '' : 'py-16 sm:py-20 lg:py-28 overflow-hidden'
      }`}
    >
      {/* Sticky viewport frame on desktop, normal container on mobile */}
      <div
        className={
          isDesktop
            ? 'sticky top-0 h-screen flex flex-col justify-center overflow-hidden'
            : 'relative overflow-hidden'
        }
      >
        {/* Subtle ambient ruby glow behind track */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[50rem] rounded-full bg-[#991435]/15 blur-[140px]"
        />

        <div className="relative">
          {/* Section Header */}
          <div className="site-container mb-6 sm:mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-10">
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

          {/* Horizontal Track: Translated on desktop with scroll, native swipe on mobile */}
          <div
            ref={trackRef}
            onScroll={handleMobileScroll}
            className={`flex items-center gap-5 sm:gap-6 pl-[max(1.25rem,calc((100vw-88rem)/2+1.25rem))] pr-16 sm:pr-24 ${
              isDesktop
                ? 'will-change-transform'
                : 'overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1'
            }`}
            style={
              isDesktop
                ? {
                    transform: `translate3d(-${translateX}px, 0, 0)`,
                    transition: 'transform 0.08s cubic-bezier(0.25, 1, 0.5, 1)',
                  }
                : {
                    transform: 'none',
                    WebkitOverflowScrolling: 'touch',
                  }
            }
          >
            {FEATURED_STAGES.map((event) => (
              <div
                key={event.id}
                data-card
                onClick={() => onOpenProposalModal?.(event)}
                className="group relative w-[82vw] shrink-0 snap-start overflow-hidden rounded-[2rem] sm:w-[58vw] lg:w-[38vw] xl:w-[32vw] cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-500 hover:border-gold/40 hover:-translate-y-1"
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

                {/* Gradient overlays */}
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
              onClick={() => onViewPortfolio ? onViewPortfolio() : onOpenProposalModal?.({ title: "All Projects & Archive" })}
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
      </div>
    </section>
  );
}

