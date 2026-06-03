"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-b from-[#0E2F26] to-[#0B1F1A]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6 py-32 text-center text-white"
      >
        <span className="block text-xs tracking-[0.35em] uppercase text-gray-300 mb-6">
          Contact Us
        </span>

        <h1 className="text-4xl md:text-5xl font-light mb-6">
          Let’s Design Your Home, Together
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Share your requirements and our team will get back to you shortly.
        </p>
      </motion.div>
    </section>
  );
}
