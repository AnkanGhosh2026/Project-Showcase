const HeroSection = ({ projectCount }) => {
  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Available for new projects
      </div>

      <h1 className="hero-title">
        My Work &amp; <br />
        <span className="gradient-text">Creations</span>
      </h1>

      <p className="hero-subtitle">
        Explore AI agents, automation systems, and web applications I've built —
        each solving real-world problems with cutting-edge technology.
      </p>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-number">{projectCount || 6}</div>
          <div className="hero-stat-label">Projects</div>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <div className="hero-stat-number">3+</div>
          <div className="hero-stat-label">AI Agents</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
