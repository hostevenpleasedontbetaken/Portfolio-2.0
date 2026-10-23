// A small pill, rendered as a list item (wrap several in a <ul>). In a grid
// it stretches to fill its cell; in a flex-wrap row it sizes to its text.
const Tag = ({ children }) => (
  <li className="flex items-center justify-center rounded-xl border border-dark-1 bg-dark-1/20 px-3 py-1 text-sm">
    {children}
  </li>
);

export default Tag;
