// A grid of titled text cards. Used for "how it works" layers and for design
// decisions. Each item: { title, body }.
const Cards = ({ items }) => (
  <ul className="grid gap-4 md:grid-cols-2">
    {items.map((item) => (
      <li key={item.title} className="rounded-xl bg-dark-4 p-5">
        <h3 className="mb-2 text-base font-medium text-main-1">{item.title}</h3>
        <p className="text-sm leading-relaxed text-light-3">{item.body}</p>
      </li>
    ))}
  </ul>
);

export default Cards;
