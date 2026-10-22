const isCurrent = (time) => /present/i.test(time);

// A vertical timeline. Each item: { id, time, title, detail }.
// Items whose time says "Present" get a filled marker.
const Timeline = ({ items }) => (
  <div className="rounded-lg border border-dark-1/60 py-2 pr-4">
    <ol className="ml-6 border-l border-mac-4">
      {items.map((item) => (
        <li key={item.id} className="relative ml-6 py-4">
          <span
            aria-hidden="true"
            className={`absolute -left-[1.875rem] top-[1.4rem] size-3 rounded-full border-2 border-main-1 ${
              isCurrent(item.time) ? "bg-main-1" : "bg-dark-4"
            }`}
          />
          <div className="flex flex-col gap-1 text-light-3">
            <time className="text-xs">{item.time}</time>
            <h3 className="font-semibold leading-none text-white">
              {item.title}
            </h3>
            <p className="text-sm">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default Timeline;
