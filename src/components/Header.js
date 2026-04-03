import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur shadow-lg' : 'bg-black/80 backdrop-blur'
    } border-b border-gold-darker/30`}>
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light mask-logo"></div>
          <div className="hidden sm:block">
            <span className="font-display text-gold-light text-lg font-semibold">Cross Gate Legal</span>
            <span className="block text-gold text-xs uppercase tracking-wider">Regional Expertise, Pan-Asian Reach</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={({isActive}) => `nav-link px-4 py-2 text-sm font-medium rounded-md transition ${isActive ? 'text-gold-light bg-gold-darker/10' : 'text-white/70 hover:text-gold-light'}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `nav-link px-4 py-2 text-sm font-medium rounded-md transition ${isActive ? 'text-gold-light bg-gold-darker/10' : 'text-white/70 hover:text-gold-light'}`}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => `nav-link px-4 py-2 text-sm font-medium rounded-md transition ${isActive ? 'text-gold-light bg-gold-darker/10' : 'text-white/70 hover:text-gold-light'}`}>Services</NavLink>
          <NavLink to="/industries" className={({isActive}) => `nav-link px-4 py-2 text-sm font-medium rounded-md transition ${isActive ? 'text-gold-light bg-gold-darker/10' : 'text-white/70 hover:text-gold-light'}`}>Industries</NavLink>
          <NavLink to="/faq" className={({isActive}) => `nav-link px-4 py-2 text-sm font-medium rounded-md transition ${isActive ? 'text-gold-light bg-gold-darker/10' : 'text-white/70 hover:text-gold-light'}`}>FAQ</NavLink>
          <Link to="/contact" className="ml-2 bg-gradient-to-r from-gold-dark to-gold text-white px-5 py-2 rounded-md text-sm font-semibold shadow-md hover:shadow-lg transition">Get Started</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-md focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gold-light transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gold-light my-1.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gold-light transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-gold-darker/30 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'
        }`}>
          <div className="flex flex-col p-5 space-y-3">
            <NavLink to="/" className="px-4 py-3 text-white/80 hover:text-gold-light hover:bg-gold-darker/10 rounded-md transition" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="px-4 py-3 text-white/80 hover:text-gold-light hover:bg-gold-darker/10 rounded-md transition" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/services" className="px-4 py-3 text-white/80 hover:text-gold-light hover:bg-gold-darker/10 rounded-md transition" onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink to="/industries" className="px-4 py-3 text-white/80 hover:text-gold-light hover:bg-gold-darker/10 rounded-md transition" onClick={() => setIsOpen(false)}>Industries</NavLink>
            <NavLink to="/faq" className="px-4 py-3 text-white/80 hover:text-gold-light hover:bg-gold-darker/10 rounded-md transition" onClick={() => setIsOpen(false)}>FAQ</NavLink>
            <Link to="/contact" className="mt-2 bg-gradient-to-r from-gold-dark to-gold text-white px-5 py-3 rounded-md text-center font-semibold" onClick={() => setIsOpen(false)}>Get Started</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;