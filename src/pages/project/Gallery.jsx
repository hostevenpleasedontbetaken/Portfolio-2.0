import Reveal from "../../components/ui/Reveal";

// Screenshots of a project. variant "phone": a swipeable strip of phone
// screens in a bezel. variant "wide": a two-column grid of desktop pages.
// Each item: { src, alt, caption }.
const Gallery = ({ items, variant = "wide" }) => {
  if (variant === "phone") {
    return (
      <ul
        tabIndex={0}
        aria-label="Screenshots, scroll sideways"
        className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 scrollbar-thin scrollbar-webkit"
      >
        {items.map((item) => (
          <li key={item.src} className="w-[13.5rem] shrink-0 snap-start">
            <figure>
              <div className="overflow-hidden rounded-[2rem] border-[6px] border-dark-5 bg-dark-5 shadow-lg">
                <img
                  src={item.src}
                  alt={item.alt}
                  width="560"
                  height="1214"
                  loading="lazy"
                  decoding="async"
                  className="block w-full rounded-[1.5rem]"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-snug text-light-3">
                {item.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.src}>
          <Reveal from="up">
            <figure>
              <img
                src={item.src}
                alt={item.alt}
                width="1400"
                height="875"
                loading="lazy"
                decoding="async"
                className="block w-full rounded-xl border border-dark-1/60"
              />
              <figcaption className="mt-3 text-sm leading-snug text-light-3">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
