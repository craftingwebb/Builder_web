import React, { useState, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Check, Building2, Heart, Users } from 'lucide-react';
import { CORPORATE_SERVICES, WEDDING_SERVICES, MANPOWER_ROSTER } from '../data/eventsData';

export default function ServicesSection({ onSelectService, onNavigateServices }) {
  const [activeTab, setActiveTab] = useState('corporate');
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Scoped specifically to the rows list container so image never leaks into the header!
  const listRef = useRef(null);

  // Group services based on activeTab
  let displayList = [];
  if (activeTab === 'corporate') {
    displayList = CORPORATE_SERVICES.map((s, idx) => ({
      num: String(idx + 1).padStart(2, '0'),
      id: s.id,
      title: s.title,
      summary: s.tagline || s.description.slice(0, 95) + '...',
      fullDesc: s.description,
      features: s.features,
      image: s.image,
      category: 'Corporate Event'
    }));
  } else if (activeTab === 'wedding') {
    displayList = WEDDING_SERVICES.map((s, idx) => ({
      num: String(idx + 1).padStart(2, '0'),
      id: s.id,
      title: s.title,
      summary: s.tagline || s.description.slice(0, 95) + '...',
      fullDesc: s.description,
      features: s.features,
      image: s.image,
      category: 'Wedding Celebration'
    }));
  } else {
    displayList = MANPOWER_ROSTER.map((s, idx) => ({
      num: String(idx + 1).padStart(2, '0'),
      id: s.id,
      title: s.name,
      summary: `${s.headcount} · ${s.uniform}`,
      fullDesc: s.description,
      features: s.roles,
      image: s.image,
      category: 'Manpower Deployment'
    }));
  }

  // Smooth mouse move strictly calculated within listRef
  const handleMouseMove = (e) => {
    if (!listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    
    // Bounds check: if mouse leaves the rows area vertically, hide instantly!
    if (e.clientY < rect.top || e.clientY > rect.bottom) {
      setHoveredIdx(null);
      return;
    }

    const targetX = e.clientX - rect.left - 160;
    const targetY = e.clientY - rect.top - 110;
    setCursorPos({ x: targetX, y: targetY });
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="relative overflow-hidden bg-ink py-24 text-white lg:py-36">
      
      {/* Background ambient radial glow */}
      <div className="pointer-events-none absolute top-1/3 -right-40 size-[40rem] rounded-full bg-[rgba(153,20,53,0.18)] blur-[140px]" />

      <div className="site-container">
        
        {/* Section Header: Title on Left, 'All services ↗' Button on Right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <p className="eyebrow text-gold">Our Capabilities</p>
            <h2 className="display mt-4 text-[2.4rem] sm:text-5xl lg:text-6xl">
              Turnkey production services, <span className="accent-serif text-gold-soft">from concept to curtain call.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/60 leading-relaxed font-normal">
              Specialist creative and technical disciplines united under one roof &mdash; each steered by seasoned directors with hundreds of successful productions to their name.
            </p>
          </div>

          {/* Top-Right 'All services ↗' Button from original reference site! */}
          <div className="shrink-0">
            <button
              onClick={() => {
                if (onNavigateServices) {
                  onNavigateServices();
                } else {
                  window.location.hash = '#/services';
                }
              }}
              className="btn-ghost-light !px-6 !py-3 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 cursor-pointer hover:border-gold hover:text-gold transition-all"
            >
              <span>Explore services</span>
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Clean, Non-wrapping Single-Row Category Tabs with mobile edge-to-edge scroll */}
        <div className="mb-10 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => { setActiveTab('corporate'); setExpandedId(null); setHoveredIdx(null); }}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'corporate'
                ? 'bg-[#801436] text-white font-bold shadow-lg shadow-[#801436]/40 ring-1 ring-gold/50 scale-102'
                : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Building2 className="size-3.5" />
            <span>Corporate Events (8)</span>
          </button>

          <button
            onClick={() => { setActiveTab('wedding'); setExpandedId(null); setHoveredIdx(null); }}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'wedding'
                ? 'bg-[#801436] text-white font-bold shadow-lg shadow-[#801436]/40 ring-1 ring-gold/50 scale-102'
                : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Heart className="size-3.5" />
            <span>Weddings &amp; Social (11)</span>
          </button>

          <button
            onClick={() => { setActiveTab('manpower'); setExpandedId(null); setHoveredIdx(null); }}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'manpower'
                ? 'bg-[#801436] text-white font-bold shadow-lg shadow-[#801436]/40 ring-1 ring-gold/50 scale-102'
                : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Users className="size-3.5" />
            <span>Manpower &amp; Artists (20+)</span>
          </button>
        </div>

        {/* =========================================================================
            SERVICES ROWS LIST CONTAINER
            The floating image is STRICTLY CONTAINED inside this div so it can
            NEVER leak into the title, header, or buttons area!
            ========================================================================= */}
        <div
          ref={listRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredIdx(null)}
          className="relative border-t border-white/10"
        >
          {/* CURSOR-FOLLOWING FLOATING IMAGE THUMBNAIL */}
          <div
            className={`pointer-events-none absolute top-0 left-0 z-30 hidden h-56 w-80 overflow-hidden rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/20 lg:block transition-[opacity,scale] duration-300 ease-out ${
              hoveredIdx !== null ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{
              transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
              transition: 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease, scale 0.25s ease',
              willChange: 'transform',
            }}
          >
            {displayList.map((item, idx) => (
              <img
                key={item.id}
                src={item.image}
                alt=""
                onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                  hoveredIdx === idx ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10" />
          </div>

          {/* Rows List */}
          {displayList.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            const isHovered = hoveredIdx === idx;

            return (
              <div key={item.id} className="border-b border-white/10">
                
                {/* Horizontal Clickable Row */}
                <div
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={() => toggleExpand(item.id)}
                  className="group relative grid grid-cols-[1fr_auto] sm:grid-cols-[4rem_1fr_auto] lg:grid-cols-[5rem_1.1fr_1fr_auto] items-center gap-3 sm:gap-4 py-5 sm:py-8 transition-colors cursor-pointer"
                >
                  {/* Column 1: Number */}
                  <span className="hidden text-sm font-medium text-white/35 tabular-nums sm:block font-mono">
                    {item.num}
                  </span>

                  {/* Column 2: Title */}
                  <span className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span
                      className={`text-lg sm:text-2xl lg:text-[1.85rem] font-semibold tracking-tight transition duration-500 truncate sm:whitespace-normal ${
                        isHovered
                          ? 'translate-x-2 text-gold-soft'
                          : 'text-white'
                      }`}
                    >
                      {item.title}
                    </span>
                  </span>

                  {/* Column 3: Summary / Tagline */}
                  <span className="hidden text-sm leading-relaxed text-white/50 lg:block line-clamp-1 pr-6">
                    {item.summary}
                  </span>

                  {/* Column 4: Arrow Button (Unhovered: diagonal arrow ↗, Hovered: solid gold circle with horizontal arrow →) */}
                  <div
                    className={`flex size-10 sm:size-11 items-center justify-center rounded-full transition-all duration-300 shrink-0 ${
                      isHovered
                        ? 'bg-gold text-ink border border-gold scale-105 shadow-lg shadow-gold/30'
                        : 'border border-white/15 text-white/70'
                    }`}
                  >
                    {isHovered ? (
                      <ArrowRight className={`size-4 sm:size-4.5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                    ) : (
                      <ArrowUpRight className="size-4 sm:size-4.5" />
                    )}
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="pb-8 pt-4 px-4 sm:px-12 bg-white/[0.02] rounded-2xl mb-6 border border-white/10 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
                      
                      {item.image && (
                        <div className="md:col-span-4 rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-xl">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                      )}

                      <div className={item.image ? "md:col-span-8 space-y-5" : "md:col-span-12 space-y-5"}>
                        <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                          {item.fullDesc}
                        </p>

                        {item.features && item.features.length > 0 && (
                          <div className="pt-2">
                            <span className="text-xs font-mono uppercase tracking-wider text-gold block mb-3 font-semibold">
                              Technical Inclusions &amp; Scope:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/70">
                              {item.features.map((feat, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <Check className="size-3.5 text-gold shrink-0" />
                                  <span>{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectService(item);
                            }}
                            className="btn-gold w-full sm:w-auto justify-center cursor-pointer"
                          >
                            <span>Request Booking &amp; Quote</span>
                            <ArrowRight className="size-4" />
                          </button>

                          <a
                            href={`https://wa.me/917600149422?text=Hello,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(item.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-emerald-400 hover:underline font-semibold text-center sm:text-left py-1"
                          >
                            Chat with Director on WhatsApp &rarr;
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
