import React, { useEffect } from 'react';
import { X, Shield, FileText, Compass, ExternalLink, ArrowRight } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, modalType, onNavigate }) {
  // modalType: 'privacy' | 'terms' | 'sitemap'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#18040b] border border-gold/30 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[88vh] text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="size-5" />
        </button>

        {/* ========================================================= */}
        {/* PRIVACY POLICY */}
        {/* ========================================================= */}
        {modalType === 'privacy' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                <Shield className="size-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold">
                  LEGAL COMPLIANCE &amp; GOVERNANCE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Privacy Policy &amp; Data Security
                </h2>
              </div>
            </div>

            <p className="text-xs text-white/50">
              Last updated: January 2026 · Compliant with the Digital Personal Data Protection (DPDP) Act &amp; Enterprise Confidentiality Standards.
            </p>

            <div className="space-y-5 text-xs sm:text-sm text-white/75 leading-relaxed border-t border-white/10 pt-4">
              <section>
                <h3 className="text-base font-bold text-white mb-1.5">1. Information We Collect</h3>
                <p>
                  S. A Event&apos;s &amp; Manpower Service collects information strictly necessary to scope, quote, and execute live experiential productions. This includes your name, corporate organization, work email, telephone number, event dates, venue specifications, and production brief notes submitted through our inquiry or proposal portals.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-white mb-1.5">2. Non-Disclosure &amp; Client Confidentiality</h3>
                <p>
                  All event briefs, artist rosters, unreleased product blueprints, and attendee estimates shared with us are treated with strict confidentiality. If requested, our legal team will execute a bilateral Non-Disclosure Agreement (NDA) before detailed stage designs or venue coordinates are exchanged.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-white mb-1.5">3. Manpower &amp; Background Verification</h3>
                <p>
                  All security marshals, bouncers, hostesses, and event crew provided through our agency are verified, PSARA compliant where applicable, and bound by strict conduct codes preventing unauthorized photography or disclosure of private VIP proceedings.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-white mb-1.5">4. Data Retention &amp; Inquiries</h3>
                <p>
                  Inquiry records submitted on this website are logged securely in our encrypted operations database to maintain project continuity. We do not sell, rent, or trade your data to third-party telemarketers.
                </p>
              </section>

              <section className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-1">Data Protection Officer (DPO)</h4>
                <p className="text-xs text-white/70">
                  For data removal requests or confidentiality queries, contact our legal desk at:{' '}
                  <a href="mailto:s.aeventsandmanpowerservice@gmail.com" className="text-gold underline">
                    s.aeventsandmanpowerservice@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TERMS OF PRODUCTION */}
        {/* ========================================================= */}
        {modalType === 'terms' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                <FileText className="size-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold">
                  COMMERCIAL TERMS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Terms of Production &amp; Service
                </h2>
              </div>
            </div>

            <p className="text-xs text-white/50">
              Standard Master Services Agreement (MSA) terms governing event fabrication, technical riders, and manpower deployment across India.
            </p>

            <div className="space-y-5 text-xs sm:text-sm text-white/75 leading-relaxed border-t border-white/10 pt-4">
              <section>
                <h3 className="text-base font-bold text-white mb-1.5">1. Turnkey Scope &amp; Production Milestones</h3>
                <p>
                  Every engagement is defined by an approved Line-Item Production Schedule detailing sound, intelligent lighting, stage architecture, curved LED walls, and manpower deployment headcounts. Any mid-production additions require a formal sign-off.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-white mb-1.5">2. Booking Deposit &amp; Payment Schedules</h3>
                <p>
                  Live event dates are secured upon receipt of an initial booking deposit (typically 40% on agreement, 40% upon commencement of fabrication/technical load-in, and 20% post dry-run soundcheck prior to event kickoff).
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-white mb-1.5">3. Venue Permissions &amp; Statutory Licenses</h3>
                <p>
                  While S. A Event&apos;s assists with police permissions, fire NOCs, sound decibel clearances, and municipal canter approvals, statutory license fees (such as IPRS, PPL, or local municipal taxes) remain billable to the client unless bundled into the turnkey proposal.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-white mb-1.5">4. Force Majeure &amp; Weather Protocols</h3>
                <p>
                  In the event of severe adverse weather, civic lockdowns, or unforeseen acts of God, our operations director will work with venue management to enforce backup indoor staging, schedule postponement, or mutual rescheduling without penalty.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-white mb-1.5">5. Manpower Conduct Guarantee</h3>
                <p>
                  Our security guards, bouncers, hostesses, and floor managers arrive strictly in designated uniforms with required communications equipment. Clients retain the right to request immediate crew replacement within 60 minutes if conduct standards are unmet.
                </p>
              </section>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SITEMAP */}
        {/* ========================================================= */}
        {modalType === 'sitemap' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                <Compass className="size-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold">
                  DIRECTORY ARCHITECTURE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Visual Directory &amp; Sitemap
                </h2>
              </div>
            </div>

            <p className="text-xs text-white/50">
              Complete index of all live pages, service pillars, and direct booking portals.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/10 pt-5">
              {/* Primary Pages */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold">Primary Navigation</h4>
                <ul className="space-y-1.5 text-xs text-white/80">
                  <li>
                    <button
                      onClick={() => {
                        onClose();
                        onNavigate('home');
                      }}
                      className="hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="size-3 text-gold" /> Home Overview
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onClose();
                        onNavigate('about');
                      }}
                      className="hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="size-3 text-gold" /> About Us &amp; Pedigree
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onClose();
                        onNavigate('services');
                      }}
                      className="hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="size-3 text-gold" /> Services Catalog (39)
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onClose();
                        onNavigate('portfolio');
                      }}
                      className="hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="size-3 text-gold" /> Landmark Portfolio
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onClose();
                        onNavigate('clients');
                      }}
                      className="hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="size-3 text-gold" /> Clients &amp; Case Studies
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onClose();
                        onNavigate('gallery');
                      }}
                      className="hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="size-3 text-gold" /> Live Event Gallery
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onClose();
                        onNavigate('insights');
                      }}
                      className="hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="size-3 text-gold" /> Production Insights
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onClose();
                        onNavigate('contact');
                      }}
                      className="hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="size-3 text-gold" /> Contact &amp; Concierge Desk
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onClose();
                        onNavigate('proposal');
                      }}
                      className="hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="size-3 text-gold" /> Request a Formal Proposal
                    </button>
                  </li>
                </ul>
              </div>

              {/* Event Pillars */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold">Service Pillars</h4>
                <ul className="space-y-1.5 text-xs text-white/80">
                  <li className="font-semibold text-white/95">Corporate Events:</li>
                  <li className="pl-3 text-white/65">· Product Launches &amp; Brand Reveals</li>
                  <li className="pl-3 text-white/65">· Conferences &amp; Summits</li>
                  <li className="pl-3 text-white/65">· BTL Roadshows &amp; Mall Canters</li>
                  <li className="pl-3 text-white/65">· College Fests &amp; School Galas</li>
                  <li className="font-semibold text-white/95 mt-2">Weddings &amp; Social:</li>
                  <li className="pl-3 text-white/65">· Bespoke Floral &amp; Theme Decor</li>
                  <li className="pl-3 text-white/65">· Grand Mandap Architecture</li>
                  <li className="pl-3 text-white/65">· Haldi, Mehndi &amp; Sangeet</li>
                  <li className="pl-3 text-white/65">· Traditional Rice Ceremony (Annaprashan)</li>
                </ul>
              </div>

              {/* Manpower */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold">Manpower &amp; Artists</h4>
                <ul className="space-y-1.5 text-xs text-white/80">
                  <li className="text-white/65">· Elite Hospitality Hostesses</li>
                  <li className="text-white/65">· High-Profile Bouncers (M/F)</li>
                  <li className="text-white/65">· Event Security Marshals</li>
                  <li className="text-white/65">· Operations &amp; Floor Managers</li>
                  <li className="text-white/65">· Celebrity &amp; Club DJs</li>
                  <li className="text-white/65">· Varanasi Ganga Aarti Troupe</li>
                  <li className="text-white/65">· Punjabi &amp; Nasik Dholis</li>
                  <li className="text-white/65">· International &amp; Russian Artists</li>
                  <li className="text-white/65">· BTL Promotion Fleets</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Modal Bottom Close Button */}
        <div className="mt-8 pt-5 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-white/10 hover:bg-white/20 px-6 py-2.5 text-xs font-semibold text-white transition-colors cursor-pointer"
          >
            Close Dialog
          </button>
        </div>

      </div>
    </div>
  );
}
