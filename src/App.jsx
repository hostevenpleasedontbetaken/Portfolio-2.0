import React from "react";
import WebDevMain from "./pages/WebDevMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<WebDevMain />} />
        <Route path="/WebDeveloper/Main" element={<WebDevMain />} />
        {/* <Route path="/GameDeveloper/Main" element={<GameDevMain />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
