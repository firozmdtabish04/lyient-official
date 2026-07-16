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
        className={`fixed top-0 right-0 h-full w-[82%] sm:w-[380px] max-w-sm 
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
        <div className="p-5 space-y-5 overflow-y-auto h-[calc(100%-80px)]">
          {/* Search */}
          <button
            type="button"
            onClick={handleSearch}
            className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 text-left text-gray-300 hover:border-orange-500 hover:text-white transition"
          >
           Search anything...
          </button>

          {/* Main Navigation */}
          <div className="space-y-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-orange-400 transition"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-orange-400 transition"
            >
              Products
            </Link>

            <Link
              to="/our-services"
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-orange-400 transition"
            >
              Our Services
            </Link>

            <Link
              to="/team"
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-orange-400 transition"
            >
              Our Team
            </Link>
          </div>

          {/* About Us */}
          <div>
            <button
              onClick={() => toggle("about")}
              className="w-full flex justify-between items-center py-3 border-b border-gray-800"
            >
              <span>About Us</span>
              <span>{active === "about" ? "−" : "+"}</span>
            </button>

            {active === "about" && (
              <div className="pl-4 pt-3 flex flex-col gap-3 text-gray-400 text-sm">
                <Link to="/about" onClick={() => setOpen(false)}>
                  About Company
                </Link>

                <Link to="/community" onClick={() => setOpen(false)}>
                  Join Our Community
                </Link>
              </div>
            )}
          </div>

          {/* Explore Us */}
          <div>
            <button
              onClick={() => toggle("programs")}
              className="w-full flex justify-between items-center py-3 border-b border-gray-800"
            >
              <span>Explore Us</span>
              <span>{active === "programs" ? "−" : "+"}</span>
            </button>

            {active === "programs" && (
              <div className="pl-4 pt-3 flex flex-col gap-3 text-gray-400 text-sm">
                <Link to="/programs/internship" onClick={() => setOpen(false)}>
                  Internship Program
                </Link>

                <Link
                  to="/programs/live-projects"
                  onClick={() => setOpen(false)}
                >
                  Live Projects
                </Link>

                <Link to="/programs/workshops" onClick={() => setOpen(false)}>
                  Technical Workshops
                </Link>

                <Link
                  to="/programs/certifications"
                  onClick={() => setOpen(false)}
                >
                  Certifications
                </Link>

                <Link to="/programs/placement" onClick={() => setOpen(false)}>
                  Placement Support
                </Link>

                <Link to="/programs/career" onClick={() => setOpen(false)}>
                  Career Development
                </Link>

                <Link
                  to="/programs"
                  onClick={() => setOpen(false)}
                  className="text-orange-400 font-medium"
                >
                  View All Programs →
                </Link>
              </div>
            )}
          </div>

          {/* Login / Logout */}
          <div className="border-t border-gray-800 pt-5">
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

          {/* CTA */}

          <Link
            to="/products"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Try for Free
          </Link>
        </div>
      </div>
    </>
  );
}
