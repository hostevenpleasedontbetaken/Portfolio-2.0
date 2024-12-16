import React, { useState, useEffect } from "react";
import Section from "./Section";

import LargeProjects from "./LargeProjects";
import SmallProjects from "./SmallProjects";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("projects");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger animation when 10% of the section is visible
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <Section padding="small" id="projects">
      <div className="flex-col w-full text-white space-y-4 px-5 md:mt-0 mt-[5rem] pb-[5rem] flex justify-center items-center">
        <div className="flex-col space-y-4 lg:w-[829.59px] xl:w-[1200px] ">
          <p className="md:text-[3rem] text-[2rem] text-white">Projects</p>
          <div className="md:block hidden">
            <LargeProjects />
          </div>
          <div className="block md:hidden">
            <SmallProjects />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
