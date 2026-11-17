import React, { useState, useEffect } from 'react';
import {
  Camera,
  Film,
  Sparkles,
  Image as ImageIcon,
  Clapperboard,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';

// Comprehensive gallery dataset of authentic Indian event productions, royal weddings, grand stages, and behind-the-scenes
const GALLERY_ITEMS = [
  {
    id: 'gal-01',
    title: 'Apex National Conclave Plenary',
    category: 'highlights',
    categoryLabel: 'Event Highlights',
    aspect: 'aspect-[4/5]',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    location: 'Goa Grand Ballroom',
    caption: 'Turnkey stagecraft with curved 4K ultra-fine LED wall and intelligent beam arrays for 850 automotive directors.',
  },
  {
    id: 'gal-02',
    title: 'Aura EV National Grand Reveal Stage',
    category: 'stages',
    categoryLabel: 'Stages & Production',
    aspect: 'aspect-[16/10]',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
    location: 'Mumbai Jio World Convention',
    caption: 'Official reveal stage with synchronized 360-degree laser tracking, timecoded lighting cues, and surround acoustics.',
  },
  {
    id: 'gal-03',
    title: 'Global Tech Leadership Summit & Expo',
    category: 'stages',
    categoryLabel: 'Stages & Production',
    aspect: 'aspect-[3/4]',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    location: 'Hyderabad HICC Center',
    caption: 'Dual plenary auditorium hosting 1,200 delegates with real-time digital polling and multi-language translation feeds.',
  },
  {
    id: 'gal-04',
    title: 'Backstage Master AV Console & Timecode Control',
    category: 'behind-the-scenes',
    categoryLabel: 'Behind The Scenes',
    aspect: 'aspect-[4/3]',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
    location: 'Main Control Desk',
    caption: 'Show directors and master switchers cueing pyro, projection mapping, and audio timecodes second by second.',
  },
  {
    id: 'gal-05',
    title: 'Stratosphere Festival Arena Night',
    category: 'highlights',
    categoryLabel: 'Event Highlights',
    aspect: 'aspect-[4/5]',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    location: 'Bengaluru Open Grounds',
    caption: '3,500 corporate associates celebrating company milestone with headlining arena artists and synchronized wristbands.',
  },
  {
    id: 'gal-06',
    title: 'Royal Udaipur Palace Illumination & Banquet',
    category: 'weddings',
    categoryLabel: 'Royal Weddings & Decor',
    aspect: 'aspect-[16/10]',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    location: 'Jagmandir Island Palace, Udaipur',
    caption: 'Palace facade ambient uplighting, royal dining architecture, crystal candelabras, and 5-course VIP banquet.',
  },
  {
    id: 'gal-07',
    title: 'Truss Rigging & Intelligent Lighting Call',
    category: 'behind-the-scenes',
    categoryLabel: 'Behind The Scenes',
    aspect: 'aspect-[3/4]',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    location: 'Stage Hangar Rigging',
    caption: 'Structural engineers and rigging specialists securing high-load aluminum trusses 14 meters above the main stage.',
  },
  {
    id: 'gal-08',
    title: 'Fintech Breakthrough Keynote & Orator Podium',
    category: 'stages',
    categoryLabel: 'Stages & Production',
    aspect: 'aspect-[4/3]',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    location: 'Mumbai Jio World Convention',
    caption: 'Keynote spotlight on holographic market analytics with 200 sq. m. seamless P2.5 LED canvas.',
  },
  {
    id: 'gal-09',
    title: 'Future Pavilion Expo Footfall & Modular Booths',
    category: 'stages',
    categoryLabel: 'Stages & Production',
    aspect: 'aspect-[4/5]',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    location: 'Bharat Mandapam, New Delhi',
    caption: 'High-density business expo pavilion designed with modular glass meeting pods and digital lead capture stations.',
  },
  {
    id: 'gal-10',
    title: 'Royal Palace Baraat Entry & Theatrical Fanfare',
    category: 'weddings',
    categoryLabel: 'Royal Weddings & Decor',
    aspect: 'aspect-[16/10]',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    location: 'Lake Pichola Palace Grounds, Udaipur',
    caption: 'Grand royal palace entry with cold pyros and traditional fanfare welcoming wedding guests in royal style.',
  },
  {
    id: 'gal-11',
    title: 'Sound Check & Live Fusion Instrumentation',
    category: 'behind-the-scenes',
    categoryLabel: 'Behind The Scenes',
    aspect: 'aspect-[3/4]',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    location: 'Acoustic Control Booth',
    caption: 'Audio engineers tuning line-array speaker arrays with sound generators for pristine 360-degree acoustic clarity.',
  },
  {
    id: 'gal-12',
    title: 'Annual Leadership Awards Gala',
    category: 'highlights',
    categoryLabel: 'Event Highlights',
    aspect: 'aspect-[4/3]',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    location: 'ITC Sonar, Kolkata',
    caption: 'Gold trophy reveal on motorized rotating pedestals with dynamic kinetic ceiling light spheres.',
  },
  {
    id: 'gal-13',
    title: 'Innovators Roundtable & Executive Boardroom',
    category: 'stages',
    categoryLabel: 'Stages & Production',
    aspect: 'aspect-[16/10]',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    location: 'Leela Palace, Bengaluru',
    caption: 'Intimate CEO roundtable designed with plush leather armchairs, acoustic wood baffling, and wireless delegate mics.',
  },
  {
    id: 'gal-14',
    title: 'Confetti Explosion & Milestone Launch',
    category: 'highlights',
    categoryLabel: 'Event Highlights',
    aspect: 'aspect-[4/5]',
    image: 'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?auto=format&fit=crop&w=1200&q=80',
    location: 'Kolkata Science City Auditorium',
    caption: 'Continuous CO2 jets and biodegradable metallic confetti blasts marking the foundation anniversary milestone.',
  },
  {
    id: 'gal-15',
    title: 'Camera Crews & 4K Live Broadcast Operators',
    category: 'behind-the-scenes',
    categoryLabel: 'Behind The Scenes',
    aspect: 'aspect-[3/4]',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    location: 'Floor Cam Position',
    caption: 'Broadcast camera operators tracking executive walkouts with stabilized rigs for 4K live broadcast.',
  },
  {
    id: 'gal-16',
    title: 'Palatial Wedding Mandap Architecture & Florals',
    category: 'weddings',
    categoryLabel: 'Royal Weddings & Decor',
    aspect: 'aspect-[4/3]',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80',
    location: 'Taj Palace, New Delhi',
    caption: 'Handcrafted floral arches, royal carved pillars, and cascading jasmine chandeliers for the ceremonial mandap.',
  },
  {
    id: 'gal-17',
    title: 'Authentic Banaras Ganga Aarti at Varmala',
    category: 'weddings',
    categoryLabel: 'Royal Weddings & Decor',
    aspect: 'aspect-[4/5]',
    image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=1200&q=80',
    location: 'Varanasi Ghats / Destination Waterfront',
    caption: 'Multi-tier brass lamp aarti with Vedic conch shells and sacred chants during the exchange of wedding garlands.',
  },
  {
    id: 'gal-18',
    title: 'Sun-Drenched Haldi & Marigold Canopy Carnival',
    category: 'weddings',
    categoryLabel: 'Royal Weddings & Decor',
    aspect: 'aspect-[16/10]',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80',
    location: 'Heritage Courtyard, Jaipur',
    caption: 'Brass urli tubs filled with fresh marigold petals, organic turmeric pastes, and celebratory folk music.',
  },
  {
    id: 'gal-19',
    title: 'Punjabi & Nasik Live Dhol Baraat Procession',
    category: 'highlights',
    categoryLabel: 'Event Highlights',
    aspect: 'aspect-[3/4]',
    image: 'https://images.unsplash.com/photo-1582233479366-6d38bc390a08?auto=format&fit=crop&w=1200&q=80',
    location: 'Baraat Procession Boulevard',
    caption: 'High-energy traditional Punjabi dhol percussionists in vibrant turbans leading the groom and corporate victory marches.',
  },
  {
    id: 'gal-20',
    title: 'Gala Evening Sitar & Live Fusion Band',
    category: 'highlights',
    categoryLabel: 'Event Highlights',
    aspect: 'aspect-[4/3]',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    location: 'ITC Sonar Grand Hall, Kolkata',
    caption: 'Live Indian classical and acoustic fusion ensemble performing during the national dealer award presentations.',
  },
];

// Clean category tabs
const FILTER_TABS = [
  { id: 'all', label: 'All Photography', icon: Sparkles },
  { id: 'highlights', label: 'Event Highlights', icon: Sparkles },
  { id: 'stages', label: 'Stages & AV Production', icon: Camera },
  { id: 'weddings', label: 'Royal Weddings & Decor', icon: ImageIcon },
  { id: 'behind-the-scenes', label: 'Behind The Scenes', icon: Clapperboard },
];

export default function GalleryPage({
  onNavigateHome,
  onOpenProposalModal,
  onViewPortfolio,
}) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null); // For lightbox/modal

  // Filter items based on active pill
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Modal navigation handlers
  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-ivory text-ink">
      {/* ========================================================= */}
      {/* 1. HERO HEADER */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#130308] pt-32 pb-20 sm:pt-40 sm:pb-28 text-white">
        {/* Background Image & Texture */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2000&q=85"
            alt="Event Atmosphere Backdrop"
            className="h-full w-full object-cover opacity-20 filter contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#130308]/90 via-[#130308]/75 to-[#130308]" />
          <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[26rem] w-[55rem] rounded-full bg-[#991435]/35 blur-[130px]" />
          <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-[32rem] rounded-full bg-[#c9a96a]/15 blur-[110px]" />
        </div>

        <div className="site-container relative z-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-white/50 mb-8"
          >
            <button
              onClick={onNavigateHome}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-white">Gallery</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              EVENT GALLERY
            </span>
          </div>

          {/* Main Title */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-semibold tracking-tight leading-[1.08] text-white">
            Moments we’ve{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              made happen.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Highlights, behind-the-scenes and high-definition photography from recent Indian conferences, brand reveals, royal weddings and celebrations.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. FILTER PILL TABS */}
      {/* ========================================================= */}
      <section className="bg-ivory pt-12 pb-6">
        <div className="site-container">
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
            {FILTER_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeFilter === tab.id;
              // Calculate count
              const count =
                tab.id === 'all'
                  ? GALLERY_ITEMS.length
                  : GALLERY_ITEMS.filter((i) => i.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-tight transition-all duration-300 cursor-pointer shrink-0 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#801436] text-white shadow-lg shadow-[#801436]/40 ring-1 ring-[#c9a96a]/50 scale-102'
                      : 'bg-white text-ink/70 hover:text-ink hover:bg-white/90 border border-black/5 shadow-xs'
                  }`}
                >
                  <Icon className={`size-3.5 sm:size-4 ${isActive ? 'text-[#f5deb3]' : 'text-ink/40'}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`ml-1 text-[11px] px-2 py-0.5 rounded-full font-mono font-bold ${
                      isActive ? 'bg-black/30 text-white ring-1 ring-white/20' : 'bg-black/5 text-ink/50'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. MASONRY GALLERY GRID */}
      {/* ========================================================= */}
      <section className="bg-ivory py-8 sm:py-12">
        <div className="site-container">
          {/* Responsive CSS Masonry Column Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 sm:gap-6 space-y-5 sm:space-y-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative break-inside-avoid overflow-hidden rounded-[1.5rem] bg-white border border-black/5 shadow-xs hover:shadow-xl hover:border-black/10 transition-all duration-400 cursor-pointer"
              >
                {/* Media Image Container */}
                <div className={`relative w-full ${item.aspect} overflow-hidden bg-zinc-900`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                    {/* Category pill */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-black/60 backdrop-blur-md text-white/90 border border-white/15 shadow-sm">
                      <Camera className="size-3 text-gold" />
                      <span>{item.categoryLabel}</span>
                    </span>

                    {/* Expand icon on hover */}
                    <span className="size-7 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="size-3.5" />
                    </span>
                  </div>

                  {/* Bottom Info on Hover / subtle preview */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-gold/90 mb-1">
                      {item.location}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-white leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/70 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. LIGHTBOX / MODAL VIEW FOR PHOTOS */}
      {/* ========================================================= */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-300 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          {/* Main Modal Dialog */}
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-[#130308] border border-gold/25 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-black/40">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-gold/15 text-gold border border-gold/30">
                  {selectedItem.categoryLabel}
                </span>
                <span className="text-xs text-white/50">{selectedItem.location}</span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="size-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Media Content Area */}
            <div className="relative bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
              <div className="relative w-full h-[65vh] flex items-center justify-center p-2">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>

              {/* Prev / Next Chevrons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 size-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/15"
                title="Previous"
              >
                <ChevronLeft className="size-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 size-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/15"
                title="Next"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>

            {/* Modal Footer Info */}
            <div className="p-6 bg-gradient-to-r from-[#20050e] via-[#2c0812] to-[#150308] border-t border-gold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-bold text-white tracking-tight">{selectedItem.title}</h4>
                <p className="mt-1 text-sm text-white/70 leading-relaxed max-w-2xl">
                  {selectedItem.caption}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenProposalModal?.();
                  }}
                  className="btn-gold !py-2.5 !px-5 text-xs font-semibold cursor-pointer"
                >
                  <span>Book this setup</span>
                  <ArrowUpRight className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 5. REQUEST A PROPOSAL BANNER (Screenshots 5 & 6) */}
      {/* ========================================================= */}
      <section className="bg-ivory pb-20 sm:pb-28 pt-8">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-[#130308] p-5 sm:p-14 lg:p-16 text-white shadow-2xl border border-gold/20">
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
              Have an event on the horizon?
            </h2>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-lg text-white/70 leading-relaxed">
              Share a few details and receive a tailored concept note with indicative budget in 48 hours.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-9 flex flex-col min-[420px]:flex-row min-[420px]:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenProposalModal}
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
