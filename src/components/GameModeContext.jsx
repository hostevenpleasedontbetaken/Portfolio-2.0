import React, { createContext, useState, useContext } from "react";

// Create the context
const GameModeContext = createContext();

// Create a provider component
export const GameModeProvider = ({ children }) => {
  const [GameMode, setGameMode] = useState(false);

  return (
    <GameModeContext.Provider value={{ GameMode, setGameMode }}>
      {children}
    </GameModeContext.Provider>
  );
};

// Custom hook to use dark mode context
export const useGameMode = () => useContext(GameModeContext);
