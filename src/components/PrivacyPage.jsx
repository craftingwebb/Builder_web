import React from 'react';
import { Shield, ArrowLeft, Mail, Phone } from 'lucide-react';

export default function PrivacyPage({ onNavigateHome, onOpenProposalModal }) {
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
            <span className="text-white">Privacy Policy</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              LEGAL &amp; GOVERNANCE
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white font-serif">
            Privacy Policy &amp; Data Protection
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/70">
            Last Updated: January 2026 · Compliant with the Digital Personal Data Protection (DPDP) Act of India &amp; Enterprise Confidentiality Standards.
          </p>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-16 sm:py-20">
        <div className="site-container max-w-4xl">
          <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-sm border border-black/5 space-y-10 text-sm sm:text-base text-ink/80 leading-relaxed">
            
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-3">1. Scope and Commitment</h2>
              <p>
                S. A Event&apos;s &amp; Manpower Service (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and proprietary data of our corporate, luxury wedding, and enterprise clients. This Privacy Policy governs all inquiries, proposal briefs, and manpower service bookings submitted via our website and direct communication channels.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-3">2. Data We Collect</h2>
              <p className="mb-3">
                We only collect data strictly necessary to scope, fabricate, and execute your events:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Contact Information:</strong> Full name, corporate email address, WhatsApp or phone number, and company name.</li>
                <li><strong>Event Production Briefs:</strong> Event category, destination city, target dates, estimated delegate counts, stage dimensions, and technical rider specifications.</li>
                <li><strong>Newsletter Subscribers:</strong> Email addresses submitted specifically for our curated monthly production intelligence briefing.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-3">3. Mutual Non-Disclosure Agreements (NDAs)</h2>
              <p>
                We understand that product reveals, corporate annual days, and high-profile VIP weddings involve confidential proprietary information. Clients may request a formal bilateral Non-Disclosure Agreement before detailed venue coordinates or stage CAD drawings are exchanged.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-3">4. Manpower Verification &amp; Code of Conduct</h2>
              <p>
                All security guards, bouncers, protocol marshals, and hostesses provided through S. A Event&apos;s undergo background verification and PSARA compliance screening. Our personnel are bound by contractual confidentiality clauses strictly prohibiting unauthorized photography or filming of private proceedings.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-3">5. Data Retention &amp; Rights</h2>
              <p>
                Inquiries are retained in our operational registry for historical proposal reference and billing reconciliation. We never sell, lease, or monetize your contact details with external third-party telemarketers. You may request data inspection or erasure at any time.
              </p>
            </div>

            <div className="bg-[#130308] text-white rounded-2xl p-6 sm:p-8 space-y-3">
              <h3 className="text-base font-bold text-gold uppercase tracking-wider">Contact Our Privacy Officer</h3>
              <p className="text-xs sm:text-sm text-white/70">
                For privacy inquiries, NDA requests, or data removal, contact our central concierge desk:
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
