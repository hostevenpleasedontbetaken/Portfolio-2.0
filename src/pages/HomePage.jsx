import { useBrowserNavContext } from "../hooks/useBrowserNavContext";
import Hero from "../sections/hero/Hero";
import Skills from "../sections/skills/Skills";
import AboutMe from "../sections/about/AboutMe";
import Projects from "../sections/projects/Projects";
import Contact from "../sections/contact/Contact";

// The long scrolling page. It stays mounted while a project page is open (just
// hidden) so its scroll position and animations survive switching tabs.
const HomePage = () => {
  const nav = useBrowserNavContext();

  return (
    <div hidden={Boolean(nav.projectSlug)}>
      <Hero />
      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
