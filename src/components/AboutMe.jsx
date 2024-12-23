import React, { useState } from "react";
import Section from "./Section";

const AboutMe = () => {
  // State to track the active button; default is the first button (index 0)
  const [activeButton, setActiveButton] = useState(0);

  // Function to handle button click
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <Section padding="small" id="aboutme">
      <div className="w-full h-full px-20 flex justify-between">
        <div className="flex-col space-y-4 ">
          <p className="text-[3rem] text-white">About</p>
          <div className="flex justify-between items-center">
            <div className="flex-col space-y-4">
              {/* Toggle Buttons */}
              <div className="rounded-lg h-9 bg-dark-4 w-[40rem]">
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
                className={`  w-[40rem] transition-all duration-500 transform ${
                  activeButton === 0
                    ? "opacity-100 translate-x-0"
                    : "visibility-hidden opacity-0 -translate-x-10 "
                }`}
              >
                {/* Work Info */}
                {activeButton === 0 && (
                  <div className="border rounded-lg">
                    <ul className="ml-10 border-l">
                      <li className="relative ml-10 py-4">
                        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white size-12"></div>
                        <div className="flex flex-1 flex-col justify-start gap-1 text-light-3">
                          <time className="text-xs">
                            <span>Apr 2024 - Present</span>
                          </time>
                          <h2 className="font-semibold leading-none">
                            Bechtel Innovation Design Center
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Front Desk Administrator
                          </p>
                        </div>
                      </li>
                      <li className="relative ml-10 py-4">
                        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white size-12"></div>
                        <div className="flex flex-1 flex-col justify-start gap-1 text-light-3">
                          <time className="text-xs">
                            <span>Jun 2024 - Aug 2024</span>
                          </time>
                          <h2 className="font-semibold leading-none">
                            Youth Tech Inc.
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Coding Instructor
                          </p>
                        </div>
                      </li>
                      <li className="relative ml-10 py-4">
                        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white size-12"></div>
                        <div className="flex flex-1 flex-col justify-start gap-1 text-light-3">
                          <time className="text-xs">
                            <span>May 2022 - Aug 2023</span>
                          </time>
                          <h2 className="font-semibold leading-none">
                            Conner Prairie
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Summer Camp Counselor
                          </p>
                        </div>
                      </li>
                      <li className="relative ml-10 py-4">
                        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white size-12"></div>
                        <div className="flex flex-1 flex-col justify-start gap-1 text-light-3">
                          <time className="text-xs">
                            <span>May 2021 - Aug 2021</span>
                          </time>
                          <h2 className="font-semibold leading-none">
                            Paver Rescue
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Patio Renovator
                          </p>
                        </div>
                      </li>
                      <li className="relative ml-10 py-4">
                        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white size-12"></div>
                        <div className="flex flex-1 flex-col justify-start gap-1 text-light-3">
                          <time className="text-xs">
                            <span>Nov 2019 - May 2021</span>
                          </time>
                          <h2 className="font-semibold leading-none">
                            Express
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Sales Associate
                          </p>
                        </div>
                      </li>
                      <li className="relative ml-10 py-4">
                        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white size-12"></div>
                        <div className="flex flex-1 flex-col justify-start gap-1 text-light-3">
                          <time className="text-xs">
                            <span>Apr 2019 - Aug 2019</span>
                          </time>
                          <h2 className="font-semibold leading-none">
                            Panera Bread
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Cashier
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div
                className={` w-[40rem] transition-all duration-500 transform ${
                  activeButton === 1
                    ? "opacity-100 translate-x-0"
                    : "visibility-hidden opacity-0 translate-x-10"
                }`}
              >
                {/* Education Info */}
                {activeButton === 1 && (
                  <div className="border rounded-lg">
                    <ul className="ml-10 border-l">
                      <li className="relative ml-10 py-4">
                        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white size-12"></div>
                        <div className="flex flex-1 flex-col justify-start gap-1 text-light-3">
                          <time className="text-xs">
                            <span>Aug 2021 - May 2025</span>
                          </time>
                          <h2 className="font-semibold leading-none">
                            Purdue University
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Bachelor of Web Programming & Design
                          </p>
                        </div>
                      </li>
                      <li className="relative ml-10 py-4">
                        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white size-12"></div>
                        <div className="flex flex-1 flex-col justify-start gap-1 text-light-3">
                          <time className="text-xs">
                            <span>Aug 2021 - May 2025</span>
                          </time>
                          <h2 className="font-semibold leading-none">
                            Purdue University
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Bachelor of Game Development
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col pt-[5.5rem] space-y-5">
          <div className="w-[20rem] h-[20rem] rounded-3xl border overflow-hidden items-center justify-center flex ml-6">
            <img src="src/assets/headshot.jpg" />
          </div>
          <div className="w-[25rem]">
            <p className="text-light-3">
              Hi, I'm <span className="text-main-1">Steven Ho.</span> I design
              user-friendly, visually engaging, and performance-driven web
              applications. My focus is on delivering seamless digital
              experiences that combine creative design with technical innovation
              to meet and exceed user expectations.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
