import { useState } from "react";

import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import "./styles/App.css";

function App() {

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "Description of the project",
      image: ""
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of the project",
      image: ""
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of the project",
      image: ""
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects([
      ...projects,
      {
        ...newProject,
        id: Date.now()
      }
    ]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">

      <header className="app-header">
        <h2>Personal Project Showcase App</h2>
      </header>

      <main>

        <ProjectForm addProject={addProject} />

        <ProjectList
          projects={filteredProjects}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

      </main>

    </div>
  );
}

export default App;