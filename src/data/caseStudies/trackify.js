import dashboard from "../../assets/projects/trackify/dashboard.jpg";
import projectsPage from "../../assets/projects/trackify/projects.jpg";
import board from "../../assets/projects/trackify/board.jpg";
import issues from "../../assets/projects/trackify/issues.jpg";
import architecture from "../../assets/projects/trackify/architecture.png";

// From the Trackify repository (README, pull requests and commit history).
// The screenshots use sample data in the static demo.
export const trackify = {
  slug: "trackify",
  tagline:
    "An issue tracker with projects, a dashboard and a drag-and-drop board, built with a teammate. I built the Angular front end.",

  facts: [
    { label: "My role", value: "Front-end developer (Angular)" },
    {
      label: "Team",
      value:
        "Two developers. My teammate built the Flask API, the PostgreSQL database, the Docker setup and most of the CI.",
    },
    {
      label: "Timeline",
      value: "First front end October 2024 to January 2025, then a full redesign in October 2026",
    },
    {
      label: "Front end",
      value:
        "Angular, TypeScript, RxJS, Angular CDK (drag and drop, dialogs), Angular Material (the issues table only), and a custom CSS design system",
    },
    {
      label: "Back end (teammate)",
      value: "Python and Flask, PostgreSQL, Docker Compose, Nginx",
    },
    {
      label: "Size",
      value: "About 2,300 lines of front-end code across TypeScript, HTML and CSS",
    },
  ],

  overview: [
    "Trackify is an issue tracker: projects hold issues, issues move through statuses, and a dashboard shows what needs attention. It was built with a teammate, and each part of it runs in its own Docker container: the Angular app behind Nginx, a Flask API, and a PostgreSQL database on a private network.",
    "I built the Angular front end. The first version came together between October 2024 and January 2025 (navigation, the project list and project pages). In October 2026 I redesigned and rebuilt it: a custom design system with light and dark themes, a dashboard, and a kanban board you can drag cards around.",
    "There is a live demo that runs entirely in your browser, with no back end behind it. It keeps its data in your browser's local storage, so anything you add stays on your machine.",
  ],

  gallery: {
    title: "The app",
    intro:
      "The four pages, from the redesigned front end. The data is sample data in the static demo.",
    variant: "wide",
    items: [
      { src: dashboard, alt: "The Trackify dashboard", caption: "Dashboard: open, overdue and due-this-week counts, what's coming up, progress per project, and where things stand by status." },
      { src: projectsPage, alt: "The Trackify projects page", caption: "Projects: create, edit and delete projects, with progress for each." },
      { src: board, alt: "The Trackify kanban board", caption: "Board: a project's issues in status columns. Drag cards between columns, filter, search, and sort manually or by priority or due date." },
      { src: issues, alt: "The Trackify issues table", caption: "Issues: a sortable, filterable table of every issue across all projects." },
    ],
  },

  architecture: {
    title: "How it works",
    intro:
      "Three containers on a private network. The API and database are not reachable from outside; the browser only talks to Nginx.",
    image: {
      src: architecture,
      alt: "Architecture diagram showing the Angular front end on Nginx, the Flask API, and the PostgreSQL database as separate Docker containers",
      caption: "The architecture diagram from the project's README.",
    },
    items: [
      {
        title: "The Angular app (my part)",
        body: "Served by Nginx, which also proxies requests to the API. The app has four pages (dashboard, projects, a board for each project, and an issues table) and talks to the API through one service.",
      },
      {
        title: "The Flask API (teammate)",
        body: "A REST interface for projects and issues: create, read, update and delete, with the projects and issues endpoints the front end uses.",
      },
      {
        title: "PostgreSQL (teammate)",
        body: "Stores the projects and issues, in its own container, reachable only from inside the Docker network.",
      },
      {
        title: "A demo with no back end",
        body: "A flag, set when the static site is built in GitHub Actions, switches the API service to local storage. That is how the live demo works without any servers.",
      },
    ],
  },

  decisionsIntro:
    "The choices behind the October 2026 front-end rebuild, mostly from the pull requests.",
  decisions: [
    {
      title: "A custom design system, not a component library",
      body: "The first version used Tailwind. The rebuild is a custom design system with a warm palette and light, dark and follow-the-system themes, applied with a single attribute on the page. Angular Material is kept only for the sortable issues table.",
    },
    {
      title: "Dialogs on the Angular CDK",
      body: "Creating, editing and deleting projects and issues use the Angular CDK's dialog, which supplies the behavior while the design system supplies the look.",
    },
    {
      title: "Drops that never wait on the network",
      body: "When a card is dropped, the column arrays update immediately (moving it within or between columns), and the API call happens after. The board settles instantly instead of waiting for a round trip.",
    },
    {
      title: "Manual card order, saved where I could",
      body: "The API has no field for card order, so the manual ordering of a column is saved per project in the browser's local storage. Priority, due date and newest sorts remain, with reordering disabled for them.",
    },
    {
      title: "One API service that hides the differences",
      body: "A single service handles the API's numeric ids by turning them into strings, uses a relative /api address so the same build works behind Nginx and with the development proxy, and switches to local storage for the demo.",
    },
    {
      title: "Small interaction details",
      body: "Releasing a drag no longer opens the edit dialog. Each column has an add button that appears when you hover it. The New project button stays on the title row so nothing shifts when the summary line appears.",
    },
  ],

  phases: {
    title: "How it was built",
    intro: "From the repository's history.",
    items: [
      {
        id: "t1",
        label: "October 2024",
        title: "The first front end",
        summary: "A navigation bar, a project page and a project list, in Angular.",
        points: [
          "Started the front end and the first components, then merged the API work from my teammate's branch.",
        ],
      },
      {
        id: "t2",
        label: "November 2024",
        title: "Splitting it into components",
        summary: "The pages were refactored into separate components, and search was fixed.",
      },
      {
        id: "t3",
        label: "January 2025",
        title: "Navigation and project list pass",
        summary: "Reworked the navigation bar and the project list.",
      },
      {
        id: "t4",
        label: "October 2026",
        title: "The redesign (pull request #16)",
        summary: "A full UI rebuild: 35 files, 2,768 lines added and 134 removed.",
        points: [
          "Dashboard, projects, a kanban board for each project, and an all-issues table.",
          "The custom design system with light, dark and system themes.",
          "Dialogs on the CDK, a developer proxy so the app can run against a local back end, and fixes to the API service.",
        ],
      },
      {
        id: "t5",
        label: "October 2026",
        title: "Board ordering (pull request #17)",
        summary: "Manual card ordering, a hover add button and faster drops.",
        points: [
          "Drag within a column or drop at a position in another; the order is saved per project.",
          "Drops update the columns immediately, with a faster settle animation.",
        ],
      },
    ],
  },

  next: {
    title: "What I'd do next",
    items: [
      "Save manual card order on the server. Today it lives in the browser because the API has no order field.",
    ],
  },
};
