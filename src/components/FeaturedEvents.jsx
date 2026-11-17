import React, { useRef, useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

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
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (!desktop) {
        setTranslateX(0);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (window.innerWidth < 1024) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current || !trackRef.current) return;

          const rect = containerRef.current.getBoundingClientRect();
          const totalDistance = rect.height - window.innerHeight;

          if (totalDistance <= 0) return;

          // Compute scroll progress from 0 (when top of section hits top of viewport) to 1 (when bottom exits)
          const scrolled = -rect.top;
          const progress = Math.min(Math.max(scrolled / totalDistance, 0), 1);

          // Total horizontal translation needed: track's scroll width minus visible screen width + offset
          const maxTranslate = Math.max(trackRef.current.scrollWidth - window.innerWidth + 90, 0);
          setTranslateX(progress * maxTranslate);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      id="featured-stages"
      ref={containerRef}
      className={`relative bg-ink text-white ${
        isDesktop ? '' : 'py-16 sm:py-20 overflow-hidden'
      }`}
      style={isDesktop ? { height: '340vh' } : { height: 'auto' }}
    >
      {/* Viewport frame: sticky on desktop, normal flow on mobile */}
      <div
        className={
          isDesktop
            ? "sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden pt-20 lg:pt-24 pb-8 lg:pb-10"
            : "relative flex w-full flex-col overflow-hidden"
        }
      >
        {/* Section Header */}
        <div className="site-container mb-6 sm:mb-8 flex items-end justify-between gap-6 shrink-0 lg:mb-10">
          <div>
            <p className="eyebrow text-gold mb-3">Milestone productions</p>
            <h2 className="display text-[2.2rem] sm:text-5xl lg:text-6xl text-white">
              Iconic arenas{' '}
              <span className="accent-serif text-gold-soft">
                we’ve brought to life.
              </span>
            </h2>
          </div>

          <button
            onClick={onViewPortfolio || (() => onOpenProposalModal?.({ title: "Full Portfolio Inquiries" }))}
            className="btn-ghost-light hidden sm:inline-flex cursor-pointer hover:border-gold hover:text-gold transition-all"
          >
            <span>View case studies</span>
            <ArrowUpRight className="size-4" />
          </button>
        </div>

        {/* Horizontal Track: Translated on desktop with scroll, native touch snap on mobile */}
        <div
          ref={trackRef}
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
                }
          }
        >
          {FEATURED_STAGES.map((event) => (
            <div
              key={event.id}
              onClick={() => onOpenProposalModal?.(event)}
              className="group relative w-[82vw] shrink-0 snap-start overflow-hidden rounded-[2rem] sm:w-[58vw] lg:w-[38vw] xl:w-[32vw] cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-500 hover:border-gold/40"
            >
              {/* Big Photo Container (Aspect 4/3) */}
              <div className="aspect-[4/3] max-h-[46vh] overflow-hidden bg-ink">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[1.2s] ease-out group-hover:scale-105"
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

          {/* End Card: View All Projects (Exact from reference image 3) */}
          <div
            onClick={() => onOpenProposalModal?.({ title: "All Projects & Archive" })}
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

      </div>
    </section>
  );
}
