import React, { useState, useEffect } from 'react';
import { X, Check, Send, AlertCircle, Mail, MessageSquare } from 'lucide-react';
import { sanitizeString, sanitizePhone, isValidEmail } from '../utils/security';
import { saveInquiryToRegistry, openWhatsAppWithDetection } from '../utils/inquiryStorage';
import WhatsAppIcon from './WhatsAppIcon';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Corporate Event',
    serviceTitle: '',
    city: '',
    date: '',
    guestCount: '200-500',
    notes: '',
    _hp_website: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalError, setModalError] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [popupBlocked, setPopupBlocked] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');

  // Whenever modal opens or initialData changes, reset submitted state!
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setModalError('');
      setPopupBlocked(false);
    }
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        eventType: initialData.category || 'Corporate Event',
        serviceTitle: initialData.title || initialData.name || '',
      }));
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleClose = () => {
    setSubmitted(false);
    setModalError('');
    setPopupBlocked(false);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Honeypot check
    if (formData._hp_website) {
      console.warn('[Security] Bot submission blocked.');
      setSubmitted(true);
      return;
    }

    const cleanName = sanitizeString(formData.name, 100);
    const cleanPhone = sanitizePhone(formData.phone, 25);
    const cleanEmail = sanitizeString(formData.email, 120);
    const cleanCity = sanitizeString(formData.city, 100);
    const cleanNotes = sanitizeString(formData.notes, 1500);

    if (!cleanName || !cleanPhone) {
      setModalError('Please enter your full name and phone number.');
      return;
    }

    if (cleanEmail && !isValidEmail(cleanEmail)) {
      setModalError('Please enter a valid email address.');
      return;
    }

    setModalError('');
    setIsSubmitting(true);

    // 1. Automatically save to local inquiries registry
    const savedRecord = saveInquiryToRegistry({
      type: 'Booking Modal Quote',
      typePrefix: 'BK',
      clientName: cleanName,
      phone: cleanPhone,
      email: cleanEmail || null,
      eventType: formData.eventType,
      serviceTitle: formData.serviceTitle || 'Full Turnkey Event',
      city: cleanCity || null,
      date: formData.date || null,
      guestCount: formData.guestCount,
      notes: cleanNotes || null,
    });

    setReferenceId(savedRecord.refId);

    const rawText =
      `*New Event Booking Request - S. A Event's and Manpower Service*\n` +
      `*Ref ID:* #${savedRecord.refId}\n\n` +
      `*Client Name:* ${cleanName}\n` +
      `*Phone:* ${cleanPhone}\n` +
      `*Email:* ${cleanEmail || 'N/A'}\n` +
      `*Event Category:* ${formData.eventType}\n` +
      `*Requested Service/Crew:* ${formData.serviceTitle || 'Full Turnkey Event'}\n` +
      `*City:* ${cleanCity || 'TBD'}\n` +
      `*Target Date:* ${formData.date || 'TBD'}\n` +
      `*Expected Guests:* ${formData.guestCount}\n` +
      `*Specific Requirements:* ${cleanNotes || 'None specified'}\n\n` +
      `Please provide an official quote and feasibility confirmation.`;

    // 2. Build WhatsApp URL for optional user-initiated direct chat (NO auto-popup)
    const waUrl = `https://wa.me/917600149422?text=${encodeURIComponent(rawText)}`;
    setLastWaUrl(waUrl);
    setPopupBlocked(false);

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const getEmailFallback = () => {
    const subject = encodeURIComponent(`Booking Inquiry [${referenceId || 'New'}]: ${formData.serviceTitle || formData.eventType}`);
    const body = encodeURIComponent(
      `Hi S. A Event's and Manpower Service,\n\n` +
      `Reference: #${referenceId}\n` +
      `Client Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Category: ${formData.eventType}\n` +
      `Service: ${formData.serviceTitle}\n` +
      `City: ${formData.city}\n` +
      `Date: ${formData.date}\n` +
      `Guests: ${formData.guestCount}\n` +
      `Notes: ${formData.notes}\n\n` +
      `Please get in touch with an itemized quote.`
    );
    return `mailto:s.aeventsandmanpowerservice@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-gradient-to-br from-[#18040b] via-[#22060f] to-[#120207] border border-gold/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button - Always resets submitted state */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block mb-1">
                Fast Response Guarantee
              </span>
              <h3 className="text-2xl font-bold text-white font-display">
                Request Formal Quotation
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Tell us about your event. Your inquiry will be saved in our system and forwarded directly to WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anti-Bot Security Honeypot */}
              <input
                type="text"
                name="_hp_website"
                value={formData._hp_website}
                onChange={handleChange}
                style={{ display: 'none', position: 'absolute', opacity: 0, zIndex: -1 }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {modalError && (
                <div className="rounded-xl bg-red-950/80 border border-red-500/40 p-2.5 text-xs text-red-300 font-medium">
                  {modalError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Expected Guests</label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="50-150">50 – 150 Guests</option>
                    <option value="150-500">150 – 500 Guests</option>
                    <option value="500-1500">500 – 1,500 Guests</option>
                    <option value="1500+">1,500 – 5,000+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Event Category</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Corporate Event">Corporate / Summit</option>
                    <option value="Product Launch">Product Launch &amp; Reveal</option>
                    <option value="College Fest">College Fest &amp; Arena Concert</option>
                    <option value="Royal Wedding">Royal Wedding &amp; Mandap</option>
                    <option value="Haldi & Sangeet">Haldi, Sangeet &amp; Entries</option>
                    <option value="Annaprashan & Social">Rice Ceremony / Birthday / Anniversary</option>
                    <option value="Manpower Deployment">Exclusive Manpower / Bouncers / Artists</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Specific Service / Crew</label>
                  <input
                    type="text"
                    name="serviceTitle"
                    value={formData.serviceTitle}
                    onChange={handleChange}
                    placeholder="e.g. Banaras Aarti, 20 Bouncers"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Event City *</label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Mumbai, Surat, Delhi"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Event Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-300 mb-1">Specific Requirements / Brief</label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Share stage size, venue details, or required crew shifts..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-base sm:text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-[1.01] cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Submitting Request...' : 'Submit Quotation Request'}</span>
              </button>
            </form>
          </div>
        ) : (
          /* Transparent confirmed submission view */
          <div className="text-center py-6 space-y-4">
            <div className="size-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="size-7" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-[11px] font-mono font-bold tracking-wider mb-2">
                REF #{referenceId}
              </span>
              <h4 className="text-2xl font-bold text-white font-display">Quotation Request Registered</h4>
              <p className="text-xs text-zinc-300 mt-1.5 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your quotation request has been logged into our concierge queue. A senior event director will review your event requirements and respond within 2-4 business hours.
              </p>
            </div>

            {/* Optional Instant Communication Box */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold">
                <MessageSquare className="size-4 shrink-0" />
                <span>Need Instant Confirmation?</span>
              </div>
              <p className="text-[11px] text-white/70 leading-relaxed">
                Your request is already saved. If you prefer real-time chat with our dispatch team, you can optionally connect with us directly on WhatsApp or Email below.
              </p>
            </div>

            {popupBlocked && (
              <div className="flex items-center gap-2 rounded-xl bg-amber-950/70 border border-amber-500/30 p-2.5 text-xs text-amber-300 text-left">
                <AlertCircle className="size-4 shrink-0" />
                <span>Your browser paused the pop-up window. Tap the button below to open WhatsApp.</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              {lastWaUrl && (
                <a
                  href={lastWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition shadow-md"
                >
                  <WhatsAppIcon className="size-4" />
                  <span>Open WhatsApp Chat</span>
                </a>
              )}

              <a
                href={getEmailFallback()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-semibold hover:bg-white/15 transition"
              >
                <Mail className="size-4 text-gold" />
                <span>Send via Email</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={handleClose}
                className="px-6 py-2 rounded-lg bg-zinc-800 text-white text-xs font-semibold hover:bg-zinc-700 transition cursor-pointer"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
