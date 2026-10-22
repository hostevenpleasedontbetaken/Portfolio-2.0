import { useEffect, useState } from "react";

// Becomes true the first time the element with the given id scrolls into view,
// and stays true. Used to trigger one-shot entrance animations.
export function useRevealOnce(id, threshold = 0.2) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, [id, threshold]);

  return isVisible;
}
