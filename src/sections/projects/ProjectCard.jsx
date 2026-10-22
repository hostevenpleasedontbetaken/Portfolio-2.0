import Tag from "../../components/ui/Tag";
import TiltCard from "../../components/ui/TiltCard";

// `project.links` is optional: [{ label, url }].
const ProjectCard = ({ project }) => (
  <TiltCard className="flex h-full flex-col gap-3 rounded-[0.8rem] bg-dark-4 p-5 text-white">
    <img
      src={project.image}
      alt={`${project.name} screenshot`}
      loading="lazy"
      decoding="async"
      className="h-56 w-full rounded-xl object-cover"
    />
    <h3 className="text-[1.5rem]">{project.name}</h3>
    <p>{project.desc}</p>

    <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {project.techStack.map((tech) => (
        <Tag key={tech}>{tech}</Tag>
      ))}
    </ul>

    {project.links?.length > 0 && (
      <div className="mt-auto flex flex-wrap gap-2 pt-1">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-main-1 px-4 py-1 text-sm text-main-1 transition-colors hover:bg-main-1 hover:text-dark-4"
          >
            {link.label}
          </a>
        ))}
      </div>
    )}
  </TiltCard>
);

export default ProjectCard;
