const ProjectCard = ({ project }) => {
  // Derive badge colors from the project's accent color with opacity
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const cardStyle = {
    '--card-color': project.color,
    '--badge-bg': hexToRgba(project.color, 0.1),
    '--badge-border': hexToRgba(project.color, 0.25),
  };

  const handleVisit = (e) => {
    e.preventDefault();
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="project-card"
      style={cardStyle}
      role="article"
      aria-label={`Project: ${project.name}`}
    >
      {/* Top glow layer */}
      <div className="card-glow" style={{ '--card-color': project.color }} />

      {/* Header: icon + name */}
      <div className="card-header">
        <div
          className="card-icon-wrapper"
          aria-hidden="true"
          style={{ boxShadow: `0 4px 20px ${hexToRgba(project.color, 0.2)}` }}
        >
          {project.emoji}
        </div>
        <div className="card-header-text">
          <h2 className="card-name">{project.name}</h2>
          <span className="card-badge">{project.category}</span>
        </div>
      </div>

      {/* Description */}
      <p className="card-description">{project.description}</p>

      {/* CTA */}
      <div className="card-cta">
        <button
          id={`visit-project-${project.id}`}
          className="card-link-btn"
          onClick={handleVisit}
          aria-label={`Visit ${project.name} — opens in new tab`}
        >
          Visit Project <span className="card-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
