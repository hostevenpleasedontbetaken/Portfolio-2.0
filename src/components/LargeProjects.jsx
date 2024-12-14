import React from "react";
import CardType from "./CardType";
import ProjectCard from "./ProjectCard";

const LargeProjects = (isVisible) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 ">
      <ProjectCard isVisible={isVisible}>
        <div className="flex-col h-full w-full space-y-3 py-4">
          <div className="flex justify-center">
            <div className="px-10">
              <img
                className="md:w-[30rem] md:h-[18rem] w-[20rem] h-[12rem] rounded-xl"
                src="/Portfolio-2.0/trackify.png"
              />
            </div>
          </div>
          <div className="px-10 text-[1.5rem]">
            <p>Trackify</p>
          </div>
          <div className="px-10 grid md:grid-cols-4 grid-cols-2 grid-rows-2 gap-2">
            <CardType>Angular</CardType>
            <CardType>TypeScript</CardType>
            <CardType>TailwindCSS</CardType>
            <CardType>HTML</CardType>
          </div>
        </div>
      </ProjectCard>
    </div>
  );
};

export default LargeProjects;
