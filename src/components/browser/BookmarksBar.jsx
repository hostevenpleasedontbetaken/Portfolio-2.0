import { links } from "../../data";
import { PathIcon } from "../ui/icons";

// Desktop only: external links shown like browser bookmarks.
const BookmarksBar = () => (
  <div className="flex h-7 items-center gap-x-1 px-3">
    {links.map((item) => (
      <a
        key={item.id}
        href={item.link}
        target={item.target}
        rel="noopener noreferrer"
        className="flex items-center gap-x-2 rounded-full px-3 py-1 text-sm text-white/80 transition-colors hover:bg-white/10"
      >
        <PathIcon paths={[item.path]} size={16} className="text-main-1" />
        {item.title}
      </a>
    ))}
  </div>
);

export default BookmarksBar;
