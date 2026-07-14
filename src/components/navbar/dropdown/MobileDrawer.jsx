import { Link } from "react-router-dom";
import { useState } from "react";
import { isAuthenticated, logout } from "../../../utils/auth";

export default function MobileDrawer({ open, setOpen, onSearchOpen }) {
  const [active, setActive] = useState(null);

  const toggle = (menu) => {
    setActive(active === menu ? null : menu);
  };

  const handleSearch = () => {
    setOpen(false);
    onSearchOpen?.();
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm 
        bg-[#0f0f0f]/95 backdrop-blur-xl text-white z-50 
        transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-5 flex justify-between items-center border-b border-gray-800">
          <h1 className="text-xl font-bold">Lyient</h1>
          <button
            onClick={() => setOpen(false)}
            className="text-2xl px-3 py-1 border border-gray-600 rounded-md"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 space-y-6 overflow-y-auto h-[calc(100%-80px)]">
          {/* 🔍 SEARCH */}
          <button
            type="button"
            onClick={handleSearch}
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-sm text-left text-gray-300 hover:border-orange-400 hover:text-white transition"
          >
            Search anything...
          </button>

          {/* 🔗 MAIN LINKS */}
          <div className="space-y-3 border-b border-gray-800 pb-4">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </div>
          <div className="space-y-3 border-b border-gray-800 pb-4">
            <Link to="/project" onClick={() => setOpen(false)}>
              Projects
            </Link>
          </div>
          <div className="space-y-3 border-b border-gray-800 pb-4">
            <Link to="/price" onClick={() => setOpen(false)}>
              Pricing
            </Link>
          </div>

          {/* ================= AI ================= */}
          <div>
            <button
              onClick={() => toggle("ai")}
              className="w-full flex justify-between items-center py-3 border-b border-gray-800"
            >
              <span>AI Tools</span>
              <span>{active === "ai" ? "−" : "+"}</span>
            </button>

            {active === "ai" && (
              <div className="pl-4 pt-3 space-y-2 text-gray-400 text-sm flex flex-col">
                <Link to="/ai/chatbot" onClick={() => setOpen(false)}>
                  AI Chatbot
                </Link>
                <Link to="/ai/pdf" onClick={() => setOpen(false)}>
                  PDF Summarizer
                </Link>
                <Link to="/ai/offer-letter" onClick={() => setOpen(false)}>
                  Offer Letter Generator
                </Link>
                <Link to="/ai/lor" onClick={() => setOpen(false)}>
                  LOR Generator
                </Link>
                <Link to="/ai/resume" onClick={() => setOpen(false)}>
                  Resume Analyzer
                </Link>
                <Link to="/ai/code" onClick={() => setOpen(false)}>
                  Code Assistant
                </Link>
              </div>
            )}
          </div>

          {/* ================= SOLUTIONS ================= */}
          <div>
            <button
              onClick={() => toggle("solutions")}
              className="w-full flex justify-between items-center py-3 border-b border-gray-800"
            >
              <span>Solutions</span>
              <span>{active === "solutions" ? "−" : "+"}</span>
            </button>

            {active === "solutions" && (
              <div className="pl-4 pt-3 space-y-2 text-gray-400 text-sm flex flex-col">
                <Link to="/agency">Agency</Link>
                <Link to="/small-business">Small Business</Link>
                <Link to="/enterprise">Enterprise</Link>
                <Link to="/education">Education</Link>
              </div>
            )}
          </div>

          {/* ================= RESOURCES ================= */}
          <div>
            <button
              onClick={() => toggle("resources")}
              className="w-full flex justify-between items-center py-3 border-b border-gray-800"
            >
              <span>Resources</span>
              <span>{active === "resources" ? "−" : "+"}</span>
            </button>

            {active === "resources" && (
              <div className="pl-4 pt-3 space-y-2 text-gray-400 text-sm flex flex-col">
                <Link to="/blog">Blog</Link>
                <Link to="/docs">Docs</Link>
                <Link to="/changelog">Changelog</Link>
              </div>
            )}
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <button
              onClick={() => toggle("contact")}
              className="w-full flex justify-between items-center py-3 border-b border-gray-800"
            >
              <span>Contact</span>
              <span>{active === "contact" ? "−" : "+"}</span>
            </button>

            {active === "contact" && (
              <div className="pl-4 pt-3 space-y-2 text-gray-400 text-sm flex flex-col">
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/join-group">Community</Link>
              </div>
            )}
          </div>

          {/* 🔐 AUTH */}
          <div className="border-t border-gray-800 pt-4">
            {isAuthenticated() ? (
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="text-red-400"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
            )}
          </div>

          {/* 🚀 CTA */}
          <button className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            <Link to="/price">Try for free</Link>
          </button>
        </div>
      </div>
    </>
  );
}
