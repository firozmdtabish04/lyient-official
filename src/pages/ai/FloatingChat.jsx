import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function FloatingChat() {
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragging, setDragging] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const dragOffset = useRef({ x: 0, y: 0 });

  // Load saved position
  useEffect(() => {
    const saved = localStorage.getItem("chat-position");
    if (saved) setPosition(JSON.parse(saved));
  }, []);

  // Save position
  useEffect(() => {
    localStorage.setItem("chat-position", JSON.stringify(position));
  }, [position]);

  const handleMouseDown = (e) => {
    setDragging(true);
    dragOffset.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    const dx = e.clientX - dragOffset.current.x;
    const dy = e.clientY - dragOffset.current.y;

    setPosition((prev) => {
      const buttonSize = 56;
      const padding = 15;

      return {
        x: Math.max(
          padding,
          Math.min(prev.x - dx, window.innerWidth - buttonSize),
        ),
        y: Math.max(
          padding,
          Math.min(prev.y - dy, window.innerHeight - buttonSize),
        ),
      };
    });

    dragOffset.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const handleNavigate = (e) => {
    e.preventDefault();

    setShowMessage(true);

    setTimeout(() => {
      window.open("https://crm.lyient.com/login", "_blank");
      setShowMessage(false);
    }, 2500);
  };

  return (
    <div
      className="fixed z-[999] p-2"
      style={{
        bottom: Math.max(10, position.y),
        right: Math.max(10, position.x),
      }}
    >
      {/* Message */}
      {showMessage && (
        <div className="absolute bottom-16 right-0 w-72 rounded-2xl bg-white shadow-xl border border-gray-200 p-4 animate-fadeIn">
          <p className="text-sm font-semibold text-gray-900">
            Opening CRM Portal
          </p>
          <p className="text-xs text-gray-500 mt-1 leading-5">
            Connecting you to the Lyient CRM platform.
          </p>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleNavigate}
        onMouseDown={handleMouseDown}
        className="cursor-grab active:cursor-grabbing select-none bg-orange-500 hover:bg-orange-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-orange-500/40 transition-all duration-300 hover:scale-110"
      >
        <FontAwesomeIcon icon={faGlobe} size="lg" />
      </button>
    </div>
  );
}
