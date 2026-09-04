import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProcessSection from './components/ProcessSection';
import ProjectGrid from './components/ProjectGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        setError(err.message || 'Failed to load projects.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="app">
      {/* Animated background orbs */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <Navbar />

      <main>
        {/* 1 — Hero */}
        <HeroSection projectCount={projects.length || 6} />

        {/* 2 — About */}
        <AboutSection />

        {/* 3 — Skills */}
        <SkillsSection />

        {/* 4 — Projects */}
        <section className="projects-section" id="projects">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Portfolio</p>
              <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
              <p className="section-subtitle">
                Each project below is live and accessible — click to explore them.
              </p>
            </div>
          </div>
          <ProjectGrid projects={projects} loading={loading} error={error} />
        </section>

        {/* 5 — Process */}
        <ProcessSection />

        {/* 6 — CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
