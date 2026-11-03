import logAnalyzerImage from "../assets/projects/log-analyzer/overview.jpg";
import commitImage from "../assets/projects/commit/today.jpg";
import trackifyImage from "../assets/projects/trackify/dashboard.jpg";
import portfolioImage from "../assets/projects/portfolio/skills.jpg";

// The cards on the Projects section. `slug` is also the page's address
// (/projects/<slug>) and the key of its case study in data/caseStudies.
// `image` and `links` are optional; links are for the live thing or a repo
// worth reading.
export const projects = [
  {
    id: 0,
    slug: "log-analyzer",
    name: "TENEX Log Analyzer",
    meta: "Full-stack security app · Solo developer · 2026",
    image: logAnalyzerImage,
    desc: "Upload web proxy logs and get a timeline, incidents ranked by confidence, and a plain-English reason for every flagged line, using rules, statistics and an Isolation Forest.",
    techStack: ["React", "TypeScript", "Flask", "PostgreSQL", "scikit-learn"],
    links: [
      { label: "Live app (sign-in required)", url: "https://tenex-log-analyzer-f42ca.web.app" },
      {
        label: "Source",
        url: "https://github.com/hostevenpleasedontbetaken/tenex-log-analyzer",
      },
    ],
  },
  {
    id: 1,
    slug: "commit",
    name: "Commit",
    meta: "Native iOS app · Solo developer · 2026",
    image: commitImage,
    desc: "A native iPhone task app with an interactive home-screen widget, local notifications, and calendar integration, across 8,000+ lines of Swift.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "WidgetKit", "EventKit"],
  },
  {
    id: 2,
    slug: "trackify",
    name: "Trackify",
    meta: "Issue tracker · Front-end developer · Team of two · 2024–2026",
    image: trackifyImage,
    desc: "A team-built issue tracker. I built the Angular front end: a dashboard, projects, a drag-and-drop kanban board and an issues table, with light and dark themes.",
    techStack: ["Angular", "TypeScript", "Angular CDK", "RxJS", "CSS"],
    links: [
      { label: "Live demo", url: "https://trackify.setulp.com/" },
      {
        label: "Source",
        url: "https://github.com/Trackify-Issue-Tracker/Trackify",
      },
    ],
  },
  {
    id: 3,
    slug: "portfolio",
    name: "Personal Portfolio",
    meta: "This site · Personal project",
    image: portfolioImage,
    desc: "My portfolio, styled as a working browser window: tabs, history, and an address bar that follow the page.",
    techStack: ["React", "JavaScript", "TailwindCSS", "Vite"],
    links: [{ label: "Live site", url: "https://stevenho.live" }],
  },
];
