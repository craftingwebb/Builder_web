import React, { useState } from 'react';
import { InstagramLogo } from './Footer';
import WhatsAppIcon from './WhatsAppIcon';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  ExternalLink,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import { sanitizeString, sanitizePhone, isValidEmail } from '../utils/security';
import { saveInquiryToRegistry, openWhatsAppWithDetection } from '../utils/inquiryStorage';

// Operational Hubs & Service Areas
const OFFICES = [
  { name: 'Kolkata (HQ)', subtitle: '22/a gora chand lane' },
  { name: 'Greater Kolkata & WB', subtitle: 'Regional production office' },
  { name: 'Delhi NCR', subtitle: 'Key deployment hub' },
  { name: 'Eastern Region Hubs', subtitle: 'On-demand production network' },
];

export default function ContactPage({
  onNavigateHome,
  onOpenProposalModal,
}) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'General enquiry',
    message: '',
    _hp_website: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [popupBlocked, setPopupBlocked] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Bot detection via honeypot field
    if (formData._hp_website) {
      console.warn('[Security] Automated submission discarded.');
      setIsSubmitted(true);
      return;
    }

    const cleanName = sanitizeString(formData.name, 100);
    const cleanEmail = sanitizeString(formData.email, 120);
    const cleanMessage = sanitizeString(formData.message, 2000);
    const cleanPhone = sanitizePhone(formData.phone, 25);
    const cleanCompany = sanitizeString(formData.company, 120);
    const cleanSubject = sanitizeString(formData.subject, 100);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // 1. Automatically save to local inquiries registry
    const savedRecord = saveInquiryToRegistry({
      type: 'Contact Page Inquiry',
      typePrefix: 'CT',
      clientName: cleanName,
      company: cleanCompany || null,
      email: cleanEmail,
      phone: cleanPhone || null,
      subject: cleanSubject,
      notes: cleanMessage,
    });

    setReferenceId(savedRecord.refId);

    // 2. Build WhatsApp text
    const rawText =
      `*New Contact Message - S. A Event's and Manpower Service*\n` +
      `*Ref ID:* #${savedRecord.refId}\n\n` +
      `*Name:* ${cleanName}\n` +
      `*Company:* ${cleanCompany || 'Not Specified'}\n` +
      `*Email:* ${cleanEmail}\n` +
      `*Phone:* ${cleanPhone || 'Not Specified'}\n` +
      `*Subject:* ${cleanSubject}\n\n` +
      `*Message:*\n${cleanMessage}\n\n` +
      `Please contact the sender.`;

    const waUrl = `https://wa.me/917600149422?text=${encodeURIComponent(rawText)}`;
    setLastWaUrl(waUrl);
    setPopupBlocked(false);

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const getEmailFallback = () => {
    const subject = encodeURIComponent(`Contact Inquiry [${referenceId || 'New'}]: ${formData.subject}`);
    const body = encodeURIComponent(
      `Hi S. A Event's and Manpower Service,\n\n` +
      `Reference: #${referenceId}\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n`
    );
    return `mailto:s.aeventsandmanpowerservice@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-ivory text-ink min-h-screen">
      {/* ========================================================= */}
      {/* 1. HERO HEADER SECTION (Screenshot 1: media_1794853783636_13070e5f.jpg) */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#130308] pt-36 pb-32 sm:pt-44 sm:pb-36 text-white">
        {/* Background Image of Meeting / Strategy Room with Center Ambient Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=85"
            alt=""
            className="h-full w-full object-cover opacity-20 filter contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#130308]/90 via-[#130308]/75 to-[#130308]" />
          <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[26rem] w-[55rem] rounded-full bg-[#991435]/35 blur-[130px]" />
          <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-[32rem] rounded-full bg-[#c9a96a]/15 blur-[110px]" />
        </div>

        <div className="site-container relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-medium text-white/50 mb-6">
            <button
              onClick={onNavigateHome}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              CONTACT US
            </span>
          </div>

          {/* Headline */}
          <h1 className="display text-4xl sm:text-6xl lg:text-[4.75rem] leading-[1.08] max-w-4xl text-white">
            Let’s start a{' '}
            <span className="accent-serif italic font-serif text-[#c9a96a]">
              conversation.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Tell us what you’re planning — our team responds within one business day.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. OVERLAPPING 4 CONTACT CARDS (Screenshot 1 & 3) */}
      {/* ========================================================= */}
      <section className="relative z-10 -mt-20">
        <div className="site-container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: CALL US */}
            <a
              href="tel:+917600149422"
              className="group rounded-3xl bg-white p-7 shadow-lg border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-ink text-gold group-hover:scale-105 transition-transform">
                <Phone className="size-5" />
              </div>
              <p className="mt-6 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-ink/50">
                CALL US
              </p>
              <p className="mt-1 text-base sm:text-lg font-bold text-ink">
                +91 76001 49422
              </p>
            </a>

            {/* Card 2: EMAIL US */}
            <a
              href="mailto:s.aeventsandmanpowerservice@gmail.com"
              className="group rounded-3xl bg-white p-7 shadow-lg border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer min-w-0"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-ink text-gold group-hover:scale-105 transition-transform">
                <Mail className="size-5" />
              </div>
              <p className="mt-6 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-ink/50">
                EMAIL US
              </p>
              <p className="mt-1 text-sm font-bold text-ink leading-snug break-all [overflow-wrap:anywhere]" title="s.aeventsandmanpowerservice@gmail.com">
                <span>s.aeventsandmanpowerservice</span>
                <wbr />
                <span className="text-ink/80">@gmail.com</span>
              </p>
            </a>

            {/* Card 3: WHATSAPP ENQUIRY */}
            <a
              href="https://wa.me/917600149422?text=Hello%20S.%20A%20Event's%20and%20Manpower%20Service,%20I'd%20like%20to%20discuss%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-white p-7 shadow-lg border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-ink group-hover:scale-110 transition-transform shadow-md">
                <WhatsAppIcon className="size-6 text-[#25D366]" />
              </div>
              <p className="mt-6 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-ink/50">
                WHATSAPP ENQUIRY
              </p>
              <p className="mt-1 text-base sm:text-lg font-bold text-ink group-hover:text-emerald-600 transition-colors">
                Start a chat &rarr;
              </p>
            </a>

            {/* Card 4: OFFICE HOURS */}
            <div className="rounded-3xl bg-white p-7 shadow-lg border border-black/5 transition-all duration-300">
              <div className="flex size-11 items-center justify-center rounded-full bg-ink text-gold">
                <Clock className="size-5" />
              </div>
              <p className="mt-6 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-ink/50">
                OFFICE HOURS
              </p>
              <p className="mt-1 text-sm sm:text-[0.925rem] font-bold text-ink">
                Mon – Sat · 9:30 AM – 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. MAIN SECTION: FORM (LEFT) + HEAD OFFICE & MAP (RIGHT) */}
      {/* ========================================================= */}
      <section className="bg-ivory py-16 sm:py-24 text-ink">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* ------------------------------------------------------- */}
            {/* LEFT COLUMN (7 cols): Send Us A Message Form Card */}
            {/* ------------------------------------------------------- */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-black/5">
              <h2 className="text-2xl sm:text-3xl font-bold text-ink">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-ink/70">
                Need a detailed proposal?{' '}
                <button
                  type="button"
                  onClick={onOpenProposalModal}
                  className="font-medium text-[#801436] hover:text-[#991435] underline underline-offset-4 cursor-pointer"
                >
                  Request a quote
                </button>
              </p>

              {isSubmitted ? (
                <div className="mt-8 rounded-3xl bg-zinc-50 border border-black/10 p-8 text-center animate-in fade-in space-y-4">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/30">
                    <CheckCircle2 className="size-8" />
                  </div>

                  <div>
                    <span className="inline-block px-3.5 py-1 rounded-full bg-gold/15 text-amber-900 border border-gold/40 text-[11px] font-mono font-bold tracking-wider mb-2">
                      REF #{referenceId}
                    </span>
                    <h3 className="text-2xl font-bold text-ink">
                      Message Successfully Registered
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-ink/70 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-ink">{formData.name}</strong>. Your message is securely logged in our concierge system. A senior event director will review your brief and get back to you within 2-4 business hours.
                    </p>
                  </div>

                  {/* Optional Real-Time Contact Box */}
                  <div className="bg-white border border-black/10 rounded-2xl p-4 text-left space-y-1.5 max-w-lg mx-auto shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                      <MessageSquare className="size-4 shrink-0 text-gold" />
                      <span>Prefer Instant Communication?</span>
                    </div>
                    <p className="text-xs text-ink/70 leading-relaxed">
                      Your submission is already recorded. If you require immediate real-time coordination, you may also message our operations director directly on WhatsApp or Email.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    {lastWaUrl && (
                      <a
                        href={lastWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition shadow-md cursor-pointer"
                      >
                        <WhatsAppIcon className="size-4" />
                        <span>Open WhatsApp Chat</span>
                      </a>
                    )}

                    <a
                      href={getEmailFallback()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-black/15 text-ink text-xs font-semibold hover:bg-zinc-100 transition cursor-pointer"
                    >
                      <Mail className="size-4 text-amber-800" />
                      <span>Send Copy via Email</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          company: '',
                          email: '',
                          phone: '',
                          subject: 'General enquiry',
                          message: '',
                          _hp_website: '',
                        });
                      }}
                      className="text-xs text-ink/60 hover:text-ink font-medium underline underline-offset-4 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Anti-Bot Security Honeypot */}
                  <input
                    type="text"
                    name="_hp_website"
                    value={formData._hp_website}
                    onChange={(e) =>
                      setFormData({ ...formData, _hp_website: e.target.value })
                    }
                    style={{ display: 'none', position: 'absolute', opacity: 0, zIndex: -1 }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {errorMessage && (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-700 font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* Row 1: Name & Company */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-ink/15 bg-zinc-50/60 px-4 py-3 text-base sm:text-sm text-ink outline-none transition focus:border-ink focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">
                        COMPANY
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Organization or Brand"
                        className="w-full rounded-2xl border border-ink/15 bg-zinc-50/60 px-4 py-3 text-base sm:text-sm text-ink outline-none transition focus:border-ink focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@organization.com"
                        className="w-full rounded-2xl border border-ink/15 bg-zinc-50/60 px-4 py-3 text-base sm:text-sm text-ink outline-none transition focus:border-ink focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">
                        PHONE
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 XXXXX"
                        className="w-full rounded-2xl border border-ink/15 bg-zinc-50/60 px-4 py-3 text-base sm:text-sm text-ink outline-none transition focus:border-ink focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Row 3: Subject Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">
                      SUBJECT
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full rounded-2xl border border-ink/15 bg-zinc-50/60 px-4 py-3 text-base sm:text-sm text-ink outline-none transition focus:border-ink focus:bg-white cursor-pointer"
                    >
                      <option value="General enquiry">General enquiry</option>
                      <option value="Corporate Conference / Summit">
                        Corporate Conference / Summit
                      </option>
                      <option value="Product Launch & Reveal">
                        Product Launch & Reveal
                      </option>
                      <option value="Annual Day / Awards Ceremony">
                        Annual Day / Awards Ceremony
                      </option>
                      <option value="Exhibition Pavilion Setup">
                        Exhibition Pavilion Setup
                      </option>
                      <option value="Talent & Manpower Staffing">
                        Talent & Manpower Staffing
                      </option>
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">
                      MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share details of your upcoming event, expected scale, location, and dates..."
                      className="w-full rounded-2xl border border-ink/15 bg-zinc-50/60 px-4 py-3 text-base sm:text-sm text-ink outline-none transition focus:border-ink focus:bg-white resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-black hover:shadow-xl cursor-pointer active:scale-95"
                    >
                      <Send className="size-4" />
                      <span>Send message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* ------------------------------------------------------- */}
            {/* RIGHT COLUMN (5 cols): HEAD OFFICE + MAP + 4 HUBS */}
            {/* ------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Top Dark Card: Head Office & Official Social Connect */}
              <div className="rounded-3xl bg-[#130308] p-8 sm:p-10 text-white shadow-xl border border-gold/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-px bg-gold" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                    HEAD OFFICE &amp; OPERATIONS
                  </span>
                </div>

                {/* Physical Address */}
                <div className="flex items-start gap-3 mt-4">
                  <MapPin className="size-5 shrink-0 text-gold mt-1" />
                  <div>
                    <p className="text-base sm:text-lg font-bold leading-snug text-white/95">
                      22/a gora chand lane, Kolkata, West Bengal
                    </p>
                    <p className="text-xs text-white/60 mt-1">S. A Event&apos;s and Manpower Service</p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/s.aeventsandmanpowerservice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10 group"
                  title="Follow @s.aeventsandmanpowerservice on Instagram"
                >
                  <InstagramLogo className="size-11 shrink-0 rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-200" />
                  <div>
                    <p className="text-sm sm:text-base font-bold leading-tight text-white group-hover:text-gold transition-colors">
                      @s.aeventsandmanpowerservice
                    </p>
                    <p className="text-xs text-white/60 mt-0.5">Follow Official Instagram &amp; Updates</p>
                  </div>
                </a>

                {/* Verified Direct Channels Row */}
                <div className="mt-8 flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/s.aeventsandmanpowerservice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Official Instagram: @s.aeventsandmanpowerservice"
                    className="inline-flex transition-transform duration-200 hover:scale-110"
                  >
                    <InstagramLogo className="size-10 rounded-xl shadow-md" />
                  </a>
                  <a
                    href="https://wa.me/917600149422?text=Hello%20S.%20A%20Event's,%20I%20would%20like%20to%20connect%20regarding%20an%20event."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    title="Direct WhatsApp: +91 76001 49422"
                    className="flex size-10 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md transition-all duration-200 hover:scale-110 hover:brightness-110"
                  >
                    <WhatsAppIcon className="size-5" />
                  </a>
                  <a
                    href="tel:+917600149422"
                    aria-label="Direct Phone"
                    title="Call Operations: +91 76001 49422"
                    className="flex size-10 items-center justify-center rounded-xl bg-gold text-[#130308] shadow-md transition-all duration-200 hover:scale-110 hover:brightness-110"
                  >
                    <Phone className="size-5" />
                  </a>
                  <a
                    href="mailto:s.aeventsandmanpowerservice@gmail.com"
                    aria-label="Direct Email"
                    title="Email Concierge: s.aeventsandmanpowerservice@gmail.com"
                    className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 shadow-md transition-all duration-200 hover:scale-110 hover:bg-white/20"
                  >
                    <Mail className="size-5" />
                  </a>
                </div>
              </div>

              {/* Middle Card: Official Instagram Profile Card */}
              <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-sm text-ink">
                <div className="flex items-center gap-4">
                  {/* Profile Badge Avatar */}
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-1 shadow-md overflow-hidden">
                    <img
                      src="/logo-emblem.png"
                      alt="S. A Event's and Manpower Service"
                      className="h-full w-full object-cover rounded-full bg-black"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-ink">S.A EVENTS</h3>
                    <a
                      href="https://www.instagram.com/s.aeventsandmanpowerservice/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#801436] hover:text-[#991435] hover:underline font-semibold block"
                    >
                      @s.aeventsandmanpowerservice
                    </a>
                    <p className="text-[11px] text-ink/50 mt-0.5">Event Planner &amp; Production Collective</p>
                  </div>
                </div>

                {/* Bio text from profile */}
                <p className="mt-5 text-xs text-ink/75 leading-relaxed bg-zinc-50 rounded-xl p-3.5 border border-black/5">
                  &ldquo;WARM GREETINGS FROM S.A EVENT&rsquo;S AND MANPOWER SERVICE. THANK YOU FOR CHOOSING US.&rdquo;
                </p>

                {/* CTA buttons */}
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/s.aeventsandmanpowerservice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0095f6] hover:bg-[#1877f2] py-2.5 px-4 text-xs font-semibold text-white shadow-sm transition"
                  >
                    <span>Follow on Instagram</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                  <a
                    href="https://www.instagram.com/s.aeventsandmanpowerservice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-zinc-100 hover:bg-zinc-200 py-2.5 px-4 text-xs font-semibold text-ink transition"
                  >
                    Direct DM
                  </a>
                </div>
              </div>

              {/* Bottom 4 Production Offices (2x2 Grid) */}
              <div className="grid grid-cols-2 gap-4">
                {OFFICES.map((office) => (
                  <div
                    key={office.name}
                    className="rounded-2xl bg-white p-5 shadow-sm border border-black/5 transition hover:shadow-md"
                  >
                    <h4 className="text-sm font-bold text-ink">{office.name}</h4>
                    <p className="text-xs text-ink/60 mt-1">{office.subtitle}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
