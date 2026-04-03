import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  { icon: "📄", title: "Document Preparation & Legalisation", desc: "Complete handling of all documentation required for business registration, legalised and authenticated for Chinese authorities." },
  { icon: "🏛️", title: "RO Registration", desc: "Full registration of your Representative Office with Chinese government entities." },
  { icon: "📋", title: "Business Certificates", desc: "Obtaining all official business registration certificates required to legally operate in China." },
  { icon: "📍", title: "Registered Office Address", desc: "Providing a compliant registered office address in major Chinese business hubs." },
  { icon: "🏦", title: "Corporate Bank Account", desc: "Assistance in opening corporate bank accounts with major Chinese banks." },
  { icon: "✈️", title: "Visa Assistance", desc: "Complete visa processing support for company representatives." },
];

const testimonials = [
  { initials: "AK", name: "Ahmed Khan", role: "CEO, PakTex Exports", text: "Cross Gate Legal made our China market entry seamless. Their local expertise saved us months of potential delays." },
  { initials: "SR", name: "Sarah Rashid", role: "Director, DigiServe Pakistan", text: "The compliance and reporting service is exceptional. They handle everything proactively." },
  { initials: "MH", name: "Muhammad Hussain", role: "Founder, Hussain Logistics", text: "From bank account setup to hiring local staff, they guided us through every step." },
];

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.service-card, .testimonial-card').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-700');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center bg-black relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-radial from-gold-darker/15 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-gold-darker/15 border border-gold-darker/30 px-5 py-2 rounded-full text-xs text-gold-light uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                Cross-Border Legal Specialists
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Set-up or Expand Your Business <em className="text-gold not-italic">in China</em>
              </h1>
              <p className="text-white/70 text-lg mt-6 max-w-md">Your comprehensive cross-border legal representatives. We handle every aspect of establishing and operating your business presence in China — from registration to ongoing compliance.</p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact" className="btn-primary">Free Consultation →</Link>
                <Link to="/services" className="btn-outline">Our Services</Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-black/60 backdrop-blur border border-gold-darker/30 rounded-2xl p-6 md:p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center"><div className="font-display text-3xl md:text-4xl text-gold-light font-bold">500+</div><div className="text-white/50 text-xs uppercase mt-1">Businesses Served</div></div>
                  <div className="text-center"><div className="font-display text-3xl md:text-4xl text-gold-light font-bold">15+</div><div className="text-white/50 text-xs uppercase mt-1">Years Experience</div></div>
                  <div className="text-center"><div className="font-display text-3xl md:text-4xl text-gold-light font-bold">98%</div><div className="text-white/50 text-xs uppercase mt-1">Success Rate</div></div>
                  <div className="text-center"><div className="font-display text-3xl md:text-4xl text-gold-light font-bold">12</div><div className="text-white/50 text-xs uppercase mt-1">Asian Markets</div></div>
                </div>
                <div className="border-t border-gold-darker/30 my-6"></div>
                <div className="text-center font-display text-gold-light italic">"Regional Expertise, Pan-Asian Reach"</div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-gold-dark to-gold rounded-xl flex items-center justify-center text-2xl shadow-xl animate-float-bounce">🌏</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Comprehensive Office <em>Set-up Services</em></h2>
            <p className="section-desc mt-4">End-to-end support for Pakistani businesses looking to establish and grow their operations in China.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-dark">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-black to-gold-light rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-gold-darker/10 via-transparent"></div>
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-4">Ready to Expand Into China?</h2>
              <p className="text-white/60 max-w-xl mx-auto mb-8">Get a free consultation to discuss your business goals and how we can help you establish a presence in the Chinese market.</p>
              <Link to="/contact" className="btn-primary">Schedule a Call →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label">Client Feedback</div>
            <h2 className="section-title">Trusted by <em>Industry Leaders</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-4xl text-gold-light mb-2">"</div>
                <p className="text-gray-600 italic mb-4">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-white font-bold">{t.initials}</div>
                  <div><div className="font-semibold text-sm">{t.name}</div><div className="text-xs text-gray-400">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;