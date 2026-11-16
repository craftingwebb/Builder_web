import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection({ onOpenProposalModal, onNavigateAbout }) {
  return (
    <section id="about" className="relative bg-ivory py-28 text-ink lg:py-36">
      <div className="site-container">
        
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column (7 cols): Lead Text & 3 Stats */}
          <div className="lg:col-span-7">
            <p className="eyebrow text-[#9a7a3c]">
              About our agency
            </p>

            <p className="mt-8 text-[1.65rem] leading-[1.35] font-medium tracking-[-0.02em] text-ink sm:text-[2.2rem]">
              S. A Event&apos;s and Manpower Service is an integrated experiential design and turnkey event production collective headquartered at 22/a gora chand lane, Kolkata, with dedicated operations across India. We collaborate with visionary corporate leaders, brand custodians, and celebratory families to orchestrate high-impact conferences, weddings, awards galas, and bespoke summits &mdash; flawlessly aligned with your vision, your brand, and your budget.
            </p>

            {/* 3 Metric Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-ink font-mono">14+</p>
                <p className="text-xs text-ink/65 mt-1 font-medium">Years of mastery</p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-ink font-mono">130+</p>
                <p className="text-xs text-ink/65 mt-1 font-medium">In-house producers</p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#9a7a3c] font-mono">99%</p>
                <p className="text-xs text-ink/65 mt-1 font-medium">Repeat client trust</p>
              </div>
            </div>

            <button
              onClick={onNavigateAbout || onOpenProposalModal}
              className="btn-outline-ink mt-10 cursor-pointer"
            >
              <span>Our journey</span>
              <ArrowRight className="size-4" />
            </button>
          </div>

          {/* Right Column (5 cols): Overlapping Photos + Floating Since 2012 Badge */}
          <div className="relative lg:col-span-5 pt-8 sm:pt-0">
            
            {/* Main Stage Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl bg-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1000&q=85"
                alt="Corporate town hall in the round"
                className="h-full w-full object-cover"
              />
              {/* Floating "Since 2012" Badge inside the container so it never clips */}
              <div className="absolute top-4 right-4 z-20 flex size-24 sm:size-28 flex-col items-center justify-center rounded-full bg-ink text-center text-white shadow-2xl border-2 border-white/10">
                <span className="text-[0.65rem] tracking-[0.2em] text-gold uppercase font-mono">
                  Since
                </span>
                <span className="text-2xl sm:text-3xl font-semibold font-mono">
                  2012
                </span>
              </div>
            </div>

            {/* Overlapping Small Panel Image */}
            <div className="absolute -bottom-6 -left-4 w-40 sm:w-52 overflow-hidden rounded-3xl border-[6px] border-ivory shadow-2xl aspect-square z-10 bg-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=85"
                alt="Keynote presentation"
                className="h-full w-full object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
