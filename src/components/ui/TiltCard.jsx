import { useRef } from "react";

const MAX_TILT_DEGREES = 8;

// Tilts toward the pointer on hover. Does nothing on touch devices or when
// the user prefers reduced motion.
const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);

  const canTilt = () =>
    window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)")
      .matches;

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card || !canTilt()) return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${-y * 2 * MAX_TILT_DEGREES}deg) rotateY(${
      x * 2 * MAX_TILT_DEGREES
    }deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <div
      className="[perspective:1500px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className={`transition-transform duration-300 ease-out ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
