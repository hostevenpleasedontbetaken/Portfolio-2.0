import React from "react";
import LargeAboutMe from "./LargeAboutMe";
import Section from "./Section";
import SmallAboutMe from "./SmallAboutMe";

const AboutMe = () => {
  return (
    <Section padding="small" id="aboutme">
      <div className="w-full h-full md:px-20 px-5 mt-[-5rem] md:mt-0">
        <div className="md:block hidden">
          <LargeAboutMe />
        </div>
        <div className="md:hidden block items-center justify-center flex">
          <SmallAboutMe />
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
