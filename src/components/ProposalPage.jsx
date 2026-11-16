import React, { useState } from 'react';
import {
  Clock,
  ShieldCheck,
  UserCheck,
  Phone,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
} from 'lucide-react';
import { sanitizeString, sanitizePhone, isValidEmail, safeOpenExternal } from '../utils/security';

const EVENT_TYPES = [
  'Corporate Event Management',
  'Conference & Seminar Management',
  'Product Launch Events',
  'Exhibition & Trade Shows',
  'Award Ceremonies',
  'Corporate Entertainment',
  'Team Building Events',
  'Corporate Celebrations',
  'Virtual & Hybrid Events',
];

const REQUIRED_SERVICES = [
  'Venue sourcing',
  'Stage & AV production',
  'Décor & theming',
  'Catering & F&B',
  'Entertainment & artists',
  'Travel & hospitality',
  'Registration & badging',
  'Live streaming',
  'Photography & film',
  'Branding & printing',
];

const GUEST_RANGES = [
  '50 – 150 Guests',
  '150 – 500 Guests',
  '500 – 1,500 Guests',
  '1,500 – 5,000+ Guests',
];

export default function ProposalPage({ onNavigateHome }) {
  const [currentStep, setCurrentStep] = useState(1); // 1, 2, 3
  const [selectedEventType, setSelectedEventType] = useState('Corporate Event Management');
  const [selectedServices, setSelectedServices] = useState([
    'Venue sourcing',
    'Stage & AV production',
  ]);

  // Step 2 Data
  const [city, setCity] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [guestCount, setGuestCount] = useState('150 – 500 Guests');
  const [briefNotes, setBriefNotes] = useState('');

  // Step 3 Data
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [requireNda, setRequireNda] = useState(false);
  const [hpBotCheck, setHpBotCheck] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      if (!selectedEventType) return;
      setCurrentStep(2);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    } else if (currentStep === 2) {
      setCurrentStep(3);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Discard automated bot submissions
    if (hpBotCheck) {
      console.warn('[Security] Dropped automated submission.');
      setIsSubmitted(true);
      return;
    }

    const cleanName = sanitizeString(fullName, 100);
    const cleanEmail = sanitizeString(email, 120);
    const cleanPhone = sanitizePhone(phone, 25);
    const cleanCompany = sanitizeString(company, 120);
    const cleanCity = sanitizeString(city, 100);
    const cleanTargetDate = sanitizeString(targetDate, 100);
    const cleanNotes = sanitizeString(briefNotes, 2000);

    if (!cleanName || !cleanEmail || !cleanPhone) {
      setFormError('Please enter your name, email, and phone number.');
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      setFormError('Please enter a valid work email address.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    // Construct formal WhatsApp submission with safe URI encoding
    const rawMessage =
      `*New RFP Proposal Request - S. A Event's and Manpower Service*\n\n` +
      `*Client:* ${cleanName} (${cleanCompany || 'Corporate Client'})\n` +
      `*Work Email:* ${cleanEmail}\n` +
      `*Phone:* ${cleanPhone}\n` +
      `*Event Type:* ${selectedEventType}\n` +
      `*Required Services:* ${selectedServices.join(', ') || 'Full Turnkey'}\n` +
      `*Destination City:* ${cleanCity || 'TBD'}\n` +
      `*Target Timeline:* ${cleanTargetDate || 'TBD'}\n` +
      `*Estimated Delegates:* ${guestCount}\n` +
      `*NDA Requested:* ${requireNda ? 'YES' : 'Standard Confidentiality'}\n` +
      (cleanNotes ? `*Production Brief:* ${cleanNotes}\n\n` : '\n') +
      `Please assign a senior director and share the concept deck.`;

    const waUrl = `https://wa.me/917600149422?text=${encodeURIComponent(rawMessage)}`;
    safeOpenExternal(waUrl);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitting(false), 3000);
  };

  return (
    <div className="bg-ink text-white min-h-screen">
      
      {/* Top Banner / Form Section */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-32">
        {/* Background photo of concert / keynote with dark gradient */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=2000&q=85"
            alt=""
            className="h-full w-full object-cover opacity-15 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
          <div className="absolute -top-40 -left-40 size-[45rem] rounded-full bg-[#991435]/20 blur-[140px]" />
        </div>

        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Left Column (5 cols): Hero Copy & Assurances (Screenshot 3) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-px bg-gold" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    REQUEST A QUOTE
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="display text-4xl sm:text-5xl lg:text-[3.8rem] font-semibold tracking-tight leading-[1.08] text-white">
                  Tell us about your event.{' '}
                  <span className="accent-serif italic font-serif text-[#c9a96a]">
                    We’ll do the rest.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-normal">
                  Receive a tailored concept note, venue options and an indicative line-item budget within 48 hours &mdash; at no cost.
                </p>

                {/* 3 Trust Assurances (Screenshot 3) */}
                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-3.5 text-sm text-white/80">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gold">
                      <Clock className="size-4" />
                    </span>
                    <span>Response within 1 business day</span>
                  </div>

                  <div className="flex items-center gap-3.5 text-sm text-white/80">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gold">
                      <ShieldCheck className="size-4" />
                    </span>
                    <span>Your details stay confidential &mdash; NDA on request</span>
                  </div>

                  <div className="flex items-center gap-3.5 text-sm text-white/80">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gold">
                      <UserCheck className="size-4" />
                    </span>
                    <span>A dedicated senior event consultant</span>
                  </div>
                </div>
              </div>

              {/* "Prefer to talk?" Card at Bottom of Left Col (Screenshot 3) */}
              <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                  Prefer to talk?
                </p>
                <div className="flex flex-wrap items-center gap-5 text-sm font-semibold">
                  <a
                    href="tel:+917600149422"
                    className="flex items-center gap-2 text-white hover:text-gold transition-colors"
                  >
                    <Phone className="size-4 text-gold" />
                    <span>+91 76001 49422</span>
                  </a>
                  <a
                    href="https://wa.me/917600149422?text=Hi!%20I'd%20like%20to%20discuss%20a%20corporate%20event."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#25D366] hover:brightness-110 transition"
                  >
                    <MessageCircle className="size-4 fill-current" />
                    <span>WhatsApp us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): The Large Form Card (Screenshots 2 & 3) */}
            <div className="lg:col-span-7">
              <div className="rounded-[2rem] bg-white p-7 sm:p-10 text-ink shadow-2xl border border-ink/[0.06]">
                
                {/* 1. Multi-Step Stepper Header (Screenshot 3) */}
                <div className="flex items-center justify-between pb-8 mb-8 border-b border-ink/[0.08]">
                  {/* Step 1 */}
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`flex size-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                        currentStep >= 1 ? 'bg-ink text-white' : 'bg-ink/10 text-ink/40'
                      }`}
                    >
                      {currentStep > 1 ? <Check className="size-3.5 stroke-[3]" /> : '1'}
                    </span>
                    <span
                      className={`text-xs font-semibold tracking-wide ${
                        currentStep === 1 ? 'text-ink' : 'text-ink/40'
                      }`}
                    >
                      Your event
                    </span>
                  </div>

                  <span className="h-px flex-1 bg-ink/10 mx-3" />

                  {/* Step 2 */}
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`flex size-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                        currentStep >= 2 ? 'bg-ink text-white' : 'bg-ink/10 text-ink/40'
                      }`}
                    >
                      {currentStep > 2 ? <Check className="size-3.5 stroke-[3]" /> : '2'}
                    </span>
                    <span
                      className={`text-xs font-semibold tracking-wide ${
                        currentStep === 2 ? 'text-ink' : 'text-ink/40'
                      }`}
                    >
                      Details
                    </span>
                  </div>

                  <span className="h-px flex-1 bg-ink/10 mx-3" />

                  {/* Step 3 */}
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`flex size-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                        currentStep === 3 ? 'bg-ink text-white' : 'bg-ink/10 text-ink/40'
                      }`}
                    >
                      3
                    </span>
                    <span
                      className={`text-xs font-semibold tracking-wide ${
                        currentStep === 3 ? 'text-ink' : 'text-ink/40'
                      }`}
                    >
                      Contact
                    </span>
                  </div>
                </div>

                {!isSubmitted ? (
                  <div>
                    {/* STEP 1: What are you planning? (Screenshot 3) */}
                    {currentStep === 1 && (
                      <form onSubmit={handleNextStep} className="space-y-7">
                        <div>
                          <h2 className="text-2xl sm:text-[1.75rem] font-bold text-ink">
                            What are you planning?
                          </h2>
                          <p className="text-sm text-ink/55 mt-1">
                            Choose the closest event type.
                          </p>
                        </div>

                        {/* Event Types Radio Grid (2 cols) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {EVENT_TYPES.map((type) => {
                            const isSelected = selectedEventType === type;
                            return (
                              <button
                                key={type}
                                type="button"
                                onClick={() => setSelectedEventType(type)}
                                className={`flex items-center justify-between rounded-xl border p-3.5 text-left text-xs sm:text-[0.82rem] font-semibold transition-all cursor-pointer ${
                                  isSelected
                                    ? 'border-ink bg-ink text-white shadow-sm'
                                    : 'border-ink/[0.12] bg-[#fdfdfd] text-ink hover:border-ink/40 hover:bg-zinc-50'
                                }`}
                              >
                                <span className="pr-2 leading-snug">{type}</span>
                                <span
                                  className={`size-4 rounded-full border flex items-center justify-center shrink-0 ${
                                    isSelected
                                      ? 'border-white bg-white text-ink'
                                      : 'border-ink/20 bg-white'
                                  }`}
                                >
                                  {isSelected && <span className="size-1.5 rounded-full bg-ink" />}
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Required Services Multiselect (Screenshot 2 & 3) */}
                        <div className="pt-2">
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink/50 mb-3">
                            REQUIRED SERVICES
                          </label>

                          <div className="flex flex-wrap gap-2">
                            {REQUIRED_SERVICES.map((srv) => {
                              const isChecked = selectedServices.includes(srv);
                              return (
                                <button
                                  key={srv}
                                  type="button"
                                  onClick={() => toggleService(srv)}
                                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                                    isChecked
                                      ? 'bg-ink text-white shadow-sm'
                                      : 'border border-ink/15 bg-white text-ink/75 hover:border-ink/40 hover:text-ink'
                                  }`}
                                >
                                  {srv}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Step 1 Footer (Screenshot 2) */}
                        <div className="flex items-center justify-between pt-6 border-t border-ink/[0.08]">
                          <span className="text-xs font-medium text-ink/40">
                            Step 1 of 3
                          </span>

                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-full bg-zinc-600 hover:bg-ink text-white px-7 py-3 text-xs font-bold tracking-wide transition-all shadow-md cursor-pointer hover:shadow-lg"
                          >
                            <span>Continue</span>
                            <ArrowRight className="size-4" />
                          </button>
                        </div>
                      </form>
                    )}

                    {/* STEP 2: Event Details */}
                    {currentStep === 2 && (
                      <form onSubmit={handleNextStep} className="space-y-6">
                        <div>
                          <h2 className="text-2xl sm:text-[1.75rem] font-bold text-ink">
                            Event Scale &amp; Scope
                          </h2>
                          <p className="text-sm text-ink/55 mt-1">
                            Help us tailor venue specs and production logistics.
                          </p>
                        </div>

                        {/* Guest Attendance Chips */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink/50 mb-2.5">
                            EXPECTED ATTENDANCE
                          </label>
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                            {GUEST_RANGES.map((rng) => (
                              <button
                                key={rng}
                                type="button"
                                onClick={() => setGuestCount(rng)}
                                className={`rounded-xl border p-2.5 text-center text-xs font-semibold transition cursor-pointer ${
                                  guestCount === rng
                                    ? 'border-ink bg-ink text-white'
                                    : 'border-ink/15 bg-white text-ink/70 hover:border-ink/30'
                                }`}
                              >
                                {rng}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* City & Target Timeline */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-ink/50 mb-1.5">
                              Destination / City *
                            </label>
                            <input
                              type="text"
                              required
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              placeholder="e.g. Mumbai, Goa, Bengaluru"
                              className="w-full rounded-xl border border-ink/15 bg-zinc-50/50 px-4 py-2.5 text-xs sm:text-sm text-ink outline-none focus:border-ink focus:bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-ink/50 mb-1.5">
                              Target Date / Month *
                            </label>
                            <input
                              type="text"
                              required
                              value={targetDate}
                              onChange={(e) => setTargetDate(e.target.value)}
                              placeholder="e.g. November 2026 / Q4"
                              className="w-full rounded-xl border border-ink/15 bg-zinc-50/50 px-4 py-2.5 text-xs sm:text-sm text-ink outline-none focus:border-ink focus:bg-white"
                            />
                          </div>
                        </div>

                        {/* Brief / Specific Requirements */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-ink/50 mb-1.5">
                            Brief / Key Focus (Optional)
                          </label>
                          <textarea
                            rows={3}
                            value={briefNotes}
                            onChange={(e) => setBriefNotes(e.target.value)}
                            placeholder="Share any specific theme, stage requirements, or executive expectations..."
                            className="w-full rounded-xl border border-ink/15 bg-zinc-50/50 p-3.5 text-xs sm:text-sm text-ink outline-none focus:border-ink focus:bg-white resize-none"
                          />
                        </div>

                        {/* Step 2 Footer */}
                        <div className="flex items-center justify-between pt-6 border-t border-ink/[0.08]">
                          <button
                            type="button"
                            onClick={handlePrevStep}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-ink/60 hover:text-ink cursor-pointer"
                          >
                            <ArrowLeft className="size-4" />
                            <span>Back</span>
                          </button>

                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-full bg-zinc-600 hover:bg-ink text-white px-7 py-3 text-xs font-bold tracking-wide transition-all shadow-md cursor-pointer hover:shadow-lg"
                          >
                            <span>Continue to Contact</span>
                            <ArrowRight className="size-4" />
                          </button>
                        </div>
                      </form>
                    )}

                    {/* STEP 3: Contact & Proposal Dispatch */}
                    {currentStep === 3 && (
                      <form onSubmit={handleFinalSubmit} className="space-y-6">
                        {/* Anti-Bot Security Honeypot */}
                        <input
                          type="text"
                          name="_hp_bot_check"
                          value={hpBotCheck}
                          onChange={(e) => setHpBotCheck(e.target.value)}
                          style={{ display: 'none', position: 'absolute', opacity: 0, zIndex: -1 }}
                          tabIndex={-1}
                          autoComplete="off"
                          aria-hidden="true"
                        />

                        {formError && (
                          <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-700 font-medium">
                            {formError}
                          </div>
                        )}

                        <div>
                          <h2 className="text-2xl sm:text-[1.75rem] font-bold text-ink">
                            Where should we send the deck?
                          </h2>
                          <p className="text-sm text-ink/55 mt-1">
                            Your concept deck and itemized budget estimate will be delivered within 48 hours.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-ink/50 mb-1.5">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder="e.g. Rajesh Sharma"
                              className="w-full rounded-xl border border-ink/15 bg-zinc-50/50 px-4 py-2.5 text-xs sm:text-sm text-ink outline-none focus:border-ink focus:bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-ink/50 mb-1.5">
                              Company / Organization
                            </label>
                            <input
                              type="text"
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              placeholder="e.g. Acme Enterprises"
                              className="w-full rounded-xl border border-ink/15 bg-zinc-50/50 px-4 py-2.5 text-xs sm:text-sm text-ink outline-none focus:border-ink focus:bg-white"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-ink/50 mb-1.5">
                              Work Email *
                            </label>
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="you@company.com"
                              className="w-full rounded-xl border border-ink/15 bg-zinc-50/50 px-4 py-2.5 text-xs sm:text-sm text-ink outline-none focus:border-ink focus:bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-ink/50 mb-1.5">
                              Direct Phone / WhatsApp *
                            </label>
                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+91 76001 XXXXX"
                              className="w-full rounded-xl border border-ink/15 bg-zinc-50/50 px-4 py-2.5 text-xs sm:text-sm text-ink outline-none focus:border-ink focus:bg-white"
                            />
                          </div>
                        </div>

                        {/* NDA Checkbox */}
                        <div className="flex items-start gap-3 rounded-xl border border-ink/10 bg-zinc-50 p-3.5">
                          <input
                            id="nda"
                            type="checkbox"
                            checked={requireNda}
                            onChange={(e) => setRequireNda(e.target.checked)}
                            className="mt-0.5 size-4 accent-[#c9a96a] cursor-pointer"
                          />
                          <label htmlFor="nda" className="text-xs text-ink/75 leading-relaxed cursor-pointer">
                            <strong>Request Mutual NDA:</strong> Please issue a formal Non-Disclosure Agreement prior to sharing detailed venue coordinates.
                          </label>
                        </div>

                        {/* Step 3 Footer */}
                        <div className="flex items-center justify-between pt-6 border-t border-ink/[0.08]">
                          <button
                            type="button"
                            onClick={handlePrevStep}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-ink/60 hover:text-ink cursor-pointer"
                          >
                            <ArrowLeft className="size-4" />
                            <span>Back</span>
                          </button>

                          <button
                            type="submit"
                            className="btn-gold !py-3.5 !px-8 font-semibold text-xs sm:text-sm cursor-pointer shadow-xl hover:scale-105 transition-all"
                          >
                            <span>Submit Proposal Request</span>
                            <ArrowRight className="size-4" />
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                ) : (
                  /* Success State */
                  <div className="py-12 text-center animate-in fade-in duration-500">
                    <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-5">
                      <CheckCircle2 className="size-10" />
                    </div>

                    <h3 className="text-2xl font-bold text-ink">
                      Proposal Request Dispatched!
                    </h3>

                    <p className="mt-2 text-sm text-ink/65 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-ink">{fullName}</strong>. A dedicated event director has received your brief. We will review venue options and deliver your concept deck within 48 hours.
                    </p>

                    <div className="mt-8 flex justify-center gap-4">
                      <button
                        onClick={onNavigateHome}
                        className="btn-outline-ink !border-ink !bg-ink !text-white hover:!bg-gold hover:!text-ink text-xs font-bold px-6 py-3 rounded-full cursor-pointer"
                      >
                        Return to Homepage
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
