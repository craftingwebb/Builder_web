import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  ExternalLink,
  Building2,
  Sparkles
} from 'lucide-react';

// Social Icon SVGs
function SocialIcon({ type }) {
  if (type === 'linkedin') {
    return (
      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }
  if (type === 'instagram') {
    return (
      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  if (type === 'facebook') {
    return (
      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }
  return (
    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// 4 Regional Production Offices
const OFFICES = [
  { name: 'Kolkata (HQ)', subtitle: '22/a gora chand lane' },
  { name: 'Mumbai', subtitle: 'Production office' },
  { name: 'Delhi NCR', subtitle: 'Production office' },
  { name: 'Bengaluru', subtitle: 'Production office' },
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
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Dispatch via WhatsApp Concierge
    const waText =
      `*New Contact Message from Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Company:* ${formData.company || 'Not Specified'}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone || 'Not Specified'}%0A` +
      `*Subject:* ${formData.subject}%0A%0A` +
      `*Message:*%0A${formData.message}%0A%0A` +
      `Please contact the sender.`;

    window.open(`https://wa.me/917600149422?text=${waText}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="bg-ivory text-ink min-h-screen">
      {/* ========================================================= */}
      {/* 1. HERO HEADER SECTION (Screenshot 1: media_1794853783636_13070e5f.jpg) */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-ink pt-36 pb-32 sm:pt-44 sm:pb-36 text-white">
        {/* Background Image of Meeting / Strategy Room with Dark Gradient */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=85"
            alt=""
            className="h-full w-full object-cover opacity-20 filter contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
        </div>

        <div className="site-container">
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
              className="group rounded-3xl bg-white p-7 shadow-lg border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-ink text-gold group-hover:scale-105 transition-transform">
                <Mail className="size-5" />
              </div>
              <p className="mt-6 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-ink/50">
                EMAIL US
              </p>
              <p className="mt-1 text-sm sm:text-[0.95rem] font-bold text-ink truncate" title="s.aeventsandmanpowerservice@gmail.com">
                s.aeventsandmanpowerservice@gmail.com
              </p>
            </a>

            {/* Card 3: WHATSAPP ENQUIRY */}
            <a
              href="https://wa.me/917600149422?text=Hello%20S.%20A%20Event's%20and%20Manpower%20Service,%20I'd%20like%20to%20discuss%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-white p-7 shadow-lg border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-ink text-[#25D366] group-hover:scale-105 transition-transform">
                <MessageCircle className="size-5" />
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
                  className="font-medium text-indigo-600 hover:text-indigo-800 underline underline-offset-4 cursor-pointer"
                >
                  Request a quote
                </button>
              </p>

              {isSubmitted ? (
                <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center animate-in fade-in">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-emerald-950">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="mt-2 text-sm text-emerald-800 max-w-md mx-auto">
                    Your inquiry has been transferred to our corporate concierge desk. One of our event directors will review your brief and connect shortly.
                  </p>
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
                      });
                    }}
                    className="btn-outline-ink mt-6 !text-xs !py-2.5 !px-5 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                        className="w-full rounded-2xl border border-ink/15 bg-zinc-50/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ink focus:bg-white"
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
                        className="w-full rounded-2xl border border-ink/15 bg-zinc-50/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ink focus:bg-white"
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
                        className="w-full rounded-2xl border border-ink/15 bg-zinc-50/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ink focus:bg-white"
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
                        className="w-full rounded-2xl border border-ink/15 bg-zinc-50/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ink focus:bg-white"
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
                      className="w-full rounded-2xl border border-ink/15 bg-zinc-50/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ink focus:bg-white cursor-pointer"
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
                      className="w-full rounded-2xl border border-ink/15 bg-zinc-50/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ink focus:bg-white resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-black hover:shadow-xl cursor-pointer active:scale-95"
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
              <div className="rounded-3xl bg-[#090d21] p-8 sm:p-10 text-white shadow-xl border border-white/10">
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
                  className="flex items-start gap-4 mt-6 pt-6 border-t border-white/10 group"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg group-hover:scale-105 transition-transform">
                    <SocialIcon type="instagram" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-bold leading-tight text-white group-hover:text-gold transition-colors">
                      @s.aeventsandmanpowerservice
                    </p>
                    <p className="text-xs text-white/60 mt-0.5">Follow Official Instagram &amp; Updates</p>
                  </div>
                </a>

                {/* Social Badges Row */}
                <div className="mt-8 flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/s.aeventsandmanpowerservice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex size-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 hover:border-gold/50 transition-all cursor-pointer"
                  >
                    <SocialIcon type="instagram" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex size-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 hover:border-gold/50 transition-all cursor-pointer"
                  >
                    <SocialIcon type="linkedin" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="flex size-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 hover:border-gold/50 transition-all cursor-pointer"
                  >
                    <SocialIcon type="facebook" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="flex size-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 hover:border-gold/50 transition-all cursor-pointer"
                  >
                    <SocialIcon type="youtube" />
                  </a>
                </div>
              </div>

              {/* Middle Card: Official Instagram Profile Card */}
              <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-sm text-ink">
                <div className="flex items-center gap-4">
                  {/* Profile Badge Avatar */}
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-1 shadow-md">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-black text-gold font-bold text-base tracking-tighter">
                      SA
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-ink">S.A EVENTS</h3>
                    <a
                      href="https://www.instagram.com/s.aeventsandmanpowerservice/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-600 hover:underline font-semibold block"
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
