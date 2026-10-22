import { useEffect, useState } from "react";
import { links } from "../../data";
import Section from "../../components/ui/Section";
import Typewriter from "../../components/ui/Typewriter";
import { PathIcon } from "../../components/ui/icons";

const Hero = () => {
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
      <div className="flex w-full flex-col items-center text-center">
        <h1
          className={`uppercase text-[1.5rem] md:text-[2rem] text-white transition-all duration-500 ease-in-out motion-reduce:transition-none ${
            nameIn ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          Steven Ho
        </h1>

        <Typewriter
          text="Front-End Developer"
          className="text-[2rem] md:text-[3rem]"
          delay={600}
          onTypingComplete={() => setTypingDone(true)}
        />

        <div
          className={`flex flex-col items-center transition-all duration-500 ease-in-out motion-reduce:transition-none ${
            typingDone ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <p className="uppercase text-[.75rem] md:text-[1rem] text-white">
            Based in Noblesville, Indiana
          </p>
          <div className="flex gap-x-3">
            {links.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target={item.target}
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 rounded-3xl pt-2 text-white transition-colors hover:bg-white/10"
              >
                <PathIcon
                  paths={[item.path]}
                  className="size-[12px] md:size-[18px]"
                />
                <span className="text-[.75rem] md:text-[1rem]">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
