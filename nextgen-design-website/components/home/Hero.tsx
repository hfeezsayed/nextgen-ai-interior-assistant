"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#355f52_0%,_#1a2421_55%,_#000_100%)]" />

      {/* MUCH lighter overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-4xl text-center"
      >
        {/* Brand Name */}
        <motion.h1
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-4xl font-semibold tracking-[0.45em] text-white sm:text-5xl md:text-6xl"
        >
          NEXTGEN
        </motion.h1>

        {/* DESIGNS */}
        <motion.h1
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="text-4xl font-semibold tracking-[0.45em] text-white sm:text-5xl md:text-6xl"
        >
          DESIGNS
        </motion.h1>

        {/* Tagline */}
        <p className="mt-6 text-xs font-light uppercase tracking-[0.45em] text-white/60">
          Interior & Architecture Design Firm
        </p>

        {/* Description */}
        <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-white/80">
          We design timeless spaces that blend architecture, interiors, and
          modern aesthetics into one seamless experience.
        </p>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link
            href="/portfolio"
            className="rounded-md bg-brand-primary px-12 py-3 text-xs font-medium uppercase tracking-widest text-white transition hover:bg-brand-accent"
          >
            View Portfolio
          </Link>

          <Link
            href="/contact"
            className="rounded-md border border-white/60 px-12 py-3 text-xs font-medium uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
