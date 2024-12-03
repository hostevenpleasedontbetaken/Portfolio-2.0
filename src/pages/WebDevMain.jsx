import React from "react";
import Body from "../components/Body";
import Header from "../components/Header";
import { GameModeProvider } from "../components/GameModeContext";

const WebDevMain = () => {
  return (
    <div className="">
      {/*header is fixed*/}
      <GameModeProvider>
        <Body />
      </GameModeProvider>
    </div>
  );
};

export default WebDevMain;
