"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  HomeIcon,
  BuildingOfficeIcon,
  PencilSquareIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

const expertise = [
  { title: "Residential Interior Design", icon: HomeIcon },
  { title: "Commercial Interior Design", icon: BuildingOfficeIcon },
  { title: "Architectural Design & Planning", icon: PencilSquareIcon },
  { title: "Modular Kitchen Design", icon: HomeIcon },
  { title: "Living Room & Bedroom Interiors", icon: BuildingOfficeIcon },
  { title: "False Ceiling & Lighting Design", icon: BoltIcon },
  { title: "Carpentry Solutions", icon: WrenchScrewdriverIcon },
  { title: "Electrical & Plumbing", icon: BoltIcon },
  { title: "Flooring & Painting Services", icon: PaintBrushIcon },
];

export default function OurExpertise() {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-14 text-center"
          >
            Our Expertise
          </motion.h2>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[rgba(14,47,38,0.08)]">
                    <Icon className="w-6 h-6 text-[#0E2F26]" />
                  </div>

                  {/* Text */}
                  <p className="text-gray-800 font-medium">{item.title}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Footer text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-gray-600 max-w-full text-center"
          >
            Serving homeowners and businesses across Mumbai and nearby regions
            with end-to-end interior and architectural solutions.
          </motion.p>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* Eyebrow */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="block text-xs tracking-[0.35em] uppercase text-gray-500 mb-6"
              >
                Our Design Philosophy
              </motion.span>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-semibold mb-8 leading-tight"
              >
                Thoughtful Design, Rooted in Purpose
              </motion.h2>

              {/* Intro text */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
                className="text-gray-700 leading-relaxed mb-10 max-w-xl"
              >
                Our approach is rooted in understanding context, lifestyle, and
                functionality. Every design decision is intentional—crafted to
                balance aesthetics with everyday usability.
              </motion.p>

              {/* Principles */}
              <div className="space-y-5">
                {[
                  "Context-driven, personalized design",
                  "Timeless aesthetics over short-lived trends",
                  "Functional layouts for modern living",
                  "Detail-oriented execution from start to finish",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    {/* Check Icon */}
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(14,47,38,0.1)] mt-1">
                      <span className="text-[#0E2F26] text-sm">✓</span>
                    </div>

                    <p className="text-gray-800">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-[48px] overflow-hidden shadow-xl">
                <Image
                  src="/images/about/design-philosophy-placeholder.jpeg"
                  alt="Design philosophy illustration"
                  fill
                  className="object-cover"
                />

                {/* Soft overlay for brand feel */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0E2F26]/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
