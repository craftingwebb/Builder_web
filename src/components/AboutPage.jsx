import React from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Leaf,
  Compass,
  ArrowUpRight,
} from 'lucide-react';

// Official LinkedIn SVG Icon Badge
function LinkedInIcon({ className = "size-3.5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

// 5 Company Achievements Data (Screenshot 3: Recognition we're proud of)
const ACHIEVEMENTS = [
  {
    num: "01",
    title: "Best Corporate Event Agency — Event Excellence Awards 2025",
    icon: Award,
  },
  {
    num: "02",
    title: "ISO 9001:2015 certified processes",
    icon: ShieldCheck,
  },
  {
    num: "03",
    title: "98% client retention across key accounts",
    icon: TrendingUp,
  },
  {
    num: "04",
    title: "Zero-incident safety record across 1,200+ events",
    icon: CheckCircle2,
  },
  {
    num: "05",
    title: "Carbon-conscious event playbook adopted on 60% of projects",
    icon: Leaf,
  },
];

// Stats Bar Data
const STATS = [
  { value: "1,250+", label: "Events delivered" },
  { value: "380+", label: "Corporate clients" },
  { value: "42", label: "Cities" },
  { value: "120+", label: "Team members" },
];

// 4 Leadership Team Members (Screenshot 4: The people behind the curtain)
const LEADERS = [
  {
    name: "Aarav Mehra",
    role: "Founder & CEO",
    bio: "Two decades producing marquee corporate experiences across India and the Middle East.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ishita Kapoor",
    role: "Chief Operating Officer",
    bio: "Runs a 120-member delivery engine with an uncompromising eye for detail.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=85",
    linkedin: "https://linkedin.com",
    hasBadge: true,
  },
  {
    name: "Vikram Rao",
    role: "Head of Operations",
    bio: "Has led on-ground operations for summits of up to 10,000 delegates.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ananya Iyer",
    role: "Creative Director",
    bio: "Turns business objectives into narratives, stages and unforgettable moments.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=85",
    linkedin: "https://linkedin.com",
  },
];

// 6 Specialists Team Members (Screenshot 5: Specialists across every discipline)
const SPECIALISTS = [
  {
    name: "Rohan Malhotra",
    role: "Head of Sales",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Neha Sharma",
    role: "Senior Account Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Arjun Desai",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Meera Nair",
    role: "Senior Event Manager",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Kabir Singh",
    role: "Business Development",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Priya Menon",
    role: "Finance Controller",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85",
  },
];

// 4 Work Process Steps (Screenshot 6: A method refined over 1250+ events)
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Listen",
    desc: "Every engagement begins with a discovery workshop with your stakeholders.",
  },
  {
    step: "02",
    title: "Imagine",
    desc: "Our creative studio translates objectives into a narrative and visual concept.",
  },
  {
    step: "03",
    title: "Engineer",
    desc: "Producers plan every minute, vendor and contingency in the run-of-show.",
  },
  {
    step: "04",
    title: "Deliver",
    desc: "A control-room team executes on the day while you host your guests.",
  },
];

