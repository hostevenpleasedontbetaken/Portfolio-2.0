import { useCallback, useEffect, useRef, useState } from "react";

const SCROLL_IDLE_MS = 150;
const PROJECT_PATH = /^\/projects\/([a-z0-9-]+)\/?$/;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const currentUrl = () => {
  const { pathname, search, hash } = window.location;
  return `${pathname}${search}${hash}`;
};

const slugFromPath = (pathname, validSlugs) => {
  const match = PROJECT_PATH.exec(pathname);
  return match && validSlugs.includes(match[1]) ? match[1] : null;
};

// Drives the fake browser chrome.
//
// Home page (one long scroll):
// - Tabs scroll to a section and push a real history entry (`/#section`).
// - The section in view is mirrored into the URL (replaceState, so manual
//   scrolling doesn't fill the history) and into the address bar.
//
// Project pages (`/projects/<slug>`):
// - Opening a project adds a tab and pushes a real history entry. The home page
//   stays mounted (just hidden), so its scroll position and animations survive.
// - Closing the project tab goes back to the Projects section.
//
// Back/forward use the real history; `index`/`last` are stored in history.state
// so the buttons know when they have nowhere to go.
//
// `ids` are the home sections in page order (the first one is "home").
// `scrollRef` is the scrolling element. `projectSlugs` are the valid slugs.
export function useBrowserNav(ids, scrollRef, projectSlugs = []) {
  const homeId = ids[0];
  const [activeId, setActiveId] = useState(homeId);
  const [projectSlug, setProjectSlug] = useState(() =>
    slugFromPath(window.location.pathname, projectSlugs)
  );
  const [openProjects, setOpenProjects] = useState(() => {
    const slug = slugFromPath(window.location.pathname, projectSlugs);
    return slug ? [slug] : [];
  });
  const [position, setPosition] = useState(() => {
    const index = window.history.state?.index ?? 0;
    return { index, last: index };
  });

  // Read by long-lived listeners, which would otherwise see a stale value.
  const projectSlugRef = useRef(projectSlug);
  useEffect(() => {
    projectSlugRef.current = projectSlug;
  }, [projectSlug]);

  // True while a programmatic scroll is running, so the scroll observer
  // doesn't overwrite the URL with every section we pass on the way. It is
  // cleared once the scroll area has been idle for SCROLL_IDLE_MS.
  const isScrolling = useRef(false);
  const scrollTimer = useRef(0);
  // A section to scroll to once the home page is visible again.
  const pendingSection = useRef(null);

  const armScrollIdleTimer = useCallback(() => {
    window.clearTimeout(scrollTimer.current);
    scrollTimer.current = window.setTimeout(() => {
      isScrolling.current = false;
    }, SCROLL_IDLE_MS);
  }, []);

  const urlFor = useCallback(
    (id) => (id === homeId ? "/" : `/#${id}`),
    [homeId]
  );

  const scrollToSection = useCallback(
    (id, behavior) => {
      const section = document.getElementById(id);
      if (!section) return;

      const smooth = behavior === "smooth" && !prefersReducedMotion();
      isScrolling.current = true;
      armScrollIdleTimer();

      section.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "start",
      });
      setActiveId(id);
    },
    [armScrollIdleTimer]
  );

  // Leaves a project page for the home page. The sections can't be scrolled to
  // while they are hidden, so the scroll happens in the effect below.
  const showHome = useCallback((id) => {
    pendingSection.current = { id, behavior: "auto" };
    setActiveId(id);
    setProjectSlug(null);
  }, []);

  useEffect(() => {
    if (projectSlug) {
      scrollRef.current?.scrollTo({ top: 0 });
    } else if (pendingSection.current) {
      const { id, behavior } = pendingSection.current;
      pendingSection.current = null;
      scrollToSection(id, behavior);
    }
  }, [projectSlug, scrollRef, scrollToSection]);

  const pushEntry = useCallback((url) => {
    if (url === currentUrl()) return;
    const index = (window.history.state?.index ?? 0) + 1;
    window.history.pushState({ index }, "", url);
    setPosition({ index, last: index });
  }, []);

  const goTo = useCallback(
    (id) => {
      if (projectSlugRef.current) showHome(id);
      else scrollToSection(id, "smooth");
      pushEntry(urlFor(id));
    },
    [showHome, scrollToSection, pushEntry, urlFor]
  );

  const openProject = useCallback(
    (slug) => {
      if (!projectSlugs.includes(slug)) return;
      setOpenProjects((open) => (open.includes(slug) ? open : [...open, slug]));
      setProjectSlug(slug);
      pushEntry(`/projects/${slug}`);
    },
    [projectSlugs, pushEntry]
  );

  const closeProject = useCallback(
    (slug) => {
      setOpenProjects((open) => open.filter((item) => item !== slug));
      if (projectSlugRef.current === slug) goTo("projects");
    },
    [goTo]
  );

  // Back / forward (and manual hash edits).
  useEffect(() => {
    const onPopState = (event) => {
      setPosition((current) => ({
        ...current,
        index: event.state?.index ?? 0,
      }));

      const slug = slugFromPath(window.location.pathname, projectSlugs);
      if (slug) {
        setOpenProjects((open) => (open.includes(slug) ? open : [...open, slug]));
        setProjectSlug(slug);
        return;
      }

      const id =
        ids.find((candidate) => `#${candidate}` === window.location.hash) ??
        homeId;
      if (projectSlugRef.current) showHome(id);
      else scrollToSection(id, "smooth");
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [ids, homeId, projectSlugs, showHome, scrollToSection]);

  // Landing on a URL like /#projects.
  useEffect(() => {
    if (slugFromPath(window.location.pathname, projectSlugs)) return;
    const id = ids.find((candidate) => `#${candidate}` === window.location.hash);
    if (id && id !== homeId) scrollToSection(id, "auto");
  }, [ids, homeId, projectSlugs, scrollToSection]);

  // Track which section is in view while scrolling.
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const inBand = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) inBand.add(entry.target.id);
          else inBand.delete(entry.target.id);
        });
        if (isScrolling.current || projectSlugRef.current) return;

        const current = [...ids].reverse().find((id) => inBand.has(id));
        if (!current) return;

        setActiveId(current);
        const url = urlFor(current);
        if (url !== currentUrl()) {
          window.history.replaceState(window.history.state, "", url);
        }
      },
      // A thin band a third of the way down the scroll area.
      { root, rootMargin: "-30% 0px -65% 0px" }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    const onScroll = () => {
      if (isScrolling.current) armScrollIdleTimer();
    };
    root.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      root.removeEventListener("scroll", onScroll);
    };
  }, [ids, scrollRef, urlFor, armScrollIdleTimer]);

  useEffect(() => () => window.clearTimeout(scrollTimer.current), []);

  const path = projectSlug
    ? `/projects/${projectSlug}`
    : activeId === homeId
      ? ""
      : `/#${activeId}`;

  return {
    activeId,
    activeTab: projectSlug ? `project:${projectSlug}` : activeId,
    homeId,
    projectSlug,
    openProjects,
    address: `${window.location.host}${path}`,
    goTo,
    openProject,
    closeProject,
    back: () => window.history.back(),
    forward: () => window.history.forward(),
    reload: () => window.location.reload(),
    canGoBack: position.index > 0,
    canGoForward: position.index < position.last,
  };
}
