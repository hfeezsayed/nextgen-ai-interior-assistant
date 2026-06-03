"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0e1f1a] py-32">
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(31,58,51,0.35),_transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-3xl font-light tracking-wide text-white md:text-4xl"
        >
          Let’s Design Your Home, Together.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-white/70"
        >
          A seamless interior journey — from concept to completion.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-medium tracking-wide text-[#0e1f1a] transition hover:bg-white/90"
          >
            Start Your Project
          </Link>

          {/* Secondary CTA */}
          <Link
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="text-sm tracking-wide text-white/80 transition hover:text-white"
          >
            WhatsApp Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
