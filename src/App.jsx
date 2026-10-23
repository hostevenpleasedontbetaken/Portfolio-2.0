import BrowserFrame from "./components/browser/BrowserFrame";
import Hero from "./sections/hero/Hero";
import Skills from "./sections/skills/Skills";
import AboutMe from "./sections/about/AboutMe";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";

const App = () => (
  <BrowserFrame>
    <Hero />
    <Skills />
    <AboutMe />
    <Projects />
    <Contact />
  </BrowserFrame>
);

export default App;
