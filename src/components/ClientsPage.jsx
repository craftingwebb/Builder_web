import React from 'react';
import { Star, ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

// 16 Corporate Clients (4x4 Grid in Screenshot 2 & 5: media_1794857642174_4bde9fee.jpg)
const CORPORATE_CLIENTS = [
  {
    initial: 'H',
    name: 'HELIOS MOTORS',
    sector: 'AUTOMOTIVE',
    fontStyle: 'font-sans font-extrabold tracking-wider text-sm',
  },
  {
    initial: 'V',
    name: 'VERTEX PHARMA',
    sector: 'PHARMACEUTICALS',
    fontStyle: 'font-serif tracking-widest text-sm',
  },
  {
    initial: 'O',
    name: 'ORBIT FINTECH',
    sector: 'FINTECH',
    fontStyle: 'font-mono tracking-[0.2em] text-sm',
  },
  {
    initial: 'I',
    name: 'Indus Steel & Power',
    sector: 'MANUFACTURING',
    fontStyle: 'font-serif italic font-bold tracking-tight text-base',
  },
  {
    initial: 'C',
    name: 'Crestline Insurance',
    sector: 'BFSI',
    fontStyle: 'font-sans font-semibold italic tracking-wide text-sm',
  },
  {
    initial: 'N',
    name: 'Novaline Telecom',
    sector: 'TELECOM',
    fontStyle: 'font-sans font-medium tracking-normal text-sm',
  },
  {
    initial: 'K',
    name: 'KAIROS HEALTHCARE',
    sector: 'HEALTHCARE',
    fontStyle: 'font-sans font-bold tracking-widest text-xs',
  },
  {
    initial: 'M',
    name: 'Meridian Realty',
    sector: 'REAL ESTATE',
    fontStyle: 'font-serif italic tracking-wide text-sm',
  },
  {
    initial: 'A',
    name: 'Aster Consumer',
    sector: 'FMCG',
    fontStyle: 'accent-serif italic font-serif text-base',
  },
  {
    initial: 'Q',
    name: 'Quanta Logistics',
    sector: 'LOGISTICS',
    fontStyle: 'font-sans font-medium tracking-normal text-sm',
  },
  {
    initial: 'B',
    name: 'BluePeak Capital',
    sector: 'INVESTMENT',
    fontStyle: 'font-sans font-bold tracking-normal text-sm',
  },
  {
    initial: 'T',
    name: 'Tarang Media',
    sector: 'MEDIA',
    fontStyle: 'font-sans font-medium tracking-tight text-sm',
  },
  {
    initial: 'S',
    name: 'Sapphire Hotels',
    sector: 'HOSPITALITY',
    fontStyle: 'font-serif italic text-sm',
  },
  {
    initial: 'Z',
    name: 'Zenova Software',
    sector: 'IT SERVICES',
    fontStyle: 'font-sans italic font-bold text-sm',
  },
  {
    initial: 'A',
    name: 'ARCADIA FOODS',
    sector: 'FOOD & BEVERAGE',
    fontStyle: 'font-mono tracking-widest text-xs font-semibold',
  },
  {
    initial: 'N',
    name: 'Northwind Energy',
    sector: 'ENERGY',
    fontStyle: 'font-sans font-medium text-sm',
  },
];

// 4 Featured Client Success Stories (Screenshots 3 & 6: media_1794857644302_00db33e5.jpg)
const CASE_STUDIES = [
  {
    id: 'helios-meet',
    tag: 'HELIOS MOTORS · AUTOMOTIVE',
    title: 'Helios Motors National Dealer Meet 2026',
    description:
      'A three-day dealer conference and awards gala for 850 channel partners, with a reveal of the 2026 EV line-up.',
    image:
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85',
    metrics: ['NPS 72', '850 attendees', '0 safety incidents'],
  },
  {
    id: 'vertex-summit',
    tag: 'VERTEX PHARMA · PHARMACEUTICALS',
    title: 'Vertex Pharma Leadership Summit',
    description:
      'A strategy summit for 600 senior leaders featuring 14 keynotes, 6 breakout tracks and live polling.',
    image:
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=85',
    metrics: ['NPS 72', '600 attendees', '0 safety incidents'],
  },
  {
    id: 'orbit-launch',
    tag: 'ORBIT FINTECH · FINANCIAL SERVICES',
    title: 'Orbit Fintech Product Launch',
    description:
      'A hybrid launch reaching 48,000 live viewers with an immersive LED reveal and press conference.',
    image:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=85',
    metrics: ['NPS 72', '1200 attendees', '0 safety incidents'],
  },
  {
    id: 'indus-pavilion',
    tag: 'INDUS STEEL & POWER · MANUFACTURING',
    title: 'IndiaBuild Expo — Indus Steel Pavilion',
    description:
      'A 600 sq. m. pavilion with interactive product zones that generated 2,300 qualified leads.',
    image:
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85',
    metrics: ['NPS 72', '15000 attendees', '0 safety incidents'],
  },
];

// 6 Testimonials (Screenshots 4 & 6: media_1794857646309_860701c8.jpg)
const TESTIMONIALS = [
  {
    quote:
      'S. A Event’s and Manpower Service took our dealer meet from a conference to a movement. 850 partners left energised — and our order book for the new range filled in six weeks.',
    name: 'Rajiv Khanna',
    role: 'Chief Marketing Officer, Helios Motors',
    avatar:
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'The launch trended nationally within an hour. Their hybrid team made our online audience feel as present as the room.',
    name: 'Sameer Gupta',
    role: 'Head of Corporate Communications, Orbit Fintech',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Discreet, precise and remarkably calm. Exactly what an investor forum demands.',
    name: 'Nikhil Bose',
    role: 'Managing Director, BluePeak Capital',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Flawless delegate management and a production standard we had only seen at global summits in Singapore and Dubai.',
    name: 'Dr. Kavita Rao',
    role: 'VP, Medical Affairs, Kairos Healthcare',
    avatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Three thousand five hundred employees, one unforgettable night. The team handled every crisis before we even knew it existed.',
    name: 'Vikramaditya Singhania',
    role: 'Chief People Officer, Novaline Telecom',
    avatar:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Our expo pavilion delivered three times the leads of the previous year. Booth design that genuinely sells.',
    name: 'Ananya Roy',
    role: 'Head of Growth, Indus Steel & Power',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
];

// 6 Industry Associations (Screenshot 7: media_1794857699928_532e6ab6.jpg)
const ASSOCIATIONS = [
  {
    code: 'EEM',
    name: 'Event & Entertainment Management Association',
    category: 'Industry Body',
  },
  {
    code: 'ICPB',
    name: 'India Convention Promotion Bureau',
    category: 'Tourism',
  },
  {
    code: 'CEO',
    name: 'Confederation of Exhibition Organisers',
    category: 'Exhibitions',
  },
  {
    code: 'SCP',
    name: 'Society of Corporate Planners',
    category: 'Corporate',
  },
  {
    code: 'MCI',
    name: 'MICE Council of India',
    category: 'MICE',
  },
  {
    code: 'GEA',
    name: 'Green Events Alliance',
    category: 'Sustainability',
  },
];

export default function ClientsPage({
  onNavigateHome,
  onOpenProposalModal,
  onViewPortfolio,
}) {
  return (
    <div className="bg-ivory text-ink min-h-screen">
      {/* ========================================================= */}
      {/* 1. HERO HEADER SECTION (Screenshot 1: media_1794857639200_9ce1b2ca.jpg) */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-32 sm:pt-44 sm:pb-36 text-white">
        {/* Background Image of Event Audience / Hall */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=85"
            alt=""
            className="h-full w-full object-cover opacity-20 filter contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink" />
          <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-[50rem] rounded-full bg-[#6d5efc]/20 blur-[130px]" />
        </div>

        <div className="site-container relative">
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
            <span className="text-white">Clients</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              OUR CLIENTS
            </span>
          </div>

          {/* Main Title */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-semibold tracking-tight leading-[1.08] text-white">
            380+ organisations trust us with{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              their biggest moments.
            </span>
          </h1>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CORPORATE CLIENTS LOGO GRID (Screenshot 2 & 5) */}
      {/* ========================================================= */}
      <section className="bg-ivory py-16 sm:py-24">
        <div className="site-container">
          {/* Eyebrow & Headline */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
              CORPORATE CLIENTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            In good{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              company.
            </span>
          </h2>

          {/* 16-Logo Matrix Card (4 columns x 4 rows) */}
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/5">
              {CORPORATE_CLIENTS.map((client, idx) => (
                <div
                  key={client.name}
                  className={`flex flex-col items-center justify-center p-8 text-center transition-colors duration-300 hover:bg-zinc-50/80 border-b border-black/5 ${
                    idx >= 12 ? 'lg:border-b-0' : ''
                  }`}
                >
                  {/* Monogram Badge */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="flex size-5 items-center justify-center rounded-full border border-black/15 text-[10px] font-bold text-ink/60">
                      {client.initial}
                    </span>
                    <span className={`${client.fontStyle} text-ink/90`}>
                      {client.name}
                    </span>
                  </div>
                  {/* Subtitle Sector */}
                  <span className="text-[10px] font-bold tracking-[0.15em] text-ink/40 uppercase mt-1">
                    {client.sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CLIENT SUCCESS STORIES (Screenshots 3 & 6) */}
      {/* ========================================================= */}
      <section className="bg-[#090d21] py-16 sm:py-28 text-white relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="pointer-events-none absolute -top-40 right-1/4 h-[30rem] w-[30rem] rounded-full bg-[#6d5efc]/15 blur-[120px]" />

        <div className="site-container relative">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              CLIENT SUCCESS STORIES
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Outcomes,{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              not just events.
            </span>
          </h2>

          {/* 4 Case Studies Grid (2x2) */}
          <div className="mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                className="group overflow-hidden rounded-3xl bg-white/[0.03] border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] flex flex-col justify-between"
              >
                <div>
                  {/* Cover Image */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d21] via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content */}
                  <div className="p-7 sm:p-9">
                    {/* Eyebrow Tag */}
                    <p className="text-xs font-semibold tracking-wider text-gold uppercase">
                      {study.tag}
                    </p>

                    {/* Title */}
                    <h3 className="mt-3 text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm text-white/65 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Metric Pills */}
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      {study.metrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90 border border-white/10"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Read Story Link */}
                <div className="px-7 pb-7 sm:px-9 sm:pb-9 pt-2">
                  <button
                    onClick={onViewPortfolio}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-white cursor-pointer"
                  >
                    <span>Read the story</span>
                    <ArrowUpRight className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. CLIENT TESTIMONIALS (Screenshots 4 & 6) */}
      {/* ========================================================= */}
      <section className="bg-ivory py-16 sm:py-24 text-ink">
        <div className="site-container">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
              CLIENT TESTIMONIALS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            What our clients{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              say.
            </span>
          </h2>

          {/* 6 Testimonial Cards Grid (3 columns x 2 rows) */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm border border-black/5 transition-all duration-300 hover:shadow-md"
              >
                <div>
                  {/* Top Quote Icon & 5 Stars */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold leading-none text-gold/80 select-none">
                      &ldquo;&ldquo;
                    </span>
                    <div className="flex items-center gap-1 text-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="size-3.5 fill-current text-gold"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote Body */}
                  <p className="mt-5 text-sm text-ink/75 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 flex items-center gap-3.5 border-t border-black/5 pt-5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="size-11 shrink-0 rounded-full object-cover ring-2 ring-black/5"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-ink leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-xs text-ink/55 mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. INDUSTRY PARTNERS (Screenshot 7: media_1794857699928_532e6ab6.jpg) */}
      {/* ========================================================= */}
      <section className="bg-ivory pb-16 sm:pb-24 text-ink">
        <div className="site-container">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
              INDUSTRY PARTNERS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            Members of{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              the associations that matter.
            </span>
          </h2>

          {/* 6 Association Cards (3 columns x 2 rows) */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ASSOCIATIONS.map((assoc) => (
              <div
                key={assoc.code}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm border border-black/5 transition hover:shadow-md"
              >
                {/* Dark Acronym Pill Badge */}
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#090d21] text-white font-bold text-xs tracking-wider">
                  {assoc.code}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-ink leading-snug">
                    {assoc.name}
                  </h4>
                  <p className="text-[11px] text-ink/50 mt-0.5">
                    {assoc.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. BOTTOM BANNER CARD (Screenshot 9: media_1794857701602_88f83307.jpg) */}
      {/* ========================================================= */}
      <section className="bg-ivory pb-20 sm:pb-28">
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
