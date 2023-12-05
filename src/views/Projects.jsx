import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import { projectsData } from "../services/projectsData";

export default function Projects() {
  return (
    <div className="h-full">
      <p className="text-2xl font-black">Projects</p>
      <ProjectsCard projects={projectsData} />
    </div>
  );
}
