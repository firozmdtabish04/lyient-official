import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute -top-24 left-0 w-96 h-96 rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-2 items-center">
            {/* LEFT */}

            <div className="p-10 lg:p-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400">
                <Sparkles size={18} />
                Let's Build Together
              </div>

              <h2 className="text-white text-4xl lg:text-6xl font-bold mt-8 leading-tight">
                Transform Your Business
                <span className="block text-orange-400">
                  With Lyient Solutions
                </span>
              </h2>

              <p className="text-gray-300 mt-8 text-lg leading-8 max-w-xl">
                Whether you're looking for AI solutions, enterprise software,
                cloud migration, DevOps, or digital transformation, our experts
                are ready to help you build scalable and future-ready products.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
                >
                  Get Started
                  <ArrowRight size={20} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
                >
                  Explore Services
                </Link>
              </div>

              <div className="flex flex-wrap gap-8 mt-12 text-gray-300">
                <div className="flex items-center gap-3">
                  <PhoneCall className="text-orange-400" size={22} />
                  <span>+91 98765 43210</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-orange-400" size={22} />
                  <span>info@lyient.com</span>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative h-full min-h-[450px] flex items-center justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
                alt="Team Collaboration"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-slate-950/55"></div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center"
              >
                <h3 className="text-white text-5xl font-bold">99.9%</h3>

                <p className="text-gray-300 mt-3">Customer Satisfaction</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
