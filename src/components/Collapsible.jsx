import { useState } from "react";
import Projects from "../views/Projects";

export const Collapsible = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button className="text-2xl font-black" onClick={toggle}>
        {props.label}
      </button>
      <div>
        <div
          className={
            open
              ? "h-200 bg-yellow-900"
              : "h-0 overflow-hidden transition-[height ease .09s]"
          }
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};
