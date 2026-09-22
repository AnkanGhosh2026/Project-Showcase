import { Rocket } from 'lucide-react';

const CTASection = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">
        <h2 className="cta-title">Ready to build something <span className="gradient-text">extraordinary?</span></h2>
        <p className="cta-subtitle">
          Whether you need a custom AI agent, a scalable web application, or automated data pipelines, I'm here to help turn your ideas into reality.
        </p>
        <button className="btn-primary" style={{ margin: '0 auto' }} onClick={() => scrollTo('contact')}>
          <Rocket size={18} /> Start a Project
        </button>
      </div>
    </section>
  );
};

export default CTASection;
