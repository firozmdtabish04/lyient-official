import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-screen-2xl mx-auto px-4 h-10 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4 text-xs sm:text-sm">
          {/* Hide email on mobile */}
          <a
            href="mailto:info@yourcompany.com"
            className="hidden md:flex items-center gap-2 hover:text-orange-400"
          >
            <FaEnvelope className="text-orange-400" />
            info@yourcompany.com
          </a>

          {/* Phone only on mobile */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 hover:text-orange-400"
          >
            <FaPhoneAlt className="text-orange-400" />
            <span className="hidden sm:inline">+91 98765 43210</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <a className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500">
            <FaFacebookF size={12} />
          </a>

          <a className="hidden sm:flex w-7 h-7 items-center justify-center rounded-full bg-white/10 hover:bg-orange-500">
            <FaTwitter size={12} />
          </a>

          <a className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500">
            <FaLinkedinIn size={12} />
          </a>

          <a className="hidden md:flex w-7 h-7 items-center justify-center rounded-full bg-white/10 hover:bg-orange-500">
            <FaInstagram size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
