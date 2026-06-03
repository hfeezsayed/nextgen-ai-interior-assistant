"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section
      className="
      relative overflow-hidden
      bg-gradient-to-b from-[#0f2d26] to-[#0b1f1a]
      min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]
      pt-20 md:pt-28
      flex items-center
    "
    >
      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="
          relative z-10
          max-w-7xl mx-auto
          px-4 sm:px-6
          text-center text-white
        "
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            block text-xs sm:text-sm
            tracking-[0.25em] uppercase
            text-gray-300 mb-5
          "
        >
          About Us
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="
            text-3xl sm:text-4xl md:text-6xl
            font-semibold leading-tight
            max-w-4xl mx-auto
          "
        >
          Designing Thoughtful Spaces for Modern Living
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="
            mt-6 sm:mt-8
            text-sm sm:text-base md:text-xl
            text-gray-300
            max-w-3xl mx-auto
          "
        >
          Interior designers & architects in Mumbai crafting purposeful,
          timeless, and functional homes tailored to Indian lifestyles.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="
            mt-10 sm:mt-12
            flex flex-col sm:flex-row
            items-center justify-center
            gap-4 sm:gap-5
          "
        >
          <a
            href="/portfolio"
            className="
              w-full sm:w-auto
              px-8 py-3
              rounded-full
              border border-white/60
              text-sm
              hover:bg-white hover:text-black
              transition
            "
          >
            View Our Work
          </a>

          <a
            href="/contact"
            className="
              w-full sm:w-auto
              px-8 py-3
              rounded-full
              bg-white text-black
              text-sm
              hover:opacity-90
              transition
            "
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
