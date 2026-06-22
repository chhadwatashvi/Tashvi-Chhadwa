import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'social-media' },
    { label: 'Philosophy', id: 'brand' },
    { label: 'Testimonials', id: 'testimonials' },
  ];

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-warm-beige/85 backdrop-blur-md border-b border-warm-clay/40 py-4 shadow-xs'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand/Name Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif text-2xl font-light tracking-wide cursor-pointer text-dark-charcoal hover:opacity-80 transition-opacity flex items-center gap-1"
          id="nav-logo-btn"
        >
          {PERSONAL_INFO.name}
          <span className="w-1.5 h-1.5 bg-soft-terracotta rounded-full inline-block"></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10" id="desktop-nav-menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xs uppercase tracking-widest font-medium text-dark-charcoal/70 hover:text-dark-charcoal hover:tracking-wide transition-all cursor-pointer"
              id={`nav-item-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('connect')}
            className="group flex items-center gap-1.5 bg-dark-charcoal text-warm-beige hover:bg-dark-charcoal/90 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
            id="nav-connect-btn"
          >
            Let's Connect
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-dark-charcoal cursor-pointer p-1 rounded-md hover:bg-warm-clay/35 transition-colors"
          aria-label="Toggle Menu"
          id="mobile-nav-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[73px] bg-warm-beige z-40 px-8 py-10 flex flex-col space-y-8 animate-fade-in border-t border-warm-clay/50"
          id="mobile-nav-panel"
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-serif text-3xl font-light text-left text-dark-charcoal hover:text-soft-terracotta hover:pl-2 transition-all cursor-pointer"
              id={`mobile-nav-item-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('connect')}
            className="w-full flex items-center justify-between bg-dark-charcoal text-warm-beige tracking-widest uppercase font-semibold px-6 py-4 rounded-full text-xs cursor-pointer shadow-sm mt-4"
            id="mobile-nav-connect-btn"
          >
            Let's Connect
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}