export default function AboutPage({
  onNavigateHome,
  onOpenProposalModal,
  onViewPortfolio,
}) {
  return (
    <div className="bg-ivory text-ink min-h-screen">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Screenshot 1: media_1794851639308_5b73fa84.jpg) */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#130308] pt-36 pb-20 sm:pt-44 sm:pb-28 text-white">
        {/* Background Image of Grand Ballroom / Chandelier with Center Ambient Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=2000&q=85"
            alt=""
            className="h-full w-full object-cover opacity-20 filter contrast-125 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#130308]/90 via-[#130308]/75 to-[#130308]" />
          <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[26rem] w-[55rem] rounded-full bg-[#991435]/35 blur-[130px]" />
          <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-[32rem] rounded-full bg-[#c9a96a]/15 blur-[110px]" />
        </div>

        <div className="site-container relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-medium text-white/50 mb-6">
            <button
              onClick={onNavigateHome}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-white">About</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              ABOUT US
            </span>
          </div>

          {/* Headline */}
          <h1 className="display text-4xl sm:text-6xl lg:text-[4.75rem] leading-[1.08] max-w-4xl text-white">
            We engineer moments that{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              move organisations.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 max-w-3xl text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            S. A Event&apos;s and Manpower Service is a full-service event management and certified manpower collective
            headquartered at 22/a gora chand lane, Kolkata, West Bengal, with production operations across India.
            We partner with leadership, HR, corporate marketers, and private organizers to plan and execute conferences, launches, award
            nights, weddings, and bespoke gatherings — on brief, on brand and on budget.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. OUR STORY SECTION (Screenshot 2: media_1794851653237_04d11ecd.jpg) */}
      {/* ========================================================= */}
      <section className="bg-ivory py-20 sm:py-28 text-ink">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Large photo of arena / auditorium */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl bg-zinc-900 aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=85"
                  alt="S. A Event's and Manpower Service corporate auditorium arena"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Narrative Story Copy */}
            <div className="lg:col-span-6 lg:pl-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-px bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3c]">
                  OUR STORY
                </span>
              </div>

              <h2 className="display text-3xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] text-ink">
                From a single dealer meet to{' '}
                <span className="accent-serif italic font-serif text-[#c9a96a]">
                  India’s boardrooms.
                </span>
              </h2>

              <div className="mt-8 space-y-5 text-sm sm:text-base text-ink/75 leading-relaxed">
                <p>
                  S. A Event&apos;s and Manpower Service began with an uncompromising standard for stage perfection and client trust. The brief was simple — make every single channel partner and guest feel valued. We obsessed over every detail, from the arrival experience to the final applause.
                </p>
                <p>
                  That obsession became our method. Today, a 120-member team of
                  strategists, producers, designers and technologists deliver
                  more than 120 corporate events every year across 40+ cities
                  and 6 countries.
                </p>
                <p>
                  What hasn’t changed is how we work: one accountable event
                  lead, transparent costing, and an in-house production
                  backbone that means we never compromise on quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. COMPANY ACHIEVEMENTS & METRICS (Screenshot 3: media_1794851667260_d5956930.jpg) */}
      {/* ========================================================= */}
      <section className="bg-[#130308] py-20 sm:py-28 text-white relative overflow-hidden">
        {/* Subtle ruby wine background radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#991435]/20 blur-[120px]"
        />

        <div className="site-container relative">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              COMPANY ACHIEVEMENTS
            </span>
          </div>

          {/* Headline */}
          <h2 className="display text-3xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-white max-w-2xl">
            Recognition we’re{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              proud of.
            </span>
          </h2>

          {/* 5 Achievement Cards Grid (3 in first row, 2 in second row) */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ACHIEVEMENTS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.num}
                  className={`group relative rounded-2xl border border-gold/20 bg-gradient-to-br from-[#22060f]/95 via-[#2a0813]/90 to-[#18040b]/95 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-gold/50 hover:bg-[#340917] shadow-xl ${
                    idx === 3 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Award / Medal Icon badge */}
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-[#3a0a18] text-gold group-hover:scale-105 group-hover:bg-[#480c1e] transition-all">
                      <IconComp className="size-5" />
                    </div>

                    <div>
                      <span className="text-xs font-mono text-gold/60 block mb-1">
                        {item.num}
                      </span>
                      <p className="text-sm sm:text-[0.95rem] font-medium leading-snug text-white/95">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Statistics Row with dividers */}
          <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="relative">
                <p className="text-3xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs sm:text-sm font-medium text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. OUR LEADERSHIP TEAM (Screenshot 4: media_1794851687910_bc786fb8.jpg) */}
      {/* ========================================================= */}
      <section className="bg-ivory py-20 sm:py-28 text-ink">
        <div className="site-container">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3c]">
              OUR LEADERSHIP TEAM
            </span>
          </div>

          {/* Headline */}
          <h2 className="display text-3xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-ink">
            The people{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              behind the curtain.
            </span>
          </h2>

          {/* 4 Leadership Cards Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERS.map((leader) => (
              <div
                key={leader.name}
                className="group flex flex-col transition-all duration-300"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-zinc-800 shadow-md">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-110 group-hover:grayscale-0"
                  />

                  {/* LinkedIn Icon Badge on Ishita Kapoor or clickable for all leaders */}
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full bg-white text-[#0077b5] shadow-lg transition-transform hover:scale-110 cursor-pointer"
                    aria-label={`${leader.name} LinkedIn Profile`}
                  >
                    <LinkedInIcon className="size-4" />
                  </a>
                </div>

                {/* Details */}
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-ink leading-snug">
                    {leader.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#9a7a3c] mt-0.5">
                    {leader.role}
                  </p>
                  <p className="mt-2 text-xs sm:text-[0.825rem] text-ink/70 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. OUR TEAM / SPECIALISTS (Screenshot 5: media_1794851698081_9e954417.jpg) */}
      {/* ========================================================= */}
      <section className="bg-ivory pb-20 sm:pb-28 text-ink">
        <div className="site-container">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3c]">
              OUR TEAM
            </span>
          </div>

          {/* Headline */}
          <h2 className="display text-3xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-ink">
            Specialists across{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              every discipline.
            </span>
          </h2>

          {/* 6 Team Member Cards in a Row / Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
            {SPECIALISTS.map((specialist) => (
              <div key={specialist.name} className="group flex flex-col">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-800 shadow-sm">
                  <img
                    src={specialist.image}
                    alt={specialist.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-ink leading-tight">
                    {specialist.name}
                  </h4>
                  <p className="text-xs text-ink/60 mt-0.5">
                    {specialist.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. OUR WORK PROCESS (Screenshot 6: media_1794851715434_10b17cf1.png) */}
      {/* ========================================================= */}
      <section className="bg-ivory pb-20 sm:pb-28 text-ink">
        <div className="site-container">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3c]">
              OUR WORK PROCESS
            </span>
          </div>

          {/* Headline */}
          <h2 className="display text-3xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-ink">
            A method refined{' '}
            <br className="hidden sm:inline" />
            over{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              1250+ events.
            </span>
          </h2>

          {/* 4 Process Steps in Single Unified Card with Dividers */}
          <div className="mt-12 rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-black/5">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-black/10">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.step}
                  className={`flex flex-col ${idx !== 0 ? "lg:pl-8" : ""}`}
                >
                  <span className="text-xs font-mono text-[#9a7a3c] font-semibold">
                    {step.step}
                  </span>

                  <div className="mt-4 flex size-9 items-center justify-center rounded-full border border-black/15 text-ink">
                    <Compass className="size-4.5" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-ink">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. BOTTOM BANNER CARD (Screenshot 7: media_1794851738308_7e8f8d45.jpg) */}
      {/* ========================================================= */}
      <section className="bg-ivory pb-20 sm:pb-28">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-[#130308] p-5 sm:p-14 lg:p-16 text-white shadow-2xl border border-gold/20">
            {/* Background Texture & Ambient Radial Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full bg-[#991435]/25 blur-[120px] -z-10"
            />
            <img
              src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="absolute inset-0 -z-20 h-full w-full object-cover opacity-15 filter grayscale pointer-events-none"
            />

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                REQUEST A PROPOSAL
              </span>
            </div>

            {/* Headline */}
            <h2 className="max-w-2xl text-2xl min-[400px]:text-3xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-tight leading-[1.15] text-white">
              Why choose our company? Let us show you.
            </h2>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-lg text-white/70 leading-relaxed">
              Meet our team for a no-obligation creative session — we’ll bring
              ideas, references and an indicative budget.
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
