import { techStack } from "../../data";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";

const TechStack = () => (
  <Section id="tech-stack" className="md:min-h-[60vh]">
    <div className="mx-auto w-full max-w-[1200px] space-y-6 text-white">
      <div>
        <Reveal>
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
            Current Technologies
          </h2>
        </Reveal>
        <Reveal>
          <p className="max-w-3xl text-sm text-mac-4 min-[430px]:text-base">
            I specialize in a variety of modern technologies that enable me to
            create powerful and efficient solutions. Here are some of my core
            tools and skills.
          </p>
        </Reveal>
      </div>

      <Reveal from="up">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {techStack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-2 rounded-xl bg-dark-4 p-2 transition-colors md:gap-3 md:p-2.5 duration-200 hover:bg-dark-1/50"
            >
              <div
                className="flex shrink-0 items-center justify-center rounded-lg p-1.5 md:p-3"
                style={{ backgroundColor: `${tech.color}33` }}
              >
                <img
                  src={tech.logo}
                  alt=""
                  width="32"
                  height="32"
                  className="size-5 md:size-8"
                />
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-medium md:text-lg">
                  {tech.name}
                </h3>
                <p className="hidden text-xs text-white/70 md:block">
                  {tech.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </Section>
);

export default TechStack;
