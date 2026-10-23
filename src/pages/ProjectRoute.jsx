import { useBrowserNavContext } from "../hooks/useBrowserNavContext";
import ProjectPage from "./ProjectPage";

// Renders the open project's page, if any.
const ProjectRoute = () => {
  const nav = useBrowserNavContext();
  return nav.projectSlug ? <ProjectPage key={nav.projectSlug} slug={nav.projectSlug} /> : null;
};

export default ProjectRoute;
