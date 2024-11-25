import React from "react";
import WebDevMain from "./pages/WebDevMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        {/*header is fixed*/}
        <GameModeProvider>
          <Header />
          <Body />
        </GameModeProvider>
      </div>
    </>
  );
};

export default App;
