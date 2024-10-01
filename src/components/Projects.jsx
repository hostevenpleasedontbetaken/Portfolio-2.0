import React from "react";
import Section from "./Section";
import Typewriter from "./Typewriter";

const Projects = () => {
  return (
    <Section
      padding="small"
      backgroundColor="bg-dark-4"
      width="w-[70vw]"
      id="home
      "
    >
      <div className="border border-dark-1 rounded-3xl relative overflow-hidden">
        <div className="relative h-[80vh] w-[80vw]">
          <div className="absolute inset-0 bg-transparent hover:bg-radial-gradient">
            <div className="flex items-center justify-center h-full w-full p-5">
              <a href="youtube.com" className="block w-full h-full">
                {/*Header */}
                <div className=" grid grid-cols-5 grid-rows-1 gap-4">
                  <div className="col-span-2 row-span-1 border-b-4 border-b-main-1">
                    <h1 className=" font-sans text-main-1 text-3xl text-shadow-green">
                      Trackify - Issue Tracker
                    </h1>
                  </div>
                  <div className="col-span-1 row-span-1 border-b-4  border-b-main-1">
                    <h1 className="font-sans text-main-1 text-2xl text-shadow-green">
                      In Progress
                    </h1>
                  </div>
                </div>

                <div className="align-self:center max-w-[90%] relative bg-white z-1"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
