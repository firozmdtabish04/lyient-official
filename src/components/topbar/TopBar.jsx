import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function TopBar() {
  return (
    <div className="w-full bg-black text-white border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="h-10 sm:h-11 md:h-12 flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center">
            {/* Desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
              <a
                href="mailto:info@lyient.com"
                className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-300"
              >
                <FaEnvelope className="text-red-500 text-base" />
                <span>info@lyient.com</span>
              </a>

              <a
                href="tel:+919740255585"
                className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-300"
              >
                <FaPhoneAlt className="text-green-500 text-base" />
                <span>+91 9740255585</span>
              </a>
            </div>

            {/* Mobile */}
            <div className="flex md:hidden items-center gap-2 text-[11px] sm:text-xs">
              <FaPhoneAlt className="text-green-500 text-xs" />
              <a
                href="tel:+919740255585"
                className="hover:text-orange-400 transition"
              >
                +91 9740255585
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#1877F2] hover:scale-110 transition-transform duration-300"
            >
              <FaFacebookF className="text-sm sm:text-base md:text-lg" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-white hover:text-gray-300 hover:scale-110 transition-all duration-300"
            >
              <FaXTwitter className="text-sm sm:text-base md:text-lg" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#0A66C2] hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedinIn className="text-sm sm:text-base md:text-lg" />
            </a>

            {/* Hide WhatsApp on very small devices */}
            <a
              href="https://wa.me/918102946894"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hidden xs:block text-[#25D366] hover:scale-110 transition-transform duration-300"
            >
              <FaWhatsapp className="text-sm sm:text-base md:text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
