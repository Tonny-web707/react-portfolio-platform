function ProjectCard({ project }) {

  return (
    <article className="project-card">

      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <span className="placeholder">×</span>
        )}
      </div>

      <div className="project-details">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

      </div>

    </article>
  );
}

export default ProjectCard;