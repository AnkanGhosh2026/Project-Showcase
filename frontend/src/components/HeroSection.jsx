import { ArrowRight, Terminal } from 'lucide-react';

const HeroSection = ({ projectCount }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="top">
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Available for new opportunities
      </div>

      <h1 className="hero-title">
        Architecting <span className="gradient-text">Digital Experiences</span> <br />& AI Systems
      </h1>

      <p className="hero-subtitle">
        I engineer sophisticated web applications, autonomous AI agents, and robust data infrastructure that push the boundaries of what's possible.
      </p>

      <div className="hero-actions">
        <button className="btn-primary" onClick={() => scrollTo('projects')}>
          Explore Portfolio <ArrowRight size={18} />
        </button>
        <button className="btn-secondary" onClick={() => scrollTo('contact')}>
          <Terminal size={18} /> Let's Talk
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
