import React, { useState, useEffect } from 'react';
import {
  Search,
  Clock,
  ArrowUpRight,
  X,
  Calendar,
  User,
  BookOpen,
} from 'lucide-react';

const CATEGORIES = [
  'All articles',
  'Event Management Tips',
  'Corporate Event Ideas',
  'Industry News',
  'Case Studies',
];

// Featured lead story (Screenshot 2: media_1794859430864_97397493.jpg)
const FEATURED_ARTICLE = {
  id: 'featured-venue-questions',
  category: 'Event Management Tips',
  title: '12 Questions to Ask Before You Book a Corporate Event Venue',
  excerpt:
    'Capacity is only the beginning. Here is the checklist our producers use before signing any venue contract.',
  author: 'Ananya Iyer',
  authorRole: 'Head of Production Planning',
  date: '05 Nov 2026',
  readTime: '4 min read',
  image:
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
  content: [
    'Venue procurement is where events succeed or quietly bleed margin. Too many enterprise organizers evaluate ballrooms based on chandelier aesthetic and theoretical seating charts, completely ignoring load-in logistics, 3-phase power availability, and union rigging jurisdictions.',
    'Before transferring your venue advance or counter-signing a hotel master services agreement, run through the core 12-point technical discovery framework our lead directors deploy across Kolkata, Mumbai, Delhi, and Goa.',
    'Key Checklist Highlights:',
    '1. What is the ceiling load-bearing capacity per point? (Never assume a ballroom truss can carry motorized moving heads and line-array speakers without certified load charts).',
    '2. Is freight elevator access dedicated or shared with hotel F&B banquet staff during turnaround hours?',
    '3. What is the guaranteed sound curfew for decibel limits in residential or mixed-use commercial districts?',
    '4. Does the property have dedicated dual-redundant power backup generators on automatic transfer switches?',
    '5. What are the specific union or vendor exclusivity penalties if you bring outside broadcast or LED suppliers?',
  ],
};

