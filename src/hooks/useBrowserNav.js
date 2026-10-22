import { useCallback, useEffect, useRef, useState } from "react";

const SCROLL_IDLE_MS = 150;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Drives the fake browser chrome for a single scrolling page.
//
// - Tabs scroll to a section and push a real history entry (`#section`).
// - The section in view is mirrored into the URL (replaceState, so manual
//   scrolling doesn't fill the history) and into the address bar.
// - Back/forward use the real history; `index`/`last` are stored in
//   history.state so the buttons know when they have nowhere to go.
//
// `ids` are the section ids in page order (the first one is "home").
// `scrollRef` is the scrolling element that contains the sections.
export function useBrowserNav(ids, scrollRef) {
  const homeId = ids[0];
  const [activeId, setActiveId] = useState(homeId);
  const [position, setPosition] = useState(() => {
    const index = window.history.state?.index ?? 0;
    return { index, last: index };
  });
  // True while a programmatic scroll is running, so the scroll observer
  // doesn't overwrite the URL with every section we pass on the way. It is
  // cleared once the scroll area has been idle for SCROLL_IDLE_MS.
  const isScrolling = useRef(false);
  const scrollTimer = useRef(0);

  const armScrollIdleTimer = useCallback(() => {
    window.clearTimeout(scrollTimer.current);
    scrollTimer.current = window.setTimeout(() => {
      isScrolling.current = false;
    }, SCROLL_IDLE_MS);
  }, []);

  const urlFor = useCallback(
    (id) => {
      const { pathname, search } = window.location;
      return `${pathname}${search}${id === homeId ? "" : `#${id}`}`;
    },
    [homeId]
  );

  const scrollToSection = useCallback((id, behavior) => {
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
  }, [armScrollIdleTimer]);

  const goTo = useCallback(
    (id) => {
      scrollToSection(id, "smooth");

      const url = urlFor(id);
      const { pathname, search, hash } = window.location;
      if (url === `${pathname}${search}${hash}`) return;

      const index = (window.history.state?.index ?? 0) + 1;
      window.history.pushState({ index }, "", url);
      setPosition({ index, last: index });
    },
    [scrollToSection, urlFor]
  );

  // Back / forward (and manual hash edits).
  useEffect(() => {
    const onPopState = (event) => {
      setPosition((current) => ({
        ...current,
        index: event.state?.index ?? 0,
      }));
      const id =
        ids.find((candidate) => `#${candidate}` === window.location.hash) ??
        homeId;
      scrollToSection(id, "smooth");
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [ids, homeId, scrollToSection]);

  // Landing on a URL like /#projects.
  useEffect(() => {
    const id = ids.find((candidate) => `#${candidate}` === window.location.hash);
    if (id && id !== homeId) scrollToSection(id, "auto");
  }, [ids, homeId, scrollToSection]);

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
        if (isScrolling.current) return;

        const current = [...ids].reverse().find((id) => inBand.has(id));
        if (!current) return;

        setActiveId(current);
        const { pathname, search, hash } = window.location;
        const url = urlFor(current);
        if (url !== `${pathname}${search}${hash}`) {
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

  return {
    activeId,
    homeId,
    address: `${window.location.host}${
      activeId === homeId ? "" : `/#${activeId}`
    }`,
    goTo,
    back: () => window.history.back(),
    forward: () => window.history.forward(),
    reload: () => window.location.reload(),
    canGoBack: position.index > 0,
    canGoForward: position.index < position.last,
  };
}
