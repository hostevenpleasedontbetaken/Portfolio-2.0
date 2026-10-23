import { navigation } from "../../data";
import { CloseIcon, PathIcon } from "../ui/icons";

const trafficLights = ["text-dots-3", "text-dots-2", "text-dots-1"];

// Desktop only: window buttons plus one "tab" per page section, modelled on
// Chrome's tab strip: rounded tabs, a close mark, separators between inactive
// tabs and a "+" at the end. The close marks and "+" are visual only.
const TabBar = ({ nav }) => {
  const activeIndex = navigation.findIndex((item) => item.id === nav.activeId);

  return (
    <div className="flex h-11 items-center rounded-t-xl bg-dark-3 px-3">
      <div className="flex items-center gap-x-2 pr-4" aria-hidden="true">
        {trafficLights.map((color) => (
          <svg key={color} viewBox="0 0 24 24" width="14" height="14" className={color}>
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        ))}
      </div>

      <nav aria-label="Sections" className="flex min-w-0 flex-1 items-center">
        {navigation.map((item, index) => {
          const isActive = index === activeIndex;
          // No separator next to the active tab, like Chrome.
          const showSeparator = index > 0 && index !== activeIndex && index - 1 !== activeIndex;

          return (
            <div key={item.id} className="flex min-w-0 max-w-[16rem] flex-1 items-center">
              <span
                aria-hidden="true"
                className={`h-4 w-px shrink-0 ${showSeparator ? "bg-white/20" : ""}`}
              />
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  nav.goTo(item.id);
                }}
                className={`flex h-8 min-w-0 flex-1 items-center gap-x-2 rounded-xl px-3 text-sm transition-colors duration-150 ${
                  isActive
                    ? "bg-main-1/20 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <PathIcon paths={item.svgPaths} size={16} className="shrink-0" />
                <span className="truncate">{item.title}</span>
                <CloseIcon
                  size={12}
                  className="pointer-events-none ml-auto shrink-0 opacity-50"
                />
              </a>
            </div>
          );
        })}
      </nav>

      <span
        aria-hidden="true"
        className="ml-2 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-xl leading-none text-white/70"
      >
        +
      </span>
    </div>
  );
};

export default TabBar;
