import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white/60 pt-16 pb-0 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-light mask-logo"></div>
              <span className="font-display text-gold-light text-lg font-semibold">Cross Gate Legal</span>
            </div>
            <p className="text-sm leading-relaxed">Your comprehensive cross-border legal representatives. Bridging Pakistani businesses to the Chinese market with expertise and trust.</p>
          </div>
          <div>
            <h4 className="text-gold-light text-xs uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-gold-light transition">Business Registration</Link></li>
              <li><Link to="/services" className="hover:text-gold-light transition">Compliance & Reporting</Link></li>
              <li><Link to="/services" className="hover:text-gold-light transition">Visa Assistance</Link></li>
              <li><Link to="/services" className="hover:text-gold-light transition">Bank Account Opening</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold-light text-xs uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gold-light transition">About Us</Link></li>
              <li><Link to="/industries" className="hover:text-gold-light transition">Industries</Link></li>
              <li><Link to="/faq" className="hover:text-gold-light transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold-light transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold-light text-xs uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+923335616263" className="hover:text-gold-light transition">+92 333 5616263</a></li>
              <li><a href="mailto:info@crossgatelegal.com" className="hover:text-gold-light transition">info@crossgatelegal.com</a></li>
              <li><a href="https://www.crossgatelegal.com" target="_blank" rel="noreferrer" className="hover:text-gold-light transition">crossgatelegal.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 pb-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <span>© 2026 Cross Gate Legal. All Rights Reserved.</span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold-darker/20 transition">in</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold-darker/20 transition">f</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold-darker/20 transition">𝕏</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;