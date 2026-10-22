import { projects } from "../../data";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <Section id="projects" className="pb-24 md:min-h-[60vh]">
    <div className="mx-auto w-full max-w-[1200px] space-y-4">
      <Reveal>
        <h2 className="text-[2rem] text-white md:text-[3rem]">Projects</h2>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.id} from="up">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

export default Projects;
