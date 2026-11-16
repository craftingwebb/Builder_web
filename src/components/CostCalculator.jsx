import React, { useState } from 'react';
import { Check, MessageCircle } from 'lucide-react';

const EVENT_TYPES = [
  { id: 'corporate-conf', label: 'Corporate Conference / Summit', basePrice: 150000 },
  { id: 'product-launch', label: 'Product Launch & Reveal', basePrice: 200000 },
  { id: 'college-fest', label: 'College Fest / Campus Concert', basePrice: 250000 },
  { id: 'royal-wedding', label: 'Royal Wedding & Mandap Gala', basePrice: 350000 },
  { id: 'sangeet-haldi', label: 'Sangeet, Haldi & Mehndi Mela', basePrice: 180000 },
  { id: 'social-rice', label: 'Annaprashan / Birthday / Anniversary', basePrice: 90000 },
];

const MANPOWER_OPTIONS = [
  { id: 'bouncers', label: 'Bouncers & VIP Security', defaultCount: 4, costPerUnit: 2500 },
  { id: 'hostesses', label: 'Welcoming Hostesses / Ushers', defaultCount: 4, costPerUnit: 3000 },
  { id: 'anchor', label: 'Professional Emcee / Anchor', defaultCount: 1, costPerUnit: 25000 },
  { id: 'dj', label: 'Club DJ & Sound Console', defaultCount: 1, costPerUnit: 35000 },
  { id: 'ganga-aarti', label: 'Banaras Ganga Aarti Troupe (7 Priests)', defaultCount: 1, costPerUnit: 45000 },
  { id: 'dholis', label: 'Punjabi / Nasik Dholis (Set of 4)', defaultCount: 1, costPerUnit: 15000 },
  { id: 'russian', label: 'Russian / International Violinist or Aerialist', defaultCount: 1, costPerUnit: 55000 },
  { id: 'media', label: 'Cinematic Video + Drone + Candid Photo Crew', defaultCount: 1, costPerUnit: 60000 },
  { id: 'manager', label: 'Dedicated Floor & Stage Managers', defaultCount: 2, costPerUnit: 8000 },
];

const PRODUCTION_OPTIONS = [
  { id: 'led-wall', label: 'P2.5 Ultra-HD Curved LED Wall (20x10 ft)', cost: 45000 },
  { id: 'concert-sound', label: 'JBL / L-Acoustics Concert Audio & Moving Lights', cost: 65000 },
  { id: 'thematic-decor', label: 'Bespoke Fresh Floral & Fabric Decor', cost: 120000 },
  { id: 'cold-pyro', label: 'Cold Pyro Spark Fountains & Low Fog Entry FX', cost: 25000 },
];

