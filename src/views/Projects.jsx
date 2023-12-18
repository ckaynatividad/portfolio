import React from "react";
import { Collapsible } from "../components/Collapsible";
import ProjectsCard from "../components/ProjectsCard";
import { projectsData } from "../services/projectsData";

export default function Projects() {
  return (
    <div className="h-full w-max">
      <Collapsible label={"Projects"}>
        <ProjectsCard projects={projectsData} />
      </Collapsible>
    </div>
  );
}
