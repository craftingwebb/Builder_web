import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';

export function Logo({ variant = 'emblem', showText = true }) {
  return (
    <span className="inline-flex items-center gap-3">
      {/* Enhanced Official Metallic Emblem Badge */}
      <span className="relative flex items-center justify-center size-10 sm:size-11 rounded-full p-0.5 bg-gradient-to-tr from-[#c9a96a]/70 via-[#f5deb3] to-[#996515] shadow-lg shadow-black/40 ring-1 ring-gold/50 shrink-0 overflow-hidden">
        <img
          src={variant === 'full' ? '/logo.png' : '/logo-emblem.png'}
          alt="S. A Event's and Manpower Service Emblem"
          className="h-full w-full object-cover rounded-full filter contrast-110 brightness-105"
        />
      </span>
      {showText && (
        <span className="text-[1.05rem] leading-none font-bold tracking-[-0.02em] text-white flex flex-wrap items-baseline gap-1">
          <span>S. A Event&apos;s</span>
          <span className="accent-serif text-[1.15rem] font-normal text-gold">
            &amp; Manpower Service
          </span>
        </span>
      )}
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
    { label: 'Services', href: '#/services', isPage: true },
    { label: 'Portfolio', href: '#/portfolio', isPage: true },
    { label: 'Clients', href: '#/clients', isPage: true },
    { label: 'Gallery', href: '#/gallery', isPage: true },
    { label: 'Insights', href: '#/insights', isPage: true },
    { label: 'Contact', href: '#/contact', isPage: true },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileOpen(false);

    if (link.label === 'About') {
      onNavigate?.('about');
    } else if (link.label === 'Services') {
      onNavigate?.('services');
    } else if (link.label === 'Portfolio') {
      onNavigate?.('portfolio');
    } else if (link.label === 'Clients') {
      onNavigate?.('clients');
    } else if (link.label === 'Gallery') {
      onNavigate?.('gallery');
    } else if (link.label === 'Insights') {
      onNavigate?.('insights');
    } else if (link.label === 'Contact') {
      onNavigate?.('contact');
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
          aria-label="S. A Event's and Manpower Service home"
        >
          <Logo light={true} />
        </button>

        {/* Center Nav links */}
        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map((link) => {
            const isActive =
              (currentPage === 'about' && link.label === 'About') ||
              (currentPage === 'services' && link.label === 'Services') ||
              (currentPage === 'portfolio' && link.label === 'Portfolio') ||
              (currentPage === 'clients' && link.label === 'Clients') ||
              (currentPage === 'gallery' && link.label === 'Gallery') ||
              (currentPage === 'insights' && link.label === 'Insights') ||
              (currentPage === 'contact' && link.label === 'Contact');
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
            onClick={onOpenProposalModal || (() => onNavigate?.('proposal'))}
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
                (currentPage === 'services' && link.label === 'Services') ||
                (currentPage === 'portfolio' && link.label === 'Portfolio') ||
                (currentPage === 'clients' && link.label === 'Clients') ||
                (currentPage === 'gallery' && link.label === 'Gallery') ||
                (currentPage === 'insights' && link.label === 'Insights') ||
                (currentPage === 'contact' && link.label === 'Contact');
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
                  if (onOpenProposalModal) {
                    onOpenProposalModal();
                  } else {
                    onNavigate?.('proposal');
                  }
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
