import React from "react";
import { useGameMode } from "./GameModeContext";
import Intro from "./Intro";
import Projects from "./Projects";

const Body = () => {
  const { GameMode } = useGameMode();
  return (
    <div className="h-screen w-screen flex flex-col items-center overflow-auto bg-dark-2">
      <div className="">
        <Intro />
        <Projects />
      </div>
    </div>
  );
};

export default Body;
