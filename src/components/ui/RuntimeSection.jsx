import React from "react";

const frontend = [
  "React",
  "Next.js",
  "Vue",
  "Angular",
  "Tailwind",
  "HTML",
  "CSS",
];
const backend = [
  "Node.js",
  "Java",
  "Spring Boot",
  "Express",
  "FastAPI",
  "Go",
  "Rust",
];
const database = [
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Redis",
  "Supabase",
];
const ai = [
  "OpenAI",
  "LangChain",
  "Hugging Face",
  "TensorFlow",
  "PyTorch",
  "Ollama",
];

const Badge = ({ text }) => (
  <div
    className="
      px-4 py-2 rounded-lg border border-white/10 
      bg-white/5 text-sm whitespace-nowrap backdrop-blur
      transition-all duration-300 ease-out
      hover:bg-white/10 
      hover:scale-125 
      hover:-translate-y-1
      hover:shadow-[0_0_15px_rgba(255,165,0,0.25)]
      cursor-pointer
    "
  >
    {text}
  </div>
);

const Row = ({ title, items, animation }) => (
  <div className="grid grid-cols-[120px_1fr] items-center gap-4 group">
    {/* LABEL */}
    <div className="text-sm text-gray-400 uppercase tracking-wider group-hover:text-orange-400 transition">
      {title}
    </div>

    {/* MARQUEE */}
    <div className="overflow-hidden">
      <div
        className={`
          flex gap-3 w-max ${animation}
          group-hover:[animation-play-state:paused]
          transition-all
        `}
      >
        {[...items, ...items].map((item, i) => (
          <Badge key={i} text={item} />
        ))}
      </div>
    </div>
  </div>
);

function RuntimeSection() {
  return (
    <section className="relative bg-[#050914] text-white py-24 px-6 overflow-hidden">
      {/* 🔥 Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500/10 via-transparent to-transparent blur-3xl"></div>

      {/* Edge fade */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#050914] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#050914] to-transparent z-10"></div>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-5">
          <Row
            title="Frontend"
            items={frontend}
            animation="animate-marquee-slow"
          />
          <Row
            title="Backend"
            items={backend}
            animation="animate-marquee-reverse"
          />
          <Row title="Database" items={database} animation="animate-marquee" />
          <Row title="AI" items={ai} animation="animate-marquee-reverse" />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <span className="text-orange-400 text-sm uppercase tracking-widest">
            Runtime
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Name your stack
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Choose your preferred frontend, backend, database, and AI tools. Our
            platform supports modern frameworks and scalable architectures to
            help you build faster and deploy smarter.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RuntimeSection;
