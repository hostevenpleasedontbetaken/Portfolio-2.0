import React from "react";
import { techstacklogos } from "../constants";

const SmallTechList = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="grid grid-cols-2 grid-rows-6 gap-4">
        {techstacklogos.map((tech) => (
          <div className="flex items-center justify-center w-[7.5rem] p-1 rounded-xl row-span-1 col-span-1 bg-dark-4/25 border-dark-1 border">
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallTechList;
