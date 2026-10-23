import today from "../../assets/projects/commit/today.jpg";
import form from "../../assets/projects/commit/form.jpg";
import upcoming from "../../assets/projects/commit/upcoming.jpg";
import calendar from "../../assets/projects/commit/calendar.jpg";
import review from "../../assets/projects/commit/review.jpg";
import repeating from "../../assets/projects/commit/repeating.jpg";
import settings from "../../assets/projects/commit/settings.jpg";
import widgetsHome from "../../assets/projects/commit/widgets-home.jpg";
import widgetsLock from "../../assets/projects/commit/widgets-lock.jpg";

// Everything here comes from the project's own plan, CLAUDE.md and pull request
// descriptions (the repository is private).
export const commit = {
  slug: "commit",
  tagline:
    "An iPhone app for keeping my word: a to-do list where the things I promised can't quietly slide to tomorrow.",

  facts: [
    { label: "Role", value: "Solo developer" },
    { label: "Built", value: "October 2026, in 11 phases and 15 pull requests" },
    { label: "Platform", value: "iPhone, iOS 17 and up (widgets target iOS 18)" },
    {
      label: "Stack",
      value:
        "Swift, SwiftUI, SwiftData, WidgetKit, App Intents, EventKit, local notifications",
    },
    {
      label: "Size",
      value: "About 8,400 lines of Swift, with 174 package tests and 33 UI tests",
    },
    { label: "Source", value: "Private repository" },
  ],

  overview: [
    "Commit is a personal accountability app. Instead of letting an overdue task slide quietly to tomorrow, it has a MUST DO category for the things I said I would do. A MUST DO is pinned at the top, and if I miss it, it stays there in red with the number of days overdue until I do it or honestly drop it.",
    "Everything else is a normal to-do organized by date: a Today screen, an Upcoming screen that works as a list or a calendar showing my phone's events alongside my tasks, repeating tasks, Home Screen and lock screen widgets, daily reminders, and a Review tab that shows how often I actually kept my word.",
    "There is no backend and no account. It is SwiftUI and SwiftData on the phone, and the app and its widgets share one database through an App Group.",
    "I wrote a plan with the locked decisions first, then built it in 11 phases. Each phase was its own branch, pull request and tag, with its tests passing before it merged. I built it with Claude Code, and the notes on this page come from those pull requests.",
  ],

  gallery: {
    title: "The app",
    intro:
      "Real screens from the iOS simulator, in a known sample-data state. Swipe sideways to see them all.",
    variant: "phone",
    items: [
      { src: today, alt: "The Today screen", caption: "Today: MUST DOs pinned at the top, then Overdue, then Today. Finished tasks stay put, crossed out, labeled early or late." },
      { src: form, alt: "The new task form", caption: "The task form: optional date, optional time, and the MUST DO toggle." },
      { src: upcoming, alt: "The Upcoming list", caption: "Upcoming as a list: the next seven days always show, so there's somewhere to drop a task." },
      { src: calendar, alt: "The Upcoming calendar", caption: "Upcoming as a calendar: a month grid, with my phone's calendar events and my tasks together." },
      { src: repeating, alt: "The Repeating tab", caption: "Repeating tasks, with edit, pause and delete." },
      { src: settings, alt: "The Settings screen", caption: "Settings: reminder times, and the countdown for the free-account weekly renewal." },
      { src: review, alt: "The Review screen", caption: "Review: streaks, and how many MUST DOs were kept, late, missed or dropped." },
      { src: widgetsHome, alt: "Home Screen widgets", caption: "Home Screen widgets: a count that turns red when overdue, and a list you can tap to complete." },
      { src: widgetsLock, alt: "Done states and lock screen widgets", caption: "The all-done states, and the lock screen widgets." },
    ],
  },

  architecture: {
    title: "How it works",
    intro:
      "A task only has a due day. Every time a screen draws, it works out which section each task belongs to from that day and the clock. Nothing is ever moved, so a task can't be left in the wrong place by an edit or a midnight rollover. The pieces:",
    items: [
      {
        title: "CommitCore: the rules",
        body: "A local Swift package shared by the app and the widget. It holds the models (TaskItem, RecurrenceRule), the shared store, and the pure logic: section grouping, day stamps, the recurrence generator, the notification planner, the calendar day layout and backups.",
      },
      {
        title: "The app: the screens",
        body: "SwiftUI views for Today, Upcoming (list and calendar), Review, Repeating and Settings, plus a read-only EventKit bridge for calendar events. The views only draw what CommitCore decides.",
      },
      {
        title: "The widget: the glanceable part",
        body: "Home Screen and lock screen widgets, and two App Intents: complete a task from the widget, and an Add Task control for Control Center, the Action Button and Siri. A Shared folder is compiled into both targets.",
      },
      {
        title: "One database, no server",
        body: "SwiftData in an App Group container, so the app and the widget read the same data. Every property has a default, so adding a field later migrates automatically. Nothing leaves the phone.",
      },
    ],
  },

  decisionsIntro:
    "The decisions that shaped the app, including one the original plan got wrong.",
  decisions: [
    {
      title: "Sections are computed, never moved",
      body: "A task has one due day. Each render derives its section (MUST DO, Overdue, Today, Upcoming, Someday, Completed) from that day and the clock, so there is no state that can drift out of sync.",
    },
    {
      title: "A MUST DO never quietly demotes",
      body: "This is the point of the app. An overdue MUST DO stays pinned and red with \"N days overdue\". The only ways out are to do it, or to drop it with an honest reason, which keeps it as a record. A MUST DO can be dropped but never deleted.",
    },
    {
      title: "Logic in a package, thin views",
      body: "All the rules live in CommitCore with no UI, so they run under swift test in seconds with no simulator: 174 tests. The SwiftUI views just draw the results, and the widget reuses the same code.",
    },
    {
      title: "Repeating tasks are real rows, generated ahead",
      body: "A generator creates tasks from today through 14 days out, and is safe to run on every launch. A marker on each rule records how far it has generated, so a deleted or moved occurrence never respawns and a long gap never creates tasks in the past.",
    },
    {
      title: "Dates are calendar days (the plan was wrong)",
      body: "The plan stored dates as start-of-day in the phone's time zone. Flying from Indiana to Chicago made tasks show a day early, marked them late, and counted a push when moved back. The fix stores a due day as midnight UTC of that calendar day, so it reads the same in every zone. It needed no data migration, because reading rounds to the nearest UTC midnight and decodes both old and new values.",
    },
    {
      title: "Times of day have no time zone",
      body: "A due time is minutes after midnight, so 5:30 PM stays 5:30 PM wherever the phone is. Calendar events, in contrast, are real moments (5 PM Eastern is 4 PM Central). Overdue stays day-based: a time says when I plan to do it, not when it becomes late.",
    },
    {
      title: "Rebuild every reminder on every change",
      body: "A notification's text is fixed when it is scheduled, so a pure, tested planner rebuilds all pending reminders after every save, launch and return to the app, staying under iOS's limit of 64. The app-renewal reminder is based on the install date, because the first version reset it on every launch and would never have fired for someone who opens the app daily.",
    },
    {
      title: "ScrollView, not List",
      body: "SwiftUI's List refused to accept drops in every form tried, so Today and Upcoming are scroll views of section cards with a custom swipe row. UI tests that perform real drags and swipes in the simulator are what found it, along with hidden swipe buttons leaking into accessibility.",
    },
    {
      title: "Read the phone's calendar instead of syncing one",
      body: "Calendar mode reads events through EventKit, read-only. A Google account added in iOS Settings shows up automatically, so there is no Google login, no sync code and nothing stored in the app's database.",
    },
    {
      title: "Every screen can be launched in a known state",
      body: "Debug launch arguments (seed sample data, start on a tab, open the calendar with sample events, preview the widgets, start empty) put the app in any state without tapping. They power the UI tests, and they are how the screenshots on this page were captured.",
    },
  ],

  phases: {
    title: "How it was built, phase by phase",
    intro:
      "Each phase was a branch, a pull request and a tag. Open one to see what it added, the decisions made along the way, and how it was tested.",
    items: [
      {
        id: "p0",
        label: "Phase 0",
        title: "Xcode project setup",
        summary: "The app and the widget extension, wired to one shared App Group so both can read the same database.",
        points: [
          "Two targets: the Commit app and the widget extension, with bundle IDs and the App Group in their entitlements.",
          "A written project plan went into the repo: the goal, the locked decisions, the data model and the phases the history follows.",
        ],
        tests: "Builds the app and the widget extension. No tests yet.",
      },
      {
        id: "p1",
        label: "Phase 1",
        title: "Models, shared container and section logic",
        summary: "The data model, the shared database and the pure rules that decide which section every task is in.",
        points: [
          "CommitCore, a local Swift package shared by the app and the widget.",
          "TaskItem and RecurrenceRule, with a default on every property so new fields migrate automatically.",
          "One SwiftData container stored in the App Group, with an in-memory mode for tests.",
          "TaskSections: pure grouping into MUST DO, Overdue, Today, Upcoming, Someday and Completed today. Overdue MUST DOs never demote.",
        ],
        tests: "22 package tests: sorting, overdue rollover at midnight, all-done edge cases, a model round trip.",
      },
      {
        id: "p2",
        label: "Phase 2",
        title: "The Today screen",
        summary: "Every section, completing and deleting tasks, and early/late tracking.",
        points: [
          "A Theme (colors, fonts, spacing in one place, shared with the widget later) and a Clock that refreshes \"today\" on foreground and at midnight.",
          "MUST DO, Overdue, Today and \"Ahead of schedule\" sections. Each finished task is labeled, like \"Done 2 days late\" or \"Done 1 day early\".",
          "Design change during the phase: instead of one catch-all \"Done today\" list, finished tasks stay in their own section, crossed out.",
          "Empty and all-done states (\"You finished everything. Good job.\").",
        ],
        tests: "32 package tests.",
        shot: { src: today, alt: "The Today screen" },
      },
      {
        id: "p3",
        label: "Phase 3",
        title: "Add/Edit form, dropping and soft delete",
        summary: "Create and edit tasks, drop a MUST DO honestly, and recover deleted tasks.",
        points: [
          "A task form: title, optional date (no date means Someday), a MUST DO toggle that needs a date, and notes.",
          "Pushing a task to a later day adds to its \"pushed N times\" count.",
          "Drop, with an optional reason, keeps the task as a record. A MUST DO can only be dropped, never deleted.",
          "Soft delete: deleted tasks are hidden for 30 days, then purged.",
        ],
        tests: "43 package tests: edit and push rules, dropping, trash and restore, the purge window.",
        shot: { src: form, alt: "The new task form" },
      },
      {
        id: "p4",
        label: "Phase 4",
        title: "Upcoming, drag and drop, swipe actions",
        summary: "The Upcoming tab, and moving tasks around by dragging them.",
        points: [
          "Upcoming always shows the next 7 days, so there is somewhere to drop a task.",
          "Drag a task onto MUST DO to promote it, or onto a day or Someday to reschedule it. The target outlines itself and shows a hint.",
          "SwiftUI's List refused to accept drops, so the screens became scroll views of section cards with a custom swipe row.",
          "A UI test target that performs real drags, swipes and taps in the simulator.",
        ],
        tests: "46 package tests and 10 UI tests. The UI tests found the real bugs: drops silently failing inside a List, and hidden swipe buttons exposed to accessibility.",
        shot: { src: upcoming, alt: "The Upcoming list" },
      },
      {
        id: "p5",
        label: "Phase 5",
        title: "Repeating tasks",
        summary: "Tasks that repeat, built as real rows generated ahead of time.",
        points: [
          "The generator creates tasks from today through 14 days ahead, idempotently.",
          "A marker on each rule means a deleted or moved occurrence never respawns, and a long gap never creates tasks in the past.",
          "Editing a rule's schedule rebuilds its upcoming open tasks; editing only the title or notes updates them in place. Finished and past tasks are never touched.",
          "A repeat picker in the form, and a Repeating tab with edit, pause and delete.",
          "Seeded on first launch: a weekly MUST DO to renew the app, since a free Apple ID build expires after 7 days.",
        ],
        tests: "67 package tests and 13 UI tests.",
        shot: { src: repeating, alt: "The Repeating tab" },
      },
      {
        id: "p6",
        label: "Phase 6",
        title: "Notifications and Settings",
        summary: "Local reminders that stay in step with your tasks, and the Settings tab.",
        points: [
          "A pure notification planner: for each of the next 7 days, a morning list (MUST DOs first, overdue flagged), then afternoon and evening reminders of what's left, or a congratulation. Days with nothing are skipped.",
          "A scheduler rebuilds every pending reminder on every save, launch and return to the app.",
          "A renewal reminder the evening before the free-account build expires. The first plan reset its timer on every launch, which would never fire for someone who opens the app daily, so it uses the install date.",
          "Settings: reminder times, a view of exactly which reminders are queued, and Recently Deleted.",
        ],
        tests: "85 package tests and 16 UI tests, including one that accepts the real system permission prompt and checks that reminders were scheduled.",
        shot: { src: settings, alt: "The Settings screen" },
      },
      {
        id: "p7",
        label: "Phase 7",
        title: "Widgets",
        summary: "Home Screen and lock screen widgets, and an Add Task control.",
        points: [
          "A tested snapshot of today's MUST DOs feeds every widget.",
          "Home Screen small and medium widgets (with tap-to-complete circles), and lock screen circular, rectangular and inline widgets.",
          "Tapping a circle completes the task, rebuilds reminders and refreshes the widgets. The timeline refreshes at midnight and at reminder times.",
          "An Add Task control for Control Center, the Action Button and Siri.",
        ],
        tests: "92 package tests and 17 UI tests. A debug-only screen renders the real widget views at widget sizes for review. Not yet exercised on a real Home Screen by automated tests, so that check is on the device.",
        shot: { src: widgetsHome, alt: "Home Screen widgets" },
      },
      {
        id: "p8",
        label: "Phase 8",
        title: "Review, backup and polish",
        summary: "How I'm doing on my word, a safety net for my data, and finishing touches.",
        points: [
          "A Review tab: streaks, the MUST DO record over 7 days, 30 days or all time (kept, late, missed, dropped), what I push back most, a history by day, and dropped tasks with their reasons.",
          "Backup: export everything as JSON through the Files picker, and import with Merge or Replace. The \"last backup\" label turns orange after a week.",
          "A haptic on completing a task, a streak badge, and a new app icon in light, dark and tinted.",
        ],
        tests: "115 package tests and 22 UI tests.",
        shot: { src: review, alt: "The Review screen" },
      },
      {
        id: "fix",
        label: "Fix",
        title: "Dates no longer move when the time zone changes",
        summary: "Tasks set for Oct 9 in Indiana showed as Oct 8 after travelling to Chicago, were marked late, and counted a push when moved back.",
        points: [
          "Cause: a due date was stored as midnight in the phone's zone at the time, then read back as an instant in whatever zone the phone was in later.",
          "Fix: date-only values are stored as a calendar day, midnight UTC, so they read the same everywhere.",
          "No data migration: reading rounds to the nearest UTC midnight, which decodes both the new format and everything earlier versions saved.",
          "The day a task was completed is recorded, so \"on time\" can't become \"late\" after travelling east. The app also refreshes the moment the time zone changes.",
        ],
        tests: "131 package tests, 16 of them new: eight zones from Honolulu to Sydney, values saved by earlier versions, daylight saving, and repeating tasks staying idempotent across a zone change.",
      },
      {
        id: "p9",
        label: "Phase 9",
        title: "Due times",
        summary: "Tasks can be planned for a time of day, so they read like events. This is the groundwork for the calendar.",
        points: [
          "An optional due time and length on tasks and repeating tasks, stored as minutes after midnight with no time zone.",
          "A time belongs to a day: moving a task keeps it, and sending it to Someday drops it.",
          "Within a day, timed tasks come first in time order. Reminders fire at a task's time, capped at 30 to stay under iOS's pending limit.",
          "Widgets and backups show and keep times, and older backups still load.",
        ],
        tests: "149 package tests and 24 UI tests.",
      },
      {
        id: "p10",
        label: "Phase 10",
        title: "Calendar view with my phone's events",
        summary: "Upcoming gets a Calendar mode: a month grid, and below it the selected day with events and tasks together.",
        points: [
          "A month grid with colored dots (blue for events, indigo for an open MUST DO, red for overdue, green for all done).",
          "A day laid out as all-day events, \"still open from earlier\", anytime tasks, and a timeline where events and timed tasks sit side by side. Overlapping items share the width; events crossing midnight are clipped to each day.",
          "Google Calendar without a Google login: events are read through EventKit, read-only, so any account added in iOS Settings shows up.",
          "A clear permission flow, with an \"Open iOS Settings\" button if access was refused.",
        ],
        tests: "174 package tests (25 new) and 31 UI tests.",
        shot: { src: calendar, alt: "The Upcoming calendar" },
      },
      {
        id: "after",
        label: "After Phase 10",
        title: "Polish",
        summary: "Small fixes found by using the app.",
        points: [
          "Today looked blank with no tasks, because the empty-state overlay never rendered over an empty scroll view. It is now an in-content empty state with a sun icon, the next upcoming task and an Add button.",
          "Commit now asks iOS to sync calendar accounts when it opens and on pull-to-refresh, so Google Calendar edits show up without opening the Calendar app.",
          "Project notes for future sessions: layout, rules, test commands and the debug launch arguments.",
        ],
        tests: "174 package tests and 33 UI tests.",
      },
    ],
  },

  next: {
    title: "What's not done",
    items: [
      "Writing tasks into the Google or iOS calendar. I deliberately deferred it, so calendar events are read-only for now.",
      "Real-device checks: widgets on an actual Home Screen and live Google Calendar syncing can't be verified by the automated tests, so they have to be checked on a phone.",
      "Distribution: it is signed with a free Apple ID, so it needs re-running from Xcode weekly, which is why the app reminds me.",
    ],
  },
};
