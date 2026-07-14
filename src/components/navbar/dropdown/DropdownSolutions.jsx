import React from "react";
import owner from "../../../assets/owner.jpg";
export default function DropdownSolutions() {
  return (
    <div className="w-full max-w-[1100px] mx-auto bg-[#0f0f0f] text-white rounded-2xl p-10 grid md:grid-cols-3 gap-10 shadow-2xl animate-fadeIn">
      {/* LEFT COLUMN */}
      <div>
        <h3 className="text-lg font-semibold mb-5">Who we serve</h3>
        <ul className="space-y-3 text-gray-400">
          <li className="hover:text-orange-500 cursor-pointer">Agency</li>
          <li className="hover:text-orange-500 cursor-pointer">
            Small business
          </li>
          <li className="hover:text-orange-500 cursor-pointer">Enterprise</li>
          <li className="hover:text-orange-500 cursor-pointer">Education</li>
          <li className="hover:text-orange-500 cursor-pointer">
            WooCommerce store
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            Non-profit organization
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            Single high-resource site
          </li>
        </ul>
      </div>

      {/* MIDDLE COLUMN */}
      <div className="border-l border-gray-800 pl-8">
        <h3 className="text-lg font-semibold mb-5">Partnership programs</h3>
        <ul className="space-y-3 text-gray-400">
          <li className="hover:text-orange-500 cursor-pointer">
            Affiliate Program
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            Agency Partner Program
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN (CASE STUDY CARD) */}
      <div className="border-l border-gray-800 pl-8">
        <h3 className="text-lg font-semibold mb-5">Case studies</h3>

        <div className="bg-[#1a1a1a] rounded-xl overflow-hidden hover:scale-[1.02] transition cursor-pointer">
          {/* IMAGE */}
          <img
            src={owner}
            alt="case study"
            className="w-full h-[140px] object-cover"
          />

          {/* CONTENT */}
          <div className="p-4">
            <p className="text-sm text-gray-300">
              How Abhi Design enforces a non-negotiable reliability standard for
              its clients
            </p>
          </div>
        </div>

        {/* LINK */}
        <p className="text-orange-500 mt-4 text-sm cursor-pointer hover:underline">
          More case studies
        </p>
      </div>
    </div>
  );
}
