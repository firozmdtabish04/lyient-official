import React, { useEffect, useState } from "react";
import {
  Bot,
  FileText,
  FileSignature,
  Mail,
  UserCheck,
  Code,
  Calculator,
  Percent,
  Briefcase,
  CheckCircle,
} from "lucide-react";

// 🔥 Your AI Tools mapped to pipeline
const tools = [
  { icon: Bot, title: "AI Chatbot", desc: "Smart assistants using LLMs" },
  {
    icon: FileText,
    title: "PDF Summarizer",
    desc: "Summarize documents instantly",
  },
  { icon: FileSignature, title: "Offer Letter", desc: "Generate HR documents" },
  { icon: Mail, title: "LOR Generator", desc: "Recommendation letters" },
  { icon: UserCheck, title: "Resume Analyzer", desc: "Improve resume with AI" },
  { icon: Code, title: "Code Assistant", desc: "AI coding help" },
  { icon: Calculator, title: "CGPA Calculator", desc: "Calculate GPA easily" },
  { icon: Percent, title: "Percentage Converter", desc: "CGPA to %" },
  {
    icon: Briefcase,
    title: "Portfolio Maker",
    desc: "Build portfolio with AI",
  },
];

function CICDSection() {
  const [active, setActive] = useState(0);

  // 🔁 Auto rotate tools
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % tools.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#020617] text-white py-24 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT PIPELINE ================= */}
        <div className="relative h-[300px] flex items-center">
          {/* Main line */}
          <div className="absolute left-0 right-0 h-[2px] bg-white/10"></div>

          {/* Moving particles */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full"
              style={{
                left: `${(active / (tools.length - 1)) * 100}%`,
                top: `${120 + i * 12}px`,
                transition: "all 0.6s ease",
              }}
            />
          ))}

          {/* Steps */}
          <div className="flex justify-between w-full relative z-10">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              const isActive = i === active;

              return (
                <div
                  key={i}
                  className={`flex flex-col items-center transition-all duration-500 ${
                    isActive ? "scale-110" : "opacity-30"
                  }`}
                >
                  <div
                    className={`
                      w-12 h-12 rounded-xl flex items-center justify-center
                      bg-orange-500 transition-all duration-500
                      ${isActive ? "shadow-[0_0_25px_#f97316] scale-110" : ""}
                    `}
                  >
                    <Icon size={18} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Preview Card */}
          <div className="absolute left-[55%] -top-16 w-[220px]">
            <div className="bg-white text-black rounded-xl p-4 shadow-xl animate-fadeIn">
              <p className="text-xs text-gray-500 mb-1">Preview</p>
              <h4 className="font-semibold text-sm">{tools[active].title}</h4>
              <p className="text-xs text-gray-600 mt-1">{tools[active].desc}</p>

              <div className="flex items-center gap-2 text-green-600 text-xs mt-2">
                <CheckCircle size={14} />
                Ready
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="space-y-6">
          <span className="text-orange-400 text-sm uppercase tracking-widest">
            AI Pipeline
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Build AI tools before you think
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Automatically generate, test, and deploy AI-powered tools. From
            chatbots to document processing, everything runs in a seamless
            pipeline with instant previews.
          </p>

          {/* Active Tool Highlight */}
          <div className="flex gap-3 flex-wrap">
            {tools.map((tool, i) => (
              <div
                key={i}
                className={`
                  px-4 py-2 rounded-lg text-sm border transition-all
                  ${
                    i === active
                      ? "bg-orange-500 text-white border-orange-400"
                      : "bg-white/5 border-white/10 text-gray-400"
                  }
                `}
              >
                {tool.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CICDSection;
