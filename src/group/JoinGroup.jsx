import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTelegram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

/* ================= DATA ================= */

const platforms = [
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    color: "text-green-500",
    desc: "Join quick updates, announcements, and community chats.",
  },
  {
    name: "Facebook",
    icon: faFacebook,
    color: "text-blue-500",
    desc: "Stay connected with posts, discussions, and updates.",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    color: "text-pink-500",
    desc: "Explore visuals, reels, and developer highlights.",
  },
  {
    name: "Telegram",
    icon: faTelegram,
    color: "text-sky-500",
    desc: "Get instant alerts, resources, and AI tool updates.",
  },
  {
    name: "Discord",
    icon: faDiscord,
    color: "text-indigo-500",
    desc: "Join live discussions, dev support, and networking.",
  },
];

/* ================= COMPONENT ================= */

function JoinGroup() {
  return (
    <section className="uniform-page py-24 px-6">
      {/* 🔳 GRID BACKGROUND (BLACK LINES) */}
      <div className="uniform-grid" />

      {/* 🔥 SOFT GLOW */}
      <div className="uniform-glow" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Join Our Community
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Connect, learn, and grow with developers across platforms. Choose
            your favorite space and become part of the ecosystem.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {platforms.map((item, i) => (
            <div
              key={i}
              className="
                group relative p-6 rounded-2xl
                bg-white border border-gray-200
                shadow-sm
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* ICON */}
              <div className="mb-4">
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`text-3xl ${item.color} transition group-hover:scale-110`}
                />
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* 🔥 HOVER BORDER GLOW */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-orange-400 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JoinGroup;
