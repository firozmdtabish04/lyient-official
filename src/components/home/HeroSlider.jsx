import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Cloud from "../../assets/cloud.png";
import Possibilities from "../../assets/possibilities.png";
import Service from "../../assets/service.png";
const slides = [
  {
    id: 1,
    tag: "Lyient: Specialist in",
    title: "Cloud Computing",
    highlight: "IT Consultancy Services",
    description:
      "Find Right Mix of Hybrid Cloud to Turn Your IT Org into a Change Agent for Innovation. See How Our Cloud Computing Consultants can Help Build the Right Cloud for Your Buisness.",

    image: Cloud,

    button1: {
      text: "Get Started",
      link: "/contact",
    },

    button2: {
      text: "Our Services",
      link: "/services",
    },

    stats: [
      {
        number: "120+",
        label: "Cloud Projects",
      },
      {
        number: "99.99%",
        label: "Uptime",
      },
      {
        number: "24/7",
        label: "Support",
      },
    ],
  },

  {
    id: 2,
    tag: "Lyient: A brand to offer the",
    title: "Endless Possibilities",
    highlight: "Possibilities",
    description:
      "Technology has become an integral part of our lifestyle and it's not going anywhere. we at lyient would like to invite you to be a part of discovering the endless posiibilities that our technology can offer you.",

    image: Possibilities,
    button1: {
      text: "Discover More",
      link: "/about",
    },

    button2: {
      text: "Contact Us",
      link: "/contact",
    },

    stats: [
      {
        number: "250+",
        label: "Projects",
      },
      {
        number: "150+",
        label: "Happy Clients",
      },
      {
        number: "10+",
        label: "Years Experience",
      },
    ],
  },

  {
    id: 3,
    tag: "Lyient: Consulting Services in",
    title: "Artificial Intelligence & Machine Learning",
    highlight: "Artificial Intelligence",
    description:
      "Lyient provides AI Software Developmnent for its Clients who want to apply smart solutions to their business problems. Together we open up new AI opportunities that can - in as very real way - change the future",

    image: Service,

    button1: {
      text: "Explore AI",
      link: "/services",
    },

    button2: {
      text: "Talk to Expert",
      link: "/contact",
    },

    stats: [
      {
        number: "50+",
        label: "AI Solutions",
      },
      {
        number: "100+",
        label: "Enterprise Clients",
      },
      {
        number: "98%",
        label: "Success Rate",
      },
    ],
  },
  {
    id: 4,
    tag: "Lyient: AI Consulting Strategy, and Implementation",
    title: "Artificial Intelligence & Machine Learning",
    highlight: "Artificial Intelligence",
    description:
      "Predict outcomes & prevent failures of your assets with custom Machine Learning Solutions.",

    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop",

    button1: {
      text: "Explore AI",
      link: "/services",
    },

    button2: {
      text: "Talk to Expert",
      link: "/contact",
    },

    stats: [
      {
        number: "50+",
        label: "AI Solutions",
      },
      {
        number: "100+",
        label: "Enterprise Clients",
      },
      {
        number: "98%",
        label: "Success Rate",
      },
    ],
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden pt-0 pb-10">
      <div
        className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
grid
grid-cols-1
lg:grid-cols-2
gap-10
lg:gap-16
items-center
"
      >
        {/* LEFT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -70 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="
inline-block
text-xs
sm:text-sm
md:text-base
lg:text-lg
px-5
sm:px-7
lg:px-10
py-2
sm:py-3
rounded-full
bg-orange-100
text-orange-600
font-semibold
mt-2
"
            >
              {slides[current].tag}
            </span>
            <h1
              className="mt-4 text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
leading-tight font-black "
            >
              {slides[current].title}
              <br />

              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {slides[current].highlight}
              </span>
            </h1>
            <p
              className="mt-8 text-base
sm:text-lg
leading-7
sm:leading-8 text-gray-600  max-w-xl"
            >
              {slides[current].description}
            </p>
            <div
              className="
flex
flex-col
sm:flex-row
gap-4
mt-8
"
            >
              <Link
                to="/contact"
                className="px-7 py-4 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                Get Started
              </Link>

              <Link
                to="/services"
                className="px-7 py-4 rounded-xl border border-gray-300 hover:bg-gray-100"
              >
                Our Services
              </Link>
            </div>
            <div
              className="
grid
grid-cols-3
gap-4
sm:gap-8
mt-6
sm:mt-10
text-center
"
            ></div>{" "}
            <div className="flex gap-10 mt-14">
              <div>
                <h2
                  className="text-xl
sm:text-2xl
lg:text-3xl font-bold"
                >
                  120+
                </h2>
                <p className="text-gray-500">Projects</p>
              </div>

              <div>
                <h2
                  className="text-xl
sm:text-2xl
lg:text-3xl font-bold"
                >
                  50+
                </h2>
                <p className="text-gray-500">Clients</p>
              </div>

              <div>
                <h2
                  className="text-xl
sm:text-2xl
lg:text-3xl font-bold"
                >
                  24/7
                </h2>
                <p className="text-gray-500">Support</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slides[current].image}
              alt={slides[current].title}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="
rounded-3xl
shadow-2xl
w-full
h-[260px]
sm:h-[360px]
md:h-[450px]
lg:h-[550px]
object-cover
"
            />
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div
        className="flex justify-center gap-3 mt-6
sm:mt-10"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all rounded-full ${
              current === i ? "w-10 h-3 bg-orange-500" : "w-3 h-3 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
