// A vertical timeline. Each item: { id, time, title, detail }.
const Timeline = ({ items }) => (
  <div className="rounded-lg border">
    <ul className="ml-10 border-l">
      {items.map((item) => (
        <li key={item.id} className="relative ml-10 py-4">
          <div className="absolute -left-16 top-4 flex size-12 items-center justify-center rounded-full bg-white" />
          <div className="flex flex-1 flex-col justify-start gap-1 text-light-3">
            <time className="text-xs">{item.time}</time>
            <h3 className="font-semibold leading-none">{item.title}</h3>
            <p className="text-sm">{item.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Timeline;
