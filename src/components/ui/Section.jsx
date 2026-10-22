// A full-width page section. The scroll area reserves room for the sticky
// browser chrome (scroll-padding), so no per-section offsets are needed.
const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`relative w-full mx-auto px-5 py-16 md:py-24 ${className}`}
  >
    {children}
  </section>
);

export default Section;
