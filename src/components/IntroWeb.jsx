import React, { useState, useEffect } from "react";
import { contact, navigation } from "../constants";
import Typewriter from "./Typewriter";
import Section from "./Section";

const IntroWeb = () => {
  const [typingComplete, setTypingComplete] = useState(false);

  const [nameSlide, setnameSlide] = useState(false);
  const [locationSlide, setlocationSlide] = useState(false);

  const [startTyping, setstartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setnameSlide(true); // Trigger the slide animation
    }, 100); // Delay for 500ms

    return () => clearTimeout(timer); // Cleanup if component unmounts
  }, []);

  // Function to be called when typing is complete
  const handleTypingComplete = () => {
    const timer = setTimeout(() => {
      setTypingComplete(true); // Trigger the slide animation
    }, 100);
  };

  const updatestartTyping = () => {
    setstartTyping(true);
  };

  return (
    <Section padding="small" id="home">
      <div className="h-full w-full flex-col ">
        <div
          className={`w-full mt-[10rem] flex items-center justify-center transition-all duration-500 ease-in-out ${
            nameSlide ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          onTransitionEnd={updatestartTyping}
        >
          <p className={"uppercase text-[2rem]  text-white  "}>Steven Ho</p>
        </div>
        {startTyping && (
          <div className="w-full flex items-center justify-center">
            <Typewriter
              text="Front-End Developer"
              onTypingComplete={handleTypingComplete}
            />
          </div>
        )}
        <div
          className={`w-full flex items-center justify-center transition-all duration-500 ease-in-out ${
            typingComplete
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div>
            <div>
              <p className="uppercase text-[1rem]  text-white">
                Based in Noblesville, Indiana
              </p>
            </div>
            <div className="flex gap-x-3">
              {contact.map((item) => (
                <div className="col-span-1 row-span-1 pt-2">
                  <a
                    key={item.link}
                    className="text-white gap-x-2 flex items-center  rounded-3xl hover:bg-white hover:bg-opacity-10 transition-colors ease-in-out duration-50"
                    href={item.link}
                    target={item.target}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d={item.path} fill="currentColor"></path>
                    </svg>
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default IntroWeb;
