import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import FloatingChat from "../pages/ai/FloatingChat";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";

function App() {
  const location = useLocation();

  // ✅ Hide layout for auth pages
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="min-h-screen relative">
      {/* Navbar */}
      {!hideLayout && <Navbar />}

      {/* Main Content */}
      <main className={hideLayout ? "" : "pt-[90px]"}>
        <Outlet />
      </main>

      {/* Floating Chat */}
      {!hideLayout && <FloatingChat />}

      {/* Scroll Button (always ok) */}
      <ScrollToTopButton />

      {/* Footer */}
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
