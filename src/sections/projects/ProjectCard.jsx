import Tag from "../../components/ui/Tag";
import TiltCard from "../../components/ui/TiltCard";

const ProjectCard = ({ project }) => (
  <TiltCard className="h-full space-y-3 rounded-[0.8rem] bg-dark-4 p-5 text-white">
    <img
      src={project.image}
      alt={project.name}
      loading="lazy"
      decoding="async"
      className="h-56 w-full rounded-xl object-cover"
    />
    <p className="text-[1.5rem]">{project.name}</p>
    <p>{project.desc}</p>
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {project.techStack.map((tech) => (
        <Tag key={tech}>{tech}</Tag>
      ))}
    </div>
  </TiltCard>
);

export default ProjectCard;
