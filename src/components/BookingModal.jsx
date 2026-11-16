import React, { useState, useEffect } from 'react';
import { X, Check, MessageCircle, Sparkles, Send } from 'lucide-react';

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
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        eventType: initialData.category || 'Corporate Event',
        serviceTitle: initialData.title || initialData.name || '',
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `*New Event Booking Request - AuraVibe Events*%0A%0A` +
      `*Client Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'N/A'}%0A` +
      `*Event Category:* ${formData.eventType}%0A` +
      `*Requested Service/Crew:* ${formData.serviceTitle || 'Full Turnkey Event'}%0A` +
      `*City:* ${formData.city}%0A` +
      `*Target Date:* ${formData.date || 'TBD'}%0A` +
      `*Expected Guests:* ${formData.guestCount}%0A` +
      `*Specific Requirements:* ${formData.notes || 'None specified'}%0A%0A` +
      `Please provide an official quote and feasibility confirmation.`;

    window.open(`https://wa.me/917600149422?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#11131a] border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
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
                Tell us about your event. Our team will verify date availability and send an itemized estimate.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
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
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Event Category</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
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
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Event City *</label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Mumbai"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Event Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Guests</label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Under 100">Under 100</option>
                    <option value="100 - 300">100 - 300</option>
                    <option value="300 - 800">300 - 800</option>
                    <option value="800 - 2000">800 - 2,000</option>
                    <option value="2000+">2,000+ (Arena)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-300 mb-1">Additional Requirements / Brief</label>
                <textarea
                  rows="3"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us about your stage requirements, timings, specific artist preferences, or budget parameters..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-[1.01] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit &amp; Open WhatsApp Confirmation</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white font-display">Inquiry Transmitted!</h4>
            <p className="text-xs text-zinc-300 mt-2 max-w-sm mx-auto">
              Your inquiry has been forwarded to our WhatsApp operations desk. A senior event director will review your requirements and respond within 15 minutes.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-lg bg-zinc-800 text-white text-xs font-semibold hover:bg-zinc-700"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
