import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaHome,
  FaBoxOpen,
  FaUsers,
  FaServicestack,
  FaGraduationCap,
  FaRobot,
  FaFilePdf,
  FaCode,
  FaUserTie,
  FaCalculator,
  FaPercent,
  FaBriefcase,
  FaTimes,
} from "react-icons/fa";

export default function SearchOverlay({ searchOpen, setSearchOpen, pages }) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const itemRefs = useRef([]);

  // Auto focus
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  // Outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Page icons
  const getIcon = (category, name) => {
    if (name.includes("Home")) return <FaHome />;
    if (name.includes("Products")) return <FaBoxOpen />;
    if (name.includes("Team")) return <FaUsers />;
    if (name.includes("Service")) return <FaServicestack />;
    if (name.includes("Program")) return <FaGraduationCap />;
    if (name.includes("Chatbot")) return <FaRobot />;
    if (name.includes("PDF")) return <FaFilePdf />;
    if (name.includes("Resume")) return <FaUserTie />;
    if (name.includes("Code")) return <FaCode />;
    if (name.includes("CGPA")) return <FaCalculator />;
    if (name.includes("Percentage")) return <FaPercent />;
    if (name.includes("Portfolio")) return <FaBriefcase />;

    switch (category) {
      case "Programs":
        return <FaGraduationCap />;
      case "Products":
        return <FaBoxOpen />;
      default:
        return <FaSearch />;
    }
  };

  // Search
  const filtered = useMemo(() => {
    if (!query.trim()) return pages.slice(0, 8);

    const q = query.toLowerCase();

    return pages
      .filter((page) => {
        return (
          page.name.toLowerCase().includes(q) ||
          page.category.toLowerCase().includes(q) ||
          (page.desc || "").toLowerCase().includes(q) ||
          (page.keywords || "").toLowerCase().includes(q)
        );
      })
      .slice(0, 8);
  }, [query, pages]);
  // Scroll active item into view
  useEffect(() => {
    itemRefs.current[activeIndex]?.scrollIntoView({
      block: "nearest",
    });
  }, [activeIndex]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!filtered.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % filtered.length);
        break;

      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
        break;

      case "Enter":
        navigate(filtered[activeIndex].path);
        setSearchOpen(false);
        setQuery("");
        break;

      case "Escape":
        setSearchOpen(false);
        break;

      default:
        break;
    }
  };

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Background */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Search Card */}
      <div className="relative flex justify-center items-start pt-16 px-4">
        <div
          ref={searchRef}
          className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#111]/95 shadow-2xl overflow-hidden animate-fadeIn"
        >
          {/* Search Input */}

          <div className="flex items-center gap-4 px-5 py-4 border-b border-white/10">
            <FaSearch className="text-gray-500 text-lg" />

            <input
              ref={inputRef}
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search pages, tools, programs..."
              className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
            />

            <button
              onClick={() => setSearchOpen(false)}
              className="text-gray-500 hover:text-white"
            >
              <FaTimes />
            </button>
          </div>

          {/* Results */}

          <div className="max-h-[500px] overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <div className="py-16 text-center">
                <FaSearch className="mx-auto text-4xl text-gray-600" />

                <h3 className="mt-4 text-lg font-semibold text-white">
                  No results found
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Try another keyword.
                </p>
              </div>
            ) : (
              filtered.map((item, i) => (
                <button
                  key={item.path}
                  ref={(el) => (itemRefs.current[i] = el)}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => {
                    navigate(item.path);
                    setSearchOpen(false);
                    setQuery("");
                  }}
                  className={`w-full text-left rounded-xl p-4 transition flex items-start gap-4
                    ${
                      activeIndex === i
                        ? "bg-orange-500/10 border border-orange-500/30"
                        : "hover:bg-white/5"
                    }
                  `}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center
                    ${
                      activeIndex === i
                        ? "bg-orange-500 text-white"
                        : "bg-white/5 text-orange-400"
                    }`}
                  >
                    {getIcon(item.category, item.name)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-semibold ${
                          activeIndex === i ? "text-orange-400" : "text-white"
                        }`}
                      >
                        {item.name}
                      </h3>

                      <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400">
                        {item.category}
                      </span>
                    </div>

                    {item.desc && (
                      <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Footer */}

          <div className="border-t border-white/10 px-5 py-3 flex items-center justify-between text-xs text-gray-500">
            <span>Esc Close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
