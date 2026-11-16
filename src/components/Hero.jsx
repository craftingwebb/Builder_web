import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=2000&q=85',
  'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=2000&q=85',
  'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=2000&q=85',
];

export default function Hero({ onOpenProposalModal, onViewPortfolio }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white">
      
      {/* Full-bleed Background Images with smooth crossfade */}
      <div className="absolute inset-0 -z-10" data-hero-media>
        {HERO_IMAGES.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1800ms] ease-in-out ${
              idx === currentSlide ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Clean, Light Cinematic Vignette Overlay (Allows natural photo vibrancy to shine through) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,2,6,0.38)_0%,rgba(15,2,6,0.08)_35%,rgba(15,2,6,0.85)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-black/15 lg:hidden" />

      {/* Main Container - Aligned to bottom like original */}
      <div className="site-container flex flex-1 flex-col justify-end pt-32 pb-10 sm:pb-14">
        
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          
          {/* Left Column: Heading and Subtitle with Bottom Entrance Animation */}
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div className="overflow-hidden">
              <p className="eyebrow text-gold animate-hero-fade [animation-delay:100ms]">
                PREMIER EXPERIENTIAL &amp; STAGE PRODUCTION ACROSS INDIA
              </p>
            </div>

            {/* Title with Split Line-by-Line Bottom Slide-Up Reveal (Matching Reference SplitText) */}
            <h1 className="display mt-6 text-[2.8rem] sm:text-6xl lg:text-[5.5rem] xl:text-[6.4rem]">
              <span className="block overflow-hidden py-1">
                <span className="block animate-hero-line [animation-delay:200ms]">
                  Extraordinary
                </span>
              </span>
              <span className="block overflow-hidden py-1">
                <span className="block animate-hero-line [animation-delay:360ms]">
                  events crafted to move
                </span>
              </span>
              <span className="block overflow-hidden py-1">
                <span className="block animate-hero-line [animation-delay:520ms]">
                  <span className="accent-serif text-gold-soft">
                    audiences &amp; brands
                  </span>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <div className="overflow-hidden">
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg animate-hero-fade [animation-delay:680ms]">
                From intimate executive roundtables to landmark 5,000-delegate conventions &mdash; we conceptualise, engineer, produce, and deliver turnkey experiences that captivate stakeholders and define brand legacies.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-3 animate-hero-fade [animation-delay:820ms]">
              <button
                onClick={onOpenProposalModal}
                className="btn-gold cursor-pointer"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="size-4" />
              </button>
              
              <button
                onClick={onViewPortfolio || (() => {
                  const target = document.querySelector('#portfolio');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                })}
                className="btn-ghost-light cursor-pointer"
              >
                <span>View selected work</span>
              </button>
            </div>
          </div>

          {/* Right Column: Floating Glass Card (Exact from video/source) */}
          <div className="glass hidden w-80 rounded-3xl p-5 xl:block animate-hero-fade [animation-delay:950ms]">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=100&q=80"
                  alt=""
                  className="size-9 rounded-full object-cover ring-2 ring-ink"
                />
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
                  alt=""
                  className="size-9 rounded-full object-cover ring-2 ring-ink"
                />
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
                  alt=""
                  className="size-9 rounded-full object-cover ring-2 ring-ink"
                />
              </div>
              <div className="text-xs leading-tight">
                <p className="flex items-center gap-0.5 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3 fill-current" />
                  ))}
                </p>
                <p className="mt-1 text-white/70">
                  Rated 4.9 by 200+ enterprise leaders
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
              <div>
                <p className="text-2xl font-semibold font-mono">1,300+</p>
                <p className="text-xs text-white/55">Landmark productions</p>
              </div>
              <div>
                <p className="text-2xl font-semibold font-mono text-gold">45+</p>
                <p className="text-xs text-white/55">Key destination hubs</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex items-center justify-between gap-6 border-t border-white/15 pt-6 text-xs text-white/55 animate-hero-fade [animation-delay:1100ms]">
          <div className="flex items-center gap-3">
            <span className="relative flex h-9 w-5 justify-center rounded-full border border-white/30 pt-1.5">
              <span className="size-1 animate-bounce rounded-full bg-white"></span>
            </span>
            <span className="hidden sm:inline">Scroll to explore</span>
          </div>

          {/* Slider Indicators */}
          <div className="flex items-center gap-2">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="group py-2 cursor-pointer"
                aria-label={`Slide ${idx + 1}`}
              >
                <span
                  className={`block h-1 rounded-full transition-all duration-500 ${
                    idx === currentSlide
                      ? 'w-8 bg-gold'
                      : 'w-2 bg-white/30 group-hover:bg-white/60'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-4 text-white/60">
            <span>Mumbai (HQ)</span>
            <span>&bull;</span>
            <span>Delhi NCR</span>
            <span>&bull;</span>
            <span>Bengaluru</span>
            <span>&bull;</span>
            <span>Hyderabad</span>
            <span>&bull;</span>
            <span>Dubai</span>
          </div>
        </div>

      </div>
    </section>
  );
}