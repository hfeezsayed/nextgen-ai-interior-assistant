"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import projects from "@/data/projects.json";

export default function FeaturedProjects() {
  return (
    <section className="bg-white px-6 pt-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-brand-accent">
            Selected Work
          </p>

          <h2 className="text-3xl font-medium tracking-wide text-brand-dark sm:text-4xl">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 saturate-95"
                />

                {/* Base green wash */}
                <div className="absolute inset-0 bg-[rgba(27,63,54,0.08)] transition-opacity duration-500" />

                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f1b]/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
              </div>

              {/* Text */}
              <div className="mt-6">
                <h3 className="text-lg font-medium text-brand-dark">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-wider text-brand-dark/60">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
