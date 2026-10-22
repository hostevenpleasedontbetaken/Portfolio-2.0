import trackifyImage from "../assets/images/trackify.png";
import portfolioImage from "../assets/images/portfolio.png";

export const projects = [
  {
    id: 0,
    name: "Trackify",
    image: trackifyImage,
    desc: "Project / Issue Tracker",
    techStack: ["Angular", "TypeScript", "TailwindCSS", "HTML"],
  },
  {
    id: 1,
    name: "Personal Portfolio",
    image: portfolioImage,
    desc: "My Personal Portfolio",
    techStack: ["React", "JavaScript", "TailwindCSS", "Vite"],
    links: [
      { label: "Live site", url: "https://stevenho.live" },
      {
        label: "Source",
        url: "https://github.com/hostevenpleasedontbetaken/Portfolio-2.0",
      },
    ],
  },
];
