import React from "react";
import { useGameMode } from "./GameModeContext";

const Theme = () => {
  const { GameMode, setGameMode } = useGameMode();

  return (
    <button
      onClick={() => setGameMode(!GameMode)}
      className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      style={{
        backgroundColor: GameMode ? "rgb(17, 24, 39)" : "rgb(229, 231, 235)",
      }}
    >
      <span className="sr-only">
        {GameMode ? "Switch to light mode" : "Switch to dark mode"}
      </span>
      <span
        className={`${
          GameMode ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
      />
    </button>
  );
};

export default Theme;
