import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOverlay({ searchOpen, setSearchOpen, pages }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();
  const searchRef = useRef(null);
  const itemRefs = useRef([]);

  // ✅ FILTER (ONLY 6 RESULTS)
  const filtered = pages
    .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 8);

  // ✅ AUTO SCROLL ACTIVE ITEM
  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex].scrollIntoView({
        block: "nearest",
      });
    }
  }, [activeIndex]);

  // ✅ CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // ✅ KEYBOARD NAVIGATION
  const handleKeyDown = (e) => {
    if (!filtered.length) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev + 1) % filtered.length);
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
    }

    if (e.key === "Enter") {
      navigate(filtered[activeIndex].path);
      setSearchOpen(false);
      setQuery("");
    }

    if (e.key === "Escape") {
      setSearchOpen(false);
    }
  };

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* BACKGROUND BLUR */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* CENTERED SEARCH CARD */}
      <div className="relative flex justify-center pt-20">
        <div
          ref={searchRef}
          className="w-full max-w-2xl bg-[#0f0f0f] text-white rounded-xl p-4 shadow-2xl border border-[#222]"
        >
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search anything..."
            className="w-full border-b border-gray-700 pb-2 outline-none bg-transparent text-sm"
          />

          <div
            className={`mt-2 space-y-1 pr-2 ${
              filtered.length > 4 ? "max-h-[450px] overflow-y-auto" : ""
            }`}
          >
            {filtered.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => {
                  navigate(item.path);
                  setSearchOpen(false);
                  setQuery("");
                }}
                className={`px-3 py-1 rounded-md cursor-pointer text-sm ${
                  i === activeIndex ? "bg-[#1a1a1a]" : "hover:bg-[#1a1a1a]"
                }`}
              >
                <div>{item.name}</div>
                <div className="text-xs text-gray-500">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
