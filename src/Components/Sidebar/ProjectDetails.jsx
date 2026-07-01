import React from "react";
import Button from "./Button";

export default function ProjectDetails({ project, onDelete }) {
  return (
    <div className="mt-16 w-[35rem]">
      <div className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600">
            {project.title}
          </h1>

          <Button
            className="bg-red-600 hover:bg-red-700"
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>

        <p className="mt-4 text-stone-400">
          {project.dueDate}
        </p>

        <p className="mt-4 whitespace-pre-wrap text-stone-600">
          {project.description}
        </p>
      </div>
    </div>
  );
}