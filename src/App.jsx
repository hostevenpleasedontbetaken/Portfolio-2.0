import { Routes, Route } from "react-router-dom";
import GameDeveloperPage from "./Pages/GameDeveloperPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GameDeveloperPage />} />
      </Routes>
    </>
  );
};

export default App;
