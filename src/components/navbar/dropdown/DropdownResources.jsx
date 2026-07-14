import React from "react";
import { Link } from "react-router-dom";
import owner from "../../../assets/owner.jpg";

export default function DropdownResources() {
  return (
    <div className="w-full max-w-[1100px] mx-auto bg-[#0f0f0f] text-white rounded-2xl p-10 grid md:grid-cols-3 gap-10 shadow-2xl animate-fadeIn">
      {/* LEFT COLUMN */}
      <div>
        <h3 className="text-lg font-semibold mb-5">Explore</h3>
        <ul className="space-y-3 text-gray-400">
          <li>
            <Link to="/resources" className="hover:text-orange-500 transition">
              Resource Center
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-orange-500 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/docs" className="hover:text-orange-500 transition">
              Docs
            </Link>
          </li>
          <li>
            <Link to="/changelog" className="hover:text-orange-500 transition">
              Changelog
            </Link>
          </li>
          <li>
            <Link
              to="/agency-insights"
              className="hover:text-orange-500 transition"
            >
              Agency Growth Insights
            </Link>
          </li>
        </ul>
      </div>

      {/* MIDDLE COLUMN */}
      <div className="border-l border-gray-800 pl-8">
        <h3 className="text-lg font-semibold mb-5">Tools & Insights</h3>
        <ul className="space-y-3 text-gray-400">
          <li>
            <Link to="/compare" className="hover:text-orange-500 transition">
              Lyient vs. the competition
            </Link>
          </li>
          <li>
            <Link to="/dev-tools" className="hover:text-orange-500 transition">
              Development tools
            </Link>
          </li>
          <li>
            <a
              href="/status"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              System Status ↗
            </a>
          </li>
        </ul>
      </div>

      {/* RIGHT COLUMN (CARD) */}
      <div className="border-l border-gray-800 pl-8">
        <h3 className="text-lg font-semibold mb-5">Developer Vision</h3>

        <Link to="/blog/developer-vision">
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/10 transition cursor-pointer">
            <img
              src={owner}
              alt="article"
              className="w-full h-[140px] object-cover"
            />

            <div className="p-4">
              <p className="text-sm text-gray-300">
                Reliability under human error: when editors, developers, or
                plugins break things
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/blog"
          className="text-orange-500 mt-4 text-sm inline-block hover:underline"
        >
          More blog posts →
        </Link>
      </div>
    </div>
  );
}
