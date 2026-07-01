import React from "react";
import NoProjectImage from "../../assets/CreateNew.webp";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center text-center">
      <img
        src={NoProjectImage}
        alt="Notebook with project planning illustration"
        className="mx-auto h-16 w-16 object-contain"
      />

      <h2 className="my-4 text-2xl font-bold text-stone-500">
        No Project Selected
      </h2>

      <p className="mb-2 text-stone-400">
        Select a project or get started with a new one.
      </p>

      <Button
        className="mt-8"
        onClick={onStartAddProject}
      >
        Create New Project
      </Button>
    </section>
  );
}