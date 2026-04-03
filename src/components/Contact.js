import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', industry: '', service: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Send to WordPress REST API endpoint (add this to functions.php)
      await axios.post('/wp-json/crossgate/v1/contact', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', industry: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.contact-item, .contact-form, .map-embed').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-700');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="h-20"></div>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">Start Your <em>China Journey</em></h2>
            <p className="section-desc mt-4">Fill out the form below or reach us directly. We respond to all inquiries within 24 hours.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="space-y-6">
                <div className="contact-item flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-dark/10 to-gold/5 flex items-center justify-center text-xl">📞</div>
                  <div><h4 className="font-semibold mb-1">Phone / WhatsApp</h4><p><a href="tel:+923335616263" className="text-gold-dark hover:underline">+92 333 5616263</a></p></div>
                </div>
                <div className="contact-item flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-dark/10 to-gold/5 flex items-center justify-center text-xl">📧</div>
                  <div><h4 className="font-semibold mb-1">Email</h4><p><a href="mailto:info@crossgatelegal.com" className="text-gold-dark hover:underline">info@crossgatelegal.com</a></p></div>
                </div>
                <div className="contact-item flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-dark/10 to-gold/5 flex items-center justify-center text-xl">🌐</div>
                  <div><h4 className="font-semibold mb-1">Website</h4><p><a href="https://www.crossgatelegal.com" target="_blank" rel="noreferrer" className="text-gold-dark hover:underline">crossgatelegal.com</a></p></div>
                </div>
                <div className="contact-item flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-dark/10 to-gold/5 flex items-center justify-center text-xl">📍</div>
                  <div><h4 className="font-semibold mb-1">Pakistan Office</h4><p>Islamabad, Pakistan</p></div>
                </div>
                <div className="contact-item flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-dark/10 to-gold/5 flex items-center justify-center text-xl">📍</div>
                  <div><h4 className="font-semibold mb-1">China Office</h4><p>Beijing, China</p></div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="map-embed mt-8 h-64 bg-gray-200 rounded-xl flex items-center justify-center border border-gold-darker/20">
                <div className="text-center">
                  <span className="text-3xl">🗺️</span>
                  <p className="text-gray-400 text-sm mt-2">Interactive map – embed Google Maps here</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="font-display text-2xl font-semibold mb-6">Request a Free Consultation</h3>
              {submitted && (
                <div className="bg-green-50 text-green-700 p-3 rounded-lg mb-4 text-sm">✓ Thank you! We'll contact you within 24 hours.</div>
              )}
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div><label className="block text-sm font-semibold mb-1">Full Name *</label><input type="text" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none" onChange={handleChange} /></div>
                  <div><label className="block text-sm font-semibold mb-1">Email Address *</label><input type="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none" onChange={handleChange} /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div><label className="block text-sm font-semibold mb-1">Phone / WhatsApp *</label><input type="tel" name="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none" onChange={handleChange} /></div>
                  <div><label className="block text-sm font-semibold mb-1">Company Name</label><input type="text" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none" onChange={handleChange} /></div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">Industry</label>
                  <select name="industry" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none" onChange={handleChange}>
                    <option value="">Select your industry</option>
                    <option>Textile / Apparel Export</option><option>Food Export</option><option>Minerals / Mining</option>
                    <option>Leather Goods</option><option>E-Commerce</option><option>Manufacturing</option>
                    <option>IT / Digital Services</option><option>Consultancy</option><option>Logistics & Shipping</option><option>Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">Service Required</label>
                  <select name="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none" onChange={handleChange}>
                    <option value="">What do you need help with?</option>
                    <option>Full Business Registration</option><option>Representative Office Setup</option>
                    <option>WFOE Registration</option><option>Bank Account Opening</option><option>Visa Assistance</option>
                    <option>Compliance & Reporting</option><option>Market Research</option><option>Business Matchmaking</option><option>Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-1">Tell Us About Your Project</label>
                  <textarea name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/20 focus:border-gold outline-none" placeholder="Briefly describe your business goals and what you're looking to achieve in China..." onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn-primary w-full justify-center">Submit Inquiry →</button>
                <p className="text-xs text-gray-400 text-center mt-4">We respect your privacy. Your information will never be shared with third parties.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;