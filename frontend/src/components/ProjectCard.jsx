import { ArrowRight, ExternalLink } from 'lucide-react';

const projectImages = {
  "Lead Gen Automation Agent": "/images/leadgen.png",
  "AI Crop Disease Detection": "/images/cropsense.png",
  "Pre Sales AI Agent": "/images/presales.png",
  "Travel Content Automation": "/images/travelmuse.jpg",
  "EduBridge": "/images/edubridge.png",
  "Kosher Stay": "/images/kosherstay.png",
  "Stubline - Event Management System": "/images/event-management.png"
};

const ProjectCard = ({ project }) => {
  const handleVisit = (e) => {
    e.preventDefault();
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  const imageUrl = projectImages[project.name] || "/images/kosherstay.png";

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      aria-label={`Project: ${project.name}`}
    >
      <div className="card-image-banner" style={{
        height: '160px',
        width: '100%',
        marginBottom: '24px',
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <img src={imageUrl} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
        <div style={{ position: 'absolute', bottom: '16px', left: '16px', fontSize: '32px' }}>{project.emoji}</div>
      </div>

      <span className="card-badge">{project.category}</span>
      <h2 className="card-name">{project.name}</h2>
      <p className="card-description">{project.description}</p>

      <div className="card-cta">
        <span className="card-link-btn">
          Explore Project
        </span>
        <div className="card-arrow">
          <ExternalLink size={16} />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
