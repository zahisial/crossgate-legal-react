import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  { q: "How long does it take to register a business in China?", a: "The timeline varies depending on the business structure. A Representative Office (RO) typically takes 4–8 weeks, while a Wholly Foreign-Owned Enterprise (WFOE) may take 8–12 weeks. We work to expedite the process through our established government relationships and streamlined documentation procedures." },
  { q: "What documents do I need from Pakistan?", a: "You'll typically need your company's certificate of incorporation, articles of association, bank reference letter, audited financial statements, and a board resolution authorising the China operations. All documents must be notarised, attested by the Ministry of Foreign Affairs, and authenticated by the Chinese Embassy. We guide you through every step." },
  { q: "What types of business structures can I set up in China?", a: "The most common options for Pakistani businesses are: Representative Office (RO) for market research and liaison activities, Wholly Foreign-Owned Enterprise (WFOE) for full commercial operations, and Joint Venture (JV) for partnerships with Chinese companies. We help you choose the best structure based on your business goals." },
  { q: "Do I need to be physically present in China for registration?", a: "Not necessarily. We can handle most of the registration process remotely on your behalf through our power of attorney arrangement. However, certain steps like bank account opening and visa interviews may require your physical presence. We'll coordinate the optimal timing for any required visits." },
  { q: "What are the ongoing costs after registration?", a: "Ongoing costs include office rent, employee salaries and social insurance, monthly bookkeeping and tax filings, annual audit, and business licence renewal fees. We provide detailed cost projections during the planning phase and offer competitive monthly compliance packages to manage these requirements affordably." },
  { q: "Can you help with CPEC-related business opportunities?", a: "Absolutely. We have specific expertise in CPEC-related ventures and can help you navigate the special policies, incentives, and opportunities available under the China-Pakistan Economic Corridor framework. This includes special economic zone benefits and preferential trade terms." },
  { q: "What languages does your team support?", a: "Our team is fluent in Urdu, English, and Mandarin Chinese. We provide full translation and interpretation support for all business communications, legal documents, and meetings, ensuring zero communication barriers between you and Chinese entities." },
  { q: "How do you charge for your services?", a: "We offer flexible pricing models including fixed-fee packages for registration services, monthly retainers for ongoing compliance and support, and project-based pricing for specific needs. Contact us for a free consultation and customised quote based on your requirements." }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
    document.querySelectorAll('.faq-item').forEach(el => {
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
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Frequently Asked <em>Questions</em></h2>
            <p className="section-desc mt-4">Answers to the most common questions about setting up your business in China through Cross Gate Legal.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-2">
            {faqData.map((item, idx) => (
              <div key={idx} className="faq-item border-b border-gray-200">
                <button
                  className="w-full text-left py-5 flex justify-between items-center font-display text-lg font-semibold text-gray-900 hover:text-gold-dark transition"
                  onClick={() => toggleFaq(idx)}
                >
                  {item.q}
                  <span className="text-gold-dark text-2xl">{openIndex === idx ? '−' : '+'}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-black to-dark-800 rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="relative">
              <h2 className="font-display text-2xl md:text-3xl text-white font-semibold mb-4">Still Have Questions?</h2>
              <p className="text-white/60 max-w-xl mx-auto mb-8">Our team is ready to provide personalised answers to your specific business situation.</p>
              <Link to="/contact" className="btn-primary">Ask Us Anything →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;