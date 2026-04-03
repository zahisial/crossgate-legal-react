import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.about-feature, .team-card').forEach(el => {
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
          <div className="section-label text-gold-light">About Us</div>
          <h2 className="section-title text-white">Your Bridge Between <em>Pakistan & China</em></h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">Cross Gate Legal is a specialist cross-border legal and business consultancy firm, bridging the gap between Pakistani enterprises and Chinese markets.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gold-dark to-gold-darker rounded-2xl aspect-[4/3] flex items-center justify-center">
                <span className="text-6xl">🤝</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black border border-gold-darker/30 rounded-xl p-4 shadow-xl">
                <div className="font-display text-2xl text-gold-light font-bold">15+</div>
                <div className="text-white/60 text-xs uppercase">Years of Expertise</div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold mb-4">Regional Expertise, <em className="text-gold not-italic">Pan-Asian Reach</em></h2>
              <p className="text-gray-600 mb-4">Cross Gate Legal was founded with a singular mission: to simplify and streamline the process of doing business across Asian borders.</p>
              <p className="text-gray-600 mb-6">Our team combines deep legal expertise with practical business knowledge, ensuring that your market entry or expansion is efficient, compliant, and positioned for success.</p>
              <div className="space-y-4">
                <div className="about-feature flex gap-4 p-4 bg-gold-darker/5 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-white">⚖️</div>
                  <div><h4 className="font-semibold">Legal Compliance</h4><p className="text-sm text-gray-500">Full regulatory compliance with Chinese business laws.</p></div>
                </div>
                <div className="about-feature flex gap-4 p-4 bg-gold-darker/5 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-white">🌐</div>
                  <div><h4 className="font-semibold">Bilingual Team</h4><p className="text-sm text-gray-500">Native Urdu, English, and Mandarin speakers.</p></div>
                </div>
                <div className="about-feature flex gap-4 p-4 bg-gold-darker/5 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-white">🏢</div>
                  <div><h4 className="font-semibold">On-Ground Presence</h4><p className="text-sm text-gray-500">Physical offices in both Pakistan and China.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="section-label">Our Team</div>
          <h2 className="section-title">Meet the <em>Experts</em></h2>
          <p className="section-desc mt-4">Our seasoned professionals bring decades of combined experience.</p>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { initials: "HA", name: "Hassan Ali", role: "Managing Partner", desc: "15+ years in cross-border legal practice." },
              { initials: "LW", name: "Li Wei", role: "Senior Legal Advisor", desc: "Chinese corporate law specialist." },
              { initials: "FK", name: "Fatima Khan", role: "Compliance Director", desc: "Expert in international compliance." },
              { initials: "ZC", name: "Zhang Chen", role: "Business Development", desc: "Connects Pakistani businesses with Chinese partners." },
            ].map((m, i) => (
              <div key={i} className="team-card text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-white text-2xl font-display font-bold mb-4">{m.initials}</div>
                <h3 className="font-display text-lg font-semibold">{m.name}</h3>
                <div className="text-gold-dark text-sm mb-2">{m.role}</div>
                <p className="text-gray-500 text-xs">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;