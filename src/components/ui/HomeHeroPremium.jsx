import React from "react";
import { Star, ArrowRight } from "lucide-react";
import {
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiFirebase,
  SiPython,
  SiJavascript,
  SiEthereum,
  SiSpringboot,
  SiMysql,
  SiHtml5,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";

import { FaAws, FaJava } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
const badges = [
  "#1 Hosting",
  "#1 WordPress",
  "Best Results",
  "Most Recommended",
  "Best Support",
  "Best ROI",
];

const icons = [
  {
    Icon: FaRobot,
    name: "AI",
    color: "#10A37F",
    pos: "top-[20%] left-[25%]",
    anim: "animate-float",
  },

  {
    Icon: SiReact,
    name: "React",
    color: "#61DAFB",
    pos: "top-[60%] left-[35%]",
    anim: "animate-floatReverse",
  },
  {
    Icon: SiNodedotjs,
    name: "Node.js",
    color: "#339933",
    pos: "top-[30%] left-[55%]",
    anim: "animate-float",
  },
  {
    Icon: SiJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
    pos: "top-[35%] left-[40%]",
    anim: "animate-floatSlow",
  },

  {
    Icon: FaJava,
    name: "Java",
    color: "#f89820",
    pos: "top-[50%] left-[18%]",
    anim: "animate-float",
  },
  {
    Icon: SiSpringboot,
    name: "Spring Boot",
    color: "#6DB33F",
    pos: "top-[65%] left-[25%]",
    anim: "animate-floatSlow",
  },

  {
    Icon: SiMongodb,
    name: "MongoDB",
    color: "#47A248",
    pos: "top-[45%] left-[60%]",
    anim: "animate-floatSlow",
  },
  {
    Icon: SiMysql,
    name: "MySQL",
    color: "#00758F",
    pos: "top-[70%] left-[65%]",
    anim: "animate-floatReverse",
  },

  {
    Icon: FaAws,
    name: "AWS",
    color: "#FF9900",
    pos: "top-[55%] left-[80%]",
    anim: "animate-float",
  },
  {
    Icon: SiGooglecloud,
    name: "Google Cloud",
    color: "#4285F4",
    pos: "top-[25%] left-[70%]",
    anim: "animate-floatSlow",
  },
  {
    Icon: SiDocker,
    name: "Docker",
    color: "#2496ED",
    pos: "top-[75%] left-[50%]",
    anim: "animate-floatSlow",
  },
  {
    Icon: SiKubernetes,
    name: "Kubernetes",
    color: "#326CE5",
    pos: "top-[15%] left-[50%]",
    anim: "animate-floatReverse",
  },

  {
    Icon: SiPython,
    name: "Python",
    color: "#3776AB",
    pos: "top-[50%] left-[30%]",
    anim: "animate-float",
  },
  {
    Icon: SiEthereum,
    name: "Ethereum",
    color: "#3C3C3D",
    pos: "top-[65%] left-[75%]",
    anim: "animate-floatReverse",
  },

  {
    Icon: SiHtml5,
    name: "HTML5",
    color: "#E34F26",
    pos: "top-[80%] left-[20%]",
    anim: "animate-float",
  },
  {
    Icon: FaCss3Alt,
    name: "CSS3",
    color: "#1572B6",
    pos: "top-[80%] left-[35%]",
    anim: "animate-floatSlow",
  },

  {
    Icon: () => <span className="text-orange-500 font-bold text-xs">API</span>,
    name: "REST API / Postman",
    color: "#FF6C37",
    pos: "top-[40%] left-[75%]",
    anim: "animate-float",
  },
];
import { Link } from "react-router-dom";
function HomeHeroPremium() {
  return (
    <section className="bg-[#0B0B0F] text-white py-20 px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-orange-500/10 blur-[140px] rounded-full" />

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT */}
        <div className="space-y-7 animate-fadeIn">
          {/* ⭐ Rating */}
          <div className="flex items-center gap-2 text-orange-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill="currentColor"
                className="opacity-0 animate-[fadeIn_0.5s_ease_forwards]"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
            <span className="text-sm text-gray-400 ml-2">
              4.8/5 from 300+ reviews
            </span>
          </div>

          {/* 🧠 Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white tracking-tight">
            #1 AI Platform. <br />
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Built for Developers.
            </span>
          </h1>

          {/* 📄 Description */}
          <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
            Build, deploy, and scale AI-powered applications with blazing speed.
            Trusted by developers, startups, and enterprises worldwide.
          </p>

          {/* 🏆 Badges */}
          <div className="flex flex-wrap gap-3">
            {badges.map((b, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-xl text-sm text-white 
        bg-white/10 backdrop-blur-md border border-white/10 
        hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                {b}
              </div>
            ))}
          </div>

          {/* 🚀 CTA */}
          <div className="flex flex-wrap gap-4 pt-2">
            {/* Primary */}
            <button className="group relative px-7 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,115,0,0.6)]">
              <span className="flex items-center gap-2 relative z-10">
                <Link to="/services">Get Started</Link>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </span>

              {/* Glow layer */}
              <div className="absolute inset-0 rounded-xl bg-orange-500/40 blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </button>

            {/* Secondary */}
            <button className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              <Link to="/price">View Pricing</Link>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-[450px] overflow-hidden">
            {/* Grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="border border-white/10"></div>
                ))}
              </div>
            </div>

            {/* Labels */}
            <span className="absolute top-2 left-4 text-xs text-gray-400">
              Production Experience
            </span>
            <span className="absolute top-2 right-4 text-xs text-gray-400">
              Job Ready
            </span>
            <span className="absolute bottom-2 right-4 text-xs text-gray-400">
              <span className="absolute bottom-2 left-4 text-xs text-gray-400">
                Professional Experience
              </span>
              Internship Ready
            </span>

            {/* ICONS */}
            {icons.map((item, i) => {
              const IconComp = item.Icon;
              return (
                <div
                  key={i}
                  className={`absolute ${item.pos} group`}
                  style={{ animationDelay: `${i * 0.25}s` }}
                >
                  {/* ICON BOX */}
                  <div
                    className={`w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur ${item.anim} hover:scale-110 transition`}
                    style={{
                      boxShadow:
                        item.Icon === FaJava
                          ? `0 0 20px ${item.color}`
                          : `0 0 12px ${item.color}30`,
                    }}
                  >
                    <IconComp
                      size={item.Icon === FaJava ? 24 : 18}
                      color={item.color}
                    />
                  </div>

                  {/* TOOLTIP */}
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap shadow-lg">
                    {item.name}
                  </div>
                </div>
              );
            })}

            {/* AI LEADER */}
            <div className="absolute top-[25%] right-[5%] z-10 ">
              <div className="absolute inset-0 bg-orange-500/30 blur-2xl rounded-2xl animate-pulseGlow"></div>
              <div className="relative w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center animate-floatLeader shadow-xl">
                <FaRobot size={28} color="white" />
              </div>
              <h1 className="font-bold text-orange-500 text-xl">
                Lea<span className="text-white">Der</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHeroPremium;
