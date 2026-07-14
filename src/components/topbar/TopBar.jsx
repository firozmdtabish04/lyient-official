import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-black text-white border-b border-white/10">
      <div className="max-w-screen-2xl mx-auto px-4 py-2">
        <div className="flex items-center justify-center md:justify-between">
          {/* Contact Details (Desktop Only) */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="mailto:info@yourcompany.com"
              className="flex items-center gap-2 hover:text-orange-400 transition"
            >
              <FaEnvelope className="text-orange-400" />
              <span>info@yourcompany.com</span>
            </a>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-orange-400 transition"
            >
              <FaPhoneAlt className="text-orange-400" />
              <span>+91 98765 43210</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-orange-500 transition duration-300 flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-orange-500 transition duration-300 flex items-center justify-center"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-orange-500 transition duration-300 flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/918102946894?text=Hello%20Lyient%20Solutions,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-green-500 transition duration-300 flex items-center justify-center"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
