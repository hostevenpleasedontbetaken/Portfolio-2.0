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
    <Section padding="small" backgroundColor="bg-dark-4" id="home">
      <div className="border border-dark-1 rounded-3xl relative overflow-hidden">
        <div className="flex items-center justify-center h-full w-full p-5 bg-radial-gradient-green">
          <div className="w-[80vw] lg:h-[80vh] grid grid-cols-5 grid-rows-10 gap-4">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, transparent 0%, transparent 45%, rgba(0, 255, 0, 0.2) 50%, transparent 55%, transparent 100%)",
                backgroundSize: "100% 20px",
                animation: "moveStripes 1s linear infinite",
              }}
            ></div>
            <div className="col-span-4 row-span-1 border-b-4 border-b-main-1">
              <h1 className=" font-sans  text-main-1 text-3xl ">
                Display Developer Information
              </h1>
            </div>
            <div className="col-span-1 row-span-1 border-b-4  border-b-main-1">
              <h1 className="font-sans text-main-1 text-2xl">ACC#21374</h1>
            </div>
            <div className="col-span-3  row-span-10 ">
              <Typewriter
                text="I craft products & stories"
                onTypingComplete={handleTypingComplete}
              />
            </div>

            <div className="col-span-1  row-span-10"></div>
            {/*Right Content */}
            <div className="col-span-1 row-span-10">
              <div
                className={`grid grid-rows-6  flex-col z-10 items-center transition-transform delay-500 duration-700 over ${
                  typingComplete ? "translate-x-0" : "translate-x-[15rem]"
                } max-w-full max-h-full`}
              >
                {/* Name */}
                <div className="row-span-1   justify-center items-center flex ">
                  <h3 className="text-2xl text-main-3 text-shadow-green">
                    Steven Ho
                  </h3>
                </div>

                {/* Image */}
                <div className="row-span-3 flex items-center">
                  <img
                    src="src/assets/headshot.jpg"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>

                {/* Position Title */}
                <div className="row-span-1 flex justify-center items-center mt-2">
                  <h3 className="text-xl text-main-3 text-shadow-green">
                    Front-End Developer
                  </h3>
                </div>

                {/* Current Status */}
                <div className="row-span-1 bg-main-2 rounded-3xl overflow-hidden">
                  <h4 className="font-sans text-main-1 p-2">Currently:</h4>
                  <p className="font-sans text-main-1 p-2">
                    Undergraduate Student @ Purdue University
                  </p>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes moveStripes {
              0% {
                background-position: 0 0;
              }
              100% {
                background-position: 0 20px;
              }
            }
          `}</style>
        </div>
      </div>
    </Section>
  );
};
export default Intro;
