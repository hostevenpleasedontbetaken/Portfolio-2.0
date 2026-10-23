import BrowserFrame from "./components/browser/BrowserFrame";
import HomePage from "./pages/HomePage";
import ProjectRoute from "./pages/ProjectRoute";

const App = () => (
  <BrowserFrame>
    <HomePage />
    <ProjectRoute />
  </BrowserFrame>
);

export default App;
