import { useEffect, useState } from "react";
import { Play, ArrowRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
];

function AboutHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="uniform-page py-20 px-6">
      {/* 🔳 GRID BACKGROUND */}
      <div className="uniform-grid" />

      {/* 🔥 GLOW LAYER */}
      <div className="uniform-glow"></div>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* ================= LEFT ================= */}
        <div className="space-y-6 animate-fadeIn">
          <span className="inline-block bg-black text-white text-sm px-4 py-1 rounded-full">
            Trusted by developers worldwide
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Simply better platform <br />
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              for AI & Developers.
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
            Build, deploy, and scale AI-powered applications with blazing speed,
            enterprise-grade security, and seamless workflows.
          </p>

          {/* 🔥 BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <button className="group relative bg-black text-white px-6 py-3 rounded-xl shadow-lg transition hover:scale-105">
              <span className="flex items-center gap-2">
                Try for free
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </span>
              <div className="absolute inset-0 bg-black/40 blur-xl opacity-0 group-hover:opacity-100 transition rounded-xl"></div>
            </button>

            <button className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
              View pricing
            </button>
          </div>

          {/* 📊 STATS */}
          <div className="flex gap-8 text-sm text-gray-600 pt-4">
            {[
              { value: "120K+", label: "Customers" },
              { value: "99.99%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((item, i) => (
              <div key={i} className="hover:scale-105 transition">
                <p className="text-xl font-bold text-black">{item.value}</p>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative">
          {/* IMAGE STACK (smooth transition) */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="about"
                className={`absolute inset-0 w-full h-[400px] object-cover transition-opacity duration-1000 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* ▶ PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="group bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer transition hover:scale-110">
              <Play size={20} />
              <div className="absolute w-20 h-20 bg-orange-500/30 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* 📊 FLOATING CARD 1 */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-4 w-[220px] animate-float">
            <p className="text-sm text-gray-500">System Performance</p>
            <p className="font-bold text-lg text-black">+40% faster</p>
          </div>

          {/* 📊 FLOATING CARD 2 */}
          <div className="absolute top-6 -right-6 bg-black text-white shadow-xl rounded-xl p-4 w-[180px] animate-floatSlow">
            <p className="text-xs text-gray-400">AI Requests</p>
            <p className="font-bold text-lg">+2.3M</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
