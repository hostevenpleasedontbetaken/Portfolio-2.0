import BrowserFrame from "./components/browser/BrowserFrame";
import Hero from "./sections/hero/Hero";
import TechStack from "./sections/techstack/TechStack";
import AboutMe from "./sections/about/AboutMe";
import Projects from "./sections/projects/Projects";

const App = () => (
  <BrowserFrame>
    <Hero />
    <TechStack />
    <AboutMe />
    <Projects />
  </BrowserFrame>
);

export default App;
