const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">Building Intelligent Systems<br />That <span className="gradient-text">Actually Work</span></h2>
        </div>

        <div className="about-grid">
          {/* Left — narrative */}
          <div className="about-text">
            <p className="about-paragraph">
              I'm <strong>Ankan Ghosh</strong> — an AI engineer and full-stack developer
              focused on building automation agents, computer-vision pipelines, and
              intelligent web applications that solve real business problems.
            </p>
            <p className="about-paragraph">
              My work lives at the intersection of <em>modern LLMs, FastAPI backends,
              and React frontends</em>. I don't just prototype — I ship production-grade
              systems that are live, deployed, and handling real users right now.
            </p>
            <p className="about-paragraph">
              Whether it's an AI agent that qualifies leads overnight while you sleep,
              a computer-vision model that catches crop disease before it spreads, or an
              education platform that adapts to every learner — I obsess over the details
              that make technology feel effortless.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <div>
                  <strong>Production First</strong>
                  <p>Every project in this portfolio is live and accessible — no mockups.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤖</span>
                <div>
                  <strong>AI-Native Approach</strong>
                  <p>LLMs, computer vision, and automation are core tools, not afterthoughts.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <div>
                  <strong>Fast Iterations</strong>
                  <p>From idea to deployed product in days, not months.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — stats cards */}
          <div className="about-stats-col">
            <div className="stat-card">
              <div className="stat-card-number gradient-text">6+</div>
              <div className="stat-card-label">Live Projects</div>
              <div className="stat-card-desc">Deployed across Render, Vercel & custom domains</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-number gradient-text">3+</div>
              <div className="stat-card-label">AI Agents Built</div>
              <div className="stat-card-desc">Lead generation, pre-sales, content automation</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-number gradient-text">4</div>
              <div className="stat-card-label">Domains Covered</div>
              <div className="stat-card-desc">AgriTech · EdTech · SaaS · Hospitality</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-number gradient-text">∞</div>
              <div className="stat-card-label">Problems to Solve</div>
              <div className="stat-card-desc">Always looking for the next hard challenge</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
