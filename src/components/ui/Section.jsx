const paddingClasses = {
  small: "p-2",
  medium: "p-6",
  large: "p-8",
};

const marginTopClasses = {
  "4rem": "scroll-mt-16",
  "6rem": "scroll-mt-24",
  "8rem": "scroll-mt-32",
  "10rem": "scroll-mt-40",
  "12rem": "scroll-mt-48",
  "14rem": "scroll-mt-56",
  "16rem": "scroll-mt-64",
};

const Section = ({
  id,
  children,
  className = "",
  padding = "medium",
  backgroundColor = "",
  marginTop,
}) => {
  return (
    <section
      id={id}
      className={`relative rounded-3xl w-full mx-auto mt-[10rem] ${
        marginTopClasses[marginTop] ?? ""
      }  ${backgroundColor} ${paddingClasses[padding]} ${className}`}
    >
      <div>{children}</div>
    </section>
  );
};

export default Section;
