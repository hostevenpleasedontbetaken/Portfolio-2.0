import { useState, useEffect } from "react";

const HamburgerMenu = ({ contact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstIcon, setIsFirstIcon] = useState(true);
  const [isRotating, setIsRotating] = useState(false);

  const handleToggle = () => {
    setIsRotating(true);
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsFirstIcon((prev) => !prev);
    }, 200);
  };

  useEffect(() => {
    if (isRotating) {
      const timer = setTimeout(() => {
        setIsRotating(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isRotating]);

  return (
    <div className="flex h-[50px] p-2">
      <button
        className="text-white relative w-[35px] h-[35px]"
        onClick={handleToggle}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center ${
            isRotating ? "animate-rotate" : ""
          }`}
        >
          {isFirstIcon ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 24 24"
              height="24"
              width="24"
            >
              <path d="M0 3v18h24v-18h-24zm22 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z"></path>
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 24 24"
              height="24"
              width="24"
            >
              <path d="M.026 24l11.974-11.607 11.974 11.607h-23.948zm11.964-23.961l-11.99 8.725v12.476l7.352-7.127-5.653-4.113 10.291-7.488 10.309 7.488-5.655 4.108 7.356 7.132v-12.476l-12.01-8.725z"></path>
            </svg>
          )}
        </div>
      </button>

      <div
        className={`flex items-center lg:border rounded-3xl ${
          isOpen ? "flex" : "hidden"
        } lg:block`}
      >
        {contact.map((item) => (
          <a
            key={item.link}
            className="text-white gap-5 text-base lg:flex lg:items-center pl-4 pt-3 hover:text-main-1"
            href={item.link}
            target={item.target}
          >
            <svg width="35" height="35" viewBox="0 0 36 36" fill="none">
              <path d={item.path} fill="currentColor"></path>
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;
