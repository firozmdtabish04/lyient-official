import HomeHeroPremium from "../../components/ui/HomeHeroPremium";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="uniform-page">
      {/* 🔥 Background Glow */}
      <div className="uniform-grid" />
      <div className="uniform-glow"></div>

      {/* Grid container */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT */}
        <div>
          {/* Tag */}
          <span className="inline-block bg-black/90 text-white text-sm px-4 py-1 rounded-full mb-6">
            🚀 Trusted by 120K+ developers
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Simply better hosting <br />
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              for WordPress.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-lg max-w-lg">
            Lightning-fast, secure, and scalable hosting trusted by agencies and
            businesses worldwide.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition shadow-lg">
              <Link to="/price"> Try for free →</Link>
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              <Link to="/services"> Explore Our Services</Link>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8 text-sm text-gray-600">
            <div>
              <p className="text-xl font-bold text-black">120K+</p>
              Customers
            </div>
            <div>
              <p className="text-xl font-bold text-black">99.99%</p>
              Uptime
            </div>
            <div>
              <p className="text-xl font-bold text-black">24/7</p>
              Support
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative group">
          {/* Glass card */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl bg-white/30">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="Hero"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl cursor-pointer shadow-lg hover:scale-110 transition">
              ▶
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-4 w-[200px] animate-float">
            <p className="text-sm text-gray-600">⚡ Speed boost</p>
            <p className="font-bold text-lg text-black">+40% faster</p>
          </div>
        </div>
      </div>

      <HomeHeroPremium />
    </section>
  );
}

export default Home;
