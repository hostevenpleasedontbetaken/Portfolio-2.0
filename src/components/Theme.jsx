import React, { useState } from "react";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      style={{
        backgroundColor: darkMode ? "rgb(17, 24, 39)" : "rgb(229, 231, 235)",
      }}
    >
      <span className="sr-only">
        {darkMode ? "Switch to light mode" : "Switch to dark mode"}
      </span>
      <span
        className={`${
          darkMode ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
      />
    </button>
  );
};

export default Theme;
