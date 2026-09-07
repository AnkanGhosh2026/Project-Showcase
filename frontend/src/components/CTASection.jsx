const CTASection = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-card">
          <div className="cta-glow" />
          <div className="cta-inner">
            <p className="section-label" style={{ textAlign: 'center' }}>Let's Connect</p>
            <h2 className="cta-title">
              Have a Project in Mind?<br />
              <span className="gradient-text">Let's Build It Together.</span>
            </h2>
            <p className="cta-subtitle">
              Whether you need an AI agent, a full-stack web app, or an automation
              system — I'm always open to new challenges. Reach out and let's talk.
            </p>

            <div className="cta-actions">
              <a
                id="cta-email-btn"
                href="mailto:ankanghosh@example.com"
                className="cta-btn-primary"
              >
                ✉️ &nbsp;Get In Touch
              </a>
              <a
                id="cta-github-btn"
                href="https://github.com/AnkanGhosh2026?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-secondary"
              >
                🐙 &nbsp;View GitHub
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
