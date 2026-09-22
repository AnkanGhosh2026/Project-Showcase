import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Chatbot from './components/Chatbot';

import ProjectGrid from './components/ProjectGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ProgressSection from './components/ProgressSection';

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

        // Update EduBridge description locally
        const updatedData = data.map(project => {
          if (project.name === "EduBridge") {
            return {
              ...project,
              description: "A modern, colourful website for a company that helps Indian students apply to US colleges and universities."
            };
          }
          return project;
        });

        const newProject = {
          id: 7,
          name: "Stubline - Event Management System",
          description: "Browse published events from organizers on STUBLINE. Open any event, pick your tickets, and log in only when you are ready to book.",
          category: "Web App",
          url: "https://event-management-system-delta-red.vercel.app/",
          emoji: "🎫",
          color: "#fbbf24"
        };

        setProjects([...updatedData, newProject]);
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
        
        {/* Journey/Progress Section */}
        <ProgressSection />

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
          <ProjectGrid 
            projects={projects.filter(p => ![
              "EduBridge",
              "Kosher Stay",
              "Stubline - Event Management System"
            ].includes(p.name))} 
            loading={loading} 
            error={error} 
          />
        </section>

        {/* Client Demo */}
        <section className="projects-section" id="client-demo">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Showcase</p>
              <h2 className="section-title">Client <span className="gradient-text">Demo</span></h2>
              <p className="section-subtitle">
                A curated selection of client projects and proof of concepts.
              </p>
            </div>
          </div>
          <ProjectGrid 
            projects={projects.filter(p => [
              "EduBridge",
              "Kosher Stay",
              "Stubline - Event Management System"
            ].includes(p.name))} 
            loading={loading} 
            error={error} 
          />
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