// 8 Curated Articles (Screenshots 3, 4, 5)
const ARTICLES = [
  {
    id: 'art-01',
    category: 'Corporate Event Ideas',
    date: '25 Oct 2026',
    readTime: '5 min read',
    title: '15 Corporate Event Ideas Your Employees Will Actually Love in 2026',
    excerpt:
      'From purpose-led offsites to immersive culture nights — fresh formats that drive real engagement.',
    author: 'Rohan Malhotra',
    image:
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80',
    content: [
      'The era of mandatory weekend lectures in stale conference ballrooms is over. High-performing teams in 2026 demand events that honor their personal time, challenge their creativity, and build authentic connections.',
      'From interactive culinary masterclasses led by Michelin-mentored chefs to hackathon-style rapid innovation jams with live musical interludes, discover how modern enterprises are transforming employee gatherings from obligatory attendance into viral company moments.',
    ],
  },
  {
    id: 'art-02',
    category: 'Industry News',
    date: '14 Oct 2026',
    readTime: '6 min read',
    title: 'Hybrid Is Here to Stay: What the 2026 MICE Outlook Means for Planners',
    excerpt:
      'Budgets are back, but expectations have changed. We break down the numbers and what they mean for your next event.',
    author: 'Aarav Mehra',
    image:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=80',
    content: [
      'The 2026 MICE (Meetings, Incentives, Conferences, and Exhibitions) outlook reveals a decisive pivot: enterprise budgets have rebounded, yet boards demand measurable digital reach and post-event lead tracking.',
      'Simultaneous physical and virtual broadcast feeds require studio-grade teleprompter operators, broadcast-quality audio isolation, and dedicated remote participant moderation to avoid treating digital attendees as second-class observers.',
    ],
  },
  {
    id: 'art-03',
    category: 'Case Studies',
    date: '03 Oct 2026',
    readTime: '7 min read',
    title: 'Case Study: How Helios Motors Re-energised 850 Dealers in 72 Hours',
    excerpt:
      'Inside the strategy, stagecraft and logistics behind one of the year’s most talked-about dealer meets.',
    author: 'Vikram Rao',
    image:
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80',
    content: [
      'Helios Motors needed to rally 850 national franchise owners around their flagship electric commercial vehicle launch in Goa. The brief was simple yet daunting: eliminate fatigue, maintain high energy across 3 days, and produce an unforgettable reveal.',
      'By designing a circular amphitheater stage with synchronized 360-degree laser tracking and customized regional cuisine stations, we delivered a record 98.4% dealer satisfaction index and accelerated advance retail bookings by 42%.',
    ],
  },
  {
    id: 'art-04',
    category: 'Event Management Tips',
    date: '22 Sept 2026',
    readTime: '8 min read',
    title: 'The Corporate Event Budget Template We Use (and How to Read It)',
    excerpt:
      'Line items, contingencies and the hidden costs most planners miss — explained.',
    author: 'Priya Menon',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    content: [
      'The biggest trap in event production is the lump-sum estimate. Hidden overtime fees, municipal permissions, union liaison charges, and stage structural engineer certifications often result in unpleasant 25% budget overruns.',
      'Our transparent line-item budgeting methodology breaks down every rupee into production hardware, creative talent, hospitality logistics, and emergency contingency reserves, ensuring zero surprises for CFOs and finance controllers.',
    ],
  },
  {
    id: 'art-05',
    category: 'Corporate Event Ideas',
    date: '11 Sept 2026',
    readTime: '4 min read',
    title: 'Award Night Formats That Feel Personal, Not Procedural',
    excerpt:
      'Recognition works when it is specific. Eight formats that put the spotlight where it belongs.',
    author: 'Neha Sharma',
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
    content: [
      'Nobody wants to sit through 4 hours of monotone trophy handoffs and lukewarm applause. Award nights must be treated as emotional milestone cinema.',
      'Discover eight proven stage formats — from surprise peer video testimonials projected on motorized scrims to live orchestral flourishes synchronized with winner podium reveals — that turn corporate recognition into memories that motivate for years.',
    ],
  },
  {
    id: 'art-06',
    category: 'Case Studies',
    date: '31 Aug 2026',
    readTime: '5 min read',
    title: 'Case Study: A 48,000–Viewer Hybrid Product Launch for Orbit Fintech',
    excerpt:
      'How we designed a launch that worked as well on a phone screen as it did in the room.',
    author: 'Arjun Desai',
    image:
      'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80',
    content: [
      'When Orbit Fintech unveiled their next-generation payments engine, they needed to bridge a live audience of 500 venture capitalists in Mumbai with over 48,000 digital attendees across 18 countries.',
      'By integrating multi-camera optical tracking, zero-latency cloud streaming, and real-time live polling graphics directly into the keynote presenter display, we achieved an average viewer retention of 24.8 minutes.',
    ],
  },
  {
    id: 'art-07',
    category: 'Industry News',
    date: '20 Aug 2026',
    readTime: '6 min read',
    title: 'Sustainable Events: Practical Steps Indian Corporates Are Taking',
    excerpt:
      'From reusable staging to local sourcing, sustainability is moving from slide to standard.',
    author: 'Ishita Kapoor',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80',
    content: [
      'ESG reporting has fundamentally altered corporate event production. Single-use plastic branding flexes and non-recyclable PVC stage backdrops are rapidly being replaced with modular aluminum architectural frames and low-power LED matrices.',
      'Here are five actionable guidelines our production team implements to reduce carbon footprint, eliminate single-use plastics, and donate surplus catering to verified local hunger relief NGOs.',
    ],
  },
  {
    id: 'art-08',
    category: 'Event Management Tips',
    date: '15 Aug 2026',
    readTime: '5 min read',
    title: 'Engineering High-Retention Keynote Stages for 2,000+ Enterprise Delegates',
    excerpt:
      'From ultra-wide immersive pixel canvases to focused directional acoustics — inside stagecraft mechanics.',
    author: 'Kabir Singh',
    image:
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1000&q=80',
    content: [
      'In a 2,000-seat plenary auditorium, attendee attention spans begin deteriorating after just 18 minutes unless the stage environment constantly stimulates auditory and visual senses.',
      'We examine how calibrated line-array speaker timing, curved high-contrast P2.5 LED canvases, and programmed warm-white key lighting prevent eye strain and keep executives engaged throughout a demanding summit schedule.',
    ],
  },
];

