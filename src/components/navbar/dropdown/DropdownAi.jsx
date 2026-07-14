import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faFileAlt,
  faFileSignature,
  faEnvelopeOpenText,
  faUserCheck,
  faCode,
  faCalculator,
  faPercent,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

function DropdownAi() {
  const aiTools = [
    {
      icon: faRobot,
      title: "AI Chatbot",
      desc: "Build smart assistants using LLMs",
      path: "/ai/chatbot",
    },
    {
      icon: faFileAlt,
      title: "PDF Summarizer",
      desc: "Summarize documents instantly",
      path: "/ai/pdf",
    },
    {
      icon: faFileSignature,
      title: "Offer Letter Generator",
      desc: "Generate HR documents with AI",
      path: "/ai/offer-letter",
    },
    {
      icon: faEnvelopeOpenText,
      title: "LOR Generator",
      desc: "Create recommendation letters",
      path: "/ai/lor",
    },
    {
      icon: faUserCheck,
      title: "Resume Analyzer",
      desc: "Improve resume with AI insights",
      path: "/ai/resume",
    },
    {
      icon: faCode,
      title: "Code Assistant",
      desc: "AI-powered coding help",
      path: "/ai/code",
    },
    {
      icon: faCalculator,
      title: "CGPA & GPA Calculator",
      desc: "Easily calculate semester GPA and overall CGPA",
      path: "/ai/cgpa",
    },
    {
      icon: faPercent,
      title: "Percentage Converter",
      desc: "Convert CGPA to percentage instantly",
      path: "/ai/percentage",
    },
    {
      icon: faBriefcase,
      title: "Portfolio Maker",
      desc: "Create a professional portfolio website with AI",
      path: "/ai/portfolio",
    },
  ];

  return (
    <div className="bg-[#111] border border-[#222] rounded-2xl p-6 shadow-xl">
      <div className="grid md:grid-cols-3 gap-4">
        {aiTools.map((tool, i) => (
          <Link
            key={i}
            to={tool.path}
            className="group p-4 rounded-xl bg-[#0d0d0d] hover:bg-[#1a1a1a] transition duration-300 border border-transparent hover:border-orange-500"
          >
            <div className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={tool.icon}
                className="text-gray-400 mt-1 text-sm group-hover:text-orange-400 transition"
              />

              <div>
                <h3 className="text-white font-semibold group-hover:text-orange-400 transition">
                  {tool.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{tool.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DropdownAi;
