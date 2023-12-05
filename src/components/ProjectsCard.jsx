import React from "react";

export default function ProjectsCard({ projects }) {
  return (
    <div>
      {projects.map((proj) => (
        <div className="flex text-xs my-4 bg-neutral-800 rounded-lg">
          {/* <img className="w-1/3 h-1/3" src={proj.img} /> */}
          <div className="flex flex-col p-4">
            <p className="text-xl">{proj.title}</p>
            <p className="text-gray-400">{proj.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
