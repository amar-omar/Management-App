import React from "react";
import Button from "./Button";

export default function Sidebar({
  onStartAddProject,
  onSelectProject,
  projects,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/4 h-screen rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50">
      <h2 className="mb-8 text-2xl font-bold uppercase">
        Your Projects
      </h2>

      <Button onClick={onStartAddProject}>
        + Add Project
      </Button>

      <ul className="mt-8">
        {projects.map((project) => {
          const isSelected = project.id === selectedProjectId;

          return (
            <li key={project.id}>
              <button
                type="button"
                onClick={() => onSelectProject(project.id)}
                className={`my-1 w-full rounded-sm px-2 py-1 text-left transition-colors ${
                  isSelected
                    ? "bg-stone-800 text-stone-200"
                    : "text-stone-400 hover:bg-stone-800 hover:text-stone-200"
                }`}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}