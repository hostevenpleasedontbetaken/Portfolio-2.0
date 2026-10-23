import { useEffect, useState } from "react";

const INTERVAL_MS = 4500;

// Cycles through short highlights ({ value, label }) one at a time. It pauses
// while the pointer or keyboard focus is inside it, never auto-advances for
// people who prefer reduced motion, and the dots let anyone pick one.
// All items are stacked in one grid cell so the height never jumps.
const HighlightRotator = ({ items }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (paused || reduceMotion || items.length < 2) return;

    const timer = setInterval(
      () => setActive((current) => (current + 1) % items.length),
      INTERVAL_MS
    );
    return () => clearInterval(timer);
  }, [paused, items.length]);

  return (
    <div
      role="group"
      aria-label="Highlights"
      className="flex flex-col items-center gap-y-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="grid">
        {items.map((item, index) => (
          <div
            key={item.label}
            aria-hidden={index !== active}
            className={`col-start-1 row-start-1 flex flex-col items-center transition-opacity duration-500 motion-reduce:transition-none ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="font-display text-[2.25rem] leading-none text-main-1">
              {item.value}
            </span>
            <span className="mt-1 max-w-[16rem] text-sm text-light-3">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex">
        {items.map((item, index) => (
          <button
            key={item.label}
            type="button"
            aria-label={`Show highlight ${index + 1}: ${item.value} ${item.label}`}
            aria-current={index === active}
            onClick={() => setActive(index)}
            className="group p-2"
          >
            <span
              className={`block size-2 rounded-full transition-colors ${
                index === active
                  ? "bg-main-1"
                  : "bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HighlightRotator;
