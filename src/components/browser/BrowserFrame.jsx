import { useEffect, useRef } from "react";
import { navigation, profile } from "../../data";
import { useBrowserNav } from "../../hooks/useBrowserNav";
import { BrowserNavContext } from "../../hooks/useBrowserNavContext";
import BrowserChrome from "./BrowserChrome";
import MobileToolbar from "./MobileToolbar";

const sectionIds = navigation.map((item) => item.id);
const baseTitle = `${profile.name} · ${profile.title}`;

// The "browser window" that every section is rendered inside of. The sections
// scroll inside it while the chrome stays pinned to the top (and, on phones,
// the toolbar to the bottom).
const BrowserFrame = ({ children }) => {
  const scrollRef = useRef(null);
  const nav = useBrowserNav(sectionIds, scrollRef);

  // Like a real tab, the page title follows the section in view.
  useEffect(() => {
    const tab = navigation.find((item) => item.id === nav.activeId);
    document.title =
      nav.activeId === nav.homeId || !tab
        ? baseTitle
        : `${tab.title} · ${profile.name}`;
  }, [nav.activeId, nav.homeId]);

  return (
    <BrowserNavContext.Provider value={nav}>
      <div className="h-screen w-screen flex flex-col items-center overflow-hidden bg-dark-4">
        <div className="bg-radial-gradient-white-weak relative mt-[1rem] border border-dark-5 rounded-3xl shadow-md mx-auto h-[95vh] w-[90vw] p-4">
          {/* Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-[0.1rem] bg-gradient-to-r from-transparent via-white to-transparent" />

          {/* Scrollable Section. scroll-pt matches the chrome height so section
              tops land just below it. */}
          <div
            ref={scrollRef}
            className="border border-dark-1 rounded-t-2xl relative bg-radial-gradient-white-weak h-full w-full overflow-y-auto scroll-pt-12 md:scroll-pt-28 scrollbar-thin scrollbar-webkit"
          >
            <div className="sticky top-0 z-20">
              <BrowserChrome nav={nav} />
            </div>

            <main>{children}</main>

            <div className="sticky bottom-0 left-0 right-0 z-20 md:hidden">
              <MobileToolbar nav={nav} />
            </div>
          </div>
        </div>
      </div>
    </BrowserNavContext.Provider>
  );
};

export default BrowserFrame;
