import React from "react";
import { Link } from "react-router-dom";
import ProjectsCard from "../components/ProjectsCard";
import ThingsCard from "../components/ThingsCard";
import { projectsData } from "../services/projectsData";
import { thingsData } from "../services/thingsData";
import Projects from "./Projects";
import Websites from "./Websites";

export default function Home() {
  return (
    <div className="justify-right text-white w-2/5 mt-10 m-auto">
      <h1 className="text-3xl font-bold my-5">Hi, I'm Charysma!</h1>

      <p className="mb-5">
        I'm a software developer. Sometimes I make{" "}
        <a className="underline" href="">
          art
        </a>
        .
      </p>
      <div className="flex flex-col">
        <Projects />
        <Websites />
      </div>
    </div>
  );
}
