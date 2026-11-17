import React from 'react';
import { Compass, ArrowLeft, ArrowRight } from 'lucide-react';
import { CORPORATE_SERVICES, WEDDING_SERVICES, MANPOWER_ROSTER } from '../data/eventsData';

export default function SitemapPage({ onNavigateHome, onNavigate }) {
  return (
    <div className="bg-ivory text-ink min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#130308] pt-36 pb-20 sm:pt-44 sm:pb-28 text-white">
        <div className="site-container relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-white/50 mb-6">
            <button
              onClick={onNavigateHome}
              className="hover:text-gold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <ArrowLeft className="size-3.5" /> Home
            </button>
            <span>/</span>
            <span className="text-white">Sitemap</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              DIRECTORY ARCHITECTURE
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white font-serif">
            Website Index &amp; Sitemap
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/70">
            A comprehensive, structured index of all pages, service categories, and operational portals available across S. A Event&apos;s and Manpower Service.
          </p>
        </div>
      </section>

      {/* Main Directory Content */}
      <section className="py-16 sm:py-20">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            
            {/* 1. Core Navigation */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 space-y-4">
              <h2 className="text-base font-bold text-ink uppercase tracking-wider border-b border-black/10 pb-3">
                Main Pages
              </h2>
              <ul className="space-y-2.5 text-sm text-ink/75">
                {[
                  { name: 'Home Overview', page: 'home' },
                  { name: 'About Us & Leadership', page: 'about' },
                  { name: 'Complete Services (39)', page: 'services' },
                  { name: 'Landmark Portfolio', page: 'portfolio' },
                  { name: 'Clients & Case Studies', page: 'clients' },
                  { name: 'Live Event Gallery', page: 'gallery' },
                  { name: 'Production Insights', page: 'insights' },
                  { name: 'Contact & Concierge Desk', page: 'contact' },
                  { name: 'Request a Proposal (RFP)', page: 'proposal' },
                ].map((item) => (
                  <li key={item.page}>
                    <button
                      onClick={() => onNavigate(item.page)}
                      className="hover:text-amber-800 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <ArrowRight className="size-3 text-gold" />
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Corporate Events (8) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 space-y-4">
              <h2 className="text-base font-bold text-ink uppercase tracking-wider border-b border-black/10 pb-3">
                Corporate Events (8)
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-ink/75">
                {CORPORATE_SERVICES.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => onNavigate('services', `#${s.id}`)}
                      className="hover:text-amber-800 transition-colors flex items-center gap-2 cursor-pointer text-left"
                    >
                      <span className="size-1.5 rounded-full bg-gold shrink-0" />
                      <span className="truncate">{s.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Wedding & Social (11) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 space-y-4">
              <h2 className="text-base font-bold text-ink uppercase tracking-wider border-b border-black/10 pb-3">
                Weddings &amp; Social (11)
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-ink/75">
                {WEDDING_SERVICES.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => onNavigate('services', `#${s.id}`)}
                      className="hover:text-amber-800 transition-colors flex items-center gap-2 cursor-pointer text-left"
                    >
                      <span className="size-1.5 rounded-full bg-gold shrink-0" />
                      <span className="truncate">{s.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Manpower & Artists (20) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 space-y-4">
              <h2 className="text-base font-bold text-ink uppercase tracking-wider border-b border-black/10 pb-3">
                Manpower &amp; Artists (20)
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-ink/75 max-h-[420px] overflow-y-auto pr-1">
                {MANPOWER_ROSTER.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => onNavigate('services', `#${s.id}`)}
                      className="hover:text-amber-800 transition-colors flex items-center gap-2 cursor-pointer text-left"
                    >
                      <span className="size-1.5 rounded-full bg-gold shrink-0" />
                      <span className="truncate">{s.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
