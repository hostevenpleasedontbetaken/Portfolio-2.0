import {
  reactlogo,
  angularlogo,
  tailwindlogo,
  typescriptlogo,
  javascriptlogo,
  htmllogo,
  csslogo,
  nodejslogo,
  gitlogo,
  cpluspluslogo,
  csharplogo,
  pythonlogo,
} from "../assets";
export const navigation = [
  {
    id: "home",
    title: "Home",
    url: "#",
    svgPaths: [
      "M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z",
    ],
  },
  {
    id: "techstack",
    title: "Tech Stack",
    url: "#Techstack",
    svgPaths: [
      "M22 17v-11.8c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20zm-18-11h16v9h-16v-9zm20 12v.8c0 .663-.537 1.2-1.2 1.2h-21.6c-.663 0-1.2-.537-1.2-1.2v-.8h10c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5h10z",
    ],
  },

  {
    id: "aboutme",
    title: "About Me",
    url: "#AboutMe",
    svgPaths: [
      "M9.715 12c1.151 0 2-.849 2-2s-.849-2-2-2-2 .849-2 2 .848 2 2 2z",
      "M20 4H4c-1.103 0-2 .841-2 1.875v12.25C2 19.159 2.897 20 4 20h16c1.103 0 2-.841 2-1.875V5.875C22 4.841 21.103 4 20 4zm0 14-16-.011V6l16 .011V18z",
      "M14 9h4v2h-4zm1 4h3v2h-3zm-1.57 2.536c0-1.374-1.676-2.786-3.715-2.786S6 14.162 6 15.536V16h7.43v-.464z",
    ],
  },

  {
    id: "projects",
    title: "Projects",
    url: "#Projects",
    svgPaths: [
      "M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z",
    ],
  },
];

export const contact = [
  {
    id: "0",
    title: "Linkedin",
    target: "blank",
    link: "https://www.linkedin.com/in/stevenho-/",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    id: "1",
    title: "Github",
    target: "blank",
    link: "https://github.com/hostevenpleasedontbetaken",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    id: "2",
    title: "Resume",
    target: "_blank",
    link: "Portfolio-2.0/Steven_Ho_Resume.pdf",
    path: "M22 0h-20v24h14l6-6v-18zm-7 23h-12v-22h18v16h-6v6zm1-5h4.586l-4.586 4.586v-4.586zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm0-4h-4v1h4v-1zm-6.006 1h-7.991l-.003-.789c-.003-.72-.006-1.615 1.314-1.92 1.483-.341 1.236-.418 1.158-.563-1.078-1.988-.71-3.173-.395-3.703.388-.651 1.089-1.025 1.923-1.025.827 0 1.523.368 1.91 1.011.545.904.409 2.222-.379 3.713-.105.196-.195.255 1.119.559 1.355.312 1.352 1.212 1.35 1.936l-.006.781zm-6.994-1h6c-.007-.547-.07-.626-.54-.734-.855-.198-1.629-.376-1.901-.972-.142-.311-.113-.66.087-1.039.61-1.151.758-2.146.407-2.729-.276-.458-.778-.526-1.053-.526-.48 0-.857.19-1.063.537-.352.59-.201 1.58.414 2.714.204.377.236.727.095 1.039-.269.598-1.036.774-1.847.962-.525.121-.593.202-.599.748zm13-2v-1h-4v1h4zm0-4h-4v1h4v-1z",
  },
];

export const techstacklogos = [
  {
    id: "0",
    name: "React",
    color: "#0485A9",
    logo: reactlogo,
    description: "JavaScript Library",
  },
  {
    id: "1",
    name: "Angular",
    color: "#751E20",
    logo: angularlogo,
    description: "Frontend Framework",
  },
  {
    id: "2",
    name: "Tailwind",
    color: "#035B6A",
    logo: tailwindlogo,
    description: "CSS Framework",
  },
  {
    id: "3",
    name: "TypeScript",
    color: "#005792",
    logo: typescriptlogo,
    description: "Typed JavaScript",
  },
  {
    id: "4",
    name: "JavaScript",
    color: "#D3B912",
    logo: javascriptlogo,
    description: "Scripting Language",
  },
  {
    id: "5",
    name: "HTML",
    color: "#A83516",
    logo: htmllogo,
    description: "Markup Language",
  },
  {
    id: "6",
    name: "CSS",
    color: "#104F73",
    logo: csslogo,
    description: "Styling Language",
  },
  {
    id: "7",
    name: "Node.js",
    color: "#008A57",
    logo: nodejslogo,
    description: "JavaScript Runtime",
  },
  {
    id: "8",
    name: "Git",
    color: "#A92E1C",
    logo: gitlogo,
    description: "Version Control",
  },
  {
    id: "9",
    name: "C++",
    color: "#345B80",
    logo: cpluspluslogo,
    description: "Programming Language",
  },
  {
    id: "10",
    name: "C#",
    color: "#56289B",
    logo: csharplogo,
    description: "Programming Language",
  },
  {
    id: "11",
    name: "Python",
    color: "#245176",
    logo: pythonlogo,
    description: "Programming Language",
  },
];

export const work = [
  {
    id: "0",
    time: "Apr 2024 - Present",
    title: "Bechtel Innovation Design Center",
    role: "Front Desk Administrator",
  },
  {
    id: "1",
    time: "Jun 2024 - Aug 2024",
    title: "Youth Tech Inc.",
    role: "Coding Instructor",
  },
  {
    id: "2",
    time: "May 2022 - Aug 2023",
    title: "Conner Prairie",
    role: "Summer Camp Counselor",
  },
  {
    id: "3",
    time: "May 2021 - Aug 2021",
    title: "Paver Rescue",
    role: "Patio Renovator",
  },
  {
    id: "4",
    time: "Nov 2019 - May 2021",
    title: "Express",
    role: "Sales Associate",
  },
  {
    id: "5",
    time: "Apr 2019 - Aug 2019",
    title: "Panera Bread",
    role: "Cashier",
  },
];

export const education = [
  {
    id: "0",
    time: "Aug 2021 - May 2025",
    title: "Purdue University",
    degree: "Bachelor of Web Programming & Design",
  },
  {
    id: "1",
    time: "Aug 2021 - May 2025",
    title: "Purdue University",
    degree: "Bachelor of Game Development",
  },
];

export const projects = [
  {
    id: 0,
    name: "Trackify",
    image: "/Portfolio-2.0/trackify.png",
    techStack: ["Angular", "TypeScript", "TailwindCSS", "HTML"],
  },
  {
    id: 1,
    name: "Trackify",
    image: "/Portfolio-2.0/trackify.png",
    techStack: ["Angular", "TypeScript", "TailwindCSS", "HTML"],
  },
];
