import { useState } from "react";

const VISIBLE_HIGHLIGHTS = 3;

const isCurrent = (time) => /present/i.test(time);

const TimelineItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const highlights = item.highlights ?? [];
  const hiddenCount = Math.max(0, highlights.length - VISIBLE_HIGHLIGHTS);
  const shown = expanded ? highlights : highlights.slice(0, VISIBLE_HIGHLIGHTS);

  return (
    <li className="relative ml-6 py-4">
      <span
        aria-hidden="true"
        className={`absolute -left-[1.875rem] top-[1.4rem] size-3 rounded-full border-2 border-main-1 ${
          isCurrent(item.time) ? "bg-main-1" : "bg-dark-4"
        }`}
      />
      <div className="flex flex-col gap-1 text-light-3">
        <time className="text-xs">{item.time}</time>
        <h3 className="font-semibold leading-none text-white">{item.title}</h3>
        <p className="text-sm">{item.detail}</p>
      </div>

      {highlights.length > 0 && (
        <>
          <ul className="mt-3 space-y-3 text-sm leading-relaxed text-light-3">
            {shown.map((highlight) => (
              <li key={highlight.label}>
                <span className="font-medium text-main-1">
                  {highlight.label}.
                </span>{" "}
                {highlight.text}
              </li>
            ))}
          </ul>

          {hiddenCount > 0 && (
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((open) => !open)}
              className="mt-3 text-sm text-main-1 underline-offset-4 hover:underline"
            >
              {expanded ? "Show less" : `Show ${hiddenCount} more`}
            </button>
          )}
        </>
      )}
    </li>
  );
};

// A vertical timeline. Each item: { id, time, title, detail, highlights? }
// where highlights is [{ label, text }]. The first few highlights show by
// default and the rest expand on request. Items whose time says "Present" get
// a filled marker.
const Timeline = ({ items }) => (
  <div className="rounded-lg border border-dark-1/60 py-2 pr-4">
    <ol className="ml-6 border-l border-mac-4">
      {items.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </ol>
  </div>
);

export default Timeline;
