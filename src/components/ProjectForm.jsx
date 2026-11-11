import { useState } from "react";

function ProjectForm({ addProject }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {

    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    addProject({
      title: title,
      description: description,
      image: ""
    });

    setTitle("");
    setDescription("");
  }

  return (
    <section className="form-section">

      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}>

        <label>Title</label>

        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label>Description</label>

        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <button type="submit">
          Add
        </button>

      </form>

    </section>
  );
}

export default ProjectForm;