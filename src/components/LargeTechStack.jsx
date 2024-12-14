import React from "react";
import { techstacklogos } from "../constants";

const LargeTechStack = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {techstacklogos.map((tech) => (
        <div className="flex gap-5 p-2.5 rounded-xl row-span-1 col-span-1 bg-dark-4 hover:bg-dark-1 hover:bg-opacity-50 transition-colors duration-200">
          <div
            className="p-3 rounded-lg w-fit"
            style={{ backgroundColor: `${tech.color}33` }}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="size-8"
              width="1000"
              height="1000"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium">{tech.name}</h4>
            <p className="text-dark-200/70 text-sm">{tech.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LargeTechStack;
