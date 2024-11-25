import React from "react";
import { useGameMode } from "./GameModeContext";
import IntroWeb from "./IntroWeb";
import Projects from "./Projects";
import Header from "./Header";
import Navigation from "./Navigation";

const Body = () => {
  const { GameMode } = useGameMode();
  return (
    <div className="h-screen w-screen flex flex-col items-center overflow-hidden bg-dark-2">
      <div className="bg-radial-gradient-white-weak relative mt-[1rem] border border-dark-5 rounded-3xl shadow-md mx-auto h-[95vh] w-[90vw] p-4">
        {/* Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-[0.1rem] bg-gradient-to-r from-transparent via-white to-transparent" />

        {/* Scrollable Section */}
        <div className="border border-dark-1 rounded-t-2xl relative bg-radial-gradient-white-weak h-full  overflow-y-auto">
          <div className="sticky top-0 z-10">
            <Navigation />
          </div>
          <div className="w-full h-full ">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
