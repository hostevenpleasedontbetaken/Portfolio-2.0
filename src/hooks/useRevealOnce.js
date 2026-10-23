import { useEffect, useRef, useState } from "react";

// Returns [ref, isVisible]. isVisible becomes true the first time the element
// the ref is attached to scrolls into view, and stays true. Used for one-shot
// entrance animations.
export function useRevealOnce(threshold = 0.2) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, isVisible]);

  return [ref, isVisible];
}
