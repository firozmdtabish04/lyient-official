import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  Smartphone,
  Database,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Machine Learning, Deep Learning, Computer Vision, NLP and Generative AI solutions for modern enterprises.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "AWS, Azure, Google Cloud migration, cloud-native architecture and scalable infrastructure.",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Enterprise applications using Java, Spring Boot, React, Angular, Node.js and modern technologies.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Android, Flutter and cross-platform applications with outstanding user experience.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, Docker, Kubernetes, Terraform and Infrastructure as Code implementation.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Security assessment, penetration testing, compliance and cloud security solutions.",
    color: "from-red-500 to-pink-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            Our Services
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Innovative Technology Solutions
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            We combine innovation, automation and industry expertise to build
            scalable digital solutions for businesses worldwide.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
          {services.map((service, index) => {
            const Icon = service.icon;

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
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group rounded-3xl bg-white shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold mt-8">{service.title}</h3>

                <p className="text-gray-600 mt-5 leading-7">
                  {service.description}
                </p>

                <button className="mt-8 flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
