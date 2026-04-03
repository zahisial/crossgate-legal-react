import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const industries = [
  { icon: "🧵", name: "Exporters", desc: "Textile, food, minerals, leather — we help Pakistani exporters access Chinese distribution networks." },
  { icon: "🛒", name: "E-Commerce", desc: "Cross-border e-commerce setup, platform registration, and compliance for online sellers." },
  { icon: "🏭", name: "Manufacturers", desc: "Manufacturing partnerships, JV setups, and factory registration in Chinese industrial zones." },
  { icon: "💻", name: "Service Providers", desc: "IT, digital, and consultancy firms expanding their service delivery into the Chinese market." },
  { icon: "🚢", name: "Logistics & Shipping", desc: "Freight, warehousing, and supply chain companies establishing Chinese operational hubs." }
];

const opportunities = [
  { icon: "📈", title: "World's Largest Market", desc: "Access to 1.4 billion consumers and the world's second-largest economy." },
  { icon: "🛤️", title: "CPEC Advantage", desc: "Leverage the China-Pakistan Economic Corridor for preferential trade terms." },
  { icon: "🏗️", title: "Manufacturing Hub", desc: "Tap into China's unmatched manufacturing ecosystem for sourcing and production." },
  { icon: "🔬", title: "Innovation Ecosystem", desc: "Connect with cutting-edge technology, R&D capabilities, and innovative business practices." },
  { icon: "🌐", title: "Gateway to Asia", desc: "Use China as your strategic base to expand into broader Asian and global markets." },
  { icon: "💰", title: "Investment Incentives", desc: "Take advantage of special economic zones, tax incentives, and subsidies available to foreign businesses." }
];

const Industries = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.industry-card, .service-card').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-700');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="h-20"></div>
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="section-label text-gold-light">Industries We Serve</div>
          <h2 className="section-title text-white">Sector-Specific <em>Expertise</em></h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">We work with businesses across a wide range of industries, providing specialised guidance tailored to each sector's regulatory requirements.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((ind, idx) => (
              <div key={idx} className="industry-card bg-white/5 border border-gold-darker/20 rounded-xl p-6 text-center hover:bg-gold-darker/10 transition-all hover:-translate-y-1">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-display text-lg font-semibold text-white mb-1">{ind.name}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label">Why China?</div>
            <h2 className="section-title">The <em>Opportunity</em> Awaits</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon">{opp.icon}</div>
                <h3 className="font-display text-lg font-semibold mb-2">{opp.title}</h3>
                <p className="text-gray-500 text-sm">{opp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-black to-dark-800 rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="relative">
              <h2 className="font-display text-2xl md:text-3xl text-white font-semibold mb-4">Which Industry Are You In?</h2>
              <p className="text-white/60 max-w-xl mx-auto mb-8">Tell us about your sector and we'll outline the specific requirements and opportunities for your China expansion.</p>
              <Link to="/contact" className="btn-primary">Get Industry-Specific Advice →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;