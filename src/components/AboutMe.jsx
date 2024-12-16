import React, { useState, useEffect } from "react";
import LargeAboutMe from "./LargeAboutMe";
import Section from "./Section";
import SmallAboutMe from "./SmallAboutMe";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("aboutme");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger animation when 10% of the section is visible
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  return (
    <Section padding="small" id="aboutme">
      <div className="w-full h-full items-center flex justify-center ">
        <div className="md:block hidden">
          <LargeAboutMe isVisible={isVisible} />
        </div>
        <div className="md:hidden block items-center justify-center flex">
          <SmallAboutMe isVisible={isVisible} />
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
