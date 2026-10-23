import {
  reactlogo,
  angularlogo,
  tailwindlogo,
  typescriptlogo,
  javascriptlogo,
  htmllogo,
  csslogo,
  gitlogo,
  pythonlogo,
} from "../assets/logos";

// Icons for the scrolling row above the skill groups (only skills that have a
// logo). `color` tints the tile behind the icon.
export const skillIcons = [
  { name: "React", color: "#0485A9", logo: reactlogo },
  { name: "TypeScript", color: "#005792", logo: typescriptlogo },
  { name: "JavaScript", color: "#D3B912", logo: javascriptlogo },
  { name: "Angular", color: "#751E20", logo: angularlogo },
  { name: "Tailwind CSS", color: "#035B6A", logo: tailwindlogo },
  { name: "HTML", color: "#A83516", logo: htmllogo },
  { name: "CSS", color: "#104F73", logo: csslogo },
  { name: "Python", color: "#245176", logo: pythonlogo },
  { name: "Git", color: "#A92E1C", logo: gitlogo },
];

// Grouped as on the resume. Adding a skill is just adding a string.
export const skills = [
  {
    id: "front-end",
    title: "Front-End & UX",
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Angular",
      "Jest",
      "Design Systems",
      "Figma",
      "Frontend Architecture",
      "Chrome DevTools",
    ],
  },
  {
    id: "back-end",
    title: "Back-End & APIs",
    items: [
      "GraphQL",
      "REST APIs",
      "Spring Boot",
      "Java",
      "SQL",
      "PostgreSQL",
      "Python",
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    items: ["Swift", "SwiftUI", "SwiftData", "WidgetKit", "EventKit", "Xcode"],
  },
  {
    id: "process",
    title: "Process, Tools & AI",
    items: [
      "Agile/Scrum",
      "Jira",
      "Git/GitLab",
      "SDLC",
      "Claude (Agentic Workflows, Memory Systems)",
      "GitHub Copilot",
    ],
  },
];
