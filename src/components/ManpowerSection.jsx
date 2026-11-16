import React, { useState } from 'react';
import { MANPOWER_ROSTER } from '../data/eventsData';
import { Users, Shield, Music, Sparkles, Check, ChevronRight, Phone, MessageSquare, AlertCircle } from 'lucide-react';

export default function ManpowerSection({ onSelectManpower }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Security', 'Hospitality', 'Artists', 'Cultural', 'Management', 'Production', 'Marketing'];

  const filteredRoster = selectedCategory === 'All'
    ? MANPOWER_ROSTER
    : MANPOWER_ROSTER.filter(item => item.category === selectedCategory);

  return (
    <section id="manpower" className="py-24 bg-[#0b0c12] border-t border-zinc-800/80 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Division 03 • Certified Event Manpower &amp; Artists</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Elite Manpower &amp; <span className="silver-gradient-text">Celebrity Talent Bureau</span>
            </h2>
            <p className="mt-3 text-zinc-400 max-w-2xl text-base sm:text-lg">
              Over 850+ vetted bouncers, groomed hostesses, celebrity DJs, Russian visual performers, Banaras Ganga Aarti priests, and ground operation managers ready for Pan-India deployment.
            </p>
          </div>

          {/* Quick stats & direct manpower emergency hotline */}
          <div className="flex items-center gap-4 bg-zinc-900/90 border border-zinc-800 p-4 rounded-xl shrink-0">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
              24/7
            </div>
            <div>
              <p className="text-xs text-zinc-400">Emergency Manpower Dispatch</p>
              <a href="tel:+919876543210" className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat} {cat === 'All' ? `(${MANPOWER_ROSTER.length})` : ''}
            </button>
          ))}
        </div>

        {/* Manpower Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoster.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 group-hover:text-blue-300 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Badges Info */}
                <div className="grid grid-cols-2 gap-2 mb-4 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80 text-[11px]">
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-mono">Uniform</span>
                    <span className="text-zinc-200 font-medium line-clamp-1">{item.uniform}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-mono">Capacity</span>
                    <span className="text-zinc-200 font-medium line-clamp-1">{item.headcount}</span>
                  </div>
                </div>

                {/* Scope of Work */}
                <div className="space-y-1.5 mb-6">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block">Deliverables &amp; Roles:</span>
                  {item.roles.map((role, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span className="line-clamp-1">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <button
                onClick={() => onSelectManpower(item)}
                className="w-full py-2.5 rounded-lg bg-zinc-800/90 hover:bg-blue-600 text-zinc-200 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer border border-zinc-700/60 hover:border-blue-500"
              >
                <span>Book This Crew</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Manpower Quality Guarantee Banner */}
        <div className="mt-14 rounded-2xl bg-zinc-900/80 border border-zinc-800 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% Police &amp; ID Verified</h4>
              <p className="text-xs text-zinc-400 mt-1">Every bouncer, guard, and hospitality staff has verified Aadhaar and police verification records.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Dress Code &amp; Grooming Standards</h4>
              <p className="text-xs text-zinc-400 mt-1">Impeccable uniforms: tailored blazers, formal sarees, muscle black shirts, and communication earpieces.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Standby Replacement Guarantee</h4>
              <p className="text-xs text-zinc-400 mt-1">We maintain a 15% buffer crew on standby in every major city to guarantee 0% shortage on event day.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
