import overview from "../../assets/projects/log-analyzer/overview.jpg";
import incidents from "../../assets/projects/log-analyzer/incidents.jpg";
import entries from "../../assets/projects/log-analyzer/entries.jpg";
import drawer from "../../assets/projects/log-analyzer/drawer.jpg";

// From the project's repository: README, docs/AI.md, docs/RESULTS.md, docs/DECISIONS.md
// and its pull requests. The screenshots are the local build on the full-day sample log.
export const logAnalyzer = {
  slug: "log-analyzer",
  tagline:
    "Upload a company's web proxy logs and get what a security analyst needs first: a timeline, incidents ranked by confidence, and a plain-English reason for every flagged line.",

  facts: [
    { label: "Role", value: "Solo developer (built as a take-home assessment)" },
    { label: "Built", value: "October 31 to November 2, 2026, in 28 pull requests" },
    {
      label: "Front end",
      value: "React 19, TypeScript, TanStack Query, React Router, Recharts, shadcn/ui, Tailwind CSS",
    },
    {
      label: "Back end",
      value: "Python, Flask, SQLAlchemy and Alembic, PostgreSQL, pandas, scikit-learn",
    },
    {
      label: "Infrastructure",
      value: "Docker Compose locally; Firebase Hosting and Auth, Cloud Run, Neon Postgres and GitHub Actions in production",
    },
    {
      label: "Size",
      value: "About 2,500 lines of back end, 3,100 of front end and 1,700 of sample-data generator, with 262 tests",
    },
  ],

  overview: [
    "The app takes Zscaler web proxy logs, the record of every website a company's employees visited, and turns them into something a security analyst can act on. It shows a summary and a timeline of the traffic, groups suspicious activity into incidents ranked by confidence, and highlights every flagged log line with a sentence explaining why it was flagged.",
    "Detection has three layers: rules for what Zscaler itself already marked as bad, statistics for behavior that's unusual for that particular user, and an Isolation Forest, an unsupervised machine-learning model that catches unusual combinations nobody wrote a rule for. Every finding comes with its numbers, a confidence and the exact log lines behind it.",
    "No real Zscaler logs are public, so I wrote a generator that simulates a company's day, plants 8 attacks and 4 harmless look-alikes, and writes an answer key. Measured against it, all 8 attacks reach High confidence and none of the look-alikes do. A test fails if those results go stale.",
    "I settled the design phase by phase before writing code, then built it in small pull requests that I reviewed and merged one at a time, working with Claude Code. It runs locally with one docker command and is deployed entirely on free tiers.",
  ],

  gallery: {
    title: "The app",
    intro: "The analysis of the full-day sample log: 18,654 entries from 40 employees.",
    variant: "wide",
    items: [
      { src: overview, alt: "The Overview tab", caption: "Overview: incidents by confidence, flagged entries, and requests over time. The 14:30 spike is a scan; the thin red line all day is malware checking in." },
      { src: incidents, alt: "The Incidents tab", caption: "Incidents: each one lists the findings behind it. Here random domains, regular check-ins and an unusual hour (machine learning) combine to 99%." },
      { src: entries, alt: "The Entries tab filtered to one incident", caption: "Entries: the log lines behind an incident, highlighted with a colored bar and a confidence badge, never color alone." },
      { src: drawer, alt: "The detail panel for one log entry", caption: "One entry: why it was flagged, then every field of the log line." },
    ],
  },

  architecture: {
    title: "How it works",
    intro:
      "An upload is parsed, analyzed and stored in one request (about 2 seconds for 18,000 lines). Everything the pages show afterwards comes straight from the database.",
    items: [
      {
        title: "Parsing",
        body: "A streaming pipeline: unzip, split lines, strip syslog prefixes, decode JSON and convert each field. A bad field becomes empty with a warning, a bad line is skipped and counted, and a file that isn't a Zscaler web log is rejected with a clear message.",
      },
      {
        title: "Detection",
        body: "13 detectors across rules, per-user statistics and an Isolation Forest, all plain Python on a pandas DataFrame with no network calls. Findings about the same user within 30 minutes become one incident.",
      },
      {
        title: "Storage and API",
        body: "Flask with 10 REST endpoints and PostgreSQL. Log lines are bulk-inserted with COPY, summary stats are computed once and stored, and the log table is filtered and paginated in SQL, so the browser never holds the whole file.",
      },
      {
        title: "Front end",
        body: "React with TanStack Query. Every filter, page, tab and open entry lives in the URL, which is what lets the timeline and incidents link straight into the matching log lines.",
      },
      {
        title: "Deployment",
        body: "Firebase Hosting serves the app and forwards /api to Flask on Cloud Run, so there's no CORS. Database migrations run as a job before each release, and the only secrets live in Secret Manager.",
      },
    ],
  },

  decisionsIntro: "The choices that mattered most, and why.",
  decisions: [
    {
      title: "No LLM in the detection path",
      body: "Log content is attacker-controlled, so a model reading it could be prompt-injected. Keeping detection deterministic also makes it free to run, reproducible and testable. An LLM would fit later as a summarizer on top of the structured findings.",
    },
    {
      title: "Independent evidence adds up; one kind doesn't double-count",
      body: "Each finding belongs to a kind of evidence (known-bad, volume, timing and so on). Within a kind only the strongest counts; across kinds they combine as 1 minus the chance that every one is a false alarm. Three independent signals at 90%, 77% and 70% give 99%.",
    },
    {
      title: "Unusual isn't malicious",
      body: "Machine learning alone is capped below High confidence. It raises confidence when another detector agrees about the same person, which keeps a harmless but odd hour, like an IT script at 2 AM, at Medium.",
    },
    {
      title: "Isolation Forest on active user-hours",
      body: "One row per user per active hour, 10 numbers each. Including idle overnight hours made every ordinary workday look strange. Each result is explained by the three numbers furthest from typical, because an analyst can't check a bare score.",
    },
    {
      title: "Baselines from the median",
      body: "There's no history to learn from and the attack is inside the data, so \"normal\" uses the median and its typical spread rather than the average, which one huge upload would drag upward.",
    },
    {
      title: "Measured, not claimed",
      body: "The sample generator was written separately from the detectors and includes look-alikes for each attack plus a clean file. Results are regenerated by one command and checked by a test. Since the same project wrote both, I treat them as an upper bound.",
    },
    {
      title: "Explanations a person can verify",
      body: "Every flag says what was found, with the actual numbers, and links to exactly the log lines involved. Confidence (how sure) and severity (how bad if real) are shown separately.",
    },
    {
      title: "Security from the start",
      body: "Every API route checks the sign-in token, and someone else's upload returns 404. \"Try the demo\" signs visitors in as read-only guests who can open one shared sample and nothing else. Because anyone can create an account, load is capped on the server: 3 uploads per person, a ceiling on total stored data, an upload rate limit, and uploads deleted after 7 days. Log text is only ever shown as plain text, under a Content Security Policy. Uploads are size-limited and safe against gzip bombs, and the git history was scanned for secrets before going public.",
    },
  ],

  phases: {
    title: "How it was built, milestone by milestone",
    intro:
      "Each milestone was one or more small pull requests, reviewed and merged before the next began. They're numbered as planned and listed in the order they were built, which is why deployment (M1) comes after detection. Open one to see what it added.",
    items: [
      {
        id: "m0",
        label: "M0",
        title: "Plan and foundations",
        summary: "The written plan, then a running skeleton: sign in, call the API, see the reply.",
        points: [
          "Decisions for every phase written down first: log format, data model, API, parsing, detection, front end, Docker, deployment.",
          "A Flask app that verifies Firebase sign-in tokens on every request, and a React app with a login page and a protected route.",
          "Docker Compose with Postgres, the Firebase Auth emulator, migrations, the API and the web app, so it runs with no accounts.",
          "GitHub Actions running the back-end, front-end and generator tests.",
        ],
      },
      {
        id: "m2",
        label: "M2",
        title: "Sample logs with an answer key",
        summary: "A seeded generator that simulates a company's day of web traffic.",
        points: [
          "40 employees with their own work hours, devices and sites, in Zscaler's real log format.",
          "8 planted attacks: malware generating random domains then checking in every minute, a compromised account, phishing, a malware download, scanning, policy probing and data exfiltration.",
          "Harmless look-alikes for the trickiest ones, and an answer key listing every attack line.",
        ],
        tests: "38 generator tests; regenerating gives byte-identical files.",
      },
      {
        id: "m3",
        label: "M3",
        title: "Data model",
        summary: "Six tables and the first migration.",
        points: [
          "Uploads, the original file, log entries, findings, which entries each finding covers, and incidents.",
          "Each entry stores its highest confidence, so highlighting needs no joins.",
        ],
      },
      {
        id: "m4",
        label: "M4",
        title: "Parsing and the API",
        summary: "Upload a file and get stats and paginated log lines back.",
        points: [
          "A streaming, tolerant parser with a sniff test for the wrong kind of file and limits on size, unzipped size and line count.",
          "Stats computed once at upload: totals, top 10 lists and a zero-filled timeline.",
          "Bulk inserts with Postgres COPY, duplicate detection by file hash, and a per-user upload quota.",
          "Endpoints for uploads, filtered and paginated entries, findings and incidents.",
        ],
      },
      {
        id: "m5",
        label: "M5",
        title: "Detection and evaluation",
        summary: "Rules, then statistics, then the Isolation Forest, each its own pull request, then measuring them.",
        points: [
          "Rules: named threats, risk scores, risky categories, a form sent to a phishing page, scripted clients, repeated blocks.",
          "Statistics: beaconing, unusual upload volume, request bursts, off-hours browsing, new devices, random-looking domains.",
          "The Isolation Forest with explanations, and confidence combining across kinds of evidence.",
          "An evaluation against the answer keys, written to a results file that a test keeps current.",
        ],
        tests: "All 8 attacks at High, every High incident real, no look-alike at High. Isolation Forest alone: 4 of its 5 most unusual hours are attacks.",
      },
      {
        id: "m1",
        label: "M1",
        title: "Deployment",
        summary: "Live on free tiers with one command.",
        points: [
          "Firebase Hosting in front, Flask on Cloud Run, Postgres on Neon.",
          "make deploy builds the image, runs migrations as a job, releases the API and publishes the front end.",
          "Cost guardrails: scale to zero, at most two instances, an image cleanup policy and a budget alert.",
        ],
      },
      {
        id: "m6",
        label: "M6",
        title: "The front end",
        summary: "Four pull requests: uploads, then the Overview, Incidents and Entries tabs.",
        points: [
          "Upload with real progress, \"Try a sample\" buttons, and a link to the existing analysis for a duplicate.",
          "The Overview with tiles that drill into the detail, and a timeline whose bars open their time window.",
          "Incidents with their evidence and a confidence filter.",
          "The log table with filters, highlighting and a detail panel, all driven by the URL.",
        ],
        tests: "85 front-end tests, plus every flow checked in a real browser.",
      },
      {
        id: "m7",
        label: "M7",
        title: "Docs and final checks",
        summary: "The write-up, and checking it all from scratch.",
        points: [
          "A README mapping every requirement to where it lives, and a write-up of the detection approach and its limits.",
          "A fresh clone run from nothing, the live site checked signed out, and a secrets scan of the full history.",
        ],
        tests: "262 tests in all: 139 back end, 85 front end, 38 generator.",
      },
    ],
  },

  next: {
    title: "What's not done",
    items: [
      "Validation on real, labeled logs. The results above come from synthetic data written alongside the detectors, so they're an upper bound.",
      "Per-user history across uploads. Right now \"normal\" is learned from each file on its own.",
      "Background processing for files bigger than 25 MB, and support for Zscaler's CSV and key=value log formats.",
      "Browser tests that run end to end, and an LLM layer that summarizes incidents on top of the findings.",
    ],
  },
};
