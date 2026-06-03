"use client";

import { motion } from "framer-motion";
import testimonials from "@/data/testimonials.json";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9 },
  },
};

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-xs tracking-[0.35em] text-gray-600 uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Words from Our Clients
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Experiences shaped by trust, transparency, and timeless design.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.35 }}
              className="group relative rounded-2xl overflow-hidden bg-gray-50 p-10 cursor-default"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#14352b] to-[#0e1f1a] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 transition-colors duration-500">
                <p className="text-gray-700 group-hover:text-white leading-relaxed mb-8 transition-colors duration-500">
                  {t.quote}
                </p>

                <div>
                  <p className="font-medium tracking-wide text-gray-900 group-hover:text-white transition-colors duration-500">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-500">
                    {t.location}
                  </p>
                </div>
              </div>

              {/* Quote mark */}
              <span className="absolute top-6 right-6 text-6xl text-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                “
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
