import React from "react";
import logo from "./logo512.png";

export default function ProjectsCard({ projects }) {
  const imgPath = "assets/";
  return (
    <div className="w-max flex flex-row">
      {projects.map((proj) => (
        <div className="flex flex-row h-min text-xs m-1 w-52 bg-neutral-800 rounded-lg">
          {/* <img className="w-1/3 h-1/3" src={proj.img} /> */}
          <div className="flex flex-col p-4">
            <img className="min-h-80" src={`${imgPath}foto.png`} />
            <p className="text-xl">{proj.title}</p>
            <p className="text-gray-400">{proj.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
