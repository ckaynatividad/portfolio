import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import ThingsCard from "../components/ThingsCard";
import { projectsData } from "../services/projectsData";
import { thingsData } from "../services/thingsData";

export default function Home() {
  return (
    <div className="justify-right text-white w-2/5 mt-10 m-auto">
      <h1 className="text-3xl font-bold my-5">Hi, I'm Charysma!</h1>
      <p className="mb-5">I'm a software developer.</p>

      <ThingsCard things={thingsData} />
      <ProjectsCard projects={projectsData} />
    </div>
  );
}
