import React, { useState, useEffect } from "react";

const Typewriter = ({ text, onTypingComplete }) => {
  const [displayText, setDisplayText] = useState(""); // Text to be displayed
  const [index, setIndex] = useState(0); // Index to track typing
  const [typingDone, setTypingDone] = useState(false); // Tracks if typing is done

  // Typing effect logic
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText + text[index]);
        setIndex(index + 1);
      }, 70); // Speed of typing effect
      return () => clearTimeout(timeout);
    } else {
      setTypingDone(true); // Typing finished
      if (onTypingComplete) {
        onTypingComplete(); // Call the completion callback
      }
    }
  }, [index, text, displayText, onTypingComplete]);

  return (
    <h3 className="text-[7rem] font-sans text-main-1">
      {displayText}
      {/* Conditionally render the cursor */}
      {!typingDone && <span className="animate-cursor">|</span>}
    </h3>
  );
};

export default Typewriter;
