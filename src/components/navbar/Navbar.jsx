import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ICONS } from "../ui/icons";
import SearchOverlay from "../ui/SearchOverlay";
import DropdownAi from "./dropdown/DropdownAi";
import DropdownSolutions from "./dropdown/DropdownSolutions";
import DropdownResources from "./dropdown/DropdownResources";
import DropdownContact from "./dropdown/DropdownContact";
import MobileDrawer from "./dropdown/MobileDrawer";
import { isAuthenticated, getUser, logout } from "../../utils/auth";
function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  let user;

  try {
    const userData = getUser();
    user = userData ? JSON.parse(userData) : null;
  } catch {
    user = { name: getUser() }; // fallback for old data
  }
  const navigate = useNavigate();

  // ✅ CLEAN SEARCH DATA (WITH CATEGORY)
  const pages = [
    // General
    { name: "Home", path: "/", category: "General" },
    { name: "Pricing", path: "/price", category: "General" },
    { name: "AI Overview", path: "/ai", category: "General" },

    // AI Tools
    { name: "AI Chatbot", path: "/ai/chatbot", category: "AI" },
    { name: "PDF Summarizer", path: "/ai/pdf", category: "AI" },
    {
      name: "Offer Letter Generator",
      path: "/ai/offer-letter",
      category: "AI",
    },
    { name: "LOR Generator", path: "/ai/lor", category: "AI" },
    { name: "Resume Analyzer", path: "/ai/resume", category: "AI" },
    { name: "Code Assistant", path: "/ai/code", category: "AI" },

    // Solutions
    { name: "Agency", path: "/agency", category: "Solutions" },
    { name: "Small Business", path: "/small-business", category: "Solutions" },
    { name: "Enterprise", path: "/enterprise", category: "Solutions" },
    { name: "Education", path: "/education", category: "Solutions" },
    { name: "WooCommerce Store", path: "/woocommerce", category: "Solutions" },
    {
      name: "Non-Profit Organization",
      path: "/non-profit",
      category: "Solutions",
    },
    {
      name: "High-Resource Site",
      path: "/high-resource",
      category: "Solutions",
    },

    { name: "Partnership Programs", path: "/programs", category: "Solutions" },
    { name: "Affiliate Program", path: "/affiliate", category: "Solutions" },
    { name: "Agency Partner Program", path: "/partner", category: "Solutions" },

    // Resources
    { name: "Resource Center", path: "/resources", category: "Resources" },
    { name: "Blog", path: "/blog", category: "Resources" },
    { name: "Docs", path: "/docs", category: "Resources" },
    { name: "Changelog", path: "/changelog", category: "Resources" },
    {
      name: "Agency Growth Insights",
      path: "/agency-insights",
      category: "Resources",
    },

    { name: "Tools & Insights", path: "/tools", category: "Resources" },
    {
      name: "Lyient vs Competition",
      path: "/compare",
      category: "Resources",
    },
    { name: "Development Tools", path: "/dev-tools", category: "Resources" },
    { name: "System Status", path: "/status", category: "Resources" },

    // Contact (cleaned)
    { name: "Contact", path: "/contact", category: "Contact" },
    { name: "Sales", path: "/sales", category: "Contact" },
    { name: "Community", path: "/community", category: "Contact" },
  ];

  // 🔍 FILTER
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showNav, setShowNav] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  const timeoutRef = useRef(null);
  const navRef = useRef(null);
  const lastScroll = useRef(0);

  const Chevron = ICONS.dropdown;
  const Search = ICONS.search;

  // Dropdown
  const handleEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // Outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll.current && current > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    let timer;

    const handleVisibility = () => {
      if (document.hidden) {
        timer = setTimeout(
          () => {
            logout();
            navigate("/login");
          },
          60 * 60 * 1000,
        ); // 1 hour
      } else {
        clearTimeout(timer);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [navigate]);
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".profile-menu")) {
        setShowProfile(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return (
    <>
      {/* NAVBAR */}
      <div
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[999] transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
        onMouseLeave={handleLeave}
      >
        <div className="bg-[#f5f5f5] py-6">
          <div className="max-w-[1300px] mx-auto ">
            <nav className="bg-[#0e0e0e]/95 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center rounded-2xl shadow-md">
              {/* LOGO */}
              <h1
                onClick={() => navigate("/")}
                className="text-xl font-bold cursor-pointer"
              >
                Lyient
              </h1>

              {/* DESKTOP */}
              <div className="hidden md:flex gap-6 items-center">
                <Link to="/">Home</Link>
                <Link to="/project">Projects</Link>
                <Link to="/price">Pricing</Link>

                <span
                  onMouseEnter={() => handleEnter("solutions")}
                  className="nav-item"
                >
                  Solutions <Chevron size={16} />
                </span>

                <span
                  onMouseEnter={() => handleEnter("resources")}
                  className="nav-item"
                >
                  Resources <Chevron size={16} />
                </span>

                <span
                  onMouseEnter={() => handleEnter("contact")}
                  className="nav-item"
                >
                  Contact <Chevron size={16} />
                </span>

                <span
                  onMouseEnter={() => handleEnter("ai")}
                  className="nav-item"
                >
                  AI <Chevron size={16} />
                </span>

                <Search
                  size={18}
                  className="cursor-pointer hover:text-orange-400"
                  onClick={() => setSearchOpen(true)}
                />

                {isAuthenticated() ? (
                  <div className="relative profile-menu">
                    {/* Avatar */}
                    <div
                      onClick={() => setShowProfile(!showProfile)}
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold cursor-pointer"
                    >
                      {user?.name?.charAt(0).toUpperCase() || "U"}
                    </div>

                    {/* Dropdown */}
                    {showProfile && (
                      <div className="absolute right-0 mt-3 w-72 bg-black/90 border border-white/10 rounded-xl shadow-xl p-4 animate-fadeIn">
                        <p className="text-white text-sm mb-2">
                          {user?.name || "User"}
                        </p>

                        <button
                          onClick={() => {
                            logout();
                            navigate("/login");
                          }}
                          className="w-full text-left text-red-400 hover:text-red-500 text-sm"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to="/login">Login</Link>
                )}

                <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 transition">
                  Try for free
                </button>
              </div>

              {/* MOBILE */}
              <button
                onClick={() => setOpen(true)}
                className="md:hidden text-2xl"
              >
                ☰
              </button>
            </nav>
          </div>
        </div>

        {/* DROPDOWN */}
        {activeDropdown && (
          <div className="absolute left-1/2 -translate-x-1/2 top-[90px] w-full px-4 z-50">
            <div
              className="max-w-[1100px] mx-auto animate-fadeIn"
              onMouseEnter={() => clearTimeout(timeoutRef.current)}
              onMouseLeave={handleLeave}
            >
              {activeDropdown === "solutions" && <DropdownSolutions />}
              {activeDropdown === "resources" && <DropdownResources />}
              {activeDropdown === "contact" && <DropdownContact />}
              {activeDropdown === "ai" && <DropdownAi />}
            </div>
          </div>
        )}
      </div>

      {/* SEARCH */}
      <SearchOverlay
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        pages={pages}
      />

      <MobileDrawer
        open={open}
        setOpen={setOpen}
        onSearchOpen={() => setSearchOpen(true)}
      />
    </>
  );
}

export default Navbar;
