import React, { useRef } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ children, isVisible }) => {
  const cardRef = useRef(null); // Ref for the card element
  const rows = 5; // Number of rows in the grid
  const cols = 5; // Number of columns in the grid

  const handleMouseOver = (index, rows, cols) => {
    const row = Math.floor(index / cols) - Math.floor(rows / 2);
    const col = (index % cols) - Math.floor(cols / 2);

    const rotateX = -10 * row; // Negative for upward movement
    const rotateY = 10 * col; // Adjusted for specific rows

    if (cardRef.current) {
      cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div
      className={`container row-span-1 col-span-1 md:h-[30rem]  md:w-[30rem] w-[25rem] h-[25rem] lg:w-[25rem] lg:h-[30rem] xl:w-[37rem] xl:h-[32rem] transition-all duration-1000 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-[10rem] opacity-0"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="canvas">
        {Array.from({ length: rows * cols }).map((_, index) => (
          <div
            key={index}
            className="tracker"
            onMouseOver={() => handleMouseOver(index, rows, cols)}
          ></div>
        ))}
      </div>
      <div id="card" ref={cardRef}>
        {children}
      </div>
    </div>
  );
};

export default ProjectCard;
