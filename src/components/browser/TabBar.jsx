import { navigation, projects } from "../../data";
import { CloseIcon, PathIcon } from "../ui/icons";

const trafficLights = ["text-dots-3", "text-dots-2", "text-dots-1"];

// The active tab is the same colour as the toolbar (mac-2, #424242) so it
// reads as one piece with it, and the small concave "flares" at its bottom
// corners are what Chrome draws where the tab meets the toolbar.
const activeTab =
  "z-10 h-full rounded-t-xl bg-mac-2 text-white " +
  "before:absolute before:bottom-0 before:-left-2 before:size-2 before:bg-[radial-gradient(circle_at_0_0,transparent_0.5rem,#424242_0.5rem)] " +
  "after:absolute after:bottom-0 after:-right-2 after:size-2 after:bg-[radial-gradient(circle_at_100%_0,transparent_0.5rem,#424242_0.5rem)]";

// Inactive tabs are a shorter pill that turns blue on hover.
const inactiveTab =
  "h-8 rounded-xl text-white/70 hover:bg-main-1/30 hover:text-white";

const projectIcon = navigation.find((item) => item.id === "projects").svgPaths;

// Lets the browser handle ctrl/cmd/shift clicks (open in a new tab/window).
const isPlainClick = (event) =>
  event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey;

// Desktop only: window buttons, one tab per page section, and a tab for each
// project that has been opened. Project tabs can be closed; the section tabs'
// close marks and the "+" are visual only.
const TabBar = ({ nav }) => {
  const tabs = [
    ...navigation.map((item) => ({
      key: item.id,
      title: item.title,
      paths: item.svgPaths,
      href: item.id === nav.homeId ? "/" : `/#${item.id}`,
      open: () => nav.goTo(item.id),
    })),
    ...nav.openProjects.map((slug) => ({
      key: `project:${slug}`,
      title: projects.find((project) => project.slug === slug)?.name ?? slug,
      paths: projectIcon,
      href: `/projects/${slug}`,
      open: () => nav.openProject(slug),
      close: () => nav.closeProject(slug),
    })),
  ];
  const activeIndex = tabs.findIndex((tab) => tab.key === nav.activeTab);

  return (
    <div className="flex h-11 items-end rounded-t-xl bg-dark-3 px-3">
      <div className="flex items-center gap-x-2 self-center pr-4" aria-hidden="true">
        {trafficLights.map((color) => (
          <svg key={color} viewBox="0 0 24 24" width="14" height="14" className={color}>
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        ))}
      </div>

      <nav aria-label="Tabs" className="flex h-9 min-w-0 flex-1 items-center">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          // No separator next to the active tab, like Chrome.
          const showSeparator = index > 0 && index !== activeIndex && index - 1 !== activeIndex;

          return (
            <div
              key={tab.key}
              className={`relative flex h-full min-w-0 max-w-[16rem] flex-1 items-center ${
                isActive ? "mx-2" : ""
              }`}
            >
              {!isActive && (
                <span
                  aria-hidden="true"
                  className={`h-4 w-px shrink-0 ${showSeparator ? "bg-white/20" : ""}`}
                />
              )}
              <a
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                onClick={(event) => {
                  if (!isPlainClick(event)) return;
                  event.preventDefault();
                  tab.open();
                }}
                className={`relative flex min-w-0 flex-1 items-center gap-x-2 pl-3 text-sm transition-colors duration-150 ${
                  tab.close ? "pr-8" : "pr-3"
                } ${isActive ? activeTab : inactiveTab}`}
              >
                <PathIcon paths={tab.paths} size={16} className="shrink-0" />
                <span className="truncate">{tab.title}</span>
                {!tab.close && (
                  <CloseIcon
                    size={12}
                    className="pointer-events-none ml-auto shrink-0 opacity-50"
                  />
                )}
              </a>
              {tab.close && (
                <button
                  type="button"
                  aria-label={`Close ${tab.title} tab`}
                  onClick={tab.close}
                  className="absolute right-1.5 z-20 inline-flex size-5 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/15 hover:text-white"
                >
                  <CloseIcon size={12} />
                </button>
              )}
            </div>
          );
        })}
      </nav>

      <span
        aria-hidden="true"
        className="ml-2 inline-flex size-8 shrink-0 items-center justify-center self-center rounded-full text-xl leading-none text-white/70"
      >
        +
      </span>
    </div>
  );
};

export default TabBar;
