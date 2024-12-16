import React, { useState } from "react";
import { work, education } from "../constants";

const LargeAboutMe = () => {
  // State to track the active button; default is the first button (index 0)
  const [activeButton, setActiveButton] = useState(0);

  // Function to handle button click
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="grid grid-cols-2 space-x-[4rem]">
      <div className="flex-col col-span-1 flex justify-center items-center text-left">
        <div className="max-w-[40rem] min-w-[35rem]">
          <p className="text-[3rem] text-white">About</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex-col space-y-4 w-full max-w-[40rem] min-w-[35rem] min-h-[40rem] ">
            {/* Toggle Buttons */}
            <div className="rounded-lg h-9 bg-dark-4 ">
              <div className="grid grid-cols-2 grid-rows-1 p-1 gap-x-2 text-light-3">
                {/* First Button */}
                <button
                  className={`col-span-1 row-span-1 w-full h-7 rounded-lg ${
                    activeButton === 0 ? "bg-dark-1" : "bg-dark-4"
                  }`}
                  onClick={() => handleButtonClick(0)}
                >
                  Work
                </button>

                {/* Second Button */}
                <button
                  className={`col-span-1 row-span-1 w-full h-7 rounded-lg ${
                    activeButton === 1 ? "bg-dark-1" : "bg-dark-4"
                  }`}
                  onClick={() => handleButtonClick(1)}
                >
                  Education
                </button>
              </div>
            </div>

            {/* Animated Info Panel */}
            <div
              className={`w-full max-w-[40rem] transition-all duration-500 transform ${
                activeButton === 0
                  ? "opacity-100 translate-x-0"
                  : "visibility-hidden opacity-0 -translate-x-10 "
              }`}
            >
              {/* Work Info */}
              {activeButton === 0 && (
                <div className="border rounded-lg">
                  <ul className="ml-10 border-l">
                    {work.map((job) => (
                      <li key={job.id} className="relative ml-10 py-4">
                        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white size-12"></div>
                        <div className="flex flex-1 flex-col justify-start gap-1 text-light-3">
                          <time className="text-xs">
                            <span>{job.time}</span>
                          </time>
                          <h2 className="font-semibold leading-none">
                            {job.title}
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            {job.role}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div
              className={` w-full max-w-[40rem] transition-all duration-500 transform ${
                activeButton === 1
                  ? "opacity-100 translate-x-0"
                  : "visibility-hidden opacity-0 translate-x-10"
              }`}
            >
              {/* Education Info */}
              {activeButton === 1 && (
                <div className="border rounded-lg">
                  <ul className="ml-10 border-l">
                    {education.map((edu) => (
                      <li key={edu.id} className="relative ml-10 py-4">
                        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white size-12"></div>
                        <div className="flex flex-1 flex-col justify-start gap-1 text-light-3">
                          <time className="text-xs">
                            <span>{edu.time}</span>
                          </time>
                          <h2 className="font-semibold leading-none">
                            {edu.title}
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            {edu.degree}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col pt-[5.5rem] space-y-5 col-span-1 justify-center items-center flex ">
        <div className="w-[20rem] h-[20rem] rounded-3xl border overflow-hidden items-center justify-center flex">
          <img src="/Portfolio-2.0/headshot.jpg" />
        </div>
        <div className=" text-center">
          <p className="text-light-3">
            Hi, I'm <span className="text-main-1">Steven Ho.</span> I design
            user-friendly, visually engaging, and performance-driven web
            applications. My focus is on delivering seamless digital experiences
            that combine creative design with technical innovation to meet and
            exceed user expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LargeAboutMe;
