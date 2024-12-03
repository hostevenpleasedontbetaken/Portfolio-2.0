import React, { useState, useEffect } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard"; // Renamed component
import CardType from "./CardType";

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
      <div className="flex-col px-20 text-white space-y-4">
        <div className="flex-col space-y-4">
          <p className="text-[3rem] text-white">Projects</p>
          <div className="grid grid-cols-2 gap-4">
            <ProjectCard isVisible={isVisible}>
              <div className="flex-col h-full w-full space-y-3 py-4">
                <div className="flex justify-center">
                  <div className="px-10">
                    <img
                      className="w-[30rem] h-[18rem] rounded-xl"
                      src="./src/assets/trackify.png"
                      alt="Project 1"
                    />
                  </div>
                </div>
                <div className="px-10 text-[1.5rem]">
                  <p>Trackify</p>
                </div>
                <div className="px-10 grid grid-cols-4 grid-rows-2 gap-2">
                  <CardType>Angular</CardType>
                  <CardType>TypeScript</CardType>
                  <CardType>TailwindCSS</CardType>
                  <CardType>HTML</CardType>
                  <CardType>Angular</CardType>
                </div>
              </div>
            </ProjectCard>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
