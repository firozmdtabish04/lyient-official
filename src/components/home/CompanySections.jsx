import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    id: 1,
    title: "The Innovative IT Consultancy Services",
    subtitle: "Who We Are",
    description:
      "Lyient is the brainchild of seasoned IT professionals driven by curiosity and innovation. With years of hands-on experience across diverse technology landscapes, we deliver intelligent, future-ready software solutions. We support organizations throughout the Software Development Lifecycle (SDLC), from consulting and architecture to development, testing, deployment, and continuous support.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Artificial Intelligence Will Change the World",
    subtitle: "Artificial Intelligence",
    description:
      "Artificial Intelligence is transforming every industry. From chatbots and recommendation systems to predictive analytics and intelligent automation, AI helps organizations make faster, smarter decisions. Our AI specialists develop Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI solutions that improve efficiency and customer experience.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Cloud Computing & DevOps",
    subtitle: "Modern Infrastructure",
    description:
      "We modernize businesses with scalable cloud infrastructure and DevOps practices. Using AWS, Azure, Google Cloud, Docker, Kubernetes, Infrastructure as Code, and CI/CD pipelines, we help organizations reduce deployment time, improve reliability, and accelerate innovation.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Enterprise Software Development",
    subtitle: "Digital Transformation",
    description:
      "Our development team builds enterprise-grade web and mobile applications using React, Angular, Java, Spring Boot, Node.js, Python, and modern databases. We combine Agile methodologies with clean architecture to create secure, scalable, and maintainable solutions.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
  },
];

const leftAnimation = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const rightAnimation = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

export default function CompanySections() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-28">
        {sections.map((section, index) => {
          const reverse = index % 2 !== 0;

          return (
            <div
              key={section.id}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                reverse ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* TEXT */}
              <motion.div
                variants={reverse ? rightAnimation : leftAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className={reverse ? "lg:col-start-2" : ""}
              >
                <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {section.subtitle}
                </span>

                <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                  {section.title}
                </h2>

                <p className="mt-6 text-gray-600 leading-8 text-lg">
                  {section.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                variants={reverse ? leftAnimation : rightAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className={reverse ? "lg:col-start-1" : ""}
              >
                <div className="group overflow-hidden rounded-3xl shadow-2xl bg-white p-3">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[280px] sm:h-[380px] lg:h-[500px] object-cover rounded-2xl transition duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
