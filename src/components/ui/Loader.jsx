import React from "react";
import lyientLogo from "../../assets/Lyient.png";

function Loader() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-orange-500/10 blur-3xl animate-pulse delay-300" />

      {/* Content */}
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <img
          src={lyientLogo}
          alt="Lyient"
          className="w-56 drop-shadow-[0_0_30px_rgba(34,211,238,0.35)] animate-bounce"
        />

        {/* Text */}
        <h2 className="mt-8 text-white text-xl font-semibold tracking-wide">
          Initializing Platform
        </h2>

        <p className="mt-2 text-gray-400 text-sm flex items-center">
          Please wait
          <span className="ml-1 flex gap-1">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
          </span>
        </p>

        {/* Progress Bar */}
        <div className="mt-8 w-72 h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-cyan-400 to-orange-400 animate-[loading_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
