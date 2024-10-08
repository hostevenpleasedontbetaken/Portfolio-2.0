import React from "react";
import PropTypes from "prop-types";

const Section = ({
  id,
  children,
  className,
  padding = "medium",
  backgroundColor,
  height = "h-auto",
  width = "w-full lg:w-[80vw] xl:w-[70vw]",
}) => {
  const paddingClasses = {
    small: "p-2",
    medium: "p-6",
    large: "p-8",
  };

  return (
    <section
      id={id}
      className={`mt-[5rem] border border-dark-5 rounded-3xl shadow-md mx-auto ${height} ${width} ${backgroundColor} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.oneOf(["small", "medium", "large"]),
  backgroundColor: PropTypes.string,
};

export default Section;
