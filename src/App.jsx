import { useState } from "react";
import "./App.css";

import Sidebar from "./Components/Sidebar/Sidebar";
import NewProject from "./Components/Sidebar/NewProject";
import NoProjectSelected from "./Components/Sidebar/NoProjectSelected";
import ProjectDetails from "./Components/Sidebar/ProjectDetails";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: crypto.randomUUID(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <NoProjectSelected
      onStartAddProject={handleStartAddProject}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (selectedProject) {
    content = (
      <ProjectDetails
        project={selectedProject}
        onDelete={handleDeleteProject}
      />
    );
  }

  return (
    <main className="flex h-screen gap-8">
      <Sidebar
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
      />

      {content}
    </main>
  );
}

export default App;