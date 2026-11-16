import React, { useState } from 'react';
import { WEDDING_SERVICES } from '../data/eventsData';
import { Heart, CheckCircle2, ArrowRight, Sparkles, MessageSquare, Flame } from 'lucide-react';

export default function WeddingSection({ onSelectService }) {
  const [filter, setFilter] = useState('all');

  const filteredServices = WEDDING_SERVICES.filter(service => {
    if (filter === 'ceremonies') return ['wed-haldi', 'wed-sangeet', 'wed-rice'].includes(service.id);
    if (filter === 'production') return ['wed-decor', 'wed-stage', 'wed-av', 'wed-led', 'wed-entry'].includes(service.id);
    if (filter === 'social') return ['wed-social', 'wed-venue'].includes(service.id);
    return true;
  });

  return (
    <section id="weddings" className="py-24 bg-[#0a0a0f] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Heart className="w-3.5 h-3.5 fill-rose-400" />
              <span>Division 02 • Royal Weddings &amp; Social Galas</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Weddings &amp; <span className="font-luxury italic text-rose-400 font-normal">Timeless Celebrations</span>
            </h2>
            <p className="mt-3 text-zinc-400 max-w-2xl text-base sm:text-lg">
              From sun-soaked Haldi carnivals and electric Sangeet concerts to Banaras Ganga Aarti entries and traditional Rice Ceremonies (Annaprashan).
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All 11+ Services' },
              { id: 'production', label: 'Stage & Tech' },
              { id: 'ceremonies', label: 'Haldi, Sangeet & Rituals' },
              { id: 'social', label: 'Anniversary & Social' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Wedding Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-rose-500/40 hover:-translate-y-1.5"
            >
              <div>
                {/* Image Cover */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14171f] via-transparent to-black/30" />
                  
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded bg-rose-500/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-rose-300/80 font-medium mt-1 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-1.5 border-t border-zinc-800/80 pt-3">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-2.5 rounded-lg bg-zinc-800 hover:bg-rose-500 hover:text-white text-zinc-200 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-zinc-700/60 hover:border-rose-500 shadow-sm"
                >
                  <span>Plan This Ceremony</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Feature: Grand Entry & Varanasi Ganga Aarti */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-rose-950/40 via-zinc-900 to-amber-950/30 border border-rose-500/20 p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[11px] font-bold uppercase tracking-wider">
              Exclusive Spiritual Wedding Highlight
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3 font-display">
              Banaras Ganga Aarti &amp; Royal Cold-Pyro Entries
            </h3>
            <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
              We bring trained Vedic priests directly from Kashi Ghats with monumental multi-tier brass diyas, shankhnaad, and flower petal downpours during your Varmala. Combined with 100% safe, cold-spark pyrotechnics and low-fog clouds, your entrance will be legendary.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => onSelectService({ title: "Banaras Ganga Aarti & Grand Entry Package", category: "Wedding" })}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-wider text-center cursor-pointer shadow-lg shadow-rose-500/20"
            >
              Book Grand Entry Package
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
