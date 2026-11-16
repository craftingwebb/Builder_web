import React, { useState, useEffect } from 'react';
import {
  Camera,
  Film,
  Sparkles,
  Image as ImageIcon,
  Video,
  Clapperboard,
  Play,
  Pause,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Volume2,
  VolumeX,
} from 'lucide-react';

// Comprehensive gallery dataset matching corporate event highlights, videos, photos, and behind-the-scenes
const GALLERY_ITEMS = [
  {
    id: 'gal-01',
    title: 'Apex National Conclave Plenary',
    category: 'highlights',
    categoryLabel: 'Event Highlights',
    type: 'photo',
    aspect: 'aspect-[4/5]',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80',
    location: 'Goa Grand Ballroom',
    caption: 'Turnkey stagecraft with curved 4K ultra-fine LED wall and intelligent beam arrays for 850 automotive directors.',
  },
  {
    id: 'gal-02',
    title: 'Aura EV Grand Reveal Film',
    category: 'video',
    categoryLabel: 'Video Gallery',
    type: 'video',
    videoDuration: '02:45',
    aspect: 'aspect-[16/10]',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=80',
    location: 'Mumbai BKC Arena',
    caption: 'Official aftermovie cut of the synchronized silk-drop unveil with 360-degree laser tracking and surround acoustics.',
  },
  {
    id: 'gal-03',
    title: 'Global Tech Leadership Summit',
    category: 'event-photos',
    categoryLabel: 'Event Photos',
    type: 'photo',
    aspect: 'aspect-[3/4]',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
    location: 'Hyderabad HITEX Center',
    caption: 'Dual plenary auditorium hosting 1,200 delegates with real-time digital polling and multi-language translation feeds.',
  },
  {
    id: 'gal-04',
    title: 'Backstage AV Console & Cue Control',
    category: 'behind-the-scenes',
    categoryLabel: 'Behind The Scenes',
    type: 'photo',
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
    type: 'video',
    videoDuration: '03:15',
    aspect: 'aspect-[4/5]',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    location: 'Bengaluru Open Grounds',
    caption: '3,500 corporate associates celebrating company milestone with headlining arena artists and synchronized wristbands.',
  },
  {
    id: 'gal-06',
    title: 'Vanguard Capital Honors Banquet',
    category: 'event-photos',
    categoryLabel: 'Event Photos',
    type: 'photo',
    aspect: 'aspect-[16/10]',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    location: 'The Taj Palace, New Delhi',
    caption: 'Black-tie gala table architecture featuring crystal candelabras, customized ambient uplighting, and 5-course VIP dining.',
  },
  {
    id: 'gal-07',
    title: 'Truss Rigging & Lighting Call',
    category: 'behind-the-scenes',
    categoryLabel: 'Behind The Scenes',
    type: 'photo',
    aspect: 'aspect-[3/4]',
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80',
    location: 'Stage Hangar Rigging',
    caption: 'Structural engineers and rigging specialists securing high-load aluminum trusses 14 meters above the main stage.',
  },
  {
    id: 'gal-08',
    title: 'Fintech Breakthrough Keynote',
    category: 'video',
    categoryLabel: 'Video Gallery',
    type: 'video',
    videoDuration: '01:50',
    aspect: 'aspect-[4/3]',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    location: 'Mumbai Jio World Convention',
    caption: 'Keynote spotlight on holographic market analytics with 200 sq. m. seamless P2.5 LED canvas.',
  },
  {
    id: 'gal-09',
    title: 'Future Pavilion Expo Footfall',
    category: 'event-photos',
    categoryLabel: 'Event Photos',
    type: 'photo',
    aspect: 'aspect-[4/5]',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    location: 'Pragati Maidan, New Delhi',
    caption: 'High-density business expo pavilion designed with modular glass meeting pods and digital lead capture stations.',
  },
  {
    id: 'gal-10',
    title: 'Drone Choreography & Fireworks',
    category: 'highlights',
    categoryLabel: 'Event Highlights',
    type: 'video',
    videoDuration: '04:10',
    aspect: 'aspect-[16/10]',
    image: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=1200&q=80',
    location: 'Lake Pichola Grounds, Udaipur',
    caption: '500 synchronized aerial drones spelling brand logos and animations against the night sky, followed by cold pyro.',
  },
  {
    id: 'gal-11',
    title: 'Sound Check & Line-Array Calibration',
    category: 'behind-the-scenes',
    categoryLabel: 'Behind The Scenes',
    type: 'video',
    videoDuration: '02:10',
    aspect: 'aspect-[3/4]',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    location: 'Acoustic Control Booth',
    caption: 'Audio engineers tuning line-array speaker arrays with pink noise generators for pristine 360-degree vocal clarity.',
  },
  {
    id: 'gal-12',
    title: 'Annual Leadership Awards Gala',
    category: 'event-photos',
    categoryLabel: 'Event Photos',
    type: 'photo',
    aspect: 'aspect-[4/3]',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    location: 'ITC Maratha, Mumbai',
    caption: 'Gold trophy reveal on motorized rotating pedestals with dynamic kinetic ceiling light spheres.',
  },
  {
    id: 'gal-13',
    title: 'Innovators Roundtable & Fireside',
    category: 'event-photos',
    categoryLabel: 'Event Photos',
    type: 'photo',
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
    type: 'video',
    videoDuration: '01:25',
    aspect: 'aspect-[4/5]',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    location: 'Kolkata Science City Auditorium',
    caption: 'Continuous CO2 jets and biodegradable metallic confetti blasts marking the foundation anniversary milestone.',
  },
  {
    id: 'gal-15',
    title: 'Camera Crews & Steadicam Operators',
    category: 'behind-the-scenes',
    categoryLabel: 'Behind The Scenes',
    type: 'photo',
    aspect: 'aspect-[3/4]',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    location: 'Floor Cam Position',
    caption: 'Broadcast camera operators tracking executive walkouts with stabilized rigs for 4K live broadcast.',
  },
  {
    id: 'gal-16',
    title: 'Futuristic LED Tunnel Entrance',
    category: 'highlights',
    categoryLabel: 'Event Highlights',
    type: 'photo',
    aspect: 'aspect-[4/3]',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    location: 'Welcome Arcade, Mumbai',
    caption: 'Interactive 30-meter walk-through LED archway with responsive floor graphics greeting guests at arrival.',
  },
  {
    id: 'gal-17',
    title: 'Brand Activation & Sampling Kiosk',
    category: 'event-photos',
    categoryLabel: 'Event Photos',
    type: 'photo',
    aspect: 'aspect-[4/5]',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    location: 'Phoenix Mall, Pune',
    caption: 'Experiential consumer booth with real-time digital giveaways and automated photo-booth social uploads.',
  },
  {
    id: 'gal-18',
    title: 'Keynote Speaker Spotlight',
    category: 'video',
    categoryLabel: 'Video Gallery',
    type: 'video',
    videoDuration: '03:40',
    aspect: 'aspect-[16/10]',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
    location: 'Delhi Convention Center',
    caption: 'Follow-spot operators and sound technicians ensuring seamless multi-speaker keynote handoffs without audio dips.',
  },
  {
    id: 'gal-19',
    title: 'Green Room & VIP Welcome Setup',
    category: 'behind-the-scenes',
    categoryLabel: 'Behind The Scenes',
    type: 'photo',
    aspect: 'aspect-[3/4]',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
    location: 'Backstage Suite',
    caption: 'Executive lounge with bespoke catering, hair-and-makeup mirrors, teleprompter review screens, and quiet zones.',
  },
  {
    id: 'gal-20',
    title: 'Gala Evening Symphony Orchestra',
    category: 'highlights',
    categoryLabel: 'Event Highlights',
    type: 'video',
    videoDuration: '02:15',
    aspect: 'aspect-[4/3]',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
    location: 'JW Marriott Grand Hall',
    caption: 'Live 40-piece symphony orchestra performing synchronized anthems during the national dealer award presentations.',
  },
];

