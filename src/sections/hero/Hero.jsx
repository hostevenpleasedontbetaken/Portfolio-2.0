import { useEffect, useState } from "react";
import { links, profile } from "../../data";
import { useBrowserNavContext } from "../../hooks/useBrowserNavContext";
import Section from "../../components/ui/Section";
import Typewriter from "../../components/ui/Typewriter";

const resumeLink = links.find((link) => link.title === "Resume");

const Hero = () => {
  const nav = useBrowserNavContext();
  const [nameIn, setNameIn] = useState(false);
  const [typingDone, setTypingDone] = useState(false);

  // Let the name slide in once, right after the first paint.
  useEffect(() => {
    const timer = setTimeout(() => setNameIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section
      id="home"
      className="flex min-h-[calc(95vh-8rem)] items-center justify-center md:min-h-[calc(95vh-9rem)]"
    >
      <div className="flex w-full max-w-3xl flex-col items-center text-center">
        <h1
          className={`font-display uppercase text-[1.5rem] md:text-[2rem] text-white transition-all duration-500 ease-in-out motion-reduce:transition-none ${
            nameIn ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {profile.name}
        </h1>

        <Typewriter
          text={profile.title}
          className="text-[2rem] md:text-[3rem]"
          delay={600}
          onTypingComplete={() => setTypingDone(true)}
        />

        <div
          className={`mt-2 flex flex-col items-center gap-y-5 transition-all duration-500 ease-in-out motion-reduce:transition-none ${
            typingDone ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <p className="text-xs uppercase tracking-wide text-light-3 md:text-sm">
            Based in {profile.location}
          </p>
          <p className="max-w-xl text-base text-white md:text-lg">
            {profile.statement}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={resumeLink.link}
              target={resumeLink.target}
              rel="noopener noreferrer"
              className="rounded-full bg-main-1 px-5 py-2 text-sm font-medium text-dark-4 transition-colors hover:bg-white"
            >
              View resume
            </a>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                nav.goTo("contact");
              }}
              className="rounded-full border border-main-1 px-5 py-2 text-sm font-medium text-main-1 transition-colors hover:bg-main-1/10"
            >
              Get in touch
            </a>
          </div>

          <ul
            aria-label="Core technologies"
            className="flex flex-wrap items-center justify-center gap-x-2 text-xs tracking-wide text-light-3 sm:text-sm md:gap-x-3 md:text-base"
          >
            {profile.coreTech.map((tech, index) => (
              <li key={tech} className="flex items-center gap-x-2 md:gap-x-3">
                {index > 0 && (
                  <span aria-hidden="true" className="text-main-1">
                    ·
                  </span>
                )}
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
