import React from "react";
import { useGameMode } from "./GameModeContext";
import Projects from "./Projects";
import LargeNavigation from "./LargeNavigation";
import IntroWeb from "./IntroWeb";
import Techstack from "./Techstack";
import AboutMe from "./AboutMe";
import SmallNavigationTop from "./SmallNavigationTop";
import SmallNavigationBot from "./SmallNavigationBot";

const Body = () => {
  const { GameMode } = useGameMode();
  return (
    <div className="h-screen w-screen flex flex-col items-center overflow-hidden bg-dark-4 font-mainfont">
      <div className="bg-radial-gradient-white-weak relative mt-[1rem] border border-dark-5 rounded-3xl shadow-md mx-auto h-[95vh] w-[90vw] p-4">
        {/* Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-[0.1rem] bg-gradient-to-r from-transparent via-white to-transparent" />

        {/* Scrollable Section */}
        <div className="border border-dark-1 rounded-t-2xl relative bg-radial-gradient-white-weak h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit ">
          <div className="sticky top-0 z-10 hidden md:block">
            <LargeNavigation />
          </div>
          <div className="sticky top-0 z-10 md:hidden block">
            <SmallNavigationTop />
          </div>

          <IntroWeb />
          <Techstack />
          <AboutMe />
          <Projects />

          <div className="sticky bottom-0 left-0 right-0 z-10 md:hidden block">
            <SmallNavigationBot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
