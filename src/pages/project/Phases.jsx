// How a project was built, one step at a time. Each item:
// { id, label, title, summary, points?, tests?, shot? { src, alt } }.
// The details (and screenshot) expand with native <details>, which is keyboard
// and screen-reader friendly without any script.
const Phases = ({ items }) => (
  <ol className="ml-2 border-l border-mac-4">
    {items.map((item) => (
      <li key={item.id} className="relative ml-6 pb-6 last:pb-0">
        <span
          aria-hidden="true"
          className="absolute -left-[1.9rem] top-2 size-3 rounded-full border-2 border-main-1 bg-dark-4"
        />
        <details className="group rounded-xl border border-dark-1/50 bg-dark-4/60 open:bg-dark-4">
          <summary className="flex cursor-pointer list-none flex-col gap-1 p-4 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-3">
              <span className="text-xs font-medium uppercase tracking-wide text-main-1">
                {item.label}
              </span>
              <span className="text-xs text-mac-4 group-open:hidden">Show details</span>
              <span className="hidden text-xs text-mac-4 group-open:inline">Hide details</span>
            </span>
            <span className="text-lg text-white">{item.title}</span>
            <span className="text-sm leading-relaxed text-light-3">{item.summary}</span>
          </summary>

          <div className="flex flex-col gap-5 border-t border-dark-1/50 p-4 md:flex-row">
            <div className="min-w-0 flex-1 space-y-3">
              {item.points?.length > 0 && (
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-light-3 marker:text-main-1">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {item.tests && (
                <p className="text-sm text-light-3">
                  <span className="font-medium text-main-1">Tests: </span>
                  {item.tests}
                </p>
              )}
            </div>
            {item.shot && (
              <img
                src={item.shot.src}
                alt={item.shot.alt}
                width="560"
                height="1214"
                loading="lazy"
                decoding="async"
                className="w-40 shrink-0 self-start rounded-2xl border-4 border-dark-5"
              />
            )}
          </div>
        </details>
      </li>
    ))}
  </ol>
);

export default Phases;
