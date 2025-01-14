import React from "react";
import CardType from "./CardType";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

const LargeProjects = ({ isVisible }) => {
  return (
    <div className="flex  md:items-center md:justify-center md:flex-col grid lg:grid-cols-2 w-full md:space-y-4 lg:space-y-0 xl:gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} isVisible={isVisible}>
          <div className="flex-col h-full space-y-3 py-4">
            <div className="flex justify-center">
              <div className="px-10">
                <img
                  className="lg:w-[20rem] lg:h-[18rem] w-[20rem] h-[15rem] rounded-xl"
                  src={project.image}
                  alt={project.name}
                />
              </div>
            </div>
            <div className="px-10 text-[1.5rem]">
              <p>{project.name}</p>
            </div>
            <div className="px-10 text-[1rem]">
              <p>{project.desc}</p>
            </div>
            <div className="px-10 grid md:grid-cols-4 grid-cols-2 grid-rows-2 gap-2">
              {project.techStack.map((tech, index) => (
                <CardType key={index}>{tech}</CardType>
              ))}
            </div>
          </div>
        </ProjectCard>
      ))}
    </div>
  );
};

export default LargeProjects;
