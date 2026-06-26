import { useState, useEffect } from 'react';
import { PawPrint, Menu, X } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleBooking = () => {
    scrollToSection('book');
  };

  const handleCall = () => {
    window.location.href = 'tel:7550291783';
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/92 backdrop-blur-xl shadow-[0_1px_20px_rgba(45,95,76,0.06)] text-gray-900'
            : 'bg-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <PawPrint className={`w-7 h-7 ${isScrolled ? 'text-primary' : 'text-white'}`} />
              <span className="font-display text-2xl font-bold">{siteContent.header.logo}</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {siteContent.header.nav.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`text-base font-medium transition-colors ${
                    isScrolled ? 'hover:text-primary' : 'hover:text-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={handleCall}
                className={`px-6 py-2.5 rounded-full font-semibold border-2 transition-all duration-300 ${
                  isScrolled
                    ? 'border-primary text-primary hover:bg-primary hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-primary'
                }`}
              >
                {siteContent.header.cta.call}
              </button>
              <button
                onClick={handleBooking}
                className="px-6 py-2.5 rounded-full font-semibold bg-primary text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {siteContent.header.cta.book}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {siteContent.header.nav.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-3xl font-bold text-gray-900 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-4 w-full max-w-xs mt-8">
              <button
                onClick={handleCall}
                className="w-full px-8 py-4 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                {siteContent.header.cta.call}
              </button>
              <button
                onClick={handleBooking}
                className="w-full px-8 py-4 rounded-full font-semibold bg-primary text-white hover:shadow-xl transition-all duration-300"
              >
                {siteContent.header.cta.book}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
