import ProjectCard from './ProjectCard';

const SkeletonCard = () => (
  <div className="skeleton-card" aria-hidden="true" />
);

const ProjectGrid = ({ projects, loading, error }) => {
  if (loading) {
    return (
      <div className="loading-grid" aria-busy="true" aria-label="Loading projects">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state" role="alert">
        <h3>Couldn't load projects</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="projects-grid" role="list" aria-label="Project showcase">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
