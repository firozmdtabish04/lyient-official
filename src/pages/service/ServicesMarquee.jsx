import React, { useEffect, useRef } from "react";
import {
  Bot,
  FileText,
  FileSignature,
  UserCheck,
  Code,
  Building2,
  Users,
  Phone,
  LifeBuoy,
  BookOpen,
  BarChart3,
} from "lucide-react";

/* ================= DATA ================= */

const aiTools = [
  { name: "AI Chatbot", icon: Bot },
  { name: "PDF Summarizer", icon: FileText },
  { name: "Offer Letter", icon: FileSignature },
  { name: "Resume AI", icon: UserCheck },
  { name: "Code Assistant", icon: Code },
];

const company = [
  { name: "Company", icon: Building2 },
  { name: "Community", icon: Users },
  { name: "Contact", icon: Phone },
];

const support = [
  { name: "Support", icon: LifeBuoy },
  { name: "Status", icon: BarChart3 },
];

const resources = [
  { name: "Docs", icon: BookOpen },
  { name: "Blog", icon: FileText },
];

const serve = [
  { name: "Startup", icon: Building2 },
  { name: "Enterprise", icon: Building2 },
];

/* ================= PARTICLE BACKGROUND ================= */

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const count = 80;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.15)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x <= 0 || p.x >= canvas.width) p.dx *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.dy *= -1;
      });

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
    />
  );
}

/* ================= BADGE ================= */

const Badge = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="
      flex items-center gap-2 px-4 py-2
      rounded-xl border border-white/10
      bg-white/5 backdrop-blur-md
      text-sm whitespace-nowrap
      transition-all duration-300
      hover:bg-white/10 hover:border-orange-400
      hover:scale-105
      hover:shadow-[0_0_25px_rgba(255,140,0,0.4)]
      active:scale-95
    "
    >
      <Icon size={16} className="text-orange-400" />
      <span className="text-gray-200">{item.name}</span>
    </div>
  );
};

/* ================= ROW ================= */

const Row = ({ title, items, reverse = false }) => {
  return (
    <div className="grid grid-cols-[160px_1fr] items-center gap-8">
      {/* LABEL */}
      <div className="text-xs text-gray-500 uppercase tracking-widest">
        {title}
      </div>

      {/* MARQUEE */}
      <div className="overflow-hidden relative">
        <div
          className={`
            flex gap-6 w-max min-w-[200%]
            ${reverse ? "animate-marqueeReverse" : "animate-marquee"}
            hover:[animation-play-state:paused]
          `}
        >
          {[...items, ...items, ...items].map((item, i) => (
            <Badge key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN ================= */

function ServicesMarquee() {
  return (
    <section className="relative bg-[#020617] text-white py-24 px-6 overflow-hidden">
      {/* 🌌 PARTICLES */}
      <ParticleBackground />

      {/* GRID */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      {/* DEPTH OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/60 to-[#020617]" />

      {/* SIDE FADE */}
      <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-500/10 blur-[140px] rounded-full" />

      <div className="max-w-[1200px] mx-auto relative z-10 space-y-14">
        {/* HEADING */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Explore everything
          </h2>
          <p className="text-gray-400 mt-3">
            Tools, services, and resources to build and scale faster.
          </p>
        </div>

        {/* ROWS */}
        <div className="space-y-10">
          <Row title="AI Tools" items={aiTools} />
          <Row title="Company" items={company} reverse />
          <Row title="Support" items={support} />
          <Row title="Resources" items={resources} reverse />
          <Row title="Who We Serve" items={serve} />
        </div>
      </div>
    </section>
  );
}

export default ServicesMarquee;
