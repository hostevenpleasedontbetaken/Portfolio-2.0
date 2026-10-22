import { useEffect, useRef, useState } from "react";

// Types `text` out one character at a time. The full text is rendered
// invisibly underneath so the layout doesn't jump while typing.
const Typewriter = ({
  text,
  className = "",
  speed = 50,
  delay = 0,
  onTypingComplete,
}) => {
  const [started, setStarted] = useState(delay === 0);
  const [length, setLength] = useState(0);
  const done = length >= text.length;

  const onCompleteRef = useRef(onTypingComplete);
  useEffect(() => {
    onCompleteRef.current = onTypingComplete;
  });

  useEffect(() => {
    if (started) return;
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [started, delay]);

  useEffect(() => {
    if (!started) return;
    if (done) {
      onCompleteRef.current?.();
      return;
    }
    const timer = setTimeout(() => setLength((current) => current + 1), speed);
    return () => clearTimeout(timer);
  }, [started, done, length, speed]);

  return (
    <h3
      aria-label={text}
      className={`relative uppercase font-mainfont text-main-1 ${className}`}
    >
      <span aria-hidden="true" className="invisible">
        {text}
      </span>
      <span aria-hidden="true" className="absolute inset-0">
        {text.slice(0, length)}
        {!done && started && <span className="animate-cursor">|</span>}
      </span>
    </h3>
  );
};

export default Typewriter;
