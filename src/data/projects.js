import trackifyImage from "../assets/images/trackify.png";
import portfolioImage from "../assets/images/portfolio.png";

// `image` and `links` are optional. Without an image the card shows the
// project name on a placeholder panel.
export const projects = [
  {
    id: 0,
    name: "Commit",
    meta: "Native iOS app · Solo developer · 2026",
    desc: "A native iPhone task app with an interactive home-screen widget, local notifications, and calendar integration, across 8,000+ lines of Swift.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "WidgetKit", "EventKit"],
  },
  {
    id: 1,
    name: "Trackify",
    meta: "Issue tracker · Front-end developer · 2025",
    image: trackifyImage,
    desc: "A responsive Angular dashboard and tracking interface with integrated UI components and performance optimization.",
    techStack: ["Angular", "TypeScript", "TailwindCSS", "HTML"],
  },
  {
    id: 2,
    name: "Personal Portfolio",
    meta: "This site · Personal project",
    image: portfolioImage,
    desc: "My portfolio, styled as a working browser window: tabs, history, and an address bar that follow the page.",
    techStack: ["React", "JavaScript", "TailwindCSS", "Vite"],
    links: [{ label: "Live site", url: "https://stevenho.live" }],
  },
];
