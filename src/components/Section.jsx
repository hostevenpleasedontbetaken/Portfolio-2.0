import React from "react";
import PropTypes from "prop-types";

const Section = ({
  id,
  children,
  className,
  padding = "medium",
  backgroundColor,
}) => {
  const paddingClasses = {
    small: "p-2",
    medium: "p-6",
    large: "p-8",
  };

  return (
    <section
      id={id}
      className={`relative rounded-3xl w-full mx-auto mt-[10rem]  ${backgroundColor} ${paddingClasses[padding]} ${className}`}
    >
      <div>{children}</div>
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
