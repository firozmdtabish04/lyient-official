import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragging, setDragging] = useState(false);

  const chatRef = useRef(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  // ✅ Load saved position
  useEffect(() => {
    const saved = localStorage.getItem("chat-position");
    if (saved) setPosition(JSON.parse(saved));
  }, []);

  // ✅ Save position
  useEffect(() => {
    localStorage.setItem("chat-position", JSON.stringify(position));
  }, [position]);

  // ✅ Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Drag start
  const handleMouseDown = (e) => {
    setDragging(true);
    dragOffset.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  // ✅ Drag move (with boundary fix)
  const handleMouseMove = (e) => {
    if (!dragging) return;

    const dx = e.clientX - dragOffset.current.x;
    const dy = e.clientY - dragOffset.current.y;

    setPosition((prev) => {
      let newX = prev.x - dx;
      let newY = prev.y - dy;

      const padding = 15;
      const buttonSize = 56; // includes padding + button

      const maxX = window.innerWidth - buttonSize;
      const maxY = window.innerHeight - buttonSize;

      return {
        x: Math.max(padding, Math.min(newX, maxX)),
        y: Math.max(padding, Math.min(newY, maxY)),
      };
    });

    dragOffset.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handleMouseUp = () => setDragging(false);

  // ✅ Attach drag listeners
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  return (
    <div
      ref={chatRef}
      className="fixed z-[999] p-[10px]"
      style={{
        bottom: Math.max(10, position.y),
        right: Math.max(10, position.x),
      }}
    >
      {/* 💬 CHAT BOX */}
      <div
        className={`absolute bottom-16 right-full mr-3 transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 translate-x-0"
            : "opacity-0 scale-95 translate-x-4 pointer-events-none"
        }`}
      >
        <div className="w-[280px] backdrop-blur-md bg-white/90 rounded-xl shadow-2xl p-[10px] border border-gray-200 space-y-2">
          <p className="text-sm text-gray-500">Ask me anything...</p>

          <input
            className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Type..."
          />
        </div>
      </div>

      {/* 🔥 FLOATING BUTTON */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        onMouseDown={handleMouseDown}
        className="cursor-grab active:cursor-grabbing select-none bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg shadow-orange-400/40 transition-all duration-200 hover:scale-105"
      >
        <FontAwesomeIcon icon={faComments} />
      </div>
    </div>
  );
}
