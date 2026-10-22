// A small pill, rendered as a list item (wrap several in a <ul>).
const Tag = ({ children }) => (
  <li className="flex h-full w-full items-center justify-center rounded-xl border border-dark-1 bg-dark-1/20 p-1 text-[.75rem]">
    {children}
  </li>
);

export default Tag;
