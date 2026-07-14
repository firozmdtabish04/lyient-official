import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import FloatingChat from "../pages/ai/FloatingChat";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";
import Loader from "../components/ui/Loader";

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change duration if needed

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Hide layout for auth pages
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {loading && <Loader />}

      <div className="min-h-screen relative">
        {!hideLayout && <Navbar />}

        <main className={hideLayout ? "" : "pt-[90px]"}>
          <Outlet />
        </main>

        {!hideLayout && <FloatingChat />}

        <ScrollToTopButton />

        {!hideLayout && <Footer />}
      </div>
    </>
  );
}

export default App;
