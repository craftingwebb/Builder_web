import React, { useState, useMemo } from 'react';
import {
  Briefcase,
  Heart,
  Users,
  ShieldCheck,
  Music,
  Camera,
  Check,
  ArrowUpRight,
  Search,
  X,
  Sparkles,
  PhoneCall,
  Crown
} from 'lucide-react';
import {
  CORPORATE_SERVICES,
  WEDDING_SERVICES,
  MANPOWER_ROSTER,
} from '../data/eventsData';
import WhatsAppIcon from './WhatsAppIcon';

export default function ServicesPage({ onOpenProposalModal, onViewPortfolio, onNavigateHome }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'corporate' | 'wedding' | 'manpower'
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedId, setHighlightedId] = useState(null);

  // Normalize all 3 streams into a unified master catalog of 39 services
  const unifiedCatalog = useMemo(() => {
    const corporate = CORPORATE_SERVICES.map((s) => ({
      id: s.id,
      pillar: 'corporate',
      pillarLabel: 'Corporate Event',
      badge: s.badge || 'High Impact',
      title: s.title,
      tagline: s.tagline,
      description: s.description,
      features: s.features,
      image: s.image,
      icon: Briefcase,
    }));

    const weddings = WEDDING_SERVICES.map((s) => ({
      id: s.id,
      pillar: 'wedding',
      pillarLabel: 'Wedding & Social',
      badge: s.badge || 'Royal Luxury',
      title: s.title,
      tagline: s.tagline,
      description: s.description,
      features: s.features,
      image: s.image,
      icon: Heart,
    }));

    const manpower = MANPOWER_ROSTER.map((s) => ({
      id: s.id,
      pillar: 'manpower',
      pillarLabel: 'Manpower & Artists',
      badge: s.badge || s.category,
      title: s.name,
      tagline: `${s.headcount} · Uniform: ${s.uniform}`,
      description: s.description,
      features: [
        ...s.roles,
        `Standards: ${s.experience}`
      ],
      image: s.image,
      icon: s.category === 'Security' ? ShieldCheck : s.category === 'Artists' || s.category === 'Cultural' ? Music : s.category === 'Production' ? Camera : Users,
    }));

    return [...corporate, ...weddings, ...manpower];
  }, []);

  // Filter based on active tab and search query
  const filteredServices = useMemo(() => {
    let list = unifiedCatalog;

    if (activeTab !== 'all') {
      list = list.filter((item) => item.pillar === activeTab);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((item) => {
        const inTitle = item.title.toLowerCase().includes(q);
        const inDesc = item.description.toLowerCase().includes(q);
        const inTag = item.tagline?.toLowerCase().includes(q);
        const inBadge = item.badge?.toLowerCase().includes(q);
        const inFeatures = item.features?.some((f) => f.toLowerCase().includes(q));
        return inTitle || inDesc || inTag || inBadge || inFeatures;
      });
    }

    return list;
  }, [unifiedCatalog, activeTab, searchQuery]);

  const handlePillClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHighlightedId(id);
      setTimeout(() => setHighlightedId(null), 2500);
    }
  };

  const handleServiceWhatsApp = (serviceTitle) => {
    const text = encodeURIComponent(
      `Hello S. A Event's and Manpower Service, I would like to inquire about *${serviceTitle}*. Please share packages, team availability, and pricing details.`
    );
    window.open(`https://wa.me/917600149422?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-ivory text-ink min-h-screen">
      {/* ========================================================= */}
      {/* 1. HERO HEADER SECTION */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#130308] pt-36 pb-24 sm:pt-44 sm:pb-32 text-white">
        {/* Background Image with Ambient Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=2000&q=85"
            alt=""
            className="h-full w-full object-cover opacity-20 filter contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#130308]/90 via-[#130308]/75 to-[#130308]" />
          <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[26rem] w-[55rem] rounded-full bg-[#991435]/35 blur-[130px]" />
          <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-[32rem] rounded-full bg-[#c9a96a]/15 blur-[110px]" />
        </div>

        <div className="site-container relative z-10">
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
              OUR COMPLETE SERVICE CATALOG
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-semibold tracking-tight leading-[1.1] text-white">
            Every format of event & certified manpower,{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              under one roof.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-3xl text-base sm:text-lg text-white/70 leading-relaxed">
            From high-stakes corporate conventions and nationwide BTL activations to royal palace weddings and 24/7 certified manpower deployments — explore our full 39 turnkey capabilities below.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
            {[
              { id: 'all', label: 'All Services (39)', icon: Sparkles },
              { id: 'corporate', label: 'Corporate Events (8)', icon: Briefcase },
              { id: 'wedding', label: 'Wedding & Social (11)', icon: Heart },
              { id: 'manpower', label: 'Manpower & Artists (20)', icon: Users },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-gold text-[#130308] ring-2 ring-gold/40 shadow-lg font-bold'
                      : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white border border-white/10'
                  }`}
                >
                  <TabIcon className="size-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Real-time Search Box */}
          <div className="mt-6 max-w-xl relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 size-4 text-white/40 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. Bouncers, Haldi, Ganga Aarti, LED Wall, Product Launch)..."
                className="w-full rounded-2xl bg-white/10 border border-white/15 py-3 pl-11 pr-10 text-xs sm:text-sm text-white placeholder-white/40 backdrop-blur-md transition-all focus:border-gold focus:bg-white/15 focus:outline-none focus:ring-1 focus:ring-gold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 text-white/40 hover:text-white transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 text-xs text-gold/90 font-medium">
                Found {filteredServices.length} matching service{filteredServices.length === 1 ? '' : 's'}
              </p>
            )}
          </div>

          {/* Horizontal Quick-Jump Pills */}
          {filteredServices.length > 0 && (
            <div className="mt-8 -mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-white/40 shrink-0 mr-1 hidden sm:inline">
                Quick Jump:
              </span>
              {filteredServices.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handlePillClick(s.id)}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-white/80 hover:border-gold hover:bg-white/15 hover:text-white backdrop-blur-sm transition-all cursor-pointer shrink-0 whitespace-nowrap active:scale-95"
                >
                  {s.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SERVICES CATALOG (39 Alternating Luxury Cards) */}
      {/* ========================================================= */}
      <section className="bg-ivory py-10 sm:py-16">
        <div className="site-container space-y-8">
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-black/5 shadow-sm p-8">
              <div className="size-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4">
                <Search className="size-8" />
              </div>
              <h3 className="text-2xl font-bold text-ink">No services found</h3>
              <p className="mt-2 text-ink/70 max-w-md mx-auto text-sm sm:text-base">
                We couldn't find any service matching "{searchQuery}". Try searching for terms like "Bouncers", "Haldi", "Hostesses", "LED Wall", or "Product Launch".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('all');
                }}
                className="mt-6 btn-gold px-6 py-2.5 text-xs font-semibold"
              >
                Reset filters & view all 39 services
              </button>
            </div>
          ) : (
            filteredServices.map((service, idx) => {
              const isReversed = idx % 2 !== 0; // Alternates image left / right
              const IconComponent = service.icon;
              const isHighlighted = highlightedId === service.id;
              const serialNum = String(idx + 1).padStart(2, '0');

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`group relative overflow-hidden rounded-3xl bg-white shadow-sm border transition-all duration-500 hover:shadow-2xl lg:h-[460px] xl:h-[470px] w-full ${
                    isHighlighted
                      ? 'border-gold ring-4 ring-gold/40 shadow-2xl scale-[1.01]'
                      : 'border-black/5 hover:border-gold/30'
                  }`}
                >
                  <div className="grid lg:grid-cols-12 h-full items-stretch">
                    
                    {/* IMAGE COLUMN (Exact 50% width & 100% height, pinned with absolute inset-0) */}
                    <div
                      className={`relative h-64 sm:h-80 lg:h-full lg:col-span-6 overflow-hidden ${
                        isReversed ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

                      {/* Watermark Serial Number */}
                      <span className="absolute top-6 left-6 font-bold text-6xl sm:text-7xl lg:text-8xl text-white/35 select-none tracking-tighter leading-none pointer-events-none font-serif drop-shadow-sm">
                        {serialNum}
                      </span>

                      {/* Floating Badges */}
                      <div className="absolute top-6 right-6 flex flex-col items-end gap-2 z-10">
                        <span className="rounded-full bg-black/70 backdrop-blur-md px-3.5 py-1 text-[11px] font-semibold text-gold border border-gold/30 uppercase tracking-wider shadow-sm">
                          {service.pillarLabel}
                        </span>
                        {service.badge && (
                          <span className="rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-[#130308] shadow-sm">
                            {service.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CONTENT COLUMN (Exact 50% width & 100% height, strictly uniform spacing) */}
                    <div
                      className={`flex flex-col justify-between p-6 sm:p-8 lg:p-9 xl:p-10 lg:col-span-6 h-full overflow-hidden ${
                        isReversed ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div>
                        {/* Header with Icon and Tagline */}
                        <div className="flex items-center gap-3">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#130308] text-gold border border-gold/20 shadow-md">
                            <IconComponent className="size-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                              {service.pillarLabel}
                            </span>
                            {service.tagline && (
                              <p className="text-xs text-ink/60 font-medium truncate">
                                {service.tagline}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Service Title - Normalized to 1 line on desktop */}
                        <h2 className="mt-3.5 text-xl sm:text-2xl lg:text-[1.65rem] font-bold tracking-tight text-ink line-clamp-1" title={service.title}>
                          {service.title}
                        </h2>

                        {/* Description - Normalized to 2-3 lines */}
                        <p className="mt-2.5 text-xs sm:text-sm text-ink/75 leading-relaxed line-clamp-2 sm:line-clamp-3">
                          {service.description}
                        </p>

                        {/* Features Checkpoints - Exactly 4 concise bullets */}
                        <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                          {service.features.slice(0, 4).map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 min-w-0">
                              <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#f4e8d1] text-amber-800 mt-0.5">
                                <Check className="size-2.5 stroke-[3]" />
                              </span>
                              <span className="text-xs font-medium text-ink/85 truncate" title={feature}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action Buttons - Uniformly pinned to bottom */}
                      <div className="mt-4 pt-4 border-t border-black/5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                        <button
                          onClick={() => handleServiceWhatsApp(service.title)}
                          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:bg-[#20ba59] hover:shadow-lg cursor-pointer active:scale-95"
                        >
                          <WhatsAppIcon className="size-4" />
                          <span>Inquire on WhatsApp</span>
                        </button>

                        <button
                          onClick={() => onOpenProposalModal?.(service.title)}
                          className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-ink transition-all hover:border-ink hover:bg-zinc-50 cursor-pointer active:scale-95"
                        >
                          <span>Get a proposal</span>
                          <ArrowUpRight className="size-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. BOTTOM BANNER CARD */}
      {/* ========================================================= */}
      <section className="bg-ivory pb-20 sm:pb-28">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-[#130308] p-6 sm:p-14 lg:p-16 text-white shadow-2xl border border-gold/20">
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
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-8 h-px bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                REQUEST A PROPOSAL
              </span>
            </div>

            {/* Headline */}
            <h2 className="max-w-2xl text-2xl min-[400px]:text-3xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.15] text-white">
              Have an event or manpower requirement?
            </h2>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-lg text-white/70 leading-relaxed">
              Share your dates, venue, and required manpower headcount — receive a line-item concept note with indicative budget in 24 to 48 hours.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-9 flex flex-col min-[420px]:flex-row min-[420px]:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenProposalModal?.()}
                className="btn-gold !py-3.5 !px-7 font-semibold text-sm cursor-pointer shadow-lg w-full min-[420px]:w-auto justify-center"
              >
                <span>Start your proposal</span>
                <ArrowUpRight className="size-4" />
              </button>
              <button
                onClick={onViewPortfolio}
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
