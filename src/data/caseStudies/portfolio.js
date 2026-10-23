import skills from "../../assets/projects/portfolio/skills.jpg";
import about from "../../assets/projects/portfolio/about.jpg";
import project from "../../assets/projects/portfolio/project.jpg";

// About this site, from its own history.
export const portfolio = {
  slug: "portfolio",
  tagline:
    "A portfolio styled as a Chrome window on a Mac, where the tabs, the address bar and the history buttons all really work.",

  facts: [
    { label: "Role", value: "Design and development, solo" },
    { label: "Timeline", value: "First built in late 2024, rebuilt in October 2026 in six phases" },
    { label: "Stack", value: "React 18, Vite, Tailwind CSS" },
    { label: "Hosting", value: "GitHub Pages on stevenho.live, with the domain bought on Namecheap" },
  ],

  overview: [
    "The idea is that a portfolio is usually read in a browser, so this one looks like one: a Mac window with tabs, an address bar, back and forward buttons and a bookmarks bar. The twist is that none of it is for show.",
    "The tabs are the page's sections. The address bar and the URL follow whatever you are looking at, and clicking the address bar copies the link. Back and forward use real browser history. Each project opens in its own tab with its own address and a working close button, like the page you are reading now.",
    "I first built it in late 2024. In October 2026 I rebuilt it in six phases, working with Claude Code, from the file structure and performance up through the content and the design.",
  ],

  gallery: {
    title: "The site",
    intro: "Screenshots of this site, taken at a laptop-sized window.",
    variant: "wide",
    items: [
      { src: skills, alt: "The Skills section of this site", caption: "Skills: a scrolling icon row above the grouped skills. The tabs, address bar and history buttons are all live." },
      { src: about, alt: "The About section of this site", caption: "About: experience as a timeline, with the strongest points first and the rest one click away." },
      { src: project, alt: "A project page of this site", caption: "A project page, open as its own tab with its own address." },
    ],
  },

  architecture: {
    title: "How it works",
    items: [
      {
        title: "One page, real history",
        body: "The home page is one long scroll inside the browser window. One hook, useBrowserNav, watches which section is in view and mirrors it into the URL and address bar. Clicking a tab scrolls there and pushes a real history entry. Merely scrolling updates the URL without filling the history.",
      },
      {
        title: "Project pages are tabs",
        body: "Opening a project adds a tab and navigates to /projects/<name>. The home page stays mounted but hidden, so its scroll position survives, and closing the tab returns you to the Projects section.",
      },
      {
        title: "Content is data",
        body: "All the text lives in plain data files: profile, skills, work, projects, and a case-study file for each project. The components only render it, so changing the content never means touching layout code.",
      },
      {
        title: "Static hosting, real URLs",
        body: "The site is static files on GitHub Pages, which can't route /projects/commit on its own. So the build writes a copy of the page for every project route, plus a 404 fallback, and every deep link works.",
      },
    ],
  },

  decisionsIntro: "The calls that shaped the rebuild.",
  decisions: [
    {
      title: "One scrolling page, with a browser that works",
      body: "I kept a single long page rather than separate pages, and made the browser chrome real instead: tabs that scroll and update the URL, working history and a live address bar. Projects are the exception, and they open as their own tabs.",
    },
    {
      title: "Readable type",
      body: "The first version set everything in a very thin display font, which looked good large and was hard to read small. Body text now uses the system font (SF Pro on a Mac, the same font Chrome uses), and the thin font is kept for big headings.",
    },
    {
      title: "Fast by default",
      body: "The headshot was a 24 MB photo shown at 270 pixels wide; it is now 152 KB. Images load lazily, and the router, the carousel library and three unused fonts were removed.",
    },
    {
      title: "Accessible, not just good-looking",
      body: "One h1 and headings in order, a main landmark, a visible focus ring everywhere, buttons that are really buttons, decorative icons hidden from screen readers, and no auto-moving content for people who prefer reduced motion.",
    },
  ],

  phases: {
    title: "How it was built, phase by phase",
    intro: "Each phase was a branch, so the history reads as a sequence of reviewable steps.",
    items: [
      {
        id: "s1",
        label: "Phase 1",
        title: "Foundation",
        summary: "Make the code understandable and fast before changing anything visible.",
        points: [
          "Reorganized the code into browser, UI and section folders, with all content moved into data files.",
          "Removed dead code left from an abandoned game-developer version, a router the page didn't need, and a committed build cache.",
          "Shrank the 24 MB headshot to 152 KB, and brought the linter from 573 problems to zero.",
        ],
      },
      {
        id: "s2",
        label: "Phase 2",
        title: "A browser that works",
        summary: "Real tabs, history and an address bar, and the end of the duplicated mobile components.",
        points: [
          "The useBrowserNav hook, and a mobile menu that actually opens (the old hamburger did nothing).",
          "Merged the separate desktop and mobile version of each section into one responsive component.",
          "Tab jumps now land just below the browser chrome instead of on blank space.",
        ],
      },
      {
        id: "s3",
        label: "Phase 3",
        title: "Polish and accessibility",
        summary: "Details and structure.",
        points: [
          "Proper headings and landmarks, visible focus rings, and a no-JavaScript fallback.",
          "Timeline markers, project links and equal-height project cards.",
        ],
      },
      {
        id: "s4",
        label: "Phase 4",
        title: "Content from my resume",
        summary: "The old content was years out of date, so everything was rewritten from the current resume.",
        points: [
          "Experience, education, skills and projects replaced, with the older non-resume jobs removed.",
          "A bio written only from what the resume says.",
        ],
      },
      {
        id: "s5",
        label: "Phase 5",
        title: "Design",
        summary: "Make it feel like Chrome, and make it readable.",
        points: [
          "A tab strip modelled on Chrome: pill tabs that turn blue on hover, with the active tab blending into the toolbar.",
          "System font for body text, a scrolling icon row for skills, a new hero and a Contact tab.",
          "Fixed a carousel that ran out of icons on wide screens.",
        ],
      },
      {
        id: "s6",
        label: "Phase 6",
        title: "Project pages",
        summary: "A page for each project, opened as a browser tab.",
        points: [
          "Case studies for Commit, Trackify and this site, with real screenshots and the decisions behind each project.",
          "Routing for /projects/<name>, tabs you can close, and prerendered routes so every link works on a static host.",
        ],
      },
    ],
  },
};
