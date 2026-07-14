import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Anderson",
    role: "CEO, TechNova",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Lyient transformed our business with a modern cloud platform and AI automation. Their team exceeded our expectations.",
  },
  {
    name: "Sophia Williams",
    role: "CTO, FinEdge",
    image: "https://i.pravatar.cc/150?img=25",
    review:
      "Professional developers, excellent communication and on-time delivery. Highly recommended for enterprise software.",
  },
  {
    name: "Michael Brown",
    role: "Founder, StartupHub",
    image: "https://i.pravatar.cc/150?img=17",
    review:
      "The quality of work and technical expertise is outstanding. Their DevOps implementation improved our deployment speed dramatically.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-6">What Our Clients Say</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 border"
            >
              <div className="flex gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} fill="currentColor" size={18} />
                ))}
              </div>

              <p className="mt-6 text-gray-600 leading-8">"{item.review}"</p>

              <div className="flex items-center gap-4 mt-8">
                <img
                  src={item.image}
                  className="w-16 h-16 rounded-full"
                  alt=""
                />

                <div>
                  <h4 className="font-bold">{item.name}</h4>

                  <p className="text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
