import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer className="bg-[#f5f5f5] mt-20 border-t">
      {/* TOP LINKS */}
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-700">
        <div>
          <p className="font-semibold mb-4">Pricing</p>
          <ul className="space-y-2">
            <li>Sevalla by AICare ↗</li>
            <li>Web Application Hosting ↗</li>
            <li>Managed Database Hosting ↗</li>
            <li>Static Site Hosting ↗</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Platform</p>
          <ul className="space-y-2">
            <li>Cloudflare integration</li>
            <li>AICare API</li>
            <li>Expert support</li>
            <li>Free WordPress migrations</li>
            <li>APM tool</li>
            <li>Lyient</li>
            <li>Edge caching</li>
            <li>Add-ons</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Solutions</p>
          <ul className="space-y-2">
            <li>Agency</li>
            <li>Education</li>
            <li>WooCommerce store</li>
            <li>Small business</li>
            <li>Non-profit organization</li>
            <li>Case studies</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Resources</p>
          <ul className="space-y-2">
            <li>Changelog</li>
            <li>Blog</li>
            <li>Development tools</li>
            <li>AICare vs competitors</li>
            <li>Agency directory</li>
            <li>System Status</li>
            <li>All resources</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Company</p>
          <ul className="space-y-2">
            <li>Why choose AICare</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Affiliate program</li>
            <li>Press</li>
            <li>Security and trust</li>
            <li>Legal and Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* SECURITY BADGES */}
      <div className="max-w-[1200px] mx-auto px-6 py-6 border-t flex flex-wrap items-center gap-4">
        {["SOC 2 Type II", "ISO 27001", "GDPR", "CCPA"].map((item) => (
          <div
            key={item}
            className="bg-white px-4 py-2 rounded-xl shadow-sm text-sm"
          >
            ✅ {item}
          </div>
        ))}
      </div>

      {/* TRUST TEXT */}
      <div className="max-w-[1200px] mx-auto px-6 py-6 border-t text-gray-700">
        <p className="font-medium">We take security and privacy seriously.</p>
        <p className="text-sm text-gray-500 mt-2">
          Trust Center · Privacy Policy · Your Privacy Choices
        </p>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <h1 className="text-sm font-bold hover:scale-110">
              Follow us on :
            </h1>

            <div className="flex gap-5 text-sm">
              <a href="#" className="transition hover:scale-150">
                <FontAwesomeIcon icon={faGithub} className="text-white" />
              </a>

              <a href="#" className="transition hover:scale-125">
                <FontAwesomeIcon icon={faTwitter} className="text-[#1DA1F2]" />
              </a>

              <a href="#" className="transition hover:scale-150">
                <FontAwesomeIcon icon={faYoutube} className="text-[#FF0000]" />
              </a>

              <a href="#" className="transition hover:scale-125">
                <FontAwesomeIcon icon={faFacebook} className="text-[#1877F2]" />
              </a>

              <a href="#" className="transition hover:scale-150">
                <FontAwesomeIcon icon={faLinkedin} className="text-[#0A66C2]" />
              </a>
              <a href="#" className="transition hover:scale-125">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#c40202]"
                />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2  px-4 py-2 rounded-lg text-xl cursor-pointer hover:bg-[#222] transition ">
            <FontAwesomeIcon icon={faGlobe} className="text-blue-500" />
            <span>English</span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-[1200px] mx-auto px-6 py-6 text-xs text-gray-500">
        <p>
          © 2026 Lyient Solutions Inc. All rights reserved. AICare®,
          MyAICare®,and AbhiAICare®, are trademarks owned by AICare Inc.
        </p>
        <p className="mt-2">
          The WordPress® trademark is the intellectual property of the WordPress
          Foundation, and WooCommerce® is owned by WooCommerce, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
