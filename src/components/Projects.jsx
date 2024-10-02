import React from "react";
import Section from "./Section";
import Typewriter from "./Typewriter";

const Projects = () => {
  return (
    <Section
      padding="small"
      backgroundColor="bg-dark-4"
      width="w-[70vw]"
      id="projects"
    >
      <div className="border border-dark-1 rounded-3xl relative overflow-hidden hover:border-main-1">
        <div className="relative h-[80vh] w-[80vw]">
          <div className="absolute inset-0 bg-transparent hover:bg-radial-gradient group">
            <div className="flex items-center justify-center h-full w-full p-5">
              <a href="youtube.com" className="block w-full h-full">
                {/*Header */}
                <div className=" grid grid-cols-5 grid-rows-1 gap-4">
                  <div className="col-span-2 row-span-1 border-b-4 border-b-main-1">
                    <h1 className=" font-sans text-main-1 text-3xl text-shadow-green">
                      Trackify - Issue Tracker
                    </h1>
                  </div>
                  <div className="col-span-2 row-span-1 border-b-4  border-b-main-1">
                    <h1 className="font-sans text-main-1 text-2xl text-shadow-green">
                      In Progress - 2024
                    </h1>
                  </div>
                  <div className="col-span-1 row-span-1 text-main-1 group-hover:translate-x-3 transition-all ease-in-out duration-50">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      height="50"
                      width="50"
                    >
                      <path
                        d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1zm1.5-4.498v-3.008l4.751 4.507-4.751 4.507v-3.008h-10.022v-2.998z"
                        fill-rule="nonzero"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-[0rem] transform translate-y-[3rem] xl:p-20 md:p-20 sm:p-5 xs:p-5 z-1 group-hover:translate-y-10 transition-all ease-in-out duration-50">
                    <img
                      src="src/assets/progress.jpg"
                      alt="Progress"
                      className="object-cover rounded-3xl xl:w-[50rem] xl:h-[28rem] md:w-[40rem] md:h-[22rem] sm:w-[30rem] sm:h-[18rem] xs:w-[20rem] xs:h-[12rem]"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
