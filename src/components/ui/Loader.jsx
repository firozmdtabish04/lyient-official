import React from "react";
import lyient from "../../assets/Lyient.png";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black animate-loader-fade">
      {/* Background */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[150px] animate-pulse"></div>

      <div className="absolute w-[350px] h-[350px] rounded-full bg-sky-500/10 blur-[120px] top-10 right-20 animate-pulse delay-300"></div>

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="relative flex items-center justify-center">
          {/* Glow */}
          <div className="absolute w-36 h-36 rounded-full bg-orange-500/20 blur-3xl animate-logo-glow"></div>

          {/* Ring */}
          <div className="absolute w-36 h-36 rounded-full border-[3px] border-transparent border-t-orange-500 border-r-orange-400 animate-spin-slow"></div>

          {/* Logo */}
          <img
            src={lyient}
            alt="Lyient"
            className="relative w-28 md:w-32 animate-logo-float"
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;
