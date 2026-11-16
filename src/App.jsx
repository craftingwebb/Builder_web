import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedEvents from './components/FeaturedEvents';
import PortfolioSection from './components/PortfolioSection';
import PortfolioPage from './components/PortfolioPage';
import ProposalPage from './components/ProposalPage';
import AboutPage from './components/AboutPage';
import IndustriesSection from './components/IndustriesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import InsightsSection from './components/InsightsSection';
import ProposalBanner from './components/ProposalBanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'portfolio' | 'proposal'
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Sync hash routing so back/forward buttons, direct links, and refreshes work seamlessly
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash;
      if (hash === '#/about' || hash === '#about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/portfolio' || hash === '#portfolio') {
        setCurrentPage('portfolio');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#/request-a-quote' ||
        hash === '#/proposal' ||
        hash === '#request-a-quote' ||
        hash === '#proposal'
      ) {
        setCurrentPage('proposal');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  const handleNavigate = (page, sectionHref = null) => {
    if (page === 'about') {
      window.location.hash = '#/about';
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'portfolio') {
      window.location.hash = '#/portfolio';
      setCurrentPage('portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'proposal' || page === 'quote') {
      window.location.hash = '#/request-a-quote';
      setCurrentPage('proposal');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '';
      setCurrentPage('home');
      if (sectionHref && sectionHref.startsWith('#')) {
        setTimeout(() => {
          const target = document.querySelector(sectionHref);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenModal = (service = null) => {
    setSelectedService(service);
    setIsProposalModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsProposalModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-[#e2e8f0] relative selection:bg-[#c9a96a] selection:text-black">
      {/* 1. Header / Navbar with Multi-Page Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenProposalModal={() => handleNavigate('proposal')}
      />

      {/* 2. Main View Switcher */}
      {currentPage === 'about' ? (
        /* Dedicated About Us Page (Screenshots 1-7) */
        <main>
          <AboutPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenProposalModal={() => handleNavigate('proposal')}
            onViewPortfolio={() => handleNavigate('portfolio')}
          />
        </main>
      ) : currentPage === 'portfolio' ? (
        /* Dedicated Portfolio Page (Screenshots 1-6) */
        <main>
          <PortfolioPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenProposalModal={() => handleNavigate('proposal')}
          />
        </main>
      ) : currentPage === 'proposal' ? (
        /* Dedicated Request a Quote / Proposal Page (User's Latest Screenshots) */
        <main>
          <ProposalPage
            onNavigateHome={() => handleNavigate('home')}
          />
        </main>
      ) : (
        /* Full Homepage View */
        <main>
          {/* Hero Section */}
          <Hero
            onOpenProposalModal={() => handleNavigate('proposal')}
            onViewPortfolio={() => handleNavigate('portfolio')}
          />

          {/* WHO WE ARE Section */}
          <AboutSection
            onOpenProposalModal={() => handleNavigate('proposal')}
            onNavigateAbout={() => handleNavigate('about')}
          />

          {/* WHAT WE DO */}
          <ServicesSection onSelectService={(service) => handleOpenModal(service)} />

          {/* WHY CHOOSE US */}
          <WhyChooseUs />

          {/* FEATURED EVENTS */}
          <FeaturedEvents
            onOpenProposalModal={() => handleNavigate('proposal')}
            onViewPortfolio={() => handleNavigate('portfolio')}
          />

          {/* OUR PORTFOLIO */}
          <PortfolioSection
            onOpenQuoteModal={() => handleNavigate('proposal')}
            onViewFullPortfolio={() => handleNavigate('portfolio')}
          />

          {/* INDUSTRIES WE SERVE */}
          <IndustriesSection onOpenProposalModal={() => handleNavigate('proposal')} />

          {/* OUR PROCESS */}
          <ProcessSection />

          {/* CLIENT TESTIMONIALS & BRANDS */}
          <TestimonialsSection />

          {/* INSIGHTS */}
          <InsightsSection />

          {/* REQUEST A PROPOSAL & 4-COLUMN CONTACT DESK */}
          <ProposalBanner onOpenProposalModal={() => handleNavigate('proposal')} />
        </main>
      )}

      {/* Comprehensive Pre-Footer & Directory Footer (Shared across all pages) */}
      <Footer
        onOpenQuoteModal={() => handleNavigate('proposal')}
        onNavigate={handleNavigate}
      />

      {/* Quick Inquiries Drawer / Modal */}
      <BookingModal
        isOpen={isProposalModalOpen}
        onClose={handleCloseModal}
        initialData={selectedService}
      />

      {/* Floating Scroll to Top & WhatsApp Pill Widget */}
      <WhatsAppButton />
    </div>
  );
}
