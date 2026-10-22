import { navigation } from "../../data";
import { PathIcon } from "../ui/icons";

const trafficLights = ["text-dots-3", "text-dots-2", "text-dots-1"];

// Desktop only: window buttons plus one "tab" per page section.
const TabBar = ({ nav }) => (
  <div className="flex items-end gap-x-1 h-10 px-2 pt-2">
    <div className="flex items-center gap-x-2 self-center px-3" aria-hidden="true">
      {trafficLights.map((color) => (
        <svg key={color} viewBox="0 0 24 24" width="14" height="14" className={color}>
          <circle cx="12" cy="12" r="10" fill="currentColor" />
        </svg>
      ))}
    </div>

    <nav aria-label="Sections" className="flex flex-1 items-end gap-x-1 min-w-0">
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
                ? "bg-mac-3 text-white"
                : "bg-dark-2 text-white/80 hover:bg-white/10"
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
