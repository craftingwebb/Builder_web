import React, { useState, useEffect, useRef } from 'react';
import { UserCheck, Wrench, IndianRupee, Globe2, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const [npsCount, setNpsCount] = useState(0);
  const npsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = 72;
          const duration = 1800;
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth easeOutCubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setNpsCount(Math.round(easeOut * end));

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          };

          requestAnimationFrame(updateCounter);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (npsRef.current) {
      observer.observe(npsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <UserCheck className="size-5" />,
      title: "Dedicated Executive Director",
      text: "A single senior partner commands your production from blueprint to debrief \u2014 zero hand-offs, zero communication gaps.",
      spanCols: "md:col-span-1 lg:col-span-1",
    },
    {
      icon: <Wrench className="size-5" />,
      title: "Proprietary Technical Fleet",
      text: "Directly owned staging, 4K LED processors, and custom fabrication bays deliver flawless quality and transparent pricing.",
      spanCols: "md:col-span-1 lg:col-span-1",
    },
    {
      icon: <IndianRupee className="size-5" />,
      title: "Auditable Itemized Pricing",
      text: "Granular line-item proposals with complete tax and GST clarity. You know exactly how every single rupee works for you.",
      spanCols: "md:col-span-1 lg:col-span-1",
    },
    {
      icon: <Globe2 className="size-5" />,
      title: "450+ Accredited Partners",
      text: "Premier convention venues, gourmet caterers, and headline artists across 40+ key destinations at negotiated corporate rates.",
      spanCols: "md:col-span-1 lg:col-span-1",
    },
    {
      icon: <ShieldCheck className="size-5" />,
      title: "Safety & Compliance Rigor",
      text: "Fully insured, audited, and code-compliant \u2014 zero safety compromises across 1,300+ major public and private productions.",
      spanCols: "md:col-span-2 lg:col-span-2",
    },
  ];

  return (
    <section id="why-us" className="bg-ivory py-24 sm:py-32 text-ink">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="eyebrow text-[#a07e3a] mb-3">The operational edge</p>
          <h2 className="display text-ink text-[2.6rem] sm:text-6xl lg:text-7xl">
            Unshakable poise behind{' '}
            <span className="accent-serif text-[#a07e3a]">
              every landmark stage.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink/70 leading-relaxed max-w-2xl font-normal">
            High-profile corporate gatherings carry zero margin for error. We unite industrial production precision with the refined warmth of luxury hospitality.
          </p>
        </div>

        {/* 4-Column Grid: Large NPS photo card + 5 white cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          
          {/* Card 1: NPS Highlight Card with Live Animated Counter (spans 2 cols, 2 rows on lg) */}
          <div
            ref={npsRef}
            className="group relative min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-ink md:col-span-2 lg:row-span-2 shadow-sm cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80"
              alt="Conference auditorium production"
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <p className="text-6xl font-semibold tracking-tight sm:text-7xl font-sans tabular-nums">
                {npsCount}
              </p>
              <p className="mt-2 max-w-sm text-white/70 text-sm leading-relaxed font-normal">
                Average client satisfaction rating across enterprise accounts &mdash; significantly outperforming national industry benchmarks.
              </p>
            </div>
          </div>

          {/* Cards 2 - 6: Clean White Rounded Feature Cards (Turns Royal Blue/Iris on Hover) */}
          {features.map((item) => (
            <div
              key={item.title}
              className={`group rounded-[1.75rem] border border-ink/[0.07] bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_30px_60px_-20px_rgba(7,11,31,0.22)] flex flex-col justify-between cursor-pointer ${item.spanCols}`}
            >
              <div>
                {/* 
                  Uniform icon badge for ALL cards:
                  Normal: bg-ink text-gold (Dark Navy box with gold icon)
                  Hover: group-hover:!bg-[#6d5efc] group-hover:!text-white (Turns Iris Royal Blue with White icon!)
                */}
                <span className="flex size-12 items-center justify-center rounded-2xl bg-ink text-gold transition-all duration-500 shadow-sm group-hover:!bg-[#6d5efc] group-hover:!text-white group-hover:scale-110">
                  {item.icon}
                </span>

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60 font-normal">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}