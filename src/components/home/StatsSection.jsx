import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Users, Globe2, Award } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    number: 250,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    number: 150,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Globe2,
    number: 15,
    suffix: "+",
    label: "Countries Served",
  },
  {
    icon: Award,
    number: 10,
    suffix: "+",
    label: "Years Experience",
  },
];

function Counter({ end }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute w-96 h-96 rounded-full bg-orange-500/20 blur-[140px] -top-32 -left-20"></div>

      <div className="absolute w-80 h-80 rounded-full bg-blue-500/20 blur-[120px] bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >
          <span className="bg-orange-500/20 text-orange-400 px-5 py-2 rounded-full">
            Our Achievements
          </span>

          <h2 className="text-white text-5xl font-bold mt-6">
            Trusted by Businesses Worldwide
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Our commitment to innovation, quality and customer success has
            enabled us to deliver enterprise-grade digital solutions across
            multiple industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center mx-auto text-white">
                  <Icon size={36} />
                </div>

                <h3 className="text-5xl font-bold text-white mt-8">
                  <Counter end={item.number} />
                  {item.suffix}
                </h3>

                <p className="text-gray-400 mt-4 text-lg">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}