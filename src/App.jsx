import React from "react";
import WebDevMain from "./pages/WebDevMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WebDevMain />} />
      <Route path="/WebDeveloper/Main" element={<WebDevMain />} />
      {/* <Route path="/GameDeveloper/Main" element={<GameDevMain />} /> */}
    </Routes>
  );
};

export default App;
