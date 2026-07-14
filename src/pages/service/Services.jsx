import { useEffect, useRef, useState } from "react";
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
  Users,
  Globe,
  Phone,
  Headphones,
  BookOpen,
  Wrench,
  Activity,
  Building,
  GraduationCap,
  Store,
  HeartHandshake,
} from "lucide-react";
import ServicesMarquee from "./ServicesMarquee";

/* ================= SCROLL REVEAL ================= */

const useReveal = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

/* ================= DATA ================= */

const aiServices = [
  { icon: Bot, title: "AI Chatbot", desc: "Build smart assistants using LLMs" },
  {
    icon: FileText,
    title: "PDF Summarizer",
    desc: "Summarize documents instantly",
  },
  {
    icon: FileSignature,
    title: "Offer Letter Generator",
    desc: "Generate HR documents with AI",
  },
  { icon: Mail, title: "LOR Generator", desc: "Create recommendation letters" },
  {
    icon: UserCheck,
    title: "Resume Analyzer",
    desc: "Improve resume with AI insights",
  },
  { icon: Code, title: "Code Assistant", desc: "AI-powered coding help" },
  {
    icon: Calculator,
    title: "CGPA & GPA Calculator",
    desc: "Calculate GPA easily",
  },
  {
    icon: Percent,
    title: "Percentage Converter",
    desc: "Convert CGPA instantly",
  },
  {
    icon: Briefcase,
    title: "Portfolio Maker",
    desc: "Create portfolio with AI",
  },
];

const company = [
  { icon: Users, title: "Our Company", desc: "Mission, vision & journey" },
  { icon: Globe, title: "Our Services", desc: "Explore solutions" },
  { icon: Users, title: "Community", desc: "Connect & grow together" },
];

const support = [
  { icon: Phone, title: "Get in Touch", desc: "Email, phone or WhatsApp" },
  { icon: Headphones, title: "Speak with Experts", desc: "Sales guidance" },
  { icon: Users, title: "Community Support", desc: "Ask & get help" },
];

const resources = [
  { icon: BookOpen, title: "Blog" },
  { icon: FileText, title: "Docs" },
  { icon: Activity, title: "Changelog" },
  { icon: Wrench, title: "Dev Tools" },
  { icon: Activity, title: "System Status" },
];

const audience = [
  { icon: Building, title: "Agency" },
  { icon: Store, title: "Small Business" },
  { icon: Globe, title: "Enterprise" },
  { icon: GraduationCap, title: "Education" },
  { icon: Store, title: "Ecommerce" },
  { icon: HeartHandshake, title: "Non-Profit" },
];

/* ================= CARD ================= */

const Card = ({ item }) => {
  const Icon = item.icon;
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`
        group relative rounded-2xl p-[1px] 
        bg-gradient-to-br from-white/10 to-transparent
        hover:from-orange-500/40 transition
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div
        className="
        bg-[#0B1220] rounded-2xl p-6 h-full 
        border border-white/10 
        hover:border-orange-400/40 
        transition-all duration-300
        group-hover:-translate-y-2 group-hover:shadow-2xl
      "
      >
        {/* ICON */}
        <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
          <Icon size={22} className="text-orange-400" />
        </div>

        {/* TEXT */}
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        {item.desc && <p className="text-gray-400 text-sm mt-2">{item.desc}</p>}

        {/* HOVER CTA */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition text-orange-400 text-sm">
          Learn more →
        </div>
      </div>
    </div>
  );
};

/* ================= SECTION ================= */

const Section = ({ title, desc, data, cols = "md:grid-cols-3" }) => {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`space-y-8 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-xl">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-400 mt-2">{desc}</p>
      </div>

      <div className={`grid ${cols} gap-6`}>
        {data.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

/* ================= MAIN ================= */

function Services() {
  const [heroRef, heroVisible] = useReveal();

  return (
    <>
      <section className="uniform-page">
        {/* ================= HERO ================= */}
        <div className="relative text-center py-24 px-6 overflow-hidden">
          {/* Glow */}
          <div className="uniform-glow"></div>

          {/* Grid */}
          <div className="uniform-grid"></div>

          <div
            ref={heroRef}
            className={`relative z-10 max-w-[900px] mx-auto space-y-6 transition-all duration-700 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Everything you need to build with AI
            </h1>

            <p className="text-slate-600 text-lg">
              A complete platform to create, deploy, and scale AI-powered tools
              — from chatbots to automation systems — all in one place.
            </p>

            <div className="flex justify-center gap-4 pt-4 flex-wrap">
              <button className="bg-sky-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition shadow-lg shadow-sky-100">
                Get Started →
              </button>

              <button className="border border-slate-200 bg-white px-6 py-3 rounded-xl hover:bg-slate-100 transition">
                Explore Docs
              </button>
            </div>
          </div>
        </div>
      </section>
      <ServicesMarquee />
    </>
  );
}

export default Services;
