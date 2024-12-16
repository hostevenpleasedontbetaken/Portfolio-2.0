import React from "react";
import { techstacklogos } from "../constants";

const LoopTechStack = () => {
  return (
    <div className="overflow-hidden flex">
      <ul className=" flex gap-2 animate-loop-scroll ">
        {[...techstacklogos, ...techstacklogos].map((tech) => (
          <li
            className="rounded-lg size-20 p-3 items-center justify-center flex "
            style={{ backgroundColor: `${tech.color}33` }}
          >
            <img src={tech.logo} alt={tech.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoopTechStack;
