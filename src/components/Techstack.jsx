import React, { useState, useEffect } from "react";
import Section from "./Section";
import LargeTechStack from "./LargeTechStack";
import SmallTechStack from "./SmallTechStack";

const Techstack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("techstack");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log(isVisible);
        }
      },
      { threshold: 0.1 } // Trigger animation when 20% of the section is visible
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <Section padding="small" id="techstack">
      <div className="flex-col md:px-20 px-5 mt-[-10rem] md:mt-0 text-white space-y-4 ">
        <div
          className={`flex md: justify-start items-center transition-all duration-1000 ease-in-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[-5rem] opacity-0"
          }`}
        >
          <p className={`md:text-[3rem] text-[2rem]`}>Current Technologies</p>
        </div>
        <div
          className={`transition-transform duration-1000 ease-in-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[-5rem] opacity-0"
          }`}
        >
          <p className="md:max-w-3xl text-sm text-mac-4 min-[430px]:text-base max-w-lg">
            I specialize in a variety of modern technologies that enable me to
            create powerful and efficient solutions. Here are some of my core
            tools and skills.
          </p>
        </div>
        <div
          className={`hidden md:block transition-transform duration-1000 ease-in-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[10rem] opacity-0"
          }`}
        >
          <LargeTechStack />
        </div>

        <div
          className={`block md:hidden transition-transform duration-1000 ease-in-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[10rem] opacity-0"
          }`}
        >
          <SmallTechStack />
        </div>
      </div>
    </Section>
  );
};

export default Techstack;
