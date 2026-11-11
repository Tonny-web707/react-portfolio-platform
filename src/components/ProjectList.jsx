import ProjectCard from "./ProjectCard";

function ProjectList({
  projects,
  searchTerm,
  setSearchTerm
}) {

  return (
    <section className="project-list">

      <div className="search-container">

        <input
          type="text"
          placeholder="Search Projects"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />

      </div>

      <div className="projects">

        {projects.length > 0 ? (

          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))

        ) : (

          <p className="no-projects">
            No projects found.
          </p>

        )}

      </div>

    </section>
  );
}

export default ProjectList;