import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Nikhil Bose",
    designation: "Managing Director, BluePeak Capital",
    rating: 5,
    avatar: "https://images.pexels.com/photos/7580648/pexels-photo-7580648.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "Composed, exacting, and profoundly dependable. Exactly what a closed-door sovereign wealth conclave demands.",
  },
  {
    id: 2,
    name: "Vikram Malhotra",
    designation: "VP Corporate Communications, FinEdge Technologies",
    rating: 5,
    avatar: "https://images.pexels.com/photos/7580917/pexels-photo-7580917.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "Coordinating 2,500 enterprise delegates across simultaneous plenary ballrooms without a solitary audio glitch or schedule slip is true technical mastery.",
  },
  {
    id: 3,
    name: "Dr. Ananya & Raghav Sethi",
    designation: "Jaipur Destination Royal Gala",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "The cinematic floral revelry, illuminated ambient corridors, and ceremonial Vedic aarti elevated our destination celebrations beyond our wildest dreams.",
  },
  {
    id: 4,
    name: "Siddharth Verma",
    designation: "Head of Experiential Marketing, Nexus AutoCorp",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "From emergency accreditation protocols to seamless VIP security details and kinetic stage reveals, their execution was synchronized like clockwork.",
  },
  {
    id: 5,
    name: "Priya Nambiar",
    designation: "Director of Brand & Communications, Novalis Pharma",
    rating: 5,
    avatar: "https://images.pexels.com/photos/7581113/pexels-photo-7581113.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "From compliance-sensitive scientific seminars to our multi-sensory awards evening, their dual-redundant production gave our board absolute confidence.",
  },
  {
    id: 6,
    name: "Rajesh Kothari",
    designation: "Group President, Indus Global",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg?auto=compress&cs=tinysrgb&w=200",
    quote: "India’s undisputed benchmark for institutional event production. Zero ambiguity, zero friction, and unmatched elegance under pressure.",
  },
];

const BRANDS = [
  { name: "ORBIT FINTECH", font: "tracking-[0.25em] font-mono text-sm" },
  { name: "Indus Steel & Power", font: "font-serif italic font-bold tracking-tight text-base" },
  { name: "Crestline Insurance", font: "tracking-wide font-sans font-semibold text-sm" },
  { name: "Novaline Telecom", font: "font-mono font-medium text-sm tracking-widest" },
  { name: "KAIROS VENTURES", font: "font-sans font-black tracking-widest text-xs" },
  { name: "HELIOS MOTORS", font: "font-sans font-extrabold tracking-wider text-sm" },
  { name: "VERTEX PHARMA", font: "font-serif tracking-widest text-sm" },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="bg-white py-24 sm:py-32 text-ink border-t border-ink/[0.06]">
      <div className="site-container">
        
        {/* Testimonial Two-Column Grid */}
        <div className="grid gap-12 lg:grid-cols-12 items-start mb-24">
          
          {/* Left Column: Heading, Prev/Next Arrows, Counter */}
          <div className="lg:col-span-4">
            <p className="eyebrow text-[#9a7a3c] mb-3">Executive endorsements</p>
            <h2 className="display text-4xl text-ink sm:text-5xl">
              Voices from{' '}
              <span className="accent-serif text-[#9a7a3c]">
                the front row.
              </span>
            </h2>

            {/* Navigation Arrows */}
            <div className="mt-10 flex gap-3">
              <button
                onClick={handlePrev}
                className="flex size-12 items-center justify-center rounded-full border border-ink/15 text-ink transition duration-300 hover:bg-ink hover:text-white cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="size-5" />
              </button>
              
              <button
                onClick={handleNext}
                className="flex size-12 items-center justify-center rounded-full border border-ink/15 text-ink transition duration-300 hover:bg-ink hover:text-white cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            {/* Number Counter (e.g. 05 / 06) */}
            <p className="mt-6 text-sm text-ink/50 tabular-nums font-mono">
              {String(activeIndex + 1).padStart(2, '0')} / {String(TESTIMONIALS_DATA.length).padStart(2, '0')}
            </p>
          </div>

          {/* Right Column: Stars, Editorial Serif Quote, Author, Segmented Progress Bars */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div key={current.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              
              {/* 5 Stars */}
              <div className="flex gap-1 text-gold">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="size-5 fill-current" />
                ))}
              </div>

              {/* Large Editorial Serif Quote */}
              <blockquote className="mt-6 font-serif text-[1.9rem] leading-[1.25] text-ink sm:text-[2.6rem]">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author Row */}
              <div className="mt-10 flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="size-14 rounded-full object-cover ring-2 ring-ink/10 shadow-sm"
                />
                <div>
                  <h4 className="font-semibold text-ink text-base sm:text-lg">
                    {current.name}
                  </h4>
                  <p className="text-sm text-ink/55">
                    {current.designation}
                  </p>
                </div>
              </div>

            </div>

            {/* Segmented Progress Bars (6 bars matching reference) */}
            <div className="mt-12 flex gap-1.5">
              {TESTIMONIALS_DATA.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-ink/10 cursor-pointer"
                  aria-label={`Testimonial ${idx + 1}`}
                >
                  <span
                    className={`block h-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'w-full bg-[#801436]'
                        : idx < activeIndex
                        ? 'w-full bg-[#801436]/40'
                        : 'w-0'
                    }`}
                  />
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Brands That Trust Us Marquee */}
        <div className="border-t border-ink/10 pt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink/40 mb-10">
            Trusted by India’s visionary enterprises &amp; institutions
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-65 grayscale hover:grayscale-0 transition-all duration-500">
            {BRANDS.map((brand, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-ink/75 hover:text-ink transition-colors cursor-default"
              >
                <span className="size-2 rounded-full bg-gold/60 inline-block" />
                <span className={brand.font}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}