import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import TopBar from "../components/topbar/TopBar";
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
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen relative page-fade">
      {!hideLayout && <TopBar />}

      {!hideLayout && <Navbar />}

      <main className={hideLayout ? "" : "pt-0"}>
        <Outlet />
      </main>

      {!hideLayout && <FloatingChat />}
      <ScrollToTopButton />
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
