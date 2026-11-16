import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';

export function Logo({ name = "Lumora Events", light = true }) {
  const [first, ...rest] = name.split(" ");
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="inline-flex items-center justify-center size-9 rounded-[0.65rem] bg-[#11173a] ring-1 ring-[#c9a96a]/40 shrink-0">
        <svg viewBox="0 0 32 32" className="size-[62%]" fill="none">
          <path d="M6 22a10 10 0 0 1 20 0" stroke="#c9a96a" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M11 22a5 5 0 0 1 10 0" stroke="#c9a96a" strokeWidth="2.6" strokeLinecap="round" opacity=".55" />
          <path d="M4 26h24" stroke="#c9a96a" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="16" cy="9" r="2" fill="#c9a96a" />
        </svg>
      </span>
      <span className="text-[1.15rem] leading-none font-bold tracking-[-0.02em] text-white">
        {first}
        {rest.length > 0 && (
          <span className="accent-serif ml-1 text-[1.3rem] font-normal text-gold">
            {rest.join(" ")}
          </span>
        )}
      </span>
    </span>
  );
}

export default function Navbar({ onOpenProposalModal, currentPage = 'home', onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smart auto-hide on scroll down, show on scroll up (matching Lumora reference app.js)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Buffer of 6px to avoid jitter
      if (Math.abs(currentScrollY - lastScrollY) < 6) return;

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // Scrolling down -> hide navbar smoothly
        setIsVisible(false);
      } else {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const links = [
    { label: 'About', href: '#/about', isPage: true },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#/portfolio', isPage: true },
    { label: 'Clients', href: '#testimonials' },
    { label: 'Gallery', href: '#featured-stages' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileOpen(false);

    if (link.label === 'About') {
      onNavigate?.('about');
    } else if (link.label === 'Portfolio') {
      onNavigate?.('portfolio');
    } else {
      onNavigate?.('home', link.href);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-none transition-[transform,background-color,box-shadow,backdrop-filter] duration-500 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-ink/85 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="site-container flex h-[4.5rem] items-center gap-6 lg:h-20">
        
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate?.('home')}
          className="shrink-0 cursor-pointer text-left"
          aria-label="Lumora Events home"
        >
          <Logo name="Lumora Events" light={true} />
        </button>

        {/* Center Nav links */}
        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map((link) => {
            const isActive =
              (currentPage === 'about' && link.label === 'About') ||
              (currentPage === 'portfolio' && link.label === 'Portfolio');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative rounded-full px-3.5 py-2 text-[0.85rem] transition-colors ${
                  isActive
                    ? 'text-white font-semibold underline decoration-gold decoration-2 underline-offset-8'
                    : 'text-white/75 font-medium hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Button & Hotline */}
        <div className="ml-auto flex items-center gap-4 lg:ml-4">
          <a
            href="tel:+917600149422"
            className="hidden items-center gap-2 text-[0.85rem] font-medium text-white/80 transition hover:text-white xl:flex"
          >
            <Phone className="size-4 text-gold" />
            <span>+91 76001 49422</span>
          </a>

          <button
            onClick={() => onNavigate?.('proposal')}
            className="btn-gold hidden !px-5 !py-2.5 sm:inline-flex cursor-pointer"
          >
            <span>Request a Proposal</span>
            <ArrowRight className="size-4" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 lg:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-ink/95 border-none px-6 py-6 backdrop-blur-2xl animate-in slide-in-from-top-3">
          <div className="flex flex-col gap-3">
            {links.map((link) => {
              const isActive =
                (currentPage === 'about' && link.label === 'About') ||
                (currentPage === 'portfolio' && link.label === 'Portfolio');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-sm py-2 ${
                    isActive
                      ? 'text-gold font-bold'
                      : 'text-white/80 font-medium hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+917600149422"
                className="text-xs font-mono text-white/70 flex items-center gap-2"
              >
                <Phone className="size-4 text-gold" />
                <span>+91 76001 49422</span>
              </a>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  onNavigate?.('proposal');
                }}
                className="btn-gold w-full text-center cursor-pointer"
              >
                Request a Proposal &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
