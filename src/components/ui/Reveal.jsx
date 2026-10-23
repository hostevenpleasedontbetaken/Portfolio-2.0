import { useRevealOnce } from "../../hooks/useRevealOnce";

const hidden = {
  left: "-translate-x-8 opacity-0",
  up: "translate-y-8 opacity-0",
};

// Slides its children in the first time they scroll into view.
const Reveal = ({ from = "left", className = "", children }) => {
  const [ref, isVisible] = useRevealOnce();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        isVisible ? "translate-x-0 translate-y-0 opacity-100" : hidden[from]
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
