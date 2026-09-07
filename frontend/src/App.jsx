import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Chatbot from './components/Chatbot';

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
        const res = await fetch('https://project-showcase-uadg.onrender.com/api/projects');
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        
        const newProject = {
          id: 7,
          name: "Stubline - Event Management System",
          description: "Browse published events from organizers on STUBLINE. Open any event, pick your tickets, and log in only when you are ready to book.",
          category: "Web App",
          url: "https://event-management-system-delta-red.vercel.app/",
          emoji: "🎫",
          color: "#fbbf24"
        };
        
        setProjects([...data, newProject]);
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



        {/* 6 — CTA */}
        <CTASection />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