export default function InsightsPage({
  onNavigateHome,
  onOpenProposalModal,
  onViewPortfolio,
}) {
  const [activeCategory, setActiveCategory] = useState('All articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedArticle(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter articles based on active category & search query
  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat =
      activeCategory === 'All articles' || art.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      art.title.toLowerCase().includes(query) ||
      art.excerpt.toLowerCase().includes(query) ||
      art.category.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-ivory text-ink">
      {/* ========================================================= */}
      {/* 1. HERO HEADER SECTION (Royal Maroon & Antique Gold) */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#130308] pt-32 pb-20 sm:pt-40 sm:pb-28 text-white">
        {/* Background Image & Ambient Radial Crimson/Wine Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=2000&q=80"
            alt="Audience Atmosphere"
            className="h-full w-full object-cover opacity-20 filter contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#130308]/95 via-[#130308]/85 to-[#130308]" />
          <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-[50rem] rounded-full bg-[#991435]/25 blur-[130px]" />
        </div>

        <div className="site-container relative z-10">
          {/* Breadcrumb Navigation */}
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
            <span className="text-white">Insights</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              BLOG &amp; INSIGHTS
            </span>
          </div>

          {/* Main Title */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-semibold tracking-tight leading-[1.08] text-white">
            Ideas, trends and{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              lessons from the event floor.
            </span>
          </h1>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. FILTER TABS & SEARCH BAR (Screenshot 1 & 2) */}
      {/* ========================================================= */}
      <section className="bg-ivory pt-10 pb-6 border-b border-black/5">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-tight transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#801436] text-white shadow-lg shadow-[#801436]/40 ring-1 ring-[#c9a96a]/50 scale-102'
                        : 'bg-white text-ink/70 hover:text-ink hover:bg-white/90 border border-black/5 shadow-xs'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Live Search Input Bar */}
            <div className="relative w-full sm:w-72 lg:w-80 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-ink/40 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-black/10 bg-white pl-10 pr-9 py-2.5 text-xs sm:text-sm text-ink outline-none placeholder:text-ink/40 focus:border-gold focus:ring-2 focus:ring-gold/20 shadow-xs transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 size-5 rounded-full bg-black/5 hover:bg-black/10 text-ink flex items-center justify-center cursor-pointer"
                  title="Clear search"
                >
                  <X className="size-3" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FEATURED LEAD ARTICLE (Screenshot 2: media_1794859430864_97397493.jpg) */}
      {/* ========================================================= */}
      {activeCategory === 'All articles' && !searchQuery && (
        <section className="bg-ivory pt-10 pb-6">
          <div className="site-container">
            <div
              onClick={() => setSelectedArticle(FEATURED_ARTICLE)}
              className="group relative overflow-hidden rounded-[2rem] bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image Column (6 cols) */}
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-zinc-900">
                <img
                  src={FEATURED_ARTICLE.image}
                  alt={FEATURED_ARTICLE.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Text Column (6 cols) */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  {/* Category Pill Tag */}
                  <span className="inline-block rounded-full bg-[#380713] text-[#e2c488] ring-1 ring-gold/30 px-3.5 py-1 text-xs font-semibold tracking-wide mb-4">
                    {FEATURED_ARTICLE.category}
                  </span>

                  {/* Headline */}
                  <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-ink tracking-tight leading-snug group-hover:text-[#a07e3a] transition-colors duration-300">
                    {FEATURED_ARTICLE.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-4 text-sm sm:text-base text-ink/70 leading-relaxed font-normal">
                    {FEATURED_ARTICLE.excerpt}
                  </p>
                </div>

                {/* Author, Date & CTA Footer */}
                <div className="mt-8 pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-xs text-ink/50">
                    <span className="font-semibold text-ink">{FEATURED_ARTICLE.author}</span>
                    <span>·</span>
                    <span>{FEATURED_ARTICLE.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="size-3 text-gold" />
                      {FEATURED_ARTICLE.readTime}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-ink group-hover:text-gold transition-colors">
                    <span>Read article</span>
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 4. ARTICLES 3-COLUMN GRID (Screenshots 3, 4, 5) */}
      {/* ========================================================= */}
      <section className="bg-ivory py-10 sm:py-16">
        <div className="site-container">
          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center rounded-3xl bg-white border border-black/5 p-8">
              <BookOpen className="size-12 mx-auto text-ink/30 mb-4" />
              <h3 className="text-lg font-bold text-ink">No articles found</h3>
              <p className="mt-1 text-xs sm:text-sm text-ink/60">
                Try selecting a different category or clearing your search query.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All articles');
                  setSearchQuery('');
                }}
                className="btn-outline-ink mt-5 !text-xs !py-2 !px-5 cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
              {filteredArticles.map((art) => (
                <article
                  key={art.id}
                  onClick={() => setSelectedArticle(art)}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] bg-white border border-black/5 shadow-xs hover:shadow-xl hover:border-black/10 transition-all duration-400 cursor-pointer"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                      <img
                        src={art.image}
                        alt={art.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                      {/* Category Badge on Top-Left */}
                      <span className="absolute top-3.5 left-3.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-ink shadow-xs">
                        {art.category}
                      </span>
                    </div>

                    {/* Body Info */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center gap-2 text-xs text-ink/50 mb-3">
                        <span>{art.date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1 font-mono">
                          <Clock className="size-3 text-gold" />
                          {art.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink leading-snug group-hover:text-[#a07e3a] transition-colors duration-300 line-clamp-2">
                        {art.title}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-ink/65 leading-relaxed line-clamp-2">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read Link */}
                  <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-black/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-ink/60">
                      By {art.author}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-ink group-hover:text-gold transition-colors">
                      <span>Read article</span>
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. INTERACTIVE ARTICLE READER MODAL */}
      {/* ========================================================= */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 transition-all duration-300 animate-fadeIn"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white text-ink shadow-2xl border border-black/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-black/10 bg-white/95 px-6 py-4 backdrop-blur-md">
              <span className="rounded-full bg-[#380713] text-[#e2c488] ring-1 ring-gold/30 px-3 py-1 text-xs font-semibold">
                {selectedArticle.category}
              </span>

              <button
                onClick={() => setSelectedArticle(null)}
                className="size-8 rounded-full bg-black/5 hover:bg-black/10 text-ink flex items-center justify-center transition cursor-pointer"
                title="Close (Esc)"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10">
              {/* Title & Metadata */}
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink leading-snug">
                {selectedArticle.title}
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-ink/50 pb-6 border-b border-black/5">
                <span className="flex items-center gap-1 text-ink font-semibold">
                  <User className="size-3.5 text-gold" />
                  {selectedArticle.author}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-3.5" />
                  {selectedArticle.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="size-3.5 text-gold" />
                  {selectedArticle.readTime}
                </span>
              </div>

              {/* Cover Image */}
              <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-sm">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Excerpt Lead */}
              <p className="mt-6 text-base sm:text-lg font-medium text-ink leading-relaxed border-l-2 border-gold pl-4 italic">
                {selectedArticle.excerpt}
              </p>

              {/* Full Paragraphs */}
              <div className="mt-6 space-y-4 text-sm sm:text-base text-ink/80 leading-relaxed font-normal">
                {selectedArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Bottom In-Modal CTA */}
              <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#20050e] via-[#2c0812] to-[#150308] border border-gold/25 p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div>
                  <h4 className="text-base font-bold text-white">
                    Planning your next corporate stage?
                  </h4>
                  <p className="text-xs text-white/70 mt-1">
                    Receive a custom technical concept note and line-item budget in 48 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenProposalModal?.();
                  }}
                  className="btn-gold !py-2.5 !px-5 text-xs font-semibold shrink-0 cursor-pointer"
                >
                  <span>Request a proposal</span>
                  <ArrowUpRight className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 6. BOTTOM PROPOSAL BANNER (Royal Maroon & Antique Gold) */}
      {/* ========================================================= */}
      <section className="bg-ivory pb-20 sm:pb-28 pt-8">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#18040b] via-[#24060f] to-[#120207] p-8 sm:p-14 lg:p-16 text-white shadow-2xl border border-gold/20">
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
