import React from 'react';
import {
  Car,
  Pill,
  Landmark,
  Cpu,
  Factory,
  Radio,
  HeartPulse,
  Building2,
  ShoppingBag,
  Truck,
  Hotel,
  Banknote,
} from 'lucide-react';

const INDUSTRIES = [
  { icon: Car, label: 'Automotive' },
  { icon: Pill, label: 'Pharma & Life Sciences' },
  { icon: Landmark, label: 'Banking & Financial Services' },
  { icon: Cpu, label: 'Technology & IT' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: Radio, label: 'Telecom & Media' },
  { icon: HeartPulse, label: 'Healthcare' },
  { icon: Building2, label: 'Real Estate' },
  { icon: ShoppingBag, label: 'FMCG & Retail' },
  { icon: Truck, label: 'Logistics' },
  { icon: Hotel, label: 'Hospitality' },
  { icon: Banknote, label: 'Insurance' },
];

export default function IndustriesSection({ onOpenProposalModal }) {
  return (
    <section id="industries" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32 border-t border-white/10">
      
      {/* Background audience silhouette image with dark overlay matching reference */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
      </div>

      <div className="site-container relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <p className="eyebrow text-gold mb-3">Sectors &amp; Domains</p>
          <h2 className="display text-3xl sm:text-5xl lg:text-6xl text-white">
            Tailored protocols for{' '}
            <span className="accent-serif text-gold-soft">
              every industry landscape.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/65 leading-relaxed font-normal max-w-2xl">
            From tightly audited medical symposiums and high-energy automotive reveals to confidential stakeholder summits &mdash; we navigate the cultural nuances and technical standards of every room.
          </p>
        </div>

        {/* 12 Industry Cards (4 cols on lg, 3 on md, 2 on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {INDUSTRIES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                onClick={() => onOpenProposalModal?.({ title: `${item.label} Event Inquiries` })}
                className="group flex flex-col min-[440px]:flex-row items-start min-[440px]:items-center gap-2.5 sm:gap-4 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-5 transition-all duration-300 hover:border-gold/60 hover:bg-white/[0.07] hover:-translate-y-1 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-gold/5"
              >
                {/* 
                  Interactive Icon Box:
                  Default: bg-white/5 text-gold (Dark subtle box with champagne gold icon)
                  Hover: group-hover:!bg-gold group-hover:!text-ink (Turns solid Gold with Dark Navy/Black icon!)
                */}
                <span className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-white/5 text-gold transition-all duration-300 group-hover:!bg-gold group-hover:!text-ink group-hover:scale-105 shadow-sm">
                  <Icon className="size-4 sm:size-5 stroke-[2]" />
                </span>

                <span className="text-xs sm:text-[0.95rem] font-semibold text-white/90 group-hover:text-white transition-colors line-clamp-2 min-[440px]:line-clamp-1">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}