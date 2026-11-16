import React from 'react';
import { Sparkles, Clapperboard, Wrench, UserCheck, Receipt } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discover",
    text: "Strategic immersion, attendee profiling, venue parameters, and ROI goals \u2014 mapped into an actionable production blueprint.",
    icon: Sparkles,
  },
  {
    step: 2,
    title: "Design",
    text: "3D stage rendering, sensory walkthroughs, cue-by-cue run of show, and transparent fiscal modeling.",
    icon: Clapperboard,
  },
  {
    step: 3,
    title: "Engineer",
    text: "Bespoke fabrication, multi-zone AV calibration, artist coordination, and rigorous dry-run rehearsals.",
    icon: Wrench,
  },
  {
    step: 4,
    title: "Command",
    text: "Dedicated technical directors and master show-callers synchronizing lighting, stage cues, and live timing on event day.",
    icon: UserCheck,
  },
  {
    step: 5,
    title: "Evaluate",
    text: "Delegate sentiment analytics, media impact reports, and transparent financial reconciliation within 7 days.",
    icon: Receipt,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-ivory py-24 sm:py-32 text-ink border-t border-ink/[0.06]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <p className="eyebrow text-[#a07e3a] mb-3 justify-center">Methodology &amp; Rigor</p>
          <h2 className="display text-ink text-[2.6rem] sm:text-6xl lg:text-7xl">
            A five-phase roadmap{' '}
            <span className="accent-serif text-[#a07e3a]">
              to flawless execution.
            </span>
          </h2>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          
          {/* Horizontal Connecting Line on Desktop */}
          <div className="absolute top-7 right-[10%] left-[10%] hidden h-[2px] bg-ink/10 lg:block pointer-events-none">
            <div className="h-full bg-gradient-to-r from-gold/30 via-gold to-gold/30" />
          </div>

          {/* Vertical Connecting Line on Mobile */}
          <div className="absolute top-0 bottom-0 left-7 w-[2px] bg-ink/10 lg:hidden pointer-events-none">
            <div className="h-full w-full bg-gradient-to-b from-gold/30 via-gold to-gold/30" />
          </div>

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {PROCESS_STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="group relative flex gap-6 lg:flex-col lg:items-center lg:text-center cursor-pointer"
                >
                  {/* Circular Node with Step Number Badge */}
                  <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-[0_10px_30px_-15px_rgba(7,11,31,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:border-gold/60 group-hover:shadow-[0_15px_35px_-10px_rgba(201,169,106,0.3)]">
                    <Icon className="size-5 text-ink transition-colors duration-300 group-hover:text-gold" />
                    
                    {/* Small Black Badge with Gold Number */}
                    <span className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-ink text-[0.65rem] font-bold text-gold ring-2 ring-white">
                      {item.step}
                    </span>
                  </span>

                  {/* Title and Description */}
                  <div className="lg:mt-6">
                    <h3 className="text-xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-[#a07e3a]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65 lg:mx-auto lg:max-w-[15rem] font-normal">
                      {item.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

        </div>

      </div>
    </section>
  );
}