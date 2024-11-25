import React, { useState, useEffect } from "react";
import Section from "./Section";
import Typewriter from "./Typewriter";

const Intro = () => {
  const [typingComplete, setTypingComplete] = useState(false);

  // Function to be called when typing is complete
  const handleTypingComplete = () => {
    setTypingComplete(true);
  };

  return (
    <Section padding="small" backgroundColor="bg-black" id="home">
      <div className="absolute top-0 left-0 w-full h-[0.1rem] bg-gradient-to-r from-transparent via-white to-transparent " />
      <div className="border border-dark-1 rounded-2xl relative overflow-hidden bg-radial-gradient-white-weak">
        <div className="bg-mac-2 w-full h-[2.5rem] bg-radial-gradient-white-strong ">
          <div className="absolute top-0 left-0 w-full h-[0.1rem] bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="flex items-center gap-x-2 w-full h-full">
            <div className="pl-4">
              <svg viewBox="0 0 24 24" height="16" width="16">
                <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
              </svg>
            </div>
            <div className="">
              <svg viewBox="0 0 24 24" height="16" width="16">
                <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
              </svg>
            </div>
            <div className="">
              <svg viewBox="0 0 24 24" height="16" width="16">
                <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Intro;
