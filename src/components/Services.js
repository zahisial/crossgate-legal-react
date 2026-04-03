import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const allServices = [
  { icon: "📄", title: "Document Preparation & Legalisation", desc: "Complete preparation and legalisation of all business documents for Chinese authority submissions." },
  { icon: "🏛️", title: "RO Registration with Chinese Government", desc: "Full-service Representative Office registration with all relevant Chinese government departments." },
  { icon: "📋", title: "Official Business Registration Certificates", desc: "Procurement of all required business licences and registration certificates." },
  { icon: "📍", title: "Registered Office Address in China", desc: "Premium registered office addresses in key Chinese business cities." },
  { icon: "🏦", title: "Corporate Bank Account Opening", desc: "Guided corporate account opening with major Chinese banks like ICBC, BOC, and CCB." },
  { icon: "✈️", title: "Visa Assistance for Representatives", desc: "Work visa (Z-visa), business visa (M-visa), and residence permit processing." },
  { icon: "📊", title: "Monthly Compliance & Reporting", desc: "Ongoing monthly tax filings, financial reporting, and regulatory compliance management." },
  { icon: "🗣️", title: "Translation & Interpretation Support", desc: "Professional Urdu-English-Mandarin translation for business documents and meetings." },
  { icon: "👥", title: "Hiring Local Chinese Staff", desc: "Recruitment, labour contracts, social insurance registration, and HR compliance." },
  { icon: "🧭", title: "Local Market Guidance", desc: "Market research, competitive analysis, and strategic guidance for specific Chinese market sectors." },
  { icon: "🤝", title: "Business Matchmaking", desc: "Connect with vetted Chinese suppliers, manufacturers, distributors, and partners." },
  { icon: "🔒", title: "IP & Trademark Protection", desc: "Register and protect your intellectual property under Chinese law." }
];

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.service-card, .process-step').forEach(el => {
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
          <div className="section-label text-gold-light">Our Services</div>
          <h2 className="section-title text-white">Everything You Need to <em>Succeed in China</em></h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">From initial registration to ongoing operations, our comprehensive service suite covers every aspect of your China business journey.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((s, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label">Our Process</div>
            <h2 className="section-title">How We <em>Work</em></h2>
            <p className="section-desc mt-4">A streamlined four-step process to get your business operating in China.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Consultation", desc: "Free initial meeting to understand your business objectives, timeline, and specific requirements." },
              { num: "2", title: "Strategy & Planning", desc: "We develop a tailored market entry strategy, identifying the optimal business structure." },
              { num: "3", title: "Execution", desc: "Our team handles all documentation, registrations, account openings, and legal formalities." },
              { num: "4", title: "Ongoing Support", desc: "Continuous compliance management, reporting, and advisory services." }
            ].map((step, i) => (
              <div key={i} className="process-step text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gold-dark to-gold text-white flex items-center justify-center font-display text-xl font-bold mb-4 shadow-md">{step.num}</div>
                <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-black to-dark-800 rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="relative">
              <h2 className="font-display text-2xl md:text-3xl text-white font-semibold mb-4">Need a Custom Solution?</h2>
              <p className="text-white/60 max-w-xl mx-auto mb-8">Every business is unique. Let's discuss a tailored package that fits your specific needs and budget.</p>
              <Link to="/contact" className="btn-primary">Talk to an Expert →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;