import React, { useState } from 'react';
import { CORPORATE_SERVICES } from '../data/eventsData';
import { CheckCircle2, ArrowRight, Sparkles, Building2, MessageSquare, PhoneCall } from 'lucide-react';

export default function CorporateSection({ onSelectService }) {
  const [activeService, setActiveService] = useState(CORPORATE_SERVICES[0]);

  return (
    <section id="corporate" className="py-24 bg-[#0d0e14] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Division 01 • B2B &amp; Enterprise</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Corporate Events &amp; <span className="gold-gradient-text">Brand Activations</span>
            </h2>
            <p className="mt-3 text-zinc-400 max-w-2xl text-base sm:text-lg">
              Engineered for CXOs, brand custodians, and enterprise leaders who require punctual execution, cutting-edge AV technology, and flawless delegate hospitality.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917600149422?text=Hello,%20I%20am%20looking%20for%20Corporate%20Event%20Management%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-all border border-zinc-700 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Corporate Desk WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Corporate Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORPORATE_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Image Cover */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14171f] via-transparent to-black/30" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-amber-400 border border-amber-500/30">
                    0{index + 1}
                  </span>
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-amber-500/90 text-black text-[10px] font-bold uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-amber-500/90 font-medium mt-1 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-1.5 border-t border-zinc-800/80 pt-3">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-[10px] text-zinc-500 pl-5">
                        +{service.features.length - 3} more technical inclusions
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-2.5 rounded-lg bg-zinc-800/90 hover:bg-amber-500 hover:text-black text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-zinc-700/60 hover:border-amber-500"
                >
                  <span>Book &amp; Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-amber-950/20 to-zinc-900 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Need an NDA, GST Invoice &amp; Multi-City RFP Proposal?</h4>
              <p className="text-xs text-zinc-400 mt-0.5">We provide formalized vendor onboarding, ISO safety standards &amp; 30-day corporate billing credit terms.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectService({ title: "Custom Enterprise RFP / Pitch Proposal", category: "Corporate" })}
            className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider shrink-0 cursor-pointer shadow-lg shadow-amber-500/20"
          >
            Submit Corporate RFP
          </button>
        </div>

      </div>
    </section>
  );
}
