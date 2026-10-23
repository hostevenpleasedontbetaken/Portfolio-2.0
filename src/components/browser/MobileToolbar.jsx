import { useEffect, useRef, useState } from "react";
import { links, navigation, projects } from "../../data";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CloseIcon,
  MenuIcon,
  PathIcon,
} from "../ui/icons";

const iconButton =
  "inline-flex size-10 items-center justify-center rounded-full transition-colors hover:bg-white/10 disabled:opacity-40 disabled:hover:bg-transparent";

// Phones only: back / forward plus a menu listing the sections and links.
const MobileToolbar = ({ nav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsideClick = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const goTo = (id) => {
    setIsOpen(false);
    nav.goTo(id);
  };

  return (
    <div
      ref={rootRef}
      className="relative flex h-12 items-center rounded-b-xl bg-mac-2 px-2 text-light-2"
    >
      <button
        type="button"
        aria-label="Back"
        onClick={nav.back}
        disabled={!nav.canGoBack}
        className={iconButton}
      >
        <ArrowLeftIcon size={22} />
      </button>
      <button
        type="button"
        aria-label="Forward"
        onClick={nav.forward}
        disabled={!nav.canGoForward}
        className={iconButton}
      >
        <ArrowRightIcon size={22} />
      </button>

      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((open) => !open)}
        className={`${iconButton} ml-auto`}
      >
        {isOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute bottom-full right-2 mb-2 w-60 rounded-xl border border-mac-4 bg-mac-3 p-2 shadow-xl"
        >
          <nav aria-label="Sections">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={nav.activeTab === item.id ? "page" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  goTo(item.id);
                }}
                className={`flex items-center gap-x-3 rounded-lg px-3 py-2 ${
                  nav.activeTab === item.id
                    ? "bg-white/10 text-main-1"
                    : "hover:bg-white/10"
                }`}
              >
                <PathIcon paths={item.svgPaths} size={18} />
                {item.title}
              </a>
            ))}
          </nav>

          {nav.openProjects.length > 0 && (
            <>
              <div className="my-2 border-t border-mac-4" />
              <p className="px-3 pb-1 text-xs uppercase tracking-wide text-mac-1">
                Open tabs
              </p>
              {nav.openProjects.map((slug) => {
                const project = projects.find((item) => item.slug === slug);
                const isActive = nav.activeTab === `project:${slug}`;
                return (
                  <div key={slug} className="flex items-center">
                    <a
                      href={`/projects/${slug}`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={(event) => {
                        event.preventDefault();
                        setIsOpen(false);
                        nav.openProject(slug);
                      }}
                      className={`flex-1 rounded-lg px-3 py-2 ${
                        isActive ? "bg-white/10 text-main-1" : "hover:bg-white/10"
                      }`}
                    >
                      {project?.name ?? slug}
                    </a>
                    <button
                      type="button"
                      aria-label={`Close ${project?.name ?? slug} tab`}
                      onClick={() => {
                        setIsOpen(false);
                        nav.closeProject(slug);
                      }}
                      className="inline-flex size-9 items-center justify-center rounded-full hover:bg-white/10"
                    >
                      <CloseIcon size={14} />
                    </button>
                  </div>
                );
              })}
            </>
          )}

          <div className="my-2 border-t border-mac-4" />

          {links.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target={item.target}
              rel="noopener noreferrer"
              className="flex items-center gap-x-3 rounded-lg px-3 py-2 hover:bg-white/10"
            >
              <PathIcon paths={[item.path]} size={18} className="text-main-1" />
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileToolbar;
