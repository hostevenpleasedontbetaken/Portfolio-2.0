import { logAnalyzer } from "./logAnalyzer";
import { commit } from "./commit";
import { trackify } from "./trackify";
import { portfolio } from "./portfolio";

// One entry per project, keyed by the project's slug (see data/projects.js).
export const caseStudies = {
  "log-analyzer": logAnalyzer,
  commit,
  trackify,
  portfolio,
};
