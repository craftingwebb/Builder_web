import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top Circular Button (from screenshots) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex size-11 items-center justify-center rounded-full bg-white text-ink shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer border border-ink/10"
        >
          <ArrowUp className="size-4 stroke-[2.5]" />
        </button>
      )}

      {/* Floating WhatsApp Pill Button */}
      <a
        href="https://wa.me/917600149422?text=Hello%20S.%20A%20Event's%20and%20Manpower%20Service,%20I%20would%20like%20to%20request%20a%20proposal%20for%20an%20event."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold tracking-wide shadow-2xl shadow-emerald-500/35 transition-all hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-white/20"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="size-5 shrink-0" bubbleColor="#FFFFFF" phoneColor="#25D366" />
        <span>Chat with us</span>
      </a>
    </div>
  );
}