// Filter definitions matching Screenshot 2 (media_1794857914484_5edfde32.jpg)
const FILTER_TABS = [
  { id: 'all', label: 'All', icon: Sparkles },
  { id: 'photo', label: 'Photo Gallery', icon: Camera },
  { id: 'video', label: 'Video Gallery', icon: Film },
  { id: 'highlights', label: 'Event Highlights', icon: Sparkles },
  { id: 'event-photos', label: 'Event Photos', icon: ImageIcon },
  { id: 'behind-the-scenes', label: 'Behind The Scenes', icon: Clapperboard },
];

export default function GalleryPage({
  onNavigateHome,
  onOpenProposalModal,
  onViewPortfolio,
}) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null); // For lightbox/modal
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  // Filter items based on active pill
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photo') return item.type === 'photo';
    if (activeFilter === 'video') return item.type === 'video';
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
      {/* 1. HERO HEADER (Screenshot 1: media_1794857895565_d2576078.jpg) */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#090d21] pt-32 pb-20 sm:pt-40 sm:pb-28 text-white">
        {/* Background Image & Texture */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=80"
            alt="Event Atmosphere Backdrop"
            className="h-full w-full object-cover opacity-20 filter contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#090d21]/90 via-[#090d21]/80 to-[#090d21]" />
          <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-[50rem] rounded-full bg-[#6d5efc]/20 blur-[130px]" />
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
            Highlights, behind-the-scenes and films from recent conferences, launches and celebrations.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. FILTER PILL TABS (Screenshot 2: media_1794857914484_5edfde32.jpg) */}
      {/* ========================================================= */}
      <section className="bg-ivory pt-12 pb-6">
        <div className="site-container">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {FILTER_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeFilter === tab.id;
              // Calculate count
              const count =
                tab.id === 'all'
                  ? GALLERY_ITEMS.length
                  : tab.id === 'photo'
                  ? GALLERY_ITEMS.filter((i) => i.type === 'photo').length
                  : tab.id === 'video'
                  ? GALLERY_ITEMS.filter((i) => i.type === 'video').length
                  : GALLERY_ITEMS.filter((i) => i.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-tight transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0d1330] text-white shadow-md ring-1 ring-white/10 scale-102'
                      : 'bg-white text-ink/70 hover:text-ink hover:bg-white/90 border border-black/5 shadow-xs'
                  }`}
                >
                  <Icon className={`size-3.5 sm:size-4 ${isActive ? 'text-gold' : 'text-ink/40'}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`ml-1 text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? 'bg-white/15 text-white/90' : 'bg-black/5 text-ink/50'
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
      {/* 3. MASONRY GALLERY GRID (Screenshots 2, 3, 4) */}
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
                      {item.type === 'video' ? (
                        <>
                          <Video className="size-3 text-gold" />
                          <span>Video</span>
                        </>
                      ) : (
                        <>
                          <Camera className="size-3 text-gold" />
                          <span>{item.categoryLabel}</span>
                        </>
                      )}
                    </span>

                    {/* Right badge: Duration if video, or Expand icon if photo */}
                    {item.type === 'video' ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-black/60 backdrop-blur-md text-white/90 border border-white/15">
                        {item.videoDuration}
                      </span>
                    ) : (
                      <span className="size-7 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 className="size-3.5" />
                      </span>
                    )}
                  </div>

                  {/* Video Play Button (Prominent in screenshot 3 & 4) */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="size-13 sm:size-14 rounded-full bg-white/95 text-ink shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-115 group-hover:bg-[#c9a96a] group-hover:text-white">
                        <Play className="size-5 fill-current ml-0.5 transition-colors" />
                      </div>
                    </div>
                  )}

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
      {/* 4. LIGHTBOX / MODAL VIEW FOR PHOTOS AND VIDEOS */}
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
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-[#090d21] border border-white/15 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-black/40">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-gold/15 text-gold border border-gold/30">
                  {selectedItem.type === 'video' ? 'Video Player' : selectedItem.categoryLabel}
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
            <div className="relative bg-black flex items-center justify-center max-h-[65vh] overflow-hidden">
              {selectedItem.type === 'video' ? (
                // Simulated High-Definition Video Player
                <div className="relative w-full aspect-video bg-black flex flex-col justify-between overflow-hidden group/player">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="absolute inset-0 h-full w-full object-cover filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Center Play/Pause Overlay */}
                  <div className="relative z-10 flex-1 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="size-16 sm:size-20 rounded-full bg-gold/90 hover:bg-gold text-ink shadow-2xl flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="size-8 fill-current" />
                      ) : (
                        <Play className="size-8 fill-current ml-1" />
                      )}
                    </button>
                  </div>

                  {/* Player Controls Bar */}
                  <div className="relative z-10 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-3 cursor-pointer">
                      <div className="h-full bg-gold rounded-full w-2/5 animate-pulse" />
                    </div>

                    <div className="flex items-center justify-between text-xs text-white/80">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="hover:text-gold transition-colors cursor-pointer"
                        >
                          {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
                        </button>
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="hover:text-gold transition-colors cursor-pointer"
                        >
                          {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                        </button>
                        <span className="font-mono text-[11px] text-white/60">
                          01:10 / {selectedItem.videoDuration || '03:00'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold tracking-wider text-gold uppercase px-2 py-0.5 rounded bg-white/10">
                          HD 1080P
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // High-Resolution Photo Viewer
                <div className="relative w-full h-[65vh] flex items-center justify-center p-2">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                </div>
              )}

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
            <div className="p-6 bg-[#0d1330] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#090d21] p-8 sm:p-14 lg:p-16 text-white shadow-2xl border border-white/10">
            {/* Background Texture & Ambient Radial Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full bg-[#6d5efc]/25 blur-[120px] -z-10"
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
                onClick={onOpenProposalModal}
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
