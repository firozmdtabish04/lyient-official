import React, { useEffect, useState } from "react";

export default function TypingText({
  texts = [],
  speed = 100,
  deleteSpeed = 50,
  pause = 1500,
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length + 1));
      }, speed);

      if (displayText === current) {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length - 1));
      }, deleteSpeed);

      if (displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, pause]);

  return (
    <span className="relative font-bold">
      <span className="bg-gradient-to-r from-orange-500  to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,100,150,0.8)]">
        {displayText}
      </span>

      {/* Blinking Cursor */}
      <span className="ml-1 text-white animate-blink">|</span>
    </span>
  );
}
