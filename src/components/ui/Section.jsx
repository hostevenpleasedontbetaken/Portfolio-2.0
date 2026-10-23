// A full-width page section. The scroll area reserves room for the sticky
// browser chrome (scroll-padding), so no per-section offsets are needed.
const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`relative w-full mx-auto px-5 py-12 md:py-16 ${className}`}
  >
    {children}
  </section>
);

export default Section;