export default function CostCalculator() {
  const [selectedEventType, setSelectedEventType] = useState(EVENT_TYPES[0].id);
  const [guestCount, setGuestCount] = useState(300);
  const [selectedManpower, setSelectedManpower] = useState(['bouncers', 'hostesses', 'manager', 'anchor']);
  const [selectedProduction, setSelectedProduction] = useState(['led-wall', 'concert-sound']);
  const [eventDate, setEventDate] = useState('');
  const [eventCity, setEventCity] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const toggleManpower = (id) => {
    setSelectedManpower((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleProduction = (id) => {
    setSelectedProduction((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentEventType = EVENT_TYPES.find((t) => t.id === selectedEventType) || EVENT_TYPES[0];
  
  const manpowerTotal = selectedManpower.reduce((acc, id) => {
    const item = MANPOWER_OPTIONS.find((m) => m.id === id);
    return item ? acc + (item.costPerUnit * item.defaultCount) : acc;
  }, 0);

  const productionTotal = selectedProduction.reduce((acc, id) => {
    const item = PRODUCTION_OPTIONS.find((p) => p.id === id);
    return item ? acc + item.cost : acc;
  }, 0);

  const guestMultiplier = guestCount > 1000 ? 1.4 : guestCount > 500 ? 1.2 : 1.0;
  const estimatedTotal = Math.round((currentEventType.basePrice + manpowerTotal + productionTotal) * guestMultiplier);
  const minEstimate = Math.round(estimatedTotal * 0.9);
  const maxEstimate = Math.round(estimatedTotal * 1.15);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleWhatsAppQuote = () => {
    const selectedMpNames = selectedManpower
      .map((id) => MANPOWER_OPTIONS.find((m) => m.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const selectedProdNames = selectedProduction
      .map((id) => PRODUCTION_OPTIONS.find((p) => p.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const message = `*Lumora Events - Instant Estimate Request*%0A%0A` +
      `*Event Type:* ${currentEventType.label}%0A` +
      `*Expected Guests:* ${guestCount}%0A` +
      `*Tentative Date:* ${eventDate || 'To be decided'}%0A` +
      `*Event City:* ${eventCity || 'Not specified'}%0A` +
      `*Contact:* ${clientPhone || 'Direct Inquiry'}%0A%0A` +
      `*Manpower Required:*%0A${selectedMpNames || 'None selected'}%0A%0A` +
      `*Production & Tech Required:*%0A${selectedProdNames || 'None selected'}%0A%0A` +
      `*Estimated Range:* ${formatCurrency(minEstimate)} - ${formatCurrency(maxEstimate)}%0A%0A` +
      `Please contact me with a finalized formal proposal.`;

    window.open(`https://wa.me/919820012345?text=${message}`, '_blank');
  };

  return (
    <section id="calculator" className="relative overflow-hidden bg-ink py-24 text-white lg:py-36 border-t border-white/10">
      <div className="site-container">
        
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <p className="eyebrow text-gold">Instant cost estimator</p>
          <h2 className="display mt-4 text-[2.4rem] sm:text-5xl lg:text-6xl">
            Plan your budget in <span className="accent-serif text-gold-soft">60 seconds.</span>
          </h2>
          <p className="mt-4 text-base text-white/60 leading-relaxed">
            Select your event type, select vetted manpower and production staging to generate an instant estimate.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            
            {/* Step 1 */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-3 font-semibold">
                01. Select Event Nature
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {EVENT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedEventType(type.id)}
                    className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer text-xs flex items-center justify-between ${
                      selectedEventType === type.id
                        ? 'bg-gold/15 border-gold text-white font-semibold'
                        : 'bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20'
                    }`}
                  >
                    <span>{type.label}</span>
                    {selectedEventType === type.id && (
                      <Check className="size-4 text-gold shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-gold font-semibold">
                  02. Expected Guest Attendance
                </label>
                <span className="text-sm font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/10 font-mono">
                  {guestCount} Guests
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="3000"
                step="50"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
              />
              <div className="flex justify-between text-[11px] text-white/40 font-mono mt-2">
                <span>50</span>
                <span>500</span>
                <span>1,500</span>
                <span>3,000+</span>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-3 font-semibold">
                03. Choose Vetted Manpower &amp; Talent Crew
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {MANPOWER_OPTIONS.map((item) => {
                  const isChecked = selectedManpower.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleManpower(item.id)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'bg-gold/10 border-gold/70 text-white'
                          : 'bg-white/[0.02] border-white/10 text-white/60 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`size-4 rounded border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-gold border-gold' : 'border-white/30'
                          }`}
                        >
                          {isChecked && <Check className="size-3 text-ink" />}
                        </div>
                        <span>{item.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-3 font-semibold">
                04. Production &amp; Technical Staging
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PRODUCTION_OPTIONS.map((item) => {
                  const isChecked = selectedProduction.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleProduction(item.id)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'bg-gold/10 border-gold/70 text-white'
                          : 'bg-white/[0.02] border-white/10 text-white/60 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`size-4 rounded border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-gold border-gold' : 'border-white/30'
                          }`}
                        >
                          {isChecked && <Check className="size-3 text-ink" />}
                        </div>
                        <span>{item.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Details Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div>
                <label className="block text-[11px] text-white/60 mb-1">Target Date</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="block text-[11px] text-white/60 mb-1">Event City</label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai, Delhi"
                  value={eventCity}
                  onChange={(e) => setEventCity(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="block text-[11px] text-white/60 mb-1">WhatsApp Number</label>
                <input
                  type="tel"
                  placeholder="+91 98200..."
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-gold"
                />
              </div>
            </div>

          </div>

          {/* Estimate Output Box */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="glass p-6 sm:p-8 rounded-3xl border-white/15 shadow-2xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold block mb-1">
                Projected Budget
              </span>
              <h3 className="text-2xl font-bold text-white mb-6">Quote Summary</h3>

              <div className="mb-6 rounded-2xl bg-white/[0.04] p-5 border border-white/10 text-center">
                <span className="text-xs text-white/50 block mb-1">Turnkey Range Estimate</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                  <span className="text-gold">{formatCurrency(minEstimate)}</span>
                  <span className="text-white/40 text-lg font-normal mx-2">to</span>
                  <span className="text-gold">{formatCurrency(maxEstimate)}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 text-xs">
                <div className="flex justify-between text-white/70">
                  <span>Event Nature:</span>
                  <span className="font-semibold text-white">{currentEventType.label}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Guest Scale:</span>
                  <span className="font-semibold text-white">{guestCount} Pax</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Manpower Units:</span>
                  <span className="font-semibold text-gold">{selectedManpower.length} Selected</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>AV &amp; Staging:</span>
                  <span className="font-semibold text-gold">{selectedProduction.length} Selected</span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppQuote}
                className="btn-gold w-full cursor-pointer"
              >
                <MessageCircle className="size-4" />
                <span>Send Estimate to WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
