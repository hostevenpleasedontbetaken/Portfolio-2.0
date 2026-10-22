import TabBar from "./TabBar";
import Toolbar from "./Toolbar";
import BookmarksBar from "./BookmarksBar";

// The top of the browser window. Phones only get the toolbar (3rem tall);
// desktop adds the tab strip and bookmarks (7rem in total). The scroll area's
// scroll-padding in BrowserFrame must match these heights.
const BrowserChrome = ({ nav }) => (
  <div className="rounded-t-xl border-b-[0.1rem] border-b-mac-1 bg-mac-2 text-white">
    <div className="hidden md:block">
      <TabBar nav={nav} />
    </div>
    <Toolbar nav={nav} />
    <div className="hidden md:block">
      <BookmarksBar />
    </div>
  </div>
);

export default BrowserChrome;
