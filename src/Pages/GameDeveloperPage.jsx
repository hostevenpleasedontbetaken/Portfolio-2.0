import React from "react";
import { GameModeProvider } from "../components/GameModeContext";
import Header from "../components/Header";
import Body from "../components/Body";

const GameDeveloperPage = () => {
  return (
    <div className="overflow-hidden">
      {/*header is fixed*/}
      <GameModeProvider>
        <Header />
        <Body />
      </GameModeProvider>
    </div>
  );
};

export default GameDeveloperPage;
