import { skills } from "../../data";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import Tag from "../../components/ui/Tag";
import IconMarquee from "./IconMarquee";

const Skills = () => (
  <Section id="skills" className="md:min-h-[60vh]">
    <div className="mx-auto w-full max-w-[1200px] space-y-6 text-white">
      <div>
        <Reveal>
          <h2 className="font-display text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
            Skills
          </h2>
        </Reveal>
        <Reveal>
          <p className="max-w-3xl text-sm text-light-3 min-[430px]:text-base">
            My core is front-end architecture in React and TypeScript, backed by
            full-stack delivery (GraphQL, REST, SQL) and native iOS development
            in Swift.
          </p>
        </Reveal>
      </div>

      <Reveal from="up">
        <IconMarquee />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group) => (
          <Reveal key={group.id} from="up" className="h-full">
            <section
              aria-labelledby={`skills-${group.id}`}
              className="h-full rounded-xl bg-dark-4 p-4"
            >
              <h3
                id={`skills-${group.id}`}
                className="mb-3 text-lg font-medium text-main-1"
              >
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

export default Skills;
