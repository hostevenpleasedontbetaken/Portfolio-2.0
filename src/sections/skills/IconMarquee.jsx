import { skillIcons } from "../../data";

// A slowly scrolling row of skill icons. Purely decorative (the full skill
// list is right below it), so it is hidden from assistive tech. It pauses on
// hover; with reduced motion it stops and shows a single wrapped row.
const IconRow = ({ className = "" }) => (
  <ul className={`flex gap-3 pr-3 motion-reduce:flex-wrap ${className}`}>
    {skillIcons.map((icon) => (
      <li
        key={icon.name}
        className="flex size-16 shrink-0 items-center justify-center rounded-xl p-3 md:size-[4.5rem]"
        style={{ backgroundColor: `${icon.color}33` }}
      >
        <img src={icon.logo} alt="" width="40" height="40" className="size-full" />
      </li>
    ))}
  </ul>
);

const IconMarquee = () => (
  <div
    aria-hidden="true"
    className="overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
  >
    <div className="flex w-max animate-loop-scroll hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none">
      <IconRow />
      <IconRow className="motion-reduce:hidden" />
    </div>
  </div>
);

export default IconMarquee;
