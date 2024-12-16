import React, { useState, useEffect } from "react";
import { contact } from "../constants";
import Typewriter from "./Typewriter";
import Section from "./Section";

const IntroWeb = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [nameSlide, setnameSlide] = useState(false);
  const [startTyping, setstartTyping] = useState(false);
  const [startSecondTyping, setStartSecondTyping] = useState(false);

  // Trigger name slide animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setnameSlide(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleTypingComplete = () => {
    setStartSecondTyping(true);
  };

  const handleSecondTypingComplete = () => {
    setTypingComplete(true);
  };

  const updatestartTyping = () => {
    setstartTyping(true);
  };

  return (
    <Section padding="small" id="home">
      <div className="h-screen max-w-full flex-col flex justify-center mt-[-6rem] items-center ">
        {/* Name Animation */}
        <div
          className={`w-full  flex items-center justify-center transition-all duration-500 ease-in-out ${
            nameSlide ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          onTransitionEnd={updatestartTyping}
        >
          <p className="uppercase md:text-[2rem] text-[1rem] text-white">
            Steven Ho
          </p>
        </div>

        {/* Typing Animations */}
        {startTyping && (
          <div className="w-full flex items-center justify-center">
            {/* Large Screens: Full Text */}
            <div className="hidden md:block">
              <Typewriter
                className="text-[4rem]"
                text="Front-End Developer"
                onTypingComplete={handleTypingComplete}
              />
            </div>
          </div>
        )}

        {/* Small Screens: Split Text */}
        {startTyping && (
          <div className="w-full flex items-center justify-center">
            {/* Large Screens: Full Text */}
            <div className="block md:hidden flex-col">
              <Typewriter
                className={"text-[2rem]"}
                text="Front-End"
                onTypingComplete={handleTypingComplete}
              />
              {startSecondTyping && (
                <Typewriter
                  className={"text-[2rem]"}
                  text="Developer"
                  onTypingComplete={handleSecondTypingComplete}
                />
              )}
            </div>
          </div>
        )}

        {/* Location and Contact Info */}
        <div
          className={`w-full flex items-center justify-center transition-all duration-500 ease-in-out ${
            typingComplete
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="flex-col items-center justify-center">
            <p className="uppercase md:text-[1rem] text-[.5rem] text-white flex items-center justify-center">
              Based in Noblesville, Indiana
            </p>
            <div className="flex gap-x-3">
              {contact.map((item) => (
                <div className="col-span-1 row-span-1 pt-2" key={item.id}>
                  <a
                    className="text-white gap-x-2 flex items-center rounded-3xl hover:bg-white hover:bg-opacity-10 transition-colors ease-in-out duration-50"
                    href={item.link}
                    target={item.target}
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="md:w-[18px] md:h-[18px] w-[12px] h-[12px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d={item.path} fill="currentColor"></path>
                    </svg>
                    <p className="md:text-[1rem] text-[.5rem] ">{item.title}</p>
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
