import { navigation } from "../../data";
import { PathIcon } from "../ui/icons";

const trafficLights = ["text-dots-3", "text-dots-2", "text-dots-1"];

// Desktop only: window buttons plus one "tab" per page section. The strip is
// darker than the toolbar and the active tab matches the toolbar colour, so
// it reads as attached to it, like Chrome.
const TabBar = ({ nav }) => (
  <div className="flex h-10 items-end gap-x-1 rounded-t-xl bg-dark-3 px-2 pt-2">
    <div className="flex items-center gap-x-2 self-center px-3" aria-hidden="true">
      {trafficLights.map((color) => (
        <svg key={color} viewBox="0 0 24 24" width="14" height="14" className={color}>
          <circle cx="12" cy="12" r="10" fill="currentColor" />
        </svg>
      ))}
    </div>

    <nav aria-label="Sections" className="flex min-w-0 flex-1 items-end gap-x-1">
      {navigation.map((item) => {
        const isActive = nav.activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={isActive ? "page" : undefined}
            onClick={(event) => {
              event.preventDefault();
              nav.goTo(item.id);
            }}
            className={`flex h-full min-w-0 max-w-[13rem] flex-1 items-center gap-x-2 rounded-t-lg px-3 text-sm transition-colors duration-150 ${
              isActive
                ? "bg-mac-2 text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            <PathIcon paths={item.svgPaths} size={16} className="shrink-0" />
            <span className="truncate">{item.title}</span>
          </a>
        );
      })}
    </nav>
  </div>
);

export default TabBar;
