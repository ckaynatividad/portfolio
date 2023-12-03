import React from "react";

export default function ThingsCard({ things }) {
  return (
    <div className="flex flex-row w-2/5 flex-wrap">
      {things.map((thing) => (
        <div>
          <p className="font-black w-20">{thing.title}</p>
          {thing.card}
        </div>
      ))}
    </div>
  );
}
