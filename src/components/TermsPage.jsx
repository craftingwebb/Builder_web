import React from 'react';
import { FileText, ArrowLeft, Mail, Phone } from 'lucide-react';

export default function TermsPage({ onNavigateHome, onOpenProposalModal }) {
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
            <span className="text-white">Terms of Production</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              COMMERCIAL CONTRACT TERMS
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white font-serif">
            Terms of Production &amp; Service
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/70">
            Standard Master Services Agreement terms governing stage engineering, technical AV riders, and turnkey manpower operations across India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="site-container max-w-4xl">
          <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-sm border border-black/5 space-y-10 text-sm sm:text-base text-ink/80 leading-relaxed">
            
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-3">1. Scope of Turnkey Production</h2>
              <p>
                Every engagement is executed in accordance with a signed Line-Item Technical Scope outlining stage architecture, concert sound (L-Acoustics/JBL), intelligent lighting (Sharpy/Warm Pars), curved P2.5 LED walls, and certified manpower deployments. Any client-initiated variations during load-in will be documented with written work orders.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-3">2. Payment Milestones &amp; Date Confirmation</h2>
              <p className="mb-3">
                Production equipment and dates are blocked strictly upon receipt of the agreed deposit:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Advance Deposit (40%):</strong> Due upon contract execution to secure venue, reserve equipment, and block artist/crew calendars.</li>
                <li><strong>Fabrication &amp; Load-in (40%):</strong> Due 72 hours prior to physical setup at the venue.</li>
                <li><strong>Final Settlement (20%):</strong> Due immediately following the technical dry run and soundcheck prior to event commencement.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-3">3. Statutory Permits &amp; Municipal Clearances</h2>
              <p>
                S. A Event&apos;s assists with police permissions, fire department NOCs, decibel level clearances, and local canter transit approvals. However, statutory government royalties and licensing fees (such as IPRS, PPL, and local entertainment taxes) are billed to the client unless explicitly bundled in the turnkey proposal.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-3">4. Manpower SLA &amp; Conduct Guarantee</h2>
              <p>
                All deployed personnel (bouncers, security guards, hostesses, and floor managers) report in clean, standardized company uniforms with assigned communication radios. If any crew member fails to meet professional grooming or behavioral benchmarks, our floor director will replace that individual within 60 minutes.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-3">5. Force Majeure &amp; Rescheduling</h2>
              <p>
                Neither party shall be held liable for failure to perform due to acts of God, extreme weather, civil disturbances, or statutory curfew orders. In such situations, S. A Event&apos;s will coordinate with venue authorities to reschedule the event within a mutually acceptable 6-month window without forfeiting the base deposit.
              </p>
            </div>

            <div className="bg-[#130308] text-white rounded-2xl p-6 sm:p-8 space-y-3">
              <h3 className="text-base font-bold text-gold uppercase tracking-wider">Commercial Contract Queries</h3>
              <p className="text-xs sm:text-sm text-white/70">
                To request custom SLA terms or enterprise procurement billing, please contact our legal desk:
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm font-semibold">
                <a href="mailto:s.aeventsandmanpowerservice@gmail.com" className="flex items-center gap-2 hover:text-gold">
                  <Mail className="size-4 text-gold" /> s.aeventsandmanpowerservice@gmail.com
                </a>
                <a href="tel:+917600149422" className="flex items-center gap-2 hover:text-gold">
                  <Phone className="size-4 text-gold" /> +91 76001 49422
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
